import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
	? 'https://jules-bens-aa.github.io' : 'http://localhost:4321',
	base: '/jb2a-wiki',
	integrations: [
		starlight({

			title: 'JB2A Wiki',
			logo: {
				src: './src/assets/img/jb2a-wiki-banner-02.png',
				replacesTitle: true,
			  },
			social: {
				github: 'https://github.com/Jules-Bens-Aa/jb2a-wiki',
			},
			customCss: [
				'./src/styles/custom.css',
			  ],
			sidebar: [
				{
					label: 'Home', link: '/home'
				},
				{
					label: 'Getting Started',
					collapsed: true,
					items: [
						'getting-started/prerequisites',
						'getting-started/our-content',
						'getting-started/jb2a-fvtt'
					]
				},
				{
					label: 'Frequently Asked Questions',
					collapsed: true,
					items: [
						'faq/mcq',
						'faq/about-jb2a',
						'faq/about-fvtt'
					]
				},
				{
					label: 'Troubleshooting',
					collapsed: true,
					items: [
						'troubleshooting/mci',
						'troubleshooting/jb2a',
						'troubleshooting/fvtt'
					]
				},
				{
					label: 'Template',
					collapsed: true,
					items: [
						'template/template',
						'template/website-cmd',
					]
				}
			],
		}),
	],
});
