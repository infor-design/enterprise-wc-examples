import componentsJSON from '../../../assets/data/items-single.json';
const setData = async () => {
    const res = await fetch(componentsJSON);
    const data = await res.json();
    const chart = document.querySelector('#no-animation-example');
    if (chart) {
        chart.data = data;
    }
};
setData();
//# sourceMappingURL=no-animation.js.map