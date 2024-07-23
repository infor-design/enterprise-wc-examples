// Supporting components
import '../ids-list-view';
import productsJSON from '../../../assets/data/products-100.json';
// Example for populating the List View
const listView = document.querySelector('#demo-lv-selectable-mixed');
if (listView) {
    // Do an ajax request and apply the data to the list
    const url = productsJSON;
    const setData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        listView.data = data;
    };
    setData();
}
//# sourceMappingURL=selectable-mixed.js.map