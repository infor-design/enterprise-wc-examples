# Ids Data Grid Web Component React Example

[ids-data-grid documentation](https://github.com/infor-design/enterprise-wc/blob/main/src/components/ids-data-grid/README.md)

React passes all data to Custom Elements in the form of HTML attributes.

Because React implements its own synthetic event system, it cannot listen for DOM events coming from Custom Elements without the use of a workaround. Developers will need to reference their Custom Elements using a ref and manually attach event listeners with addEventListener.
