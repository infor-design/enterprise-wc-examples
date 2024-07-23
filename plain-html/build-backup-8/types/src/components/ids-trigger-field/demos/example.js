import statesJSON from '../../../assets/data/states.json';
const autocomplete = document.querySelector('#trigger-field-7');
const url = statesJSON;
if (autocomplete) {
    const setData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        autocomplete.data = data;
    };
    setData();
}
//# sourceMappingURL=example.js.map