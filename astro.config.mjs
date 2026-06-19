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
          href: 'https://github.com/Snow-shino/Ase2ue',
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
