import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Trending Trending Events Arrangement and Reservation Service (TEARS💧😭)',
		color: '#00ccffff',
		description:
			'A trending event arrangement and reservation service which stores data in MySQL, utilizes Kafka for synchronize MySQL binLog to Elasticsearch, and builds the backend with Java Spring Boot framework.',
		shortDescription: 'A trending event arrangement and reservation service.',
		links: [
			{ to: 'https://github.com/huhuhu0420/TEARS', label: 'GitHub' }
		],
		logo: Assets.Java,
		name: 'TEARS💧',
		period: {
			from: new Date('2025-03-01'),
			to: new Date('2025-04-20')
		},
		skills: getSkills('java', 'mysql', 'elasticsearch', 'kafka', 'docker'),
		type: 'service',
	},
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
	},
	{
		slug: 'Naive Framework',
		color: 'green',
		links: [
			{to: 'https://github.com/NTUT-RL-Lab/Naive-Framework', label: 'GitHub'}
		],
		period: {
			from: new Date('2023-09-01'),
		},
		type: 'framework',
		name: 'Naive Framework',
		skills: getSkills('python', 'reinforcement learning', 'gym'),
		description: 'A simple framework for reinforcement learning.',
		shortDescription: 'A simple framework for reinforcement learning.',
		logo: Assets.Python,
	},
];

export default MY_PROJECTS;
