import '../ids-dropdown';
import statesJSON from '../../../assets/data/states.json';
const populate = async () => {
    const url = statesJSON;
    const res = await fetch(url);
    const data = await res.json();
    return data;
};
const dropdowns = [...document.querySelectorAll('ids-dropdown')];
dropdowns.forEach((dropdown) => {
    dropdown.beforeShow = populate;
});
//# sourceMappingURL=label-state.js.map