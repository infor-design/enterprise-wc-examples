import periodsJSON from '../../../assets/data/periods.json';
// Example for populating the List View
const swaplist = document.querySelector('#swaplist-1');
const url = periodsJSON;
// Do an ajax request and apply the data to the list
const setData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    swaplist.data = data;
};
setData();
//# sourceMappingURL=example.js.map