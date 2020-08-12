# Ids Web Component Used in Angular

IDS comes with a typescript definition so can be used in angular now without a wrapper. Use the following steps to consume a ids web component.

1. Added imports to main.ts
1. Added imports to styles.css 
1. Added `CUSTOM_ELEMENTS_SCHEMA` to src/app/app.module.ts
1. In node_modules created a folder `@infor-ids` (TODO: Package our dist folder for npm)
1. Copied the dist folder from enterprise-wc in it after building
1. `npm run start`

## Issues

- Why is the button prepending for John Smith

## Articles

https://www.sitepen.com/blog/using-web-components-with-angular/
https://www.grapecity.com/blogs/using-web-components-in-angular
https://indepth.dev/angular-web-components-a-complete-guide/
https://coryrylan.com/blog/using-web-components-in-angular

## Starter Project

https://stackblitz.com/edit/angular-ivy-f2kr3g