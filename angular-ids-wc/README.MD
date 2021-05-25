# Ids Web Components with Angular

Ids Web Components use custom elements and have a typescript definition so in angular now without a wrapper. Use the following steps to consume a ids web component in a simple angular project.

1. Add ids-enterprise-wc with `npm install ids-enterprise-wc -D`
1. Added imports to app/main.ts (all imports also auto-include the styles)
1. Added `CUSTOM_ELEMENTS_SCHEMA` to src/app/app.module.ts
1. Optionally use helpers/native-element.decorator.ts
1. `npm run start`

## Issues

- When working with Angular, we sometimes use a @ViewChild decorator to get access to specific instance from the containing element and call nativeElement to get the HTMLElement for DOM accessing. Web components work this way as underneath they are HTMLElement's. We included a helpers/native-element.decorator.ts to access view children directly without nativeElement

## Working with the old components side by side

We tested the older [Angular quick start](https://github.com/infor-design/enterprise-ng-quickstart) and its possible to use components sideby side in that as well. In order to add web components to the quickstart.

1. Add ids-enterprise-wc with `npm install ids-enterprise-wc -D`
1. Ensure `CUSTOM_ELEMENTS_SCHEMA` is used in src/app/app.module.ts (should already be)
1. Add each component you want to use in the [scripts section of angular json](https://github.com/infor-design/enterprise-ng-quickstart/blob/main/angular.json#L46-L47)
1. [Use the components](https://github.com/infor-design/enterprise-ng-quickstart/blob/main/src/app/app.component.html#L24)

## Articles

https://www.sitepen.com/blog/using-web-components-with-angular/
https://www.grapecity.com/blogs/using-web-components-in-angular
https://indepth.dev/angular-web-components-a-complete-guide/
https://coryrylan.com/blog/using-web-components-in-angular

## Original Starter Project

https://stackblitz.com/edit/angular-ivy-f2kr3g
