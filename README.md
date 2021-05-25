# Enterprise Web Component Examples

This repo has example projects for running the new IDS web-component version components in other frameworks like React, Angular and Vue.js. The hope is to be able to use the web components directly along with types include in the Web component project.

Initially we want to test three projects with a preliminary tag component. We will test the following criteria

1. Uses stackblitz.com starter project which can be downloaded as a locale project but we want simple starter projects and to share them in here.
1. Show a tag in the page bound to data in the test framework
1. Show use of the tag component
1. Consider framework key features and document things we should probably want to do. For example for Angular:
  * Provide binding to the model for values
  * Catching and handling events emitted 
  * Setting and changing settings (color for example) 
  * Templating like loops or text values
  * Research common framework features (forms ect)
1. Test the type file is working as expected
1. Make a test that includes the component

## Using NPM Link

- In the enterprise-wc project run `npm run build` to build the assets into `dist/`
- In the enterprise-wc project run `npm link` to set up the symbolic link
- Go to on of these project folders (for example typescript-ids-wc) and type `npm link ids-enterprise-wc`

## Vue.js 
Starter Project: https://stackblitz.com/edit/vue
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/vue-ids-wc/README.md)

## React
Starter Project: https://stackblitz.com/edit/react-un5ayt
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/react-ids-wc/README.MD)

## Angular
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/angular-ids-wc/README.MD)

## Typescript
[See README](https://github.com/infor-design/enterprise-wc-examples/blob/main/typescript-ids-wc/README.md)
