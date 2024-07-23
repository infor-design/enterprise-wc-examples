/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ids-data-grid/demos/side-by-side.ts":
/*!************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/side-by-side.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/books.json */ \"./src/assets/data/books.json\");\n\n\nconst dataGrid = document.querySelector(\"#data-grid-1\");\nconst url = _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__;\nlet columns = [];\ncolumns.push({\n  id: \"book\",\n  name: \"Book\",\n  field: \"book\",\n  formatter: dataGrid.formatters.text,\n  sortable: true,\n  width: 65\n});\ncolumns.push({\n  id: \"description\",\n  name: \"Description\",\n  field: \"description\",\n  sortable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"ledger\",\n  name: \"Ledger\",\n  field: \"ledger\",\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"bookCurrency\",\n  name: \"Book Currency\",\n  field: \"bookCurrency\",\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"transactionCurrency\",\n  name: \"Transaction Currency\",\n  field: \"transactionCurrency\",\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"postHistory\",\n  name: \"Post History\",\n  field: \"postHistory\",\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"active\",\n  name: \"Active\",\n  field: \"active\",\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"convention\",\n  name: \"Convention\",\n  field: \"convention\",\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"methodSwitch\",\n  name: \"Method Switch\",\n  field: \"methodSwitch\",\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"trackDeprecationHistory\",\n  name: \"Track Deprecation History\",\n  field: \"trackDeprecationHistory\",\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"useForEmployee\",\n  name: \"Use For Employee\",\n  field: \"useForEmployee\",\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"deprecationHistory\",\n  name: \"Deprecation History\",\n  field: \"deprecationHistory\",\n  formatter: dataGrid.formatters.text\n});\ndataGrid.columns = columns;\nconst setData = async () => {\n  const res = await fetch(url);\n  const data = await res.json();\n  dataGrid.data = data;\n};\nsetData();\n$(\"body\").initialize();\n$(\"body\").one(\"initialized\", () => {\n  columns = [];\n  const data = [\n    {\n      id: \"1\",\n      productId: \"T100\",\n      sku: \"#9000001-237\",\n      productName: \"Compressor\",\n      activity: \"Assemble Paint\",\n      quantity: 1,\n      inStock: true,\n      price: 210.99,\n      percent: 0.1,\n      status: \"OK\",\n      orderDate: \"2018-08-07T06:00:00.000Z\",\n      action: \"Action\"\n    },\n    {\n      id: \"2\",\n      productId: \"200\",\n      inStock: true,\n      sku: \"#9000001-236\",\n      productName: \"Different Compressor\",\n      activity: \"Inspect and Repair\",\n      quantity: 2,\n      price: 210.99,\n      percent: 0.1,\n      status: \"\",\n      orderDate: \"2018-06-07T06:00:00.000Z\",\n      action: \"On Hold\"\n    },\n    {\n      id: \"3\",\n      productId: \"300\",\n      inStock: true,\n      sku: \"#9000001-235\",\n      productName: \"Compressor\",\n      activity: \"Inspect and Repair\",\n      quantity: 1,\n      price: 120.99,\n      percent: 0.1,\n      status: null,\n      phone: \"(888) 888-8888\",\n      orderDate: \"2018-12-05T06:00:00.000Z\",\n      action: \"Action\"\n    },\n    {\n      id: \"4\",\n      productId: \"Z400\",\n      sku: \"#9000001-234\",\n      productName: \"Another Compressor\",\n      activity: \"Assemble Paint\",\n      quantity: 3,\n      price: 210.99,\n      percent: 0.2,\n      status: \"OK\",\n      orderDate: \"2018-04-05T06:00:00.000Z\",\n      action: \"Action\"\n    },\n    {\n      id: \"5\",\n      productId: \"2542205\",\n      sku: \"#9000001-233\",\n      productName: \"I Love Compressors\",\n      activity: \"Inspect and Repair\",\n      quantity: 4,\n      price: 210.99,\n      percent: 0.3,\n      status: \"OK\",\n      orderDate: \"2018-02-02T06:00:00.000Z\",\n      action: \"On Hold\"\n    },\n    {\n      id: \"5\",\n      productId: \"2642205\",\n      sku: \"#9000001-232\",\n      productName: \"Air Compressors\",\n      activity: \"Inspect and Repair\",\n      quantity: 41,\n      price: 120.99,\n      percent: 0.4,\n      status: \"OK\",\n      phone: \"(888) 888-8888\",\n      orderDate: \"2018-09-09T06:00:00.000Z\",\n      action: \"On Hold\"\n    },\n    {\n      id: \"6\",\n      productId: \"2642206\",\n      sku: \"#9000001-231\",\n      productName: \"Some Compressor\",\n      activity: \"inspect and Repair\",\n      quantity: 41,\n      price: 123.99,\n      percent: 0.1,\n      status: \"OK\",\n      phone: \"(888) 888-8888\",\n      orderDate: \"2018-08-08T06:00:00.000Z\",\n      action: \"On Hold\"\n    }\n  ];\n  columns.push({\n    id: \"productId\",\n    hideable: false,\n    name: \"Id\",\n    field: \"productId\",\n    formatter: Soho.Formatters.Text\n  });\n  columns.push({\n    id: \"productName\",\n    name: \"Product Name\",\n    field: \"productName\",\n    formatter: Soho.Formatters.Hyperlink\n  });\n  columns.push({ id: \"activity\", name: \"Activity\", field: \"activity\" });\n  columns.push({\n    id: \"hidden\",\n    hidden: true,\n    name: \"Hidden\",\n    field: \"hidden\"\n  });\n  columns.push({\n    id: \"price\",\n    align: \"right\",\n    name: \"Actual Price\",\n    field: \"price\",\n    formatter: Soho.Formatters.Decimal,\n    numberFormat: {\n      minimumFractionDigits: 0,\n      maximumFractionDigits: 0,\n      style: \"currency\",\n      currencySign: \"$\"\n    }\n  });\n  columns.push({\n    id: \"percent\",\n    align: \"right\",\n    name: \"Actual %\",\n    field: \"percent\",\n    formatter: Soho.Formatters.Decimal,\n    numberFormat: { minimumFractionDigits: 0, maximumFractionDigits: 0, style: \"percent\" }\n  });\n  columns.push({\n    id: \"orderDate\",\n    name: \"Order Date\",\n    field: \"orderDate\",\n    formatter: Soho.Formatters.Date,\n    dateFormat: \"M/d/yyyy\"\n  });\n  columns.push({\n    id: \"phone\",\n    name: \"Phone\",\n    field: \"phone\",\n    formatter: Soho.Formatters.Text\n  });\n  $(\"#datagrid\").datagrid({\n    columns,\n    dataset: data,\n    saveColumns: false\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL3NpZGUtYnktc2lkZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFFTztBQUNlO0FBR3RCLE1BQU0sV0FBVyxTQUFTLGNBQTJCLGNBQWM7QUFHbkUsTUFBTSxNQUFXLG9EQUFTO0FBQzFCLElBQUksVUFBVSxDQUFDO0FBR2YsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLEVBQy9CLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFDVCxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxXQUFXLFNBQVMsV0FBVztBQUNqQyxDQUFDO0FBRUQsU0FBUyxVQUFVO0FBRW5CLE1BQU0sVUFBVSxZQUFZO0FBQzFCLFFBQU0sTUFBTSxNQUFNLE1BQU0sR0FBRztBQUMzQixRQUFNLE9BQU8sTUFBTSxJQUFJLEtBQUs7QUFDNUIsV0FBUyxPQUFPO0FBQ2xCO0FBRUEsUUFBUTtBQUdSLEVBQUUsTUFBTSxFQUFFLFdBQVc7QUFDckIsRUFBRSxNQUFNLEVBQUUsSUFBSSxlQUFlLE1BQU07QUFDakMsWUFBVSxDQUFDO0FBQ1gsUUFBTSxPQUFPO0FBQUEsSUFDWDtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixXQUFXO0FBQUEsTUFDWCxTQUFTO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsTUFDTCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBRUEsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFBYSxVQUFVO0FBQUEsSUFBTyxNQUFNO0FBQUEsSUFBTSxPQUFPO0FBQUEsSUFBYSxXQUFXLEtBQUssV0FBVztBQUFBLEVBQy9GLENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUFlLE1BQU07QUFBQSxJQUFnQixPQUFPO0FBQUEsSUFBZSxXQUFXLEtBQUssV0FBVztBQUFBLEVBQzVGLENBQUM7QUFDRCxVQUFRLEtBQUssRUFBRSxJQUFJLFlBQVksTUFBTSxZQUFZLE9BQU8sV0FBVyxDQUFDO0FBQ3BFLFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQVUsUUFBUTtBQUFBLElBQU0sTUFBTTtBQUFBLElBQVUsT0FBTztBQUFBLEVBQ3JELENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFdBQVcsS0FBSyxXQUFXO0FBQUEsSUFDM0IsY0FBYztBQUFBLE1BQ1osdUJBQXVCO0FBQUEsTUFBRyx1QkFBdUI7QUFBQSxNQUFHLE9BQU87QUFBQSxNQUFZLGNBQWM7QUFBQSxJQUN2RjtBQUFBLEVBQ0YsQ0FBQztBQUNELFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQVcsT0FBTztBQUFBLElBQVMsTUFBTTtBQUFBLElBQVksT0FBTztBQUFBLElBQVcsV0FBVyxLQUFLLFdBQVc7QUFBQSxJQUFTLGNBQWMsRUFBRSx1QkFBdUIsR0FBRyx1QkFBdUIsR0FBRyxPQUFPLFVBQVU7QUFBQSxFQUM5TCxDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFBYSxNQUFNO0FBQUEsSUFBYyxPQUFPO0FBQUEsSUFBYSxXQUFXLEtBQUssV0FBVztBQUFBLElBQU0sWUFBWTtBQUFBLEVBQ3hHLENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUFTLE1BQU07QUFBQSxJQUFTLE9BQU87QUFBQSxJQUFTLFdBQVcsS0FBSyxXQUFXO0FBQUEsRUFDekUsQ0FBQztBQUdELElBQUUsV0FBVyxFQUFFLFNBQVM7QUFBQSxJQUN0QjtBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRhLWdyaWQvZGVtb3Mvc2lkZS1ieS1zaWRlLnRzP2Y3YzkiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmltcG9ydCB0eXBlIElkc0RhdGFHcmlkIGZyb20gJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0ICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCBib29rc0pTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvYm9va3MuanNvbic7XG5cbi8vIEV4YW1wbGUgZm9yIHBvcHVsYXRpbmcgdGhlIERhdGFHcmlkXG5jb25zdCBkYXRhR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SWRzRGF0YUdyaWQ+KCcjZGF0YS1ncmlkLTEnKSE7XG5cbi8vIERvIGFuIGFqYXggcmVxdWVzdFxuY29uc3QgdXJsOiBhbnkgPSBib29rc0pTT047XG5sZXQgY29sdW1ucyA9IFtdO1xuXG4vLyBTZXQgdXAgY29sdW1uc1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdib29rJyxcbiAgbmFtZTogJ0Jvb2snLFxuICBmaWVsZDogJ2Jvb2snLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgc29ydGFibGU6IHRydWUsXG4gIHdpZHRoOiA2NVxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ2Rlc2NyaXB0aW9uJyxcbiAgbmFtZTogJ0Rlc2NyaXB0aW9uJyxcbiAgZmllbGQ6ICdkZXNjcmlwdGlvbicsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ2xlZGdlcicsXG4gIG5hbWU6ICdMZWRnZXInLFxuICBmaWVsZDogJ2xlZGdlcicsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnYm9va0N1cnJlbmN5JyxcbiAgbmFtZTogJ0Jvb2sgQ3VycmVuY3knLFxuICBmaWVsZDogJ2Jvb2tDdXJyZW5jeScsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAndHJhbnNhY3Rpb25DdXJyZW5jeScsXG4gIG5hbWU6ICdUcmFuc2FjdGlvbiBDdXJyZW5jeScsXG4gIGZpZWxkOiAndHJhbnNhY3Rpb25DdXJyZW5jeScsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ3Bvc3RIaXN0b3J5JyxcbiAgbmFtZTogJ1Bvc3QgSGlzdG9yeScsXG4gIGZpZWxkOiAncG9zdEhpc3RvcnknLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ2FjdGl2ZScsXG4gIG5hbWU6ICdBY3RpdmUnLFxuICBmaWVsZDogJ2FjdGl2ZScsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnY29udmVudGlvbicsXG4gIG5hbWU6ICdDb252ZW50aW9uJyxcbiAgZmllbGQ6ICdjb252ZW50aW9uJyxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdtZXRob2RTd2l0Y2gnLFxuICBuYW1lOiAnTWV0aG9kIFN3aXRjaCcsXG4gIGZpZWxkOiAnbWV0aG9kU3dpdGNoJyxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICd0cmFja0RlcHJlY2F0aW9uSGlzdG9yeScsXG4gIG5hbWU6ICdUcmFjayBEZXByZWNhdGlvbiBIaXN0b3J5JyxcbiAgZmllbGQ6ICd0cmFja0RlcHJlY2F0aW9uSGlzdG9yeScsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAndXNlRm9yRW1wbG95ZWUnLFxuICBuYW1lOiAnVXNlIEZvciBFbXBsb3llZScsXG4gIGZpZWxkOiAndXNlRm9yRW1wbG95ZWUnLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ2RlcHJlY2F0aW9uSGlzdG9yeScsXG4gIG5hbWU6ICdEZXByZWNhdGlvbiBIaXN0b3J5JyxcbiAgZmllbGQ6ICdkZXByZWNhdGlvbkhpc3RvcnknLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxufSk7XG5cbmRhdGFHcmlkLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5jb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgZGF0YUdyaWQuZGF0YSA9IGRhdGE7XG59O1xuXG5zZXREYXRhKCk7XG5cbi8vIEluaXRpYWxpemUgdGhlIDQueFxuJCgnYm9keScpLmluaXRpYWxpemUoKTtcbiQoJ2JvZHknKS5vbmUoJ2luaXRpYWxpemVkJywgKCkgPT4ge1xuICBjb2x1bW5zID0gW107XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgaWQ6ICcxJyxcbiAgICAgIHByb2R1Y3RJZDogJ1QxMDAnLFxuICAgICAgc2t1OiAnIzkwMDAwMDEtMjM3JyxcbiAgICAgIHByb2R1Y3ROYW1lOiAnQ29tcHJlc3NvcicsXG4gICAgICBhY3Rpdml0eTogJ0Fzc2VtYmxlIFBhaW50JyxcbiAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgaW5TdG9jazogdHJ1ZSxcbiAgICAgIHByaWNlOiAyMTAuOTksXG4gICAgICBwZXJjZW50OiAwLjEwLFxuICAgICAgc3RhdHVzOiAnT0snLFxuICAgICAgb3JkZXJEYXRlOiAnMjAxOC0wOC0wN1QwNjowMDowMC4wMDBaJyxcbiAgICAgIGFjdGlvbjogJ0FjdGlvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnMicsXG4gICAgICBwcm9kdWN0SWQ6ICcyMDAnLFxuICAgICAgaW5TdG9jazogdHJ1ZSxcbiAgICAgIHNrdTogJyM5MDAwMDAxLTIzNicsXG4gICAgICBwcm9kdWN0TmFtZTogJ0RpZmZlcmVudCBDb21wcmVzc29yJyxcbiAgICAgIGFjdGl2aXR5OiAnSW5zcGVjdCBhbmQgUmVwYWlyJyxcbiAgICAgIHF1YW50aXR5OiAyLFxuICAgICAgcHJpY2U6IDIxMC45OSxcbiAgICAgIHBlcmNlbnQ6IDAuMTAsXG4gICAgICBzdGF0dXM6ICcnLFxuICAgICAgb3JkZXJEYXRlOiAnMjAxOC0wNi0wN1QwNjowMDowMC4wMDBaJyxcbiAgICAgIGFjdGlvbjogJ09uIEhvbGQnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzMnLFxuICAgICAgcHJvZHVjdElkOiAnMzAwJyxcbiAgICAgIGluU3RvY2s6IHRydWUsXG4gICAgICBza3U6ICcjOTAwMDAwMS0yMzUnLFxuICAgICAgcHJvZHVjdE5hbWU6ICdDb21wcmVzc29yJyxcbiAgICAgIGFjdGl2aXR5OiAnSW5zcGVjdCBhbmQgUmVwYWlyJyxcbiAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgcHJpY2U6IDEyMC45OSxcbiAgICAgIHBlcmNlbnQ6IDAuMTAsXG4gICAgICBzdGF0dXM6IG51bGwsXG4gICAgICBwaG9uZTogJyg4ODgpIDg4OC04ODg4JyxcbiAgICAgIG9yZGVyRGF0ZTogJzIwMTgtMTItMDVUMDY6MDA6MDAuMDAwWicsXG4gICAgICBhY3Rpb246ICdBY3Rpb24nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzQnLFxuICAgICAgcHJvZHVjdElkOiAnWjQwMCcsXG4gICAgICBza3U6ICcjOTAwMDAwMS0yMzQnLFxuICAgICAgcHJvZHVjdE5hbWU6ICdBbm90aGVyIENvbXByZXNzb3InLFxuICAgICAgYWN0aXZpdHk6ICdBc3NlbWJsZSBQYWludCcsXG4gICAgICBxdWFudGl0eTogMyxcbiAgICAgIHByaWNlOiAyMTAuOTksXG4gICAgICBwZXJjZW50OiAwLjIwLFxuICAgICAgc3RhdHVzOiAnT0snLFxuICAgICAgb3JkZXJEYXRlOiAnMjAxOC0wNC0wNVQwNjowMDowMC4wMDBaJyxcbiAgICAgIGFjdGlvbjogJ0FjdGlvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnNScsXG4gICAgICBwcm9kdWN0SWQ6ICcyNTQyMjA1JyxcbiAgICAgIHNrdTogJyM5MDAwMDAxLTIzMycsXG4gICAgICBwcm9kdWN0TmFtZTogJ0kgTG92ZSBDb21wcmVzc29ycycsXG4gICAgICBhY3Rpdml0eTogJ0luc3BlY3QgYW5kIFJlcGFpcicsXG4gICAgICBxdWFudGl0eTogNCxcbiAgICAgIHByaWNlOiAyMTAuOTksXG4gICAgICBwZXJjZW50OiAwLjMwLFxuICAgICAgc3RhdHVzOiAnT0snLFxuICAgICAgb3JkZXJEYXRlOiAnMjAxOC0wMi0wMlQwNjowMDowMC4wMDBaJyxcbiAgICAgIGFjdGlvbjogJ09uIEhvbGQnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzUnLFxuICAgICAgcHJvZHVjdElkOiAnMjY0MjIwNScsXG4gICAgICBza3U6ICcjOTAwMDAwMS0yMzInLFxuICAgICAgcHJvZHVjdE5hbWU6ICdBaXIgQ29tcHJlc3NvcnMnLFxuICAgICAgYWN0aXZpdHk6ICdJbnNwZWN0IGFuZCBSZXBhaXInLFxuICAgICAgcXVhbnRpdHk6IDQxLFxuICAgICAgcHJpY2U6IDEyMC45OSxcbiAgICAgIHBlcmNlbnQ6IDAuNDAsXG4gICAgICBzdGF0dXM6ICdPSycsXG4gICAgICBwaG9uZTogJyg4ODgpIDg4OC04ODg4JyxcbiAgICAgIG9yZGVyRGF0ZTogJzIwMTgtMDktMDlUMDY6MDA6MDAuMDAwWicsXG4gICAgICBhY3Rpb246ICdPbiBIb2xkJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICc2JyxcbiAgICAgIHByb2R1Y3RJZDogJzI2NDIyMDYnLFxuICAgICAgc2t1OiAnIzkwMDAwMDEtMjMxJyxcbiAgICAgIHByb2R1Y3ROYW1lOiAnU29tZSBDb21wcmVzc29yJyxcbiAgICAgIGFjdGl2aXR5OiAnaW5zcGVjdCBhbmQgUmVwYWlyJyxcbiAgICAgIHF1YW50aXR5OiA0MSxcbiAgICAgIHByaWNlOiAxMjMuOTksXG4gICAgICBwZXJjZW50OiAwLjEwLFxuICAgICAgc3RhdHVzOiAnT0snLFxuICAgICAgcGhvbmU6ICcoODg4KSA4ODgtODg4OCcsXG4gICAgICBvcmRlckRhdGU6ICcyMDE4LTA4LTA4VDA2OjAwOjAwLjAwMFonLFxuICAgICAgYWN0aW9uOiAnT24gSG9sZCdcbiAgICB9XG4gIF07XG4gICAgLy8gRGVmaW5lIENvbHVtbnMgZm9yIHRoZSBHcmlkLlxuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAncHJvZHVjdElkJywgaGlkZWFibGU6IGZhbHNlLCBuYW1lOiAnSWQnLCBmaWVsZDogJ3Byb2R1Y3RJZCcsIGZvcm1hdHRlcjogU29oby5Gb3JtYXR0ZXJzLlRleHRcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdwcm9kdWN0TmFtZScsIG5hbWU6ICdQcm9kdWN0IE5hbWUnLCBmaWVsZDogJ3Byb2R1Y3ROYW1lJywgZm9ybWF0dGVyOiBTb2hvLkZvcm1hdHRlcnMuSHlwZXJsaW5rLFxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHsgaWQ6ICdhY3Rpdml0eScsIG5hbWU6ICdBY3Rpdml0eScsIGZpZWxkOiAnYWN0aXZpdHknIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnaGlkZGVuJywgaGlkZGVuOiB0cnVlLCBuYW1lOiAnSGlkZGVuJywgZmllbGQ6ICdoaWRkZW4nXG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAncHJpY2UnLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIG5hbWU6ICdBY3R1YWwgUHJpY2UnLFxuICAgIGZpZWxkOiAncHJpY2UnLFxuICAgIGZvcm1hdHRlcjogU29oby5Gb3JtYXR0ZXJzLkRlY2ltYWwsXG4gICAgbnVtYmVyRm9ybWF0OiB7XG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5U2lnbjogJyQnXG4gICAgfVxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ3BlcmNlbnQnLCBhbGlnbjogJ3JpZ2h0JywgbmFtZTogJ0FjdHVhbCAlJywgZmllbGQ6ICdwZXJjZW50JywgZm9ybWF0dGVyOiBTb2hvLkZvcm1hdHRlcnMuRGVjaW1hbCwgbnVtYmVyRm9ybWF0OiB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCBzdHlsZTogJ3BlcmNlbnQnIH1cbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdvcmRlckRhdGUnLCBuYW1lOiAnT3JkZXIgRGF0ZScsIGZpZWxkOiAnb3JkZXJEYXRlJywgZm9ybWF0dGVyOiBTb2hvLkZvcm1hdHRlcnMuRGF0ZSwgZGF0ZUZvcm1hdDogJ00vZC95eXl5J1xuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ3Bob25lJywgbmFtZTogJ1Bob25lJywgZmllbGQ6ICdwaG9uZScsIGZvcm1hdHRlcjogU29oby5Gb3JtYXR0ZXJzLlRleHRcbiAgfSk7XG5cbiAgLy8gSW5pdCBhbmQgZ2V0IHRoZSBhcGkgZm9yIHRoZSBncmlkXG4gICQoJyNkYXRhZ3JpZCcpLmRhdGFncmlkKHtcbiAgICBjb2x1bW5zLFxuICAgIGRhdGFzZXQ6IGRhdGEsXG4gICAgc2F2ZUNvbHVtbnM6IGZhbHNlXG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/side-by-side.ts\n");

/***/ }),

/***/ "./src/assets/data/books.json":
/*!************************************!*\
  !*** ./src/assets/data/books.json ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/books.json";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("216ac2806d0661883707")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ids-data-grid-side-by-side": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkids_enterprise_wc"] = self["webpackChunkids_enterprise_wc"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/side-by-side.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;