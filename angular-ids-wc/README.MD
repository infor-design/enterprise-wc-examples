# Ids Web Components with Angular

Ids Web Components now comes with custom elements and a typescript definition so can be used in angular now without a wrapper. Use the following steps to consume a ids web component.

1. Add ids-enterprise-wc with `npm install ids-enterprise-wc -D`
1. Added imports to app/main.ts (this includes styles)
1. Added `CUSTOM_ELEMENTS_SCHEMA` to src/app/app.module.ts
1. Optionally use helpers/native-element.decorator.ts
1. `npm run start`

## Issues

- When working with Angular, we sometimes use a @ViewChild decorator to get access to specific instance from the containing element and call nativeElement to get the HTMLElement for DOM accessing. Web components work this way as underneath they are HTMLElement's. We included a helpers/native-element.decorator.ts to access view children directly without nativeElement

## Articles

https://www.sitepen.com/blog/using-web-components-with-angular/
https://www.grapecity.com/blogs/using-web-components-in-angular
https://indepth.dev/angular-web-components-a-complete-guide/
https://coryrylan.com/blog/using-web-components-in-angular

## Original Starter Project

https://stackblitz.com/edit/angular-ivy-f2kr3g