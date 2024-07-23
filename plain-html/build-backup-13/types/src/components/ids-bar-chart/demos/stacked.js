import '../ids-bar-chart';
import componentsJSON from '../../../assets/data/components.json';
const url = componentsJSON;
const setData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const chart = document.querySelector('#stacked-example');
    if (chart) {
        chart.data = data;
    }
};
setData();
//# sourceMappingURL=stacked.js.map