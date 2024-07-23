import statesJSON from '../../../assets/data/states.json';
const url = statesJSON;
const autocomplete = document.querySelector('#search-field-autocomplete');
if (autocomplete) {
    const setData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        autocomplete.data = data;
    };
    setData();
}
//# sourceMappingURL=example.js.map