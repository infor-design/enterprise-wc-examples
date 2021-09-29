# Ids Button Web Component React Example

[ids-button documentation](https://github.com/infor-design/enterprise-wc/blob/main/src/components/ids-button/README.md)

React passes all data to Custom Elements in the form of HTML attributes.

Because React implements its own synthetic event system, it cannot listen for DOM events coming from Custom Elements without the use of a workaround. Developers will need to reference their Custom Elements using a ref and manually attach event listeners with addEventListener.

# React specific notes
ids-button component supports `onClick` React event

```html
<ids-button
  type="primary"
  onClick={e => console.info(e.target)}
>
  <span slot="text">Text</span>
</ids-button>
```
