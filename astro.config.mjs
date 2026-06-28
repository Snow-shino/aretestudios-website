import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://plugins.snocrest.com',
  base: process.env.ASTRO_BASE || '/',
  output: 'static',
  integrations: [
    starlight({
      title: 'Arête Plugins',
      logo: {
        src: './src/assets/ase2ue-mark.svg',
        alt: 'Arête Plugins',
      },
      customCss: ['./src/styles/starlight.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Snow-shino',
        },
      ],
      sidebar: [
        {
          label: 'Ase2UE',
          items: [
            { label: 'Overview', slug: 'docs/ase2ue' },
            { label: 'Getting Started', slug: 'docs/ase2ue/getting-started' },
            { label: 'Importing', slug: 'docs/ase2ue/importing' },
            { label: 'Hitboxes, Hurtboxes & Sockets', slug: 'docs/ase2ue/hitboxes-hurtboxes-sockets' },
            { label: 'FAQ', slug: 'docs/ase2ue/faq' },
            { label: 'Changelog', slug: 'docs/ase2ue/changelog' },
          ],
        },
        {
          label: 'TileForge2D',
          items: [
            { label: 'Overview', slug: 'docs/tileforge2d' },
            { label: 'Quick Start', slug: 'docs/tileforge2d/quick-start' },
            { label: 'Tile Actors & Smart Tiles', slug: 'docs/tileforge2d/tile-actors' },
            { label: 'Projection Modes', slug: 'docs/tileforge2d/projection-modes' },
            { label: 'QA Checklist', slug: 'docs/tileforge2d/post-push-qa-pages' },
          ],
        },
        {
          label: 'DayNight2D',
          items: [
            { label: 'Overview', slug: 'docs/daynight2d' },
            { label: 'Getting Started', slug: 'docs/daynight2d/getting-started' },
            { label: 'Blueprint API', slug: 'docs/daynight2d/blueprint-api' },
            { label: 'Systems', slug: 'docs/daynight2d/systems' },
            { label: 'QA Checklist', slug: 'docs/daynight2d/qa-checklist' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#ff7a1a',
          },
        },
      ],
    }),
  ],
});
