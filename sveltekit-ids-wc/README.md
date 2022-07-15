# IDS Web Components Used with Sveltekit

This project demonstrates how to use the IDS Web Components in a simple [Sveltekit](https://kit.svelte.dev/) project.  This sample project was originally created with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Viewing and Running these Examples

- clone the main repo https://github.com/infor-design/enterprise-wc-examples
- should be on node 16

```sh
cd sveltekit-ids-wc
npm i
npm run dev
```

- open http://localhost:3000/ in the browser
- if any errors and you have previously cloned try `rm -rf node_modules && npm i`

Optionally, you can also use `npm link` to link a development build of the `ids-enterprise-wc` package, in place of the one installed normally.  See [these instructions](https://github.com/infor-design/enterprise-wc/blob/main/doc/PUBLISH.md#publishing-a-test-package-your-local-npm-repo) for more information.

## Creating a new Sveltekit project with the Web Components

You can skip this step if already have a Sveltekit Project. However, if you are starting from scratch, you can simply use NPM and the Sveltekit skeleton project:

```bash
npm create svelte my-app
cd my-app
npm i
```

### Developing

Once you've created a project and installed dependencies with `npm i`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Notes about combining IDS Web Components with a SvelteKit application

### Server-side Rendering

IDS Web Components are not currently designed for SSR (server-side rendering).  As a result, the following steps must be taken when including the components in a SvelteKit application:

#### Using the `ids-enterprise-wc` package

The `ids-enterprise-wc` package must be added to the project under `devDependencies` and NOT `dependencies`.  This requirement is due to a difference in how the library is bundled because of the dependency type.  For a full explanation, see [the SvelteKit/Sapper README](https://github.com/sveltejs/sapper-template#using-external-components) and also read [this thread](https://github.com/sveltejs/sapper/issues/774#issuecomment-663048738)

#### Dynamic Import and `onMount()`

Importing IDS Components into a Svelte file must be done using a Dynamic Import inside the built-in Svelte `onMount()` function.  This ensures that SSR is bypassed and the IDS component is pushed into the client-side portion of Svelte's runtime library:

```svelte
  <script lang="ts">
    import { onMount } from 'svelte';

    onMount(async (): Promise<void> => {
      await import('ids-enterprise-wc/components/ids-tag/ids-tag');
    });
  </script>
```

Note that this step is only necessary when importing directly from the IDS Enterprise Web Components package.  Importing from other packages may not need this type of structure.