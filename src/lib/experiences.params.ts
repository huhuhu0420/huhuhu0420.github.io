import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'AIS3',
		company: '',
		description: 'Advanced Information Security Summer School',
		contract: ContractType.SelfEmployed,
		type: 'Cyper Security',
		location: 'banqiao, New Taipei City, Taiwan',
		period: { from: new Date(2022, 7, 15), to: new Date(2022, 7, 30) },
		skills: getSkills(),
		name: 'AIS3',
		color: 'gray',
		links: [],
		logo: Assets.AIS3,
		shortDescription: ''
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
		description: 'summer internship in iForensics',
		contract: ContractType.PartTime,
		type: '',
		location: 'Taipei, Taiwan',
		period: { from: new Date(2024, 5, 1), to: new Date(2024, 7, 30) },
		skills: getSkills(),
		name: 'iForensics Internship',
		color: 'blue',
		links: [],
		logo: Assets.iforensics,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
