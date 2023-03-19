# Ids Web Component Used in React

This project demonstrates how to use the IDS Web Components in a simple ReactJS app using Typescript. The IDS Web Components are pretty simple to use with React and can basically be imported from npm then used directly.

## To Run these Examples

- clone the main repo https://github.com/infor-design/enterprise-wc-examples
- should be on node 18

```sh
cd react-ts-ids-wc
npm install
npm run start
```

- open http://localhost:3000/ in the browser
- if any errors and you have previously cloned try `rm -rf node_modules && npm i`

### Step 1: Create a new React Project

You can skip this step if already have React Project. But if you are starting from scratch you can use the `npx` tooling.

```bash
npx create-react-app react-ts-ids-wc --template typescript
cd react-ts-ids-wc
```

For more info see https://reactjs.org/docs/create-a-new-react-app.html

### Step 2: Install the polyfill

IDS does not support IE 11 so you should add it to `browserslist` in `package.json`

```bash
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all",
    "ie 11"
  ],
  "development": [
    ">0.2%",
    "not dead",
    "not op_mini all",
    "ie 11"
  ]
}
```

### Add the Ids Web Components to React

**1. Install**

```bash
npm install ids-enterprise-wc
````

**2. Add the Custom Font**

`@import` ids style file to `src/App.css`

```css
/* Add application styles & imports to this file! */
@import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;display=swap";
```
**3. Add the Ids Web Component type declarations**

Copy `src/declarations.d.ts` into your project's `src/` dir, so Typescript will recognize the Ids Web Components custom html-tags.

**4. Optional -- Add the custom React hooks to your project**

You can also copy `src/hooks/*` into your project's `src/` dir to use these custom React hooks:
- `useEvent(evenName, eventHandler)`
- `useFetch(url, dataHandler)`
- `useModal({ open, onOpen, onClose })`


**5. Use the Components**

You can now use the Ids Web Components like any other HTML tag. Replace the contents of the src/App.js with the following

```Javascript
import React from 'react';
import './App.css';

import 'ids-enterprise-wc/ids-tag/ids-tag';

function App() {
  return (
    <div className="App" role="main">
      <ids-tag color="error">Error Tag</ids-tag>
    </div>
  );
}

export default App;
```

**6. Run it**

```bash
npm run start
```

**7. See it in the browser**
Navigate to: http://localhost:3000

---

## Events
React passes all data to Custom Elements in the form of HTML attributes.

Because React implements its own synthetic event system, it cannot listen for DOM events coming from Custom Elements without the use of a workaround. Developers will need to reference their Custom Elements using a ref and manually attach event listeners with addEventListener.

However in case of `onClick` event it will work on most components, `ids-button` example shows `onClick` event usage as well as `addEventListener`

## JSX
Some components like `ids-list-view` are using curly braces in HTML what also is a special syntax for JSX.
It can be attached to the element as a string using a ref.

```js
listViewRef.current.defaultTemplate = '<ids-text font-size="16" type="h2">${productName}</ids-text>'
```

## Articles

https://reactjs.org/docs/web-components.html
https://vaadin.com/learn/tutorials/using-web-components-in-react

## Starter Project

Starter Project: https://stackblitz.com/edit/react-un5ayt
