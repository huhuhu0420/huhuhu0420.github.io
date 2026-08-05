import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'MS in Information Networking',
		description: 'Coursework: Introduction to Computer Systems (15-213)',
		location: 'Pittsburgh, PA',
		logo: Assets.CMU,
		name: 'MS in Information Networking',
		organization: 'Carnegie Mellon University',
		period: { from: new Date(2026, 7, 1), to: new Date(2027, 11, 31) },
		shortDescription: 'MS in Information Networking, Carnegie Mellon University',
		slug: 'cmu-msin',
		subjects: ['Computer Systems', 'Networking']
	},
	{
		degree: 'BS in Computer Science & Information Engineering',
		description: 'Overall GPA: 3.93/4.0 (Rank 2/69)',
		location: 'Taipei, Taiwan',
		logo: Assets.NTUT,
		name: 'BS in Computer Science & Information Engineering',
		organization: 'National Taipei University of Technology (NTUT)',
		period: { from: new Date(2021, 8, 1), to: new Date(2025, 5, 30) },
		shortDescription: 'BS in Computer Science & Information Engineering, NTUT',
		slug: 'ntut-bs-csie',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	}
];
