<script lang="ts">
	import type { ActivityDay } from '$lib/activity';
	import { onMount } from 'svelte';

	export let days: Array<ActivityDay>;
	export let color = '#39d353';
	export let unit = 'contribution';

	const CELL = 11;
	const GAP = 3;
	const STEP = CELL + GAP;
	const LEFT = 30;
	const TOP = 18;
	// share of the accent color mixed into the empty-cell color, per level
	const LEVELS = [0, 35, 55, 78, 100];
	const MONTHS = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	let wrapper: HTMLElement;
	let scroller: HTMLElement;
	let tooltip: { text: string; x: number; y: number } | undefined;

	$: offset = days.length ? new Date(days[0].date).getUTCDay() : 0;
	$: max = Math.max(1, ...days.map((it) => it.count));
	$: weeks = Math.ceil((days.length + offset) / 7);
	$: width = LEFT + weeks * STEP;
	$: height = TOP + 7 * STEP;

	$: cells = days.map((day, i) => ({
		...day,
		week: Math.floor((i + offset) / 7),
		weekday: (i + offset) % 7,
		level: day.count === 0 ? 0 : Math.min(4, Math.ceil((day.count / max) * 4))
	}));

	$: months = cells
		.filter((it) => it.date.endsWith('-01') && it.week < weeks - 2)
		.map((it) => ({ label: MONTHS[Number(it.date.slice(5, 7)) - 1], week: it.week }));

	// on narrow screens, start scrolled to the most recent weeks
	onMount(() => (scroller.scrollLeft = scroller.scrollWidth));

	const shade = (level: number) =>
		`color-mix(in srgb, ${color} ${LEVELS[level]}%, var(--tertiary))`;

	const format = (date: string) =>
		new Date(date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
			timeZone: 'UTC'
		});

	const show = (ev: Event, day: ActivityDay) => {
		const cell = (ev.currentTarget as Element).getBoundingClientRect();
		const box = wrapper.getBoundingClientRect();
		const what = day.count === 1 ? unit : `${unit}s`;

		tooltip = {
			text: `${day.count === 0 ? 'No' : day.count} ${what} on ${format(day.date)}`,
			// keep the tooltip inside the card near the edges
			x: Math.min(Math.max(cell.left - box.left + cell.width / 2, 100), box.width - 100),
			y: cell.top - box.top
		};
	};
</script>

<div class="relative" bind:this={wrapper}>
	<div class="overflow-x-auto pb-1" bind:this={scroller}>
		<svg viewBox={`0 0 ${width} ${height}`} class="heatmap block w-full min-w-[640px]" role="img">
			{#each months as month}
				<text x={LEFT + month.week * STEP} y={10} class="label">{month.label}</text>
			{/each}
			{#each [1, 3, 5] as weekday}
				<text x={0} y={TOP + weekday * STEP + CELL - 2} class="label"
					>{['', 'Mon', '', 'Wed', '', 'Fri'][weekday]}</text
				>
			{/each}
			{#each cells as cell (cell.date)}
				<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
				<rect
					x={LEFT + cell.week * STEP}
					y={TOP + cell.weekday * STEP}
					width={CELL}
					height={CELL}
					rx="2.5"
					class="cell"
					style:fill={shade(cell.level)}
					style:animation-delay={`${cell.week * 12}ms`}
					on:mouseenter={(ev) => show(ev, cell)}
					on:click={(ev) => show(ev, cell)}
					on:mouseleave={() => (tooltip = undefined)}
				/>
			{/each}
		</svg>
	</div>
	<div class="row items-center justify-between flex-wrap gap-2 mt-3 text-[0.8em]">
		<span class="text-[var(--accent-text)]"><slot /></span>
		<div class="row items-center gap-1 text-[var(--accent-text)]">
			<span class="mr-1">Less</span>
			{#each LEVELS as _, level}
				<span
					class="inline-block w-[11px] h-[11px] rounded-[2.5px]"
					style:background={shade(level)}
				/>
			{/each}
			<span class="ml-1">More</span>
		</div>
	</div>
	{#if tooltip}
		<div class="tooltip" style:left={`${tooltip.x}px`} style:top={`${tooltip.y}px`}>
			{tooltip.text}
		</div>
	{/if}
</div>

<style lang="scss">
	.label {
		font-size: 9px;
		fill: var(--accent-text);
	}

	.cell {
		cursor: pointer;
		transform-box: fill-box;
		transform-origin: center;
		animation: pop 400ms ease-out backwards;
		transition: transform 120ms ease;

		&:hover {
			transform: scale(1.35);
			stroke: var(--main-text);
			stroke-width: 1px;
		}
	}

	.tooltip {
		position: absolute;
		transform: translate(-50%, calc(-100% - 8px));
		padding: 6px 10px;
		border-radius: 6px;
		font-size: 0.75em;
		white-space: nowrap;
		pointer-events: none;
		color: var(--main);
		background: var(--main-text);
		z-index: 5;
	}

	@keyframes pop {
		from {
			opacity: 0;
			transform: scale(0.2);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cell {
			animation: none;
		}
	}
</style>
