<script lang="ts">
	import {
		fetchGitHubActivity,
		fetchLeetCodeActivity,
		fetchLeetCodeSolved,
		getStreaks,
		type ActivityDay,
		type LeetCodeSolved
	} from '$lib/activity';
	import Card from '$lib/components/Card/Card.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Heatmap from '$lib/components/Activity/Heatmap.svelte';
	import SolvedRing from '$lib/components/Activity/SolvedRing.svelte';
	import StatTile from '$lib/components/Activity/StatTile.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { ACTIVITY } from '$lib/params';
	import { onMount } from 'svelte';

	const { title, github, leetcode } = ACTIVITY;

	const GITHUB_COLOR = '#39d353';
	const LEETCODE_COLOR = '#ffa116';

	// undefined while loading, rendered only in the browser
	let githubDays: Promise<Array<ActivityDay>> | undefined;
	let leetcodeData: Promise<[Array<ActivityDay>, LeetCodeSolved]> | undefined;

	const load = () => {
		githubDays = fetchGitHubActivity(github);
		leetcodeData = Promise.all([fetchLeetCodeActivity(leetcode), fetchLeetCodeSolved(leetcode)]);
	};

	onMount(load);

	const total = (days: Array<ActivityDay>) => days.reduce((sum, it) => sum + it.count, 0);

	const formatDay = (day?: ActivityDay) =>
		day
			? new Date(day.date).toLocaleDateString('en-US', {
					month: 'short',
					day: 'numeric',
					timeZone: 'UTC'
				})
			: '';
</script>

<CommonPage {title}>
	<p class="text-center text-[var(--tertiary-text)] font-200 -mt-2">
		A live look at my commits and problem solving over the last year.
	</p>

	<Card tiltDegree={0.5} color={GITHUB_COLOR}>
		<div class="col gap-5">
			<div class="row items-center gap-3">
				<UIcon icon="i-carbon-logo-github" classes="text-1.8em" />
				<div class="col">
					<span class="text-[1.3em] font-600">GitHub</span>
					<span class="text-[0.8em] text-[var(--accent-text)]">Contributions</span>
				</div>
				<a
					href={`https://github.com/${github}`}
					target="_blank"
					rel="noreferrer"
					class="ml-auto text-[0.85em] text-[var(--accent-text)] hover:text-[var(--main-text)] decoration-none"
					>@{github} <UIcon icon="i-carbon-arrow-up-right" /></a
				>
			</div>

			{#if !githubDays}
				<div class="skeleton h-[90px]" />
				<div class="skeleton h-[130px]" />
			{:else}
				{#await githubDays}
					<div class="skeleton h-[90px]" />
					<div class="skeleton h-[130px]" />
				{:then days}
					{@const streaks = getStreaks(days)}
					<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
						<StatTile
							icon="i-carbon-chart-line"
							label="Contributions"
							value={total(days)}
							hint="last 12 months"
						/>
						<StatTile
							icon="i-carbon-fire"
							label="Current streak"
							value={streaks.current}
							suffix="days"
						/>
						<StatTile
							icon="i-carbon-trophy"
							label="Longest streak"
							value={streaks.longest}
							suffix="days"
						/>
						<StatTile
							icon="i-carbon-calendar"
							label="Best day"
							value={streaks.best?.count ?? 0}
							hint={formatDay(streaks.best)}
						/>
					</div>
					<Heatmap {days} color={GITHUB_COLOR} unit="contribution">
						{streaks.activeDays} active days in the last year
					</Heatmap>
				{:catch}
					<div class="error">
						Couldn't load GitHub activity right now.
						<button on:click={load}>Retry</button>
					</div>
				{/await}
			{/if}
		</div>
	</Card>

	<Card tiltDegree={0.5} color={LEETCODE_COLOR}>
		<div class="col gap-5">
			<div class="row items-center gap-3">
				<UIcon icon="i-carbon-code" classes="text-1.8em" />
				<div class="col">
					<span class="text-[1.3em] font-600">LeetCode</span>
					<span class="text-[0.8em] text-[var(--accent-text)]">Submissions</span>
				</div>
				<a
					href={`https://leetcode.com/u/${leetcode}/`}
					target="_blank"
					rel="noreferrer"
					class="ml-auto text-[0.85em] text-[var(--accent-text)] hover:text-[var(--main-text)] decoration-none"
					>@{leetcode} <UIcon icon="i-carbon-arrow-up-right" /></a
				>
			</div>

			{#if !leetcodeData}
				<div class="skeleton h-[150px]" />
				<div class="skeleton h-[130px]" />
			{:else}
				{#await leetcodeData}
					<div class="skeleton h-[150px]" />
					<div class="skeleton h-[130px]" />
					<p class="text-center text-[0.8em] text-[var(--accent-text)]">
						Waking up the LeetCode API, this can take a few seconds...
					</p>
				{:then [days, solved]}
					{@const streaks = getStreaks(days)}
					<div class="row flex-wrap items-center gap-6">
						<div class="flex-1 min-w-[280px]">
							<SolvedRing {solved} />
						</div>
						<div class="grid grid-cols-2 gap-3 flex-1 min-w-[280px]">
							<StatTile
								icon="i-carbon-checkmark-outline"
								label="Acceptance"
								value={solved.acceptanceRate * 100}
								decimals={1}
								suffix="%"
							/>
							<StatTile
								icon="i-carbon-events"
								label="Submissions"
								value={total(days)}
								hint="last 12 months"
							/>
							<StatTile
								icon="i-carbon-fire"
								label="Current streak"
								value={streaks.current}
								suffix="days"
							/>
							<StatTile
								icon="i-carbon-trophy"
								label="Longest streak"
								value={streaks.longest}
								suffix="days"
							/>
						</div>
					</div>
					<Heatmap {days} color={LEETCODE_COLOR} unit="submission">
						{streaks.activeDays} active days in the last year
					</Heatmap>
				{:catch}
					<div class="error">
						Couldn't load LeetCode activity right now.
						<button on:click={load}>Retry</button>
					</div>
				{/await}
			{/if}
		</div>
	</Card>
</CommonPage>

<style lang="scss">
	.skeleton {
		border-radius: 10px;
		background: linear-gradient(90deg, var(--tertiary) 0%, var(--accent) 50%, var(--tertiary) 100%);
		background-size: 200% 100%;
		animation: shimmer 1.4s linear infinite;
		opacity: 0.6;
	}

	.error {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 12px;
		padding: 40px 0px;
		color: var(--accent-text);

		button {
			cursor: pointer;
			padding: 6px 14px;
			border-radius: 6px;
			border: 1px solid var(--border-hover);
			background: transparent;
			color: var(--main-text);

			&:hover {
				background: var(--main-hover);
			}
		}
	}

	@keyframes shimmer {
		from {
			background-position: 200% 0;
		}
		to {
			background-position: -200% 0;
		}
	}
</style>
