// Supporting components
import '../ids-list-view';
import '../../ids-radio/ids-radio';
import productsJSON from '../../../assets/data/products-100.json';
// Example for populating the List View
const listView = document.querySelector('#demo-lv-events');
if (listView) {
    // Do an ajax request and apply the data to the list
    const url = productsJSON;
    const setData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        listView.data = data;
    };
    setData();
    /**
     * EVENTS
     */
    const radioBeforeSelected = document.querySelector('#radio-lv-beforeselected');
    const radioBeforeItemActivated = document.querySelector('#radio-lv-beforeitemactivated');
    // display console logs
    const show = (type, detail, veto) => {
        const showVeto = typeof veto !== 'undefined' ? `veto: ${veto}` : '';
        console.info(type, (detail ?? ''), showVeto);
    };
    // before selected
    listView.addEventListener('beforeselected', (e) => {
        const veto = radioBeforeSelected.value;
        show('beforeselected', e.detail, veto);
        e.detail.response(veto);
    });
    // after selected
    listView.addEventListener('selected', (e) => {
        show('selected', e.detail);
    });
    // before deselected
    listView.addEventListener('beforedeselected', (e) => {
        show('beforedeselected', e.detail);
    });
    // after deselected
    listView.addEventListener('deselected', (e) => {
        show('deselected', e.detail);
    });
    // before item activated
    listView.addEventListener('beforeitemactivated', (e) => {
        const veto = radioBeforeItemActivated.value;
        show('beforeitemactivated', e.detail, veto);
        e.detail.response(veto);
    });
    // after item activated
    listView.addEventListener('itemactivated', (e) => {
        show('itemactivated', e.detail);
    });
    // before item deactivated
    listView.addEventListener('beforeitemdeactivated', (e) => {
        show('beforeitemdeactivated', e.detail);
    });
    // after item deactivated
    listView.addEventListener('itemdeactivated', (e) => {
        show('itemdeactivated', e.detail);
    });
}
//# sourceMappingURL=events.js.map