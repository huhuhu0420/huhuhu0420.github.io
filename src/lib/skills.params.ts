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
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
