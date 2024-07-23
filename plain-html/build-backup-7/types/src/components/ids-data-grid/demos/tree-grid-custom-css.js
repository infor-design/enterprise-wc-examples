import '../ids-data-grid';
import buildingsJSON from '../../../assets/data/tree-buildings.json';
// Custom Datagrid Cell Colors are defined in this file:
import css from '../../../assets/css/ids-data-grid/custom-css.css';
const cssLink = `<link href="${css}" rel="stylesheet">`;
document.querySelector('head')?.insertAdjacentHTML('afterbegin', cssLink);
// Example for populating the DataGrid
const dataGrid = document.querySelector('#tree-grid');
if (dataGrid) {
    (async function init() {
        // Do an ajax request
        const url = buildingsJSON;
        const columns = [];
        // Set up columns
        columns.push({
            id: 'selectionCheckbox',
            name: 'selection',
            sortable: false,
            resizable: false,
            formatter: dataGrid.formatters.selectionCheckbox,
            align: 'center',
            frozen: 'left',
            cssPart: 'none'
        });
        columns.push({
            id: 'name',
            name: 'Name',
            field: 'name',
            sortable: true,
            resizable: true,
            formatter: (rowData, columnData, index, api) => api.formatters.tree(rowData, columnData, index, api),
            click: (info) => {
                console.info('Tree Expander Clicked', info);
            },
            width: 220,
            frozen: 'left',
            cssPart: 'custom-cell',
            cellSelectedCssPart: 'custom-cell-selected-1'
        });
        columns.push({
            id: 'rowNumber',
            name: '#',
            formatter: dataGrid.formatters.rowNumber,
            sortable: false,
            readonly: true,
            width: 65,
            cssPart: 'none',
            cellSelectedCssPart: 'none'
        });
        columns.push({
            id: 'id',
            name: 'Id',
            field: 'id',
            sortable: true,
            resizable: true,
            formatter: dataGrid.formatters.text,
            cssPart: 'none',
            cellSelectedCssPart: 'none'
        });
        columns.push({
            id: 'location',
            name: 'Location',
            field: 'location',
            sortable: true,
            resizable: true,
            formatter: dataGrid.formatters.text,
            cssPart: 'none',
            cellSelectedCssPart: 'none'
        });
        columns.push({
            id: 'capacity',
            name: 'Capacity',
            field: 'capacity',
            sortable: true,
            resizable: true,
            formatter: dataGrid.formatters.integer,
            cssPart: 'none',
            cellSelectedCssPart: 'none'
        });
        columns.push({
            id: 'available',
            name: 'Available',
            field: 'available',
            sortable: true,
            resizable: true,
            formatter: dataGrid.formatters.date,
            cssPart: 'none',
            cellSelectedCssPart: 'none'
        });
        columns.push({
            id: 'comments',
            name: 'Comments',
            field: 'comments',
            sortable: true,
            resizable: true,
            formatter: dataGrid.formatters.text,
            cssPart: 'none',
            cellSelectedCssPart: 'none'
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
//# sourceMappingURL=tree-grid-custom-css.js.map