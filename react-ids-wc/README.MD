# Ids Web Component Used in React

This project demonstrates how to use the IDS Web Components in a simple react app. The IDS Web Components are pretty simple to use with React and can basically just be imported from npm then used directly.

### Step 1: Create a new React Project

You can skip this step if already have React Project. But if you are starting from scratch you can use the npx tooling. 

```bash
npx create-react-app react-ids-wc
cd react-ids-wc
```

For more info see https://reactjs.org/docs/create-a-new-react-app.html

### Step 2: Install the polyfill

IDS does not support IE 11 so you might be able to skip this step. If you have the need to support IE you can try to add the  webcomponentsjs polyfill. (However, we do not support this). Once you do make use of vendor-copy to make the polyfill available on runtime.

**1. Install**

```bash
npm install --save @webcomponents/webcomponentsjs vendor-copy
```

**2. Add to scripts in** `package.json`

Open `package.json` to enable vendor-copy. To the scripts block, add a `postinstall` which runs `vendor-copy` after every time npm install is invoked

```javascript
"scripts": {
  "postinstall": "vendor-copy"
}
```

**3. Set instructions to** `vendor-copy`

Next, at the end of the same file `package.json`, give instructions to vendor-copy on what it should copy over when the install is run. We need `webcomponents-bundle.js` and `custom-elements-es5-adapter.js`

```javascript
"vendorCopy": [
  {
    "from": "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
    "to": "public/vendor/custom-elements-es5-adapter.js"
  },
  {
    "from": "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
    "to": "public/vendor/webcomponents-bundle.js"
  }
]
```

**4. Use the polyfills**

Now we have to use the polyfills in runtime by adding them to our `public/index.html`. Add the following lines to the end of `<body>`

```javascript
<script src="%PUBLIC_URL%/vendor/webcomponents-bundle.js"></script>
<script>if (!window.customElements) { document.write("<!--"); }</script>
<script src="%PUBLIC_URL%/vendor/custom-elements-es5-adapter.js"></script>
<!--! DO NOT REMOVE THIS COMMENT, WE NEED ITS CLOSING MARKER -->
```

### Step 3: Add the Ids Web Components to React

**1. Install**

```bash
npm i ids-enterprise-wc
````

**2. Add The Custom Font**

`@import` ids style file to `src/index.css`

```css
/* Add application styles & imports to this file! */
@import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;display=swap";
```
**3. Use the Components**

You can now use the Ids Web Components like any other HTML tag. Replace the contents of the src/App.js with the following

```Javascript
import React from 'react';
import './App.css';

import 'ids-enterprise-wc/ids-tag/ids-tag.js';

function App() {
  return (
    <div className="App" role="main">
      <ids-tag color="error">Error Tag</ids-tag>
    </div>
  );
}

export default App;
```

**4. Run it**

```bash
npm run start
```

**5. See it in the browser**
Navigate to: http://localhost:3000

---

## Articles

https://reactjs.org/docs/web-components.html
https://vaadin.com/learn/tutorials/using-web-components-in-react

## Starter Project

Starter Project: https://stackblitz.com/edit/react-un5ayt
