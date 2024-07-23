import '../ids-data-grid';
import booksJSON from '../../../assets/data/books.json';
// Custom Datagrid Cell Colors are defined in this file:
import css from '../../../assets/css/ids-data-grid/custom-css.css';
const cssLink = `<link href="${css}" rel="stylesheet">`;
document.querySelector('head')?.insertAdjacentHTML('afterbegin', cssLink);
// Example for populating the DataGrid
const dataGrid = document.querySelector('#data-grid-custom-css');
if (dataGrid) {
    (async function init() {
        // Define tooltip css part callback
        const tooltipCssPartCallback = (args) => {
            const { type } = args;
            let cssPart = '';
            if (type === 'body-cell') {
                const parts = ['azure', 'ruby', 'emerald', 'amethyst'];
                const randomIndex = Math.floor(Math.random() * parts.length);
                cssPart = parts[randomIndex];
            }
            return cssPart;
        };
        // Do an ajax request
        const url = booksJSON;
        const columns = [];
        // Set up columns
        columns.push({
            id: 'selectionCheckbox',
            name: 'selection',
            sortable: false,
            resizable: false,
            formatter: dataGrid.formatters.selectionCheckbox,
            align: 'center'
        });
        columns.push({
            id: 'description',
            name: 'Description',
            field: 'description',
            sortable: true,
            formatter: dataGrid.formatters.text
        });
        columns.push({
            id: 'ledger',
            name: 'Ledger',
            field: 'ledger',
            formatter: dataGrid.formatters.text
        });
        columns.push({
            id: 'tooltip-css-part',
            name: 'Tooltip CssPart',
            field: 'location',
            formatter: dataGrid.formatters.text,
            tooltipCssPart: 'custom-turquoise',
            headerTooltipCssPart: 'custom-turquoise',
            width: 100
        });
        columns.push({
            id: 'tooltip-css-part-callback',
            name: 'Tooltip CssPart Callback',
            field: 'location',
            formatter: dataGrid.formatters.text,
            tooltipCssPart: tooltipCssPartCallback,
            width: 110
        });
        columns.push({
            id: 'publishDate',
            name: 'Pub. Date',
            field: 'publishDate',
            formatter: dataGrid.formatters.date,
            cssPart: 'custom-cell',
            cellSelectedCssPart: 'custom-cell-selected-1'
        });
        columns.push({
            id: 'price',
            name: 'Price',
            field: 'price',
            formatter: dataGrid.formatters.decimal,
            formatOptions: { locale: 'en-US' },
            cssPart: (row) => ((row % 2 === 0) ? 'custom-cell' : ''),
            cellSelectedCssPart: (row) => ((row % 2 === 0) ? 'custom-cell-selected-1' : 'custom-cell-selected-2')
        });
        dataGrid.columns = columns;
        const setData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            dataGrid.data = data;
        };
        setData();
    }());
}
//# sourceMappingURL=columns-custom-css.js.map