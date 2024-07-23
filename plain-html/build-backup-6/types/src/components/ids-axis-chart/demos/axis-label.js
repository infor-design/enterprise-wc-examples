import componentsJSON from '../../../assets/data/components.json';
const setData = async () => {
    const res = await fetch(componentsJSON);
    const data = await res.json();
    const chart = document.querySelector('#axis-label-example');
    if (chart) {
        chart.data = data;
    }
};
setData();
//# sourceMappingURL=axis-label.js.map