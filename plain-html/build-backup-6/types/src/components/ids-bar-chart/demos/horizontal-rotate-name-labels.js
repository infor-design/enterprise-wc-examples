import componentsJSON from '../../../assets/data/components-long-text.json';
const setData = async () => {
    const res = await fetch(componentsJSON);
    const data = await res.json();
    const chart = document.querySelector('#horizontal-rotate-name-labels-example');
    if (chart) {
        chart.data = data;
    }
};
setData();
//# sourceMappingURL=horizontal-rotate-name-labels.js.map