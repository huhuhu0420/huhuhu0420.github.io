<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let label: string;
	export let value: number;
	export let suffix = '';
	export let decimals = 0;
	export let hint = '';
	export let icon = '';

	const shown = tweened(0, { duration: 1000, easing: cubicOut });

	$: shown.set(value);
</script>

<div
	class="col gap-1 min-w-0 p-3 sm:p-4 rounded-10px border-1px border-solid border-[var(--border)] bg-[var(--main)]"
>
	<div class="row items-center gap-2 text-[0.75em] uppercase tracking-wider text-[var(--accent-text)]">
		{#if icon}<span class={icon} />{/if}
		<span>{label}</span>
	</div>
	<div class="text-[1.8em] font-700 text-[var(--main-text)] tabular-nums">
		{$shown.toFixed(decimals)}<span class="text-[0.55em] font-400 ml-1">{suffix}</span>
	</div>
	{#if hint}
		<div class="text-[0.75em] text-[var(--accent-text)]">{hint}</div>
	{/if}
</div>
