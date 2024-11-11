import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
    site: process.env.CI
    ? 'https://jules-bens-aa.github.io' : 'http://localhost:4321',
    base: '/jb2a-wiki',
    integrations: [starlight({

// Plugins        
        plugins: [starlightImageZoom()],

// Website Config        
        title: 'JB2A Wiki',
        logo: {
            src: './src/assets/img/jb2a-wiki-logo_340x100.webp',
            replacesTitle: true
          },
        social: {
            github: 'https://github.com/Jules-Bens-Aa/jb2a-wiki',
            discord: 'https://discord.gg/gmd8MAPX4m',
            patreon: 'https://www.patreon.com/JB2A',
            youtube: 'https://www.youtube.com/channel/UCqLusRtLV7GXJo_xNNM3dOw',
        },
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
        //components: {
        //Override the SiteTitle.astro
        //SiteTitle: './src/components/SiteTitleCustom.astro',
        //},  
// Custom Css files        
        customCss: [
            './src/styles/custom.css',
            // Relative path to the @font-face CSS file.
            //'./src/assets/fonts/font-face.css',
          ],

// Sidebar config          
        sidebar: [
            {
                label: 'Home', link: '/home'
            },
            {
                label: 'Getting Started',
                // badge: 'Important',
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
                label: 'Patch Notes',
                collapsed: true,
                items: [
                    'patchnotes/pn-demo',
                    'patchnotes/pn-main'
                ]
            },
            {
                label: 'Template',
                
                collapsed: true,
                badge: 'Admin',
                items: [
                    'template/template',
                    'template/website-cmd',
                    'template/todolist'
                ]
            }
        ],

// Table of contents global config
        tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
		}),
    ],
});