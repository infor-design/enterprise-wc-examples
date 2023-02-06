This repository shows that a TypeScript project can consume any IDS web component from the [Ids Component Library](https://github.com/infor-design/enterprise-wc). Note that typing in TypeScript type declarations works as they are provided from out code.

# Quick start

Once you clone/download this repo go into the folder in the terminal where this file is and type:

```
npm install
npm run start
```

Then open [http://localhost:8000](http://localhost:8000) to view the sample page.

## Instantiating IDS web component in the markup

Load the source file for the desired component as a module. You can bundle it into your application using a bundler or load it directly view a script tag.

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
import IdsTag from 'ids-enterprise-wc/ids-tag/ids-tag.js';

// Initialize a component.
const tag2 = new IdsTag();

// Append a component and set some properties and event handler
tag2.dismissible = true;
tag2.color = 'error';
tag2.innerText = 'Added in Code';

document.body.appendChild(tag);
```

## Known Issues

Note that some browsers don't allow bare imports https://javascript.info/modules-intro#no-bare-modules-allowed
in order to get around this we use a simple tool to remap the import paths https://github.com/open-wc/es-dev-server.
But this can be done many ways