export const getGridColumns = dataGrid => [
  {
    id: 'selectionCheckbox',
    sortable: false,
    resizable: false,
    // formatter: dataGrid.formatters.text,
    align: 'center',
    width: 20
  },
  {
    id: 'rowNumber',
    name: '#',
    // formatter: dataGrid.formatters.rowNumber,
    sortable: false,
    readonly: true,
    width: 65
  },
  {
    id: 'description',
    name: 'Description',
    field: 'description',
    sortable: true,
    // formatter: dataGrid.formatters.text
  },
  {
    id: 'ledger',
    name: 'Ledger',
    field: 'ledger',
    // formatter: dataGrid.formatters.text
  },
  {
    id: 'publishDate',
    name: 'Pub. Date',
    field: 'publishDate',
    // formatter: dataGrid.formatters.date
  },
  {
    id: 'publishTime',
    name: 'Pub. Time',
    field: 'publishDate',
    // formatter: dataGrid.formatters.time
  },
  {
    id: 'price',
    name: 'Price',
    field: 'price',
    // formatter: dataGrid.formatters.decimal,
    formatOptions: { locale: 'en-US' } // Data Values are in en-US
  },
  {
    id: 'bookCurrency',
    name: 'Currency',
    field: 'bookCurrency',
    // formatter: dataGrid.formatters.text
  },
  {
    id: 'transactionCurrency',
    name: 'Transaction Currency',
    field: 'transactionCurrency',
    // formatter: dataGrid.formatters.text
  },
  {
    id: 'integer',
    name: 'Price (Int)',
    field: 'price',
    // formatter: dataGrid.formatters.integer,
    formatOptions: { locale: 'en-US' } // Data Values are in en-US
  },
  {
    id: 'location',
    name: 'Location',
    field: 'location',
    // formatter: dataGrid.formatters.hyperlink,
    href: '#'
  },
  {
    id: 'postHistory',
    name: 'Post History',
    field: 'postHistory',
    // formatter: dataGrid.formatters.text
  },
  {
    id: 'active',
    name: 'Active',
    field: 'active',
    // formatter: dataGrid.formatters.text
  },
  {
    id: 'convention',
    name: 'Convention',
    field: 'convention',
    // formatter: dataGrid.formatters.text
  },
  {
    id: 'methodSwitch',
    name: 'Method Switch',
    field: 'methodSwitch',
    // formatter: dataGrid.formatters.text,
    filterType: 'select'
  },
  {
    id: 'trackDeprecationHistory',
    name: 'Track Deprecation History',
    field: 'trackDeprecationHistory',
    // formatter: dataGrid.formatters.dropdown
  },
  {
    id: 'useForEmployee',
    name: 'Use For Employee',
    field: 'useForEmployee',
    // formatter: dataGrid.formatters.password
  },
  {
    id: 'deprecationHistory',
    name: 'Deprecation History',
    field: 'deprecationHistory',
    // formatter: dataGrid.formatters.text
  }
];
