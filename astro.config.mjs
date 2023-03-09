import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.alexbos.co/',
	integrations: [sitemap(), mdx(), image()],
	output: 'server',
	adapter: vercel({
		analytics: true,
	}),
});
