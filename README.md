# Hercules Merchandise NL — hercules-merchandise.nl

> **Status (2026-09-09): build in progress, NOT live.** Fresh import of the FR storefront
> (`royboy31-hercules-live-fr` @ `d5222d1`, branch `production`) being localised to Dutch.
> Progress board: `~/dev/hercules/nl-progress.md` · plan: `~/dev/hercules/nl-site-duplication-plan.md`.
>
> **Rule: nothing in this repo may touch a live site (DE/FR/UK).** All workers are `hercules-*-nl[-prod]`,
> KV `hercules-nl-products[-prod]`, R2 `hercules-nl-*`, Pages `hercules-nl[-staging]`. Routes stay
> commented out until the `hercules-merchandise.nl` zone exists. GitHub workflows live in
> `.github/workflows-disabled-until-phase-4/` and are re-enabled only after the NL secrets are set.
>
> WordPress origin during the build: `https://nl.hercules-merchandising.fr` (Basic-auth gated, noindex).

---

_The original FR README follows; French-specific sections are being replaced phase by phase._

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
