# Snocrest Plugins Website

Static Astro + Starlight website for `plugins.snocrest.com`.

## Live Documentation

- [Ase2UE Documentation](https://snow-shino.github.io/aretestudios-website/docs/ase2ue/)

## Routes

- `/`
- `/plugins`
- `/plugins/ase2ue`
- `/docs/ase2ue/getting-started`
- `/docs/ase2ue/importing`
- `/docs/ase2ue/hitboxes-hurtboxes-sockets`
- `/docs/ase2ue/faq`
- `/docs/ase2ue/changelog`

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Astro 6 requires Node.js `22.12.0` or newer. The GitHub Actions workflow uses Node 22.

## DreamHost Deploy

The GitHub Actions workflow deploys `dist/` with rsync over SSH.

Required repository secrets:

- `DREAMHOST_HOST`
- `DREAMHOST_USER`
- `DREAMHOST_PATH`
- `DREAMHOST_SSH_KEY`

Set `DREAMHOST_PATH` to the folder DreamHost serves for `plugins.snocrest.com`.
