# Enterprise Web Component Examples

This repo contains example projects showing how to run the new [IDS web components](https://github.com/infor-design/enterprise-wc) in other frameworks. The goal of the web components is that you can use them in these frameworks without any use of wrappers or containing code.

General Tests

1. Show a component in the page bound to data
2. Show use of the component work similar to the component alone example
3. Consider special specific framework key features and document things we should probably want to do. For example for Angular:
  * Provide binding to the model for values
  * Catching and handling events emitted
  * Setting and changing settings (color for example) 
  * Templating loops
  * Research common framework features (reactive forms for example)
4. Test the types are visible
5. Show a unit test(s) that includes the component

## Using Npm Link

See the [WebComponents documentation about NPM Link](https://github.com/infor-design/enterprise-wc/blob/main/doc/PUBLISH.md#publishing-a-test-package-your-local-npm-repo) for more information
ed Frameworks.

## Debugging the Components

For any framework, note that the production package in npm does not contain map files for size and security reasons. In order to debug you will have to use the debug/development package build.

1. Clone the repo https://github.com/infor-design/enterprise-wc
1. Run:

```sh
npm i
npm run build:dist
```

1. The copy the files from `build/dist/development` to `node_modules/ids-enterprise` replacing the contents
1. The re-run and debug

### Vue.js 
Starter Project: https://stackblitz.com/edit/vue
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/vue-ids-wc/README.MD)

### SvelteKit
Starter Project: https://stackblitz.com/edit/svelte
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/sveltekit-ids-wc/README.md)

### React
Starter Project: https://stackblitz.com/edit/react-un5ayt
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/react-ids-wc/README.MD)

### Angular
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/angular-ids-wc/README.MD)

### Typescript
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/typescript-ids-wc/README.md)

### Plain JS/Html
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/plain-html/README.md)
