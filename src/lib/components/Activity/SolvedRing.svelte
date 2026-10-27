<script lang="ts">
	import type { LeetCodeSolved } from '$lib/activity';
	import { onMount } from 'svelte';

	export let solved: LeetCodeSolved;

	const RADIUS = 52;
	const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
	// leave a small gap between segments
	const GAP = 3;

	let drawn = false;

	$: segments = (() => {
		const parts = [
			{ label: 'Easy', count: solved.easy, color: '#00b8a3' },
			{ label: 'Medium', count: solved.medium, color: '#ffc01e' },
			{ label: 'Hard', count: solved.hard, color: '#ef4743' }
		];
		const total = Math.max(1, solved.easy + solved.medium + solved.hard);
		let start = 0;

		return parts.map((it) => {
			const length = (it.count / total) * CIRCUMFERENCE;
			const segment = { ...it, length: Math.max(0, length - GAP), start };
			start += length;
			return segment;
		});
	})();

	onMount(() => {
		requestAnimationFrame(() => (drawn = true));
	});
</script>

<div class="row flex-wrap items-center justify-center gap-8">
	<svg viewBox="0 0 128 128" class="w-[150px] h-[150px]">
		<circle cx="64" cy="64" r={RADIUS} class="track" />
		{#each segments as segment, i}
			<circle
				cx="64"
				cy="64"
				r={RADIUS}
				class="segment"
				transform="rotate(-90 64 64)"
				stroke={segment.color}
				stroke-dasharray={`${drawn ? segment.length : 0} ${CIRCUMFERENCE}`}
				stroke-dashoffset={-segment.start}
				style:transition-delay={`${i * 150}ms`}
			/>
		{/each}
		<text x="64" y="66" class="total">{solved.all}</text>
		<text x="64" y="82" class="caption">solved</text>
	</svg>
	<div class="col gap-3 min-w-[180px] flex-1 max-w-[280px]">
		{#each segments as segment, i}
			<div class="col gap-1">
				<div class="row justify-between text-[0.85em]">
					<span style:color={segment.color}>{segment.label}</span>
					<span class="text-[var(--secondary-text)]">{segment.count}</span>
				</div>
				<div class="h-[6px] rounded-full bg-[var(--tertiary)] overflow-hidden">
					<div
						class="bar h-full rounded-full"
						style:background={segment.color}
						style:width={drawn ? `${(segment.count / Math.max(1, solved.all)) * 100}%` : '0%'}
						style:transition-delay={`${i * 150}ms`}
					/>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.track {
		fill: none;
		stroke: var(--tertiary);
		stroke-width: 10;
	}

	.segment {
		fill: none;
		stroke-width: 10;
		transition: stroke-dasharray 900ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.bar {
		transition: width 900ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.total {
		font-size: 26px;
		font-weight: 700;
		text-anchor: middle;
		fill: var(--main-text);
	}

	.caption {
		font-size: 10px;
		text-anchor: middle;
		fill: var(--accent-text);
	}

	@media (prefers-reduced-motion: reduce) {
		.segment,
		.bar {
			transition: none;
		}
	}
</style>
