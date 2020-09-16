# IDS Web Components with Vue JS
```
This project shows the implementation of ids web components together with VueJS framework.
```

## Adding IDS Web Components to the project folder

Open terminal and run the command `npm install ids-enterprise-wc -D`.

Once this done, you can now proceed to implement the components in Vue.js

## Implementing the IDS Web Components
```bash
# 1. Add component file.
Add a component file in src/components. For example,Tag.vue

# 2. Import the ids component
Now, you need to import the ids components that you will be using. In script tag,

import "ids-enterprise-wc/ids-layout-grid/ids-layout-grid.js";
import "ids-enterprise-wc/ids-label/ids-label.js";
import "ids-enterprise-wc/ids-icon/ids-icon.js";
import "ids-enterprise-wc/ids-tag/ids-tag.js";

By then, you can now use the component in the template tag. For example

<template>
  <div>
    <ids-layout-grid>
      <ids-layout-column>
        <ids-tag>Normal Tag</ids-tag>
        <ids-tag color="secondary">Secondary Tags</ids-tag>
        <ids-tag color="error">Error Tag</ids-tag>
        <ids-tag color="success">Success Tag</ids-tag>
        <ids-tag color="caution">Warning Tag</ids-tag>
        <ids-tag color="#EDE3FC">Custom Tag Color</ids-tag>
        <ids-tag clickable="true" id="ids-clickable-tag">Clickable Tag
          <ids-icon icon="caret-right" size="small"></ids-icon>
        </ids-tag>
        <ids-tag dismissible="true">
            <span>Dismissible Tags</span>
            <ids-icon icon="close" size="small" id="ids-closable-btn"></ids-icon>
        </ids-tag>
      </ids-layout-column>
    </ids-layout-grid>
  </div>
</template>

# 3. Register in App.vue
In App.vue, you need to import the component that you created. This will serve as the entry point to your app.

<script>
import IdsTagTestPage from './components/Tag.vue';
export default {
  name: 'App',
  components: {
    IdsTagTestPage
  }
}
</script>

# 4. Add the component to the template

<template>
  <div id="app">
    <IdsTagTestPage />
  </div>
</template>

```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

```
Go to http://localhost:8080/
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
