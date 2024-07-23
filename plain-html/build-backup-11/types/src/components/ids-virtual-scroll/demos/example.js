import productsJSON from '../../../assets/data/products.json';
import css from '../../../assets/css/ids-virtual-scroll/index.css';
const cssLink = `<link href="${css}" rel="stylesheet">`;
const head = document.querySelector('head');
if (head) {
    head.insertAdjacentHTML('afterbegin', cssLink);
}
// Example for populating the Virtual Scoller
const virtualScrollList = document.querySelector('#virtual-scroll-1');
const virtualScrollTable = document.querySelector('#virtual-scroll-2');
if (virtualScrollList) {
    const url = productsJSON;
    const setData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        // Setup the list view
        virtualScrollList.data = data;
        virtualScrollList.itemTemplate = (item) => `<div part="list-item">${item.productName}</div>`;
        // TODO: Can this be done automatically?
        virtualScrollList.scrollTarget = document.querySelector('ids-card')?.shadowRoot?.querySelector('.ids-card-content');
        // Set up the table, which has a custom area with scrolling
        virtualScrollTable.scrollTarget = document.querySelector('.ids-data-grid');
        virtualScrollTable.itemTemplate = (item) => `<div part="row" role="row" class="ids-data-grid-row">
      <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${item.productId}</span></span>
      <span role="cell" part="cell" class="ids-data-grid-cell"><span class="text-ellipsis" part="text-ellipsis">${item.productName}</span></span>
    </div>`;
        virtualScrollTable.data = data;
    };
    setData();
}
//# sourceMappingURL=example.js.map