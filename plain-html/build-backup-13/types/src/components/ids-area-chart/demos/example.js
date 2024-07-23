import componentsJSON from '../../../assets/data/components.json';
const url = componentsJSON;
const setData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const chart = document.querySelector('#index-example');
    if (chart) {
        chart.data = data;
    }
};
setData();
//# sourceMappingURL=example.js.map