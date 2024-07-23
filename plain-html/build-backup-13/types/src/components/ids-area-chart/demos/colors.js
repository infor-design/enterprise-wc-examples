import componentsColorsJSON from '../../../assets/data/components-colors.json';
const setData = async () => {
    const res = await fetch(componentsColorsJSON);
    const data = await res.json();
    document.querySelector('#colors-example').data = data;
};
setData();
//# sourceMappingURL=colors.js.map