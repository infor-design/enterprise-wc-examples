import componentsJSON from '../../../assets/data/items-single-patterns.json';
const setData = async () => {
    const res = await fetch(componentsJSON);
    const data = await res.json();
    const chart = document.querySelector('#pattern-example');
    if (chart) {
        chart.data = data;
    }
};
setData();
//# sourceMappingURL=patterns.js.map