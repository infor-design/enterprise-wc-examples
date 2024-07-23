import json from '../../../assets/data/items-single.json';
// Init Web Components
let data = [];
const setData = async () => {
    const res = await fetch(json);
    data = await res.json();
    // Init Web Components
    document.querySelector('#web-comp-example').data = data;
    // Init 4.x
    document.querySelector('ids-container').removeAttribute('hidden');
    $('#4x-example').chart({ type: 'pie', dataset: data });
};
setData();
//# sourceMappingURL=side-by-side.js.map