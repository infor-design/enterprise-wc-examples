# Ids Tabs Component React Example

[ids-tabs documentation](https://github.com/infor-design/enterprise-wc/blob/main/src/components/ids-tabs/README.md)

React passes all data to Custom Elements in the form of HTML attributes.

Because React implements its own synthetic event system, it cannot listen for DOM events coming from Custom Elements without the use of a workaround. Developers will need to reference their Custom Elements using a ref and manually attach event listeners with addEventListener.

# React specific notes
ids-tabs doesn't sync ids-tab-content out of the box, the example shows how to do it with React state

```js
const tabsRef = useRef();
const [activeTab, setActiveTab] = useState();

tabs.addEventListener('change', () => setActiveTab(tabs.value));
```

```html
<ids-tabs ref={tabsRef}>
  <ids-tab value="name">Tab</ids-tab>
</ids-tabs>
<ids-tab-content value="contracts" active={activeTab === 'name'}>Tab Content</ids-tab-content>
```
