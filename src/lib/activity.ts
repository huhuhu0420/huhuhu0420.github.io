// Live activity data, fetched in the browser through public CORS-enabled proxies.
// GitHub: https://github.com/grubersjoe/github-contributions-api
// LeetCode: https://github.com/alfaarghya/alfa-leetcode-api

export interface ActivityDay {
	date: string; // YYYY-MM-DD
	count: number;
}

export interface Streaks {
	current: number;
	longest: number;
	activeDays: number;
	best: ActivityDay | undefined;
}

export interface LeetCodeSolved {
	all: number;
	easy: number;
	medium: number;
	hard: number;
	acceptanceRate: number;
}

const DAY_MS = 24 * 60 * 60 * 1000;

export const toDateKey = (d: Date): string => d.toISOString().slice(0, 10);

const todayKey = (): string => {
	const now = new Date();
	return toDateKey(new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())));
};

// The last 365 days (plus today), oldest first, filled with zeros where there is no data.
export const lastYear = (counts: Map<string, number>): Array<ActivityDay> => {
	const end = Date.parse(todayKey());
	const days: Array<ActivityDay> = [];

	for (let t = end - 365 * DAY_MS; t <= end; t += DAY_MS) {
		const date = toDateKey(new Date(t));
		days.push({ date, count: counts.get(date) ?? 0 });
	}

	return days;
};

export const getStreaks = (days: Array<ActivityDay>): Streaks => {
	let longest = 0;
	let run = 0;
	let activeDays = 0;
	let best: ActivityDay | undefined;

	for (const day of days) {
		if (day.count > 0) {
			run += 1;
			activeDays += 1;
			longest = Math.max(longest, run);
			if (!best || day.count > best.count) best = day;
		} else {
			run = 0;
		}
	}

	// today without activity yet does not break the current streak
	let i = days.length - 1;
	if (i >= 0 && days[i].count === 0) i -= 1;

	let current = 0;
	for (; i >= 0 && days[i].count > 0; i--) current += 1;

	return { current, longest, activeDays, best };
};

const getJSON = async <T>(url: string): Promise<T> => {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
	return res.json();
};

export const fetchGitHubActivity = async (username: string): Promise<Array<ActivityDay>> => {
	const data = await getJSON<{ contributions: Array<ActivityDay> }>(
		`https://github-contributions-api.jogruber.de/v4/${username}?y=last`
	);

	return lastYear(new Map(data.contributions.map((it) => [it.date, it.count])));
};

export const fetchLeetCodeActivity = async (username: string): Promise<Array<ActivityDay>> => {
	const data = await getJSON<{ submissionCalendar: string }>(
		`https://alfa-leetcode-api.onrender.com/${username}/calendar`
	);

	// keys are unix timestamps (seconds) at UTC midnight
	const calendar: Record<string, number> = JSON.parse(data.submissionCalendar);
	const counts = new Map<string, number>();

	for (const [ts, count] of Object.entries(calendar)) {
		counts.set(toDateKey(new Date(Number(ts) * 1000)), count);
	}

	return lastYear(counts);
};

export const fetchLeetCodeSolved = async (username: string): Promise<LeetCodeSolved> => {
	const data = await getJSON<{
		solvedProblem: number;
		easySolved: number;
		mediumSolved: number;
		hardSolved: number;
		totalSubmissionNum: Array<{ difficulty: string; submissions: number }>;
		acSubmissionNum: Array<{ difficulty: string; submissions: number }>;
	}>(`https://alfa-leetcode-api.onrender.com/${username}/solved`);

	const total = data.totalSubmissionNum.find((it) => it.difficulty === 'All')?.submissions ?? 0;
	const accepted = data.acSubmissionNum.find((it) => it.difficulty === 'All')?.submissions ?? 0;

	return {
		all: data.solvedProblem,
		easy: data.easySolved,
		medium: data.mediumSolved,
		hard: data.hardSolved,
		acceptanceRate: total > 0 ? accepted / total : 0
	};
};
