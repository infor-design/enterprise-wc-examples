import componentsColorsJSON from '../../../assets/data/components-colors.json';
import '../ids-bar-chart';
const setData = async () => {
    const res = await fetch(componentsColorsJSON);
    const data = await res.json();
    const chart = document.querySelector('#colors-example');
    if (chart) {
        chart.data = data;
    }
};
setData();
//# sourceMappingURL=colors.js.map