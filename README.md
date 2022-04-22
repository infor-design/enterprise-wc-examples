# Enterprise Web Component Examples

This repo has example projects for running the new IDS web-component version components in other frameworks like React, Angular and Vue.js. The hope is to be able to use the web components directly. If using a typescript project you should get the types as well.

We will test the following:

1. Show a component in the page bound to data in the framework
2. Show use of the component works
3. Consider special specific framework key features and document things we should probably want to do. For example for Angular:
  * Provide binding to the model for values
  * Catching and handling events emitted 
  * Setting and changing settings (color for example) 
  * Templating like loops or text values
  * Research common framework features (forms ect)
4. Test the types are visible
5. Make a unit test that includes the component

## Vue.js 
Starter Project: https://stackblitz.com/edit/vue
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/vue-ids-wc/README.md)

## Svelte
Starter Project: https://stackblitz.com/edit/svelte
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/svelte-ids-wc/README.md)

## React
Starter Project: https://stackblitz.com/edit/react-un5ayt
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/react-ids-wc/README.MD)

## Angular
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/angular-ids-wc/README.MD)

## Typescript
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/typescript-ids-wc/README.md)

## Using NPM Link

- In the enterprise-wc project run `npm run build` to build the assets into `dist/`
- In the enterprise-wc project run `npm link` to set up the symbolic link
- Go to on of these project folders (for example typescript-ids-wc) and type `npm link ids-enterprise-wc`

