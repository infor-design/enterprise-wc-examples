# Ids Web Component Used in React

Use the following steps to consume Ids Web Components in to React Project.

### Step 1: Create a new React Project

_skip this step if already have React Project_

```bash
npx create-react-app react-ids-wc
cd react-ids-wc
```

### Step 2: Install the polyfill

To start using Web Components in React, we need to have a polyfill installed for Web Component support in all browsers. We use the webcomponentsjs polyfill. We also make use of vendor-copy to make the polyfill available on runtime.

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

**2. Add general styles/fonts etc.**

`@import` ids style file to `src/index.css`

```css
/* Add application styles & imports to this file! */
@import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;display=swap";
```
**3. Use the components**

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

**5. See on browser**
Navigate to: http://localhost:3000

---

## Articles

https://reactjs.org/docs/web-components.html
https://vaadin.com/learn/tutorials/using-web-components-in-react

## Starter Project

Starter Project: https://stackblitz.com/edit/react-un5ayt
