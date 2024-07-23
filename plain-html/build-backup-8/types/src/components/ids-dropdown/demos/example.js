import '../ids-dropdown';
import statesJSON from '../../../assets/data/states.json';
const dropdown = document.querySelector('#dropdown-1');
dropdown?.addEventListener('change', (e) => {
    console.info(`Value Changed to ${e.target.value}: ${e.target.selectedOption.textContent}`);
});
dropdown?.addEventListener('focus', (e) => {
    console.info(`Focus Changed to ${e.target}`);
});
const dropdownAsync = document.querySelector('#dropdown-7');
if (dropdownAsync) {
    dropdownAsync.beforeShow = async function beforeShow() {
        const url = statesJSON;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    };
}
//# sourceMappingURL=example.js.map