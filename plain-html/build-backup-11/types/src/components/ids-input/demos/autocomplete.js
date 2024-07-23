import statesJSON from '../../../assets/data/states.json';
const autocomplete = document.querySelector('ids-input');
const url = statesJSON;
const setData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    autocomplete.data = data;
};
setData();
autocomplete.addEventListener('selected', (e) => {
    console.info('Option Selected', e.detail);
});
autocomplete.addEventListener('cleared', (e) => {
    console.info('Options Cleared', e.detail);
});
//# sourceMappingURL=autocomplete.js.map