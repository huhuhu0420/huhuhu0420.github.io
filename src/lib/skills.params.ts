import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'golang',
		color: 'blue',
		description: svelte,
		logo: Assets.Go,
		name: 'Golang'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'c',
		color: 'orange',
		description: svelte,
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'python',
		color: 'blue',
		description: svelte,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'postgresql',
		color: 'blue',
		description: svelte,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		description: svelte,
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'kubernetes',
		color: 'blue',
		description: svelte,
		logo: Assets.Kubernetes,
		name: 'Kubernetes'
	}),
	s({
		slug: 'kafka',
		color: 'orange',
		description: svelte,
		logo: Assets.Kafka,
		name: 'Kafka'
	}),
	s({
		slug: 'mysql',
		color: 'blue',
		description: svelte,
		logo: Assets.MySQL,
		name: 'MySQL'
	}),
	s({
		slug: 'java',
		color: 'red',
		description: svelte,
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'elasticsearch',
		color: 'orange',
		description: svelte,
		logo: Assets.ElasticSearch,
		name: 'ElasticSearch'
	}),
	s({
		slug: 'redis',
		color: 'red',
		description: svelte,
		logo: Assets.Redis,
		name: 'Redis'
	}),
	s({
		slug: 'spring-boot',
		color: 'green',
		description: svelte,
		logo: Assets.SpringBoot,
		name: 'Spring Boot'
	}),
	s({
		slug: 'gin',
		color: 'blue',
		description: svelte,
		logo: Assets.Gin,
		name: 'Gin'
	}),
	s({
		slug: 'express',
		color: 'green',
		description: svelte,
		logo: Assets.ExpressJs,
		name: 'Express.js'
	}),
	s({
		slug: 'fastapi',
		color: 'green',
		description: svelte,
		logo: Assets.FastApi,
		name: 'FastAPI'
	}),
	s({
		slug: 'vue',
		color: 'green',
		description: svelte,
		logo: Assets.VueJs,
		name: 'Vue.js'
	}),
	s({
		slug: 'electron',
		color: 'blue',
		description: svelte,
		logo: Assets.Electron,
		name: 'Electron'
	}),
	s({
		slug: 'cpp',
		color: 'blue',
		description: svelte,
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'typescript',
		color: 'blue',
		description: svelte,
		logo: Assets.TypeScript,
		name: 'TypeScript'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
