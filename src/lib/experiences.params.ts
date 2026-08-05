import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'LINE',
		company: 'LINE Taiwan',
		description: `- Developed a Golang backend service for a project-management platform now adopted by 30+ cross-functional teams, consolidating project tracking that was previously scattered across multiple systems
- Integrated Atlas into the CI/CD pipeline to lint schema changes and auto-apply migrations on deploy, eliminating ~15 min of manual per-release updates and catching breaking migrations before merge
- Initiated and architected an Express.js service automating accounts-receivable aging reports, replacing manual spreadsheet compilation; structured with Clean Architecture and DDD, enabling new contributors to ship features in a week`,
		contract: ContractType.Internship,
		type: 'Software Engineer Intern',
		location: 'Taipei, Taiwan',
		period: { from: new Date(2025, 2, 1), to: new Date(2026, 1, 28) },
		skills: getSkills('golang', 'express', 'mysql'),
		name: 'Software Engineer Intern',
		color: 'green',
		links: [],
		logo: Assets.LINE,
		shortDescription: 'Software Engineer Intern, LINE Taiwan'
	},
	{
		slug: 'cnc',
		company: 'National Taipei University of Technology',
		description: 'Specialist in NTUT Computer Network Center',
		contract: ContractType.PartTime,
		type: '',
		location: 'Taipei, Taiwan',
		period: { from: new Date(2022, 2, 1), to: new Date(2023, 1, 30) },
		skills: getSkills(),
		name: 'CNC Specialist',
		color: 'green',
		links: [],
		logo: Assets.NTUT,
		shortDescription: ''
	},
	{
		slug: 'iforensics',
		company: 'iForensics',
		description: `- Developed interactive graph visualization features for a commercial digital forensics product (FastAPI, Vue.js), implementing node expansion and detail inspection for multi-hop transaction tracing
- Migrated the web application to a cross-platform Electron desktop app to enable on-device analysis for investigators`,
		contract: ContractType.Internship,
		type: 'R&D Intern',
		location: 'Taipei, Taiwan',
		period: { from: new Date(2024, 5, 1), to: new Date(2024, 8, 30) },
		skills: getSkills('fastapi', 'vue', 'electron'),
		name: 'R&D Intern',
		color: 'blue',
		links: [],
		logo: Assets.iforensics,
		shortDescription: 'R&D Intern, iForensics'
	}
];

export default MY_EXPERIENCES;
