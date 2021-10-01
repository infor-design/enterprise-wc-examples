# Ids List View Component React Example

[ids-list-view documentation](https://github.com/infor-design/enterprise-wc/blob/main/src/components/ids-list-view/README.md)

React passes all data to Custom Elements in the form of HTML attributes.

Because React implements its own synthetic event system, it cannot listen for DOM events coming from Custom Elements without the use of a workaround. Developers will need to reference their Custom Elements using a ref and manually attach event listeners with addEventListener.

# React specific notes
ids-list-view template can't be set in the JSX because of `${}` construction used,
can be attached to element as a string:

```js
listViewRef.current.defaultTemplate = '<ids-text font-size="16" type="h2">${productName}</ids-text>'
```
