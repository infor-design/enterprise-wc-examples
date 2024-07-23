import '../ids-data-grid';
import { escapeHTML } from '../../../utils/ids-xss-utils/ids-xss-utils';
import booksJSON from '../../../assets/data/books.json';
import css from '../../../assets/css/ids-data-grid/custom-link.css';
const cssLink = `<link href="${css}" rel="stylesheet">`;
document.querySelector('head')?.insertAdjacentHTML('afterbegin', cssLink);
const dataGrid = document.querySelector('#data-grid-row-height');
const rowHeightMenu = document.querySelector('#row-height-menu');
if (dataGrid) {
    // Change row height with popup menu
    rowHeightMenu?.addEventListener('selected', (e) => {
        dataGrid.rowHeight = e.target.value;
    });
    // Setup datagrid
    (async function init() {
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
            disabled: (row, value, col, item) => item.book === 101,
            align: 'center'
        });
        columns.push({
            id: 'selectionRadio',
            name: 'selection',
            sortable: false,
            resizable: false,
            formatter: dataGrid.formatters.selectionRadio,
            disabled: (row, value, col, item) => item.book === 101,
            align: 'center'
        });
        columns.push({
            id: 'rowNumber',
            name: '#',
            formatter: dataGrid.formatters.rowNumber,
            sortable: false,
            readonly: true,
            width: 56
        });
        columns.push({
            id: 'drilldown',
            name: '',
            sortable: false,
            resizable: false,
            formatter: dataGrid.formatters.button,
            icon: 'drilldown',
            type: 'icon',
            align: 'center',
            disabled: (row, value, col, item) => item.book === 101,
            click: (info) => {
                console.info('Drilldown clicked', info);
            },
            text: 'Drill Down',
            width: 56
        });
        columns.push({
            id: 'description',
            name: 'Text',
            field: 'description',
            sortable: true,
            formatter: dataGrid.formatters.text
        });
        columns.push({
            id: 'location',
            name: 'Hyperlink',
            field: 'location',
            formatter: dataGrid.formatters.hyperlink,
            disabled: (row, value, col, item) => item.book === 101,
            click: (info) => {
                console.info('Link clicked', info);
            },
            href: '#'
        });
        columns.push({
            id: 'ledger',
            name: 'Password',
            field: 'ledger',
            sortable: true,
            formatter: dataGrid.formatters.password
        });
        columns.push({
            id: 'publishDate',
            name: 'Date',
            field: 'publishDate',
            sortable: true,
            formatter: dataGrid.formatters.date,
            width: 100
        });
        columns.push({
            id: 'publishTime',
            name: 'Time',
            field: 'publishDate',
            sortable: true,
            formatter: dataGrid.formatters.time,
            width: 100
        });
        columns.push({
            id: 'price',
            name: 'Decimal',
            field: 'price',
            align: 'right',
            sortable: true,
            formatter: dataGrid.formatters.decimal,
            formatOptions: { locale: 'en-US' },
            width: 100
        });
        columns.push({
            id: 'price',
            name: 'Integer',
            field: 'price',
            align: 'right',
            sortable: true,
            formatter: dataGrid.formatters.integer,
            formatOptions: { locale: 'en-US' },
            width: 100
        });
        columns.push({
            id: 'inStock',
            name: 'Checkbox',
            field: 'inStock',
            align: 'center',
            sortable: false,
            formatter: dataGrid.formatters.checkbox,
            disabled: (row, value, col, item) => item.book === 101,
            width: 50
        });
        columns.push({
            id: 'badge',
            name: 'Badge',
            field: 'price',
            color: 'info',
            sortable: true,
            formatter: dataGrid.formatters.badge,
        });
        columns.push({
            id: 'more',
            name: 'Actions',
            sortable: false,
            resizable: true,
            formatter: dataGrid.formatters.button,
            icon: 'more',
            type: 'icon',
            align: 'center',
            disabled: (row, value, col, item) => item.book === 101,
            click: (info) => {
                console.info('Actions clicked', info);
            },
            text: 'Actions',
            width: 56
        });
        columns.push({
            id: 'custom',
            name: 'Custom',
            field: 'price',
            sortable: false,
            formatter: (rowData, columnData) => {
                const value = `Custom: ${rowData[columnData.field] || '0'}`;
                return `<span class="text-ellipsis">${value}</span>`;
            },
            width: 180
        });
        columns.push({
            id: 'custom',
            name: 'Custom Formatter',
            field: 'location',
            sortable: false,
            formatter: (rowData, columnData) => {
                const value = `${rowData[columnData.field] || ''}`;
                return `<a part="custom-link" href="#" class="text-ellipsis">${escapeHTML(value)}</a>`;
            },
            click: (info) => {
                console.info('Custom Link Clicked', info);
            },
            width: 180
        });
        columns.push({
            id: 'spacer',
            name: '',
            field: '',
            sortable: false
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
//# sourceMappingURL=row-height.js.map