# tomolatoon.net

tomolatoon's homepage

## Development

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build
pnpm preview
pnpm lint
pnpm format:check
```

## Stack

- [Astro](https://astro.build/) — static site generator (output: static)
- [UnoCSS](https://unocss.dev/) — utility-first CSS with attributify mode
- [Vue](https://vuejs.org/) — integrated and ready; planned for interactive components such as animated sections or filterable content

## Notes

UnoCSS attributify mode is enabled. Use attribute syntax in templates:

```astro
<div flex items-center gap="4" text="dark [clamp(14px,3vw,18px)]"></div>
```
