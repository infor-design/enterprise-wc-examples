# IDS WebComponents in a Svelte Application

This application demonstrates how a [Svelte](https://svelte.dev) project can consume and harness the [IDS Enterprise WebComponents](https://github.com/infor-design/ids-enterprise-wc).

This sample project was constructed using the basic app scaffolding recommended by the Svelte website, using their [provided template](https://github.com/sveltejs/template) and [recommended scaffolding tool](https://github.com/Rich-Harris/degit), as well as the IDS Components.

## Get started

Before starting, a few helpful links:

- If using VSCode, install the [Svelte Extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) for linting/formatting rules.
- If you're new to Svelte, familiarize yourself using their [official tutorial](https://svelte.dev/tutorial/).

### Download/Clone this Repo

Clone this repo, then:

```bash
npm i
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

### Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


### Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

### Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Using the IDS Enterprise WebComponents With Svelte

This project demonstrates a complete integration of the IDS Enterprise WebComponents into a Svelte project.  If you choose to build your project manually, follow the below steps:

### Use NPM to install the components:

```bash
npm i ids-enterprise-wc
```

If using Rollup as your preferred bundler, take advantage of `rollup-plugin-resolve` and prevent duplicate imports of the IDS Components by adding an entry in the `dedupe` array:

```js
// rollup.config.js
export default {
	/* ... */
	plugins: [
		/* ... */
		resolve({
			browser: true,
			dedupe: [
				'svelte',
				'ids-enterprise-wc'
			]
		}),
        /* ... */
    ]
}
```

### Import components

You can import IDS Components directly in the `<script>` tag portion of any `.svelte` file:

```js
// IdsTag.svelte
<script>
	// Import directly
    import 'ids-enterprise-wc/components/ids-tag/ids-tag.js';

	// ...or Import using indexes
    import 'ids-enterprise-wc/components/ids-tag';

	// ...or Import everything
	import 'ids-enterprise-wc';
</script>

<ids-tag color="secondary">My Secondary Tag</ids-tag>
```

## Known Issues

### Usage of Custom Elements in general

One of the creators of Svelte states outright that [he cannot recommend](https://github.com/sveltejs/svelte/issues/3919#issuecomment-554066572) the usage of third party custom elements in Svelte.

### Binding to Custom Element attributes

Related Github Issues:
- sveltejs/svelte#892
- sveltejs/svelte#3919
- sveltejs/svelte#4838

Svelte has some known issues where binding to attributes unknown to the Svelte runtime is [explicitly disabled by the Svelte compiler](https://github.com/sveltejs/svelte/issues/892#issuecomment-499269974).  By definition, all IDS WebComponents are using attributes that are unknown to Svelte.  In practice, this makes it impossible to use Svelte's native binding to variables on IDS Components.

An example of this is using `<ids-input>` and `bind:value` results in an error "value is not a valid binding on ids-input elements", despite the fact that value is a valid property on that element type.

A [workaround can be implemented](https://svelte.dev/repl/c35d83479641423d866da7f6a1bce510?version=3.29.7) that involves a bit more boilerplate code to achieve the same binding.

### Input binding problems

The IdsInput component, or any other component that implements an inner `<input>` doesn't currently work when used inside a Svelte file.  A console error is thrown: 

```sh
index.mjs:382 Uncaught DOMException: Failed to construct 'CustomElement': The result must not have attributes
```

This may be caused by this specific IDS Component, since Tag currently works and can use bindings.  We can't test this against updated versions of the IdsInput component until infor-design/enterprise-wc#301 is solved and we can import the contents of the bundles invididually.

This issue was also tested with `<ids-checkbox>` and the same problem was observed.

### DOM order issues

In some cases, components are loading their internal DOM elements out of order:

- `[Button]` When defining icon buttons, Icon + Text butons (icon on left, text on right) don't have the correct icon spacing. The internal button's CSS class for icon buttons isn't being applied when mounted.
- `[Tag]` - There's an issue where when dismissible Tags are rendered, the dismissible icon is rendered on the wrong side of the text.  When you select one of these tags, and toggle off/on the "Make Dismissible" checkbox, the order is fixed due to the Webcomponent API re-render.

## Project Status

### Components used in basic examples

- [x] IdsButton
- [x] IdsInput (not currently working due to issue described above)
- [x] IdsModal (works but appears to be broken, will be fixed once we can import a more recent version of `ids-enterprise-wc`)
- [x] IdsTag

### Components used in Dynamic examples (Svelte-wrapped Components)

- [x] IdsTag