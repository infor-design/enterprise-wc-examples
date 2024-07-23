// Supporting components
import '../ids-card';
import '../../ids-text/ids-text';
import '../../ids-button/ids-button';
import '../../ids-list-view/ids-list-view';
import eventsJSON from '../../../assets/data/events.json';
// Example for populating the List View
const listView = document.querySelector('#demo-card-footer');
// Do an ajax request and apply the data to the list
const url = eventsJSON;
const setData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    listView.data = data;
};
setData();
//# sourceMappingURL=footer.js.map