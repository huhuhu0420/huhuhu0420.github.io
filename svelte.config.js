import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const base = '/https://github.com/huhuhu0420/huhuhu0420.github.io';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},

	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		}
	}
};

export default config;
