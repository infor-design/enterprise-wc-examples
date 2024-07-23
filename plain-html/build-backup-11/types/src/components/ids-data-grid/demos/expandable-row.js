import '../ids-data-grid';
import booksJSON from '../../../assets/data/books.json';
// Example for populating the DataGrid
const dataGrid = document.querySelector('#data-grid-expandable-row');
if (dataGrid) {
    (async function init() {
        // Do an ajax request
        const url = booksJSON;
        const columns = [];
        // Set up columns
        columns.push({
            id: 'description',
            name: 'Description',
            field: 'description',
            sortable: true,
            formatter: dataGrid.formatters.expander
        });
        columns.push({
            id: 'ledger',
            name: 'Ledger',
            field: 'ledger',
            formatter: dataGrid.formatters.text
        });
        columns.push({
            id: 'publishDate',
            name: 'Pub. Date',
            field: 'publishDate',
            formatter: dataGrid.formatters.date
        });
        columns.push({
            id: 'publishTime',
            name: 'Pub. Time',
            field: 'publishDate',
            formatter: dataGrid.formatters.time
        });
        columns.push({
            id: 'location',
            name: 'Location',
            field: 'location',
            formatter: dataGrid.formatters.hyperlink,
            href: '#'
        });
        columns.push({
            id: 'postHistory',
            name: 'Post History',
            field: 'postHistory',
            formatter: dataGrid.formatters.text
        });
        columns.push({
            id: 'active',
            name: 'Active',
            field: 'active',
            formatter: dataGrid.formatters.checkbox
        });
        dataGrid.columns = columns;
        const setData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            dataGrid.data = data;
        };
        setData();
        dataGrid.addEventListener('rowexpanded', (e) => {
            console.info(`Row Expanded`, e.detail);
        });
        dataGrid.addEventListener('rowcollapsed', (e) => {
            console.info(`Row Collapsed`, e.detail);
        });
    }());
}
//# sourceMappingURL=expandable-row.js.map