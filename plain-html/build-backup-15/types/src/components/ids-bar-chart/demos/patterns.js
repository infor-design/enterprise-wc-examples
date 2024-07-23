import componentsColorsJSON from '../../../assets/data/components-patterns.json';
import '../ids-bar-chart';
const setData = async () => {
    const res = await fetch(componentsColorsJSON);
    const data = await res.json();
    const chart = document.querySelector('#patterns-example');
    if (chart) {
        chart.data = data;
    }
};
setData();
//# sourceMappingURL=patterns.js.map