import '../ids-bar-chart';
import componentsJSON from '../../../assets/data/components.json';
const url = componentsJSON;
const setData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const chart = document.querySelector('#selectable-example');
    if (chart) {
        chart.data = data;
        // selected
        chart.addEventListener('selected', (e) => {
            console.info('selected', e.detail);
        });
        // deselected
        chart.addEventListener('deselected', (e) => {
            console.info('deselected', e.detail);
        });
    }
};
setData();
//# sourceMappingURL=selectable.js.map