import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightHeadingBadges from 'starlight-heading-badges'
import starlightImageZoom from 'starlight-image-zoom'
import starlightBlog from 'starlight-blog'


// https://astro.build/config
export default defineConfig({
    // site: process.env.CI
    // ? 'https://jules-bens-aa.github.io' : 'http://localhost:4321',
    site: 'https://jules-bens-aa.github.io',
    base: '/jb2a-wiki',

    integrations: [starlight({

// Plugins        
        plugins: [
            starlightImageZoom(),
            starlightHeadingBadges(),
            starlightBlog({
                title: "patchnotes",
                postCount: 10,
                recentPostCount: 6,
                navigation: 'header-start'
            })
        ],

// Website Config        
        title: 'JB2A Wiki',
        logo: {
            light: './src/assets/img/wikilogo-light-512x128.webp',
            dark: './src/assets/img/wikilogo-dark-512x128.webp',
            replacesTitle: true
          },
        social: [
            {
                icon: 'github',
                label: 'Github',
                href: 'https://github.com/Jules-Bens-Aa/jb2a-wiki'
            },
            {
                icon: 'discord',
                label: 'Discord',
                href: 'https://discord.gg/gmd8MAPX4m'
            },
            {
                icon: 'patreon',
                label: 'Patreon',
                href: 'https://www.patreon.com/JB2A'
            },
            {
                icon: 'youtube',
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCqLusRtLV7GXJo_xNNM3dOw'
            }
        ],
        editLink: {
            baseUrl: 'https://github.com/Jules-Bens-Aa/jb2a-wiki/tree/main',
          }, 
        disable404Route: true,
        favicon: '/favicon.svg',
        head: [
            // Add ICO favicon fallback for Safari.
            {
              tag: 'link',
              attrs: {
                rel: 'icon',
                href: '/favicon.ico',
                sizes: '32x32',
              },
            },
          ],
// Custom Components
        components: {
            //Override *.astro
            SocialIcons: './src/components/CustomSocialIcons.astro',
            Hero: './src/components/CustomHero.astro',
             },  
        
// Custom Css files        
        customCss: [
            './src/styles/custom.css',
          ],

// Sidebar config          
        sidebar: [
            { 
                label: 'Home',
                link: '/',
            },
            {
                label: '',
                link: '',
                attrs: {style: '  border-top: 1px solid var(--sl-color-hairline); border-radius: 0px; opacity: 1'}
            },
            {
                label: 'Getting-Started',
                // badge: 'Important',
                collapsed: true,
                items: [
                    'getting-started/prerequisites',
                    'getting-started/understanding-automation',
                    'getting-started/our-patreon',
                    'getting-started/guides',
                    'getting-started/jb2a-fvtt',
                    'getting-started/jb2a-other-vtts',
                    'getting-started/discord',
                ]
            },
            {
                label: '',
                link: '',
                attrs: {style: '  border-bottom: 1px solid var(--sl-color-hairline); border-radius: 0px; opacity: 1'}
            },
            // {
            //     label: 'Frequently Asked Questions',
            //     collapsed: true,
            //     items: [
            //         'faq/mcq',
            //         'faq/about-jb2a',
            //         'faq/about-fvtt'
            //     ]
            // },
            {
                label: 'Troubleshooting',
                collapsed: true,
                items: [

                    'troubleshooting/how-to',         
                    'troubleshooting/jb2a',
                    'troubleshooting/fvtt',
                    'troubleshooting/online-hosting',           
                ]
            },
            { 
                label: 'Other Projects',
                collapsed: true,
                items: [
                    'other-projects/token-animator-guide'
                ]
            },
            {
                label: 'External Resources',
                collapsed: true,
                items: [
                    'external-resources/community-links',
                    'external-resources/sfx',
                    'external-resources/useful-tools',
                ]
            },
            {
                slug: 'uncategorised/contribute-wiki'
            },
            // {
            //     label: 'Template',
            //     collapsed: true,
            //     badge: 'Admin',
            //     items: [
            //         'template/website-cmd',
            //         'template/todolist'
            //     ]
            // }
        ],

// Table of contents global config
        tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
		}),
    ],
});