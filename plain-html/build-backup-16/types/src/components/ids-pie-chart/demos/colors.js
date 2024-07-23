import '../ids-pie-chart';
import componentsColorsJSON from '../../../assets/data/items-single-color.json';
const setData = async () => {
    const res = await fetch(componentsColorsJSON);
    const data = await res.json();
    document.querySelector('ids-pie-chart').data = data;
};
setData();
//# sourceMappingURL=colors.js.map