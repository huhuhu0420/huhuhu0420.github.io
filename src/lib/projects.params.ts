import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Raft',
		color: '#00add8',
		description: `- Implementing the Raft consensus protocol in Go (CMU 15-440 Distributed Systems) on top of a lossy, partition-prone RPC layer
- Built leader election with randomized election timeouts (400–700ms), term-based role transitions (follower/candidate/leader), and periodic leader heartbeats via AppendEntries
- Concurrency-safe peer state guarded by a mutex and verified with Go's race detector; log replication and persistence in progress`,
		shortDescription:
			'A Raft consensus implementation in Go with leader election and heartbeats; log replication in progress.',
		links: [],
		logo: Assets.Go,
		name: 'Raft',
		period: {
			from: new Date('2026-10-01')
		},
		skills: getSkills('golang'),
		type: 'distributed system'
	},
	{
		slug: 'BusTub',
		color: '#9c033a',
		description: `- Building components of BusTub, a disk-oriented relational DBMS in C++ (CMU 15-445 Database Systems)
- Implemented a buffer pool manager with an ARC (Adaptive Replacement Cache) replacer using live/ghost lists with O(1) lookup and eviction, an async disk scheduler, and RAII read/write page guards with a deadlock-free latch ordering
- Built a concurrent B+Tree index supporting insert, delete (split, coalesce, redistribute), tombstone-based lazy deletion, and range-scan iterators
- Applied latch crabbing with optimistic write descent and pessimistic fallback, acquiring sibling latches left-to-right to avoid deadlocks`,
		shortDescription:
			'A disk-oriented DBMS in C++ with an ARC buffer pool and a concurrent B+Tree index.',
		links: [],
		logo: Assets.Cpp,
		name: 'BusTub',
		period: {
			from: new Date('2026-08-26')
		},
		skills: getSkills('cpp'),
		type: 'database'
	},
	{
		slug: 'Trending Trending Events Arrangement and Reservation Service (TEARS💧😭)',
		color: '#00ccffff',
		description: `- Reduced full-text search latency from 438ms to 31ms (14x, k6 benchmark on 1M records) by architecting a CQRS event-driven pipeline that streams MySQL binlog changes to ES via Debezium and Kafka Connect (CDC)
- Built an event reservation backend in Spring Boot and integrated a 5-service stack (app, MySQL, Kafka, Kafka Connect, ES) via Docker Compose for one-command deployment`,
		shortDescription:
			'Event reservation service with a CQRS/CDC pipeline streaming MySQL to Elasticsearch — 14x faster full-text search.',
		links: [{ to: 'https://github.com/huhuhu0420/TEARS', label: 'GitHub' }],
		logo: Assets.Java,
		name: 'TEARS💧',
		period: {
			from: new Date('2025-01-01'),
			to: new Date('2025-12-31')
		},
		skills: getSkills('java', 'spring-boot', 'mysql', 'elasticsearch', 'kafka', 'docker'),
		type: 'service'
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
		links: [{ to: 'https://github.com/huhuhu0420/simple-ad-service', label: 'GitHub' }],
		period: {
			from: new Date('2024-01-01'),
			to: new Date('2024-12-31')
		},
		type: 'service',
		name: 'SADS',
		description: `- Engineered an ad-serving API in Golang (Gin) with audience targeting (age, country, gender, platform) via multi-table joins in PostgreSQL, sustaining 10k+ RPS in k6 load tests with pgxpool connection pooling
- Containerized and deployed the service to GKE with Kubernetes and Ingress routing, creating merge gates by adding automated unit and API testing in GitHub Actions CI pipeline
- Evaluated Redis response caching and documented its limits for write-heavy, high-cardinality query workloads, informing a cache-bypass design decision`,
		shortDescription:
			'An ad-serving API on GKE sustaining 10k+ RPS, with audience targeting and evaluated Redis caching.',
		logo: Assets.Go,
		skills: getSkills('golang', 'gin', 'postgresql', 'redis', 'docker', 'kubernetes')
	},
	{
		slug: 'Naive Framework',
		color: 'green',
		links: [{ to: 'https://github.com/NTUT-RL-Lab/Naive-Framework', label: 'GitHub' }],
		period: {
			from: new Date('2023-09-01')
		},
		type: 'framework',
		name: 'Naive Framework',
		skills: getSkills('python', 'reinforcement learning', 'gym'),
		description: 'A simple framework for reinforcement learning.',
		shortDescription: 'A simple framework for reinforcement learning.',
		logo: Assets.Python
	}
];

export default MY_PROJECTS;
