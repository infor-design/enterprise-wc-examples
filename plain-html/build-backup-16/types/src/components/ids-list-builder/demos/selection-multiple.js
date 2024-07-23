import bikesJSON from '../../../assets/data/bikes.json';
// Example for populating the List Builder with Ajax
const listBuilder2 = document.querySelector('#list-builder-2');
const addEventListeners = (element) => {
    const eventList = [
        'itemClick', 'itemSelect',
        'itemAdd', 'itemDelete',
        'itemMoveUp', 'itemMoveDown',
        'listDataChange', 'itemChange',
    ];
    eventList.forEach((eventName) => {
        element.addEventListener(eventName, (e) => {
            if ('detail' in e) {
                console.info(eventName, e.detail);
            }
        });
    });
};
// Do an ajax request and apply the data to the list
const setData = async () => {
    const res = await fetch(bikesJSON);
    const data = await res.json();
    listBuilder2.data = data;
    addEventListeners(listBuilder2);
};
setData();
//# sourceMappingURL=selection-multiple.js.map