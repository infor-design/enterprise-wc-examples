# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Notes about combining IDS Web Components with a SvelteKit application

### Server-side Rendering

IDS Web Components are not currently designed for SSR (server-side rendering), so the following steps must be taken when including the components in a SvelteKit application

- Adding the package `ids-enterprise-wc` to the project must be done under `devDependencies` and NOT `dependencies`.  This requirement is due to a difference in how the library is bundled because of the dependency type.  For a full explanation, see [the SvelteKit/Sapper README](https://github.com/sveltejs/sapper-template#using-external-components) and also read [this thread](https://github.com/sveltejs/sapper/issues/774#issuecomment-663048738)