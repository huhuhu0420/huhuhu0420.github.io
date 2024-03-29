import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'PUN-street Universal Access',
		color: '#ff3e00',
		description:
			'An e-commerce website project utilizing Golang for the backend, Svelte for the frontend, and PostgreSQL for the database. Leveraged Docker for deployment and containerization of the application',
		shortDescription: 'A C2C e-commerce website selling foods on PUN-street.',
		links: [
			{ to: 'https://github.com/PUArallelepiped/PUN-street-Universal-Access', label: 'GitHub' }
		],
		logo: Assets.Svelte,
		name: 'PUN-street Universal Access',
		period: {
			from: new Date('2023-09-01'),
			to: new Date('2024-01-20')
		},
		skills: getSkills('svelte', 'golang', 'postgresql', 'docker'),
		type: 'website',
		screenshots: [
			{
				label: '',
				src: 'https://i.imgur.com/rsoFozb.png'
			},
			{
				label: '',
				src: 'https://i.imgur.com/WzEeWkz.png'
			},
			{
				label: '',
				src: 'https://i.imgur.com/yvUhgFx.png'
			},
			{
				label: '',
				src: 'https://i.imgur.com/91ohU0t.png'
			}
		]
	},
	{
		slug: 'Simple-AD-Service',
		color: 'blue',
		links: [
			{to: 'https://github.com/huhuhu0420/simple-ad-service', label: 'GitHub'}
		],
		period: {
			from: new Date('2024-02-07'),
			to: new Date('2024-03-20')
		},
		type: 'service',
		name: 'Simple-AD-Service',
		description: 'A simple ad service that allows users to create and read ads.',
		shortDescription: 'A simple ad service.',
		logo: Assets.Go,
		skills: getSkills('golang', 'postgresql', 'docker', 'kubernetes'),
	}
];

export default MY_PROJECTS;
