import type IdsDataGridFormattersType from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid-formatters';

export const getGridColumns = (formatters: IdsDataGridFormattersType) => [
  {
    id: 'selectionCheckbox',
    sortable: false,
    resizable: false,
    formatter: formatters?.text,
    align: 'center',
    width: 20
  },
  {
    id: 'rowNumber',
    name: '#',
    formatter: formatters?.rowNumber,
    sortable: false,
    readonly: true,
    width: 65
  },
  {
    id: 'description',
    name: 'Description',
    field: 'description',
    sortable: true,
    formatter: formatters?.text
  },
  {
    id: 'ledger',
    name: 'Ledger',
    field: 'ledger',
    formatter: formatters?.text
  },
  {
    id: 'publishDate',
    name: 'Pub. Date',
    field: 'publishDate',
    formatter: formatters?.date
  },
  {
    id: 'publishTime',
    name: 'Pub. Time',
    field: 'publishDate',
    formatter: formatters?.time
  },
  {
    id: 'price',
    name: 'Price',
    field: 'price',
    formatter: formatters?.decimal,
    formatOptions: { locale: 'en-US' } // Data Values are in en-US
  },
  {
    id: 'bookCurrency',
    name: 'Currency',
    field: 'bookCurrency',
    formatter: formatters?.text
  },
  {
    id: 'transactionCurrency',
    name: 'Transaction Currency',
    field: 'transactionCurrency',
    formatter: formatters?.text
  },
  {
    id: 'integer',
    name: 'Price (Int)',
    field: 'price',
    formatter: formatters?.integer,
    formatOptions: { locale: 'en-US' } // Data Values are in en-US
  },
  {
    id: 'location',
    name: 'Location',
    field: 'location',
    formatter: formatters?.hyperlink,
    href: '#'
  },
  {
    id: 'postHistory',
    name: 'Post History',
    field: 'postHistory',
    formatter: formatters?.text
  },
  {
    id: 'active',
    name: 'Active',
    field: 'active',
    formatter: formatters?.text
  },
  {
    id: 'convention',
    name: 'Convention',
    field: 'convention',
    formatter: formatters?.text
  },
  {
    id: 'methodSwitch',
    name: 'Method Switch',
    field: 'methodSwitch',
    formatter: formatters?.text,
    filterType: 'select'
  },
  {
    id: 'trackDeprecationHistory',
    name: 'Track Deprecation History',
    field: 'trackDeprecationHistory',
    formatter: formatters?.dropdown
  },
  {
    id: 'useForEmployee',
    name: 'Use For Employee',
    field: 'useForEmployee',
    formatter: formatters?.password
  },
  {
    id: 'deprecationHistory',
    name: 'Deprecation History',
    field: 'deprecationHistory',
    formatter: formatters?.text
  }
];
