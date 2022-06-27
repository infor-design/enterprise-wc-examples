# Ids Web Components with Angular

Ids Web Components use custom elements and have a typescript definition so can work in angular without a wrapper. Use the following steps to consume a ids web component in a simple angular project.

1. Add `ids-enterprise-wc` with `npm install ids-enterprise-wc -D`
1. Added imports to `app/main.ts` (all imports also include the styles so no style sheets are needed)

```js
// Import for when the component is used in the code
import IdsSwapList from 'ids-enterprise-wc/components/ids-swaplist/ids-swaplist.js';
// Import for when the component is used in the code to  be included but not used in the JS
import 'ids-enterprise-wc/components/ids-swappable/ids-swappable';
```

1. Use imports in the angular.json 

```json
  "scripts": [
    "node_modules/ids-enterprise-wc/enterprise-wc.js", // Full package
    "node_modules/ids-enterprise-wc/components/ids-tag/ids-tag.js"
  ],
``` 

1. Add `CUSTOM_ELEMENTS_SCHEMA` to `src/app/app.module.ts`
1. `npm run start`
1. If wanted you can shorten the import paths using this feature https://blog.bitsrc.io/short-typescript-import-paths-in-angular9-22ce34bd424d 

## To Run these Examples

- clone the main repo https://github.com/infor-design/enterprise-wc-examples
- should be on node 16

```sh
cd angular-ids-wc
npm i
npm run start
```

- open http://localhost:4200/ in the browser
 
## Working with the old components side by side

We tested the older [Angular quick start](https://github.com/infor-design/enterprise-ng-quickstart) and its possible to use components side by side in that as well. In order to add web components to the quick start.

1. Add `ids-enterprise-wc with` `npm install ids-enterprise-wc -D`
1. Ensure `CUSTOM_ELEMENTS_SCHEMA` is used in `src/app/app.module.ts` (should already be)
1. Add each component you want to use in the [scripts section of angular json](https://github.com/infor-design/enterprise-ng-quickstart/blob/main/angular.json#L46-L47)
1. [Use the components](https://github.com/infor-design/enterprise-ng-quickstart/blob/main/src/app/app.component.html#L24)

## Articles

https://www.sitepen.com/blog/using-web-components-with-angular/
https://www.grapecity.com/blogs/using-web-components-in-angular
https://indepth.dev/angular-web-components-a-complete-guide/
https://coryrylan.com/blog/using-web-components-in-angular

## Original Starter Project

https://stackblitz.com/edit/angular-ivy-f2kr3g
