This repository shows how a TypeScript project can consume any IDS web component from the [Ids Library](https://github.com/infor-design/enterprise-wc). We include TypeScript type declarations so that you can perform type-checking on your code along with the library.

NOTE: At the moment i cant figure out why the import in the main.ts doesnt work. Any ideas let me know.

# Quick start

Once you clone/download this repo go into the folder in the terminal where this file is and type:

```
npm install
npm run start
```

Then open [http://localhost:8080](http://localhost:8080) to view the sample page.

## Instantiating IDS web component in the markup

Load the source file for the desired component as a module. You can bundle it into your application using a bundler like webpack, or load it directly view a script tag.

```html
<html>
  <head>
    <script type="module" src="node_modules/ids-enterprise-wc/ids-tag/ids-tag.js"></script>
  </head>
  <body>
    <ids-tag clickable="true" id="ids-clickable-tag">Added in Markup</ids-tag>
  </body>
</html>
```

If desired, you can then set properties on the component as attributes, such as `clickable="true"`.

## Instantiating IDS web components in TypeScript

Each component exposes a default export that you can `import` into your TypeScript application. You can then instantiate the component with `new`, set properties or invoke methods on it, and add it to the DOM like a regular HTML element:

```typescript
// Import the components we want to use.
// @ts-ignore
import IdsTag from 'ids-enterprise-wc/ids-tag/ids-tag.js';

// Initialize a component.
const tag = new IdsTag();

// Append a component and set some properties and event handler
tag.dismissible = true;
tag.color = 'error';
tag.innerText = 'Added in Code';
tag.on('tagremoved', (a: any) => {
  console.log(a);
});

document.body.appendChild(tag);
```

# Known Issues

- [ ] this code gives a no default constructor error:
```js
import IdsTag from 'ids-enterprise-wc/components/ids-tag/ids-tag.js';
const tag = new IdsTag();
 ```
- [ ] the components type to any due to https://github.com/infor-design/enterprise-wc/issues/650
