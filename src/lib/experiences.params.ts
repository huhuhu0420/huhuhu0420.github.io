import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: '',
		description: 'Advanced Information Security Summer School',
		contract: ContractType.SelfEmployed,
		type: 'Cyper Security',
		location: 'banqiao, New Taipei City, Taiwan',
		period: { from: new Date(2022, 7, 15), to: new Date(2022, 7, 30) },
		skills: getSkills(),
		name: 'AIS3',
		color: 'red',
		links: [],
		logo: Assets.AIS3,
		shortDescription: ''
	},
];

export default MY_EXPERIENCES;
