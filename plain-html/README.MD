# Ids Web Components in a plain HTML file

Ids Web Components are packages as ESM modules so can be used in any HTML document very simply.

1. Make sure your using `npm` with `npm init` if not, then add the `ids-enterprise-wc` dependency. Like this repo (see package.json)
1. Add `ids-enterprise-wc` with `npm install ids-enterprise-wc -D`
1. Added script imports to you html page that have the `type="module"`
1. Add the font import `<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;display=swap" rel="stylesheet" />`

```html
<script type="module" src="/node_modules/ids-enterprise-wc/components/ids-container/ids-container.js"></script>
<script type="module" src="/node_modules/ids-enterprise-wc/components/ids-tag/ids-tag.js"></script>
<script type="module" src="/node_modules/ids-enterprise-wc/components/ids-alert/ids-alert.js"></script>
<script type="module" src="/node_modules/ids-enterprise-wc/components/ids-text/ids-text.js"></script>
```

1. Add the components you want to use in the page

```js
<ids-container locale="de-DE" hidden>
  <ids-tag color="error">Error Tag</ids-tag>
  <ids-alert icon="error"></ids-alert>
  <ids-text trangray-text="true">Legend</ids-text>
</ids-container>
```

1. Note that changing locale will work. But only after copying the locale files to a location where they would be served via url like `http://localhost:8000/node_modules/ids-enterprise-wc/locale-data/de-DE.json`

In this case i simply used:

```sh
cp -R node_modules/ids-enterprise-wc/locale-data locale-data
```

Can also look at the `localeDataPath` setting.

1. Also not that you can set the theme to an initial theme with a link. Because there is no way to setup an assets folder in this example this is the best way.

```html
<head>
  <link rel="stylesheet" href="/node_modules/ids-enterprise-wc/themes/ids-theme-default-light.css">
```

## To Run these Examples

- clone the main repo https://github.com/infor-design/enterprise-wc-examples
- we use node 18, but for this example it really doesn't matter.
- we use python3's simple web server but anything can be used to serve the page on a port

```sh
cd angular-ids-wc
npm i
python3 -m http.server
```

- open http://localhost:8000/ in the browser
 
## Updating this project

First update ids try `ncu` and do any non angular updates. Then do `npm i`.

```sh
cp -R node_modules/ids-enterprise-wc/locale-data locale-data
```

Then to run the project and see it still compiles and works. 

## Related Articles

https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/