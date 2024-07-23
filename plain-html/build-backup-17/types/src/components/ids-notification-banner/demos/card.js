import '../../ids-card/ids-card';
import '../../ids-list-view/ids-list-view';
import bikesJSON from '../../../assets/data/bikes.json';
// Example for populating the List View
const listView = document.querySelector('#list-view-1');
// Do an ajax request and apply the data to the list
const url = bikesJSON;
const setData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    listView.data = data;
};
setData();
//# sourceMappingURL=card.js.map