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

/***/ "./src/components/ids-data-grid/demos/multiple.ts":
/*!********************************************************!*\
  !*** ./src/components/ids-data-grid/demos/multiple.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/books.json */ \"./src/assets/data/books.json\");\n/* harmony import */ var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/products.json */ \"./src/assets/data/products.json\");\n\n\n\nconst dataGrid1 = document.querySelector(\"#data-grid-1\");\n(async function init() {\n  const url = _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__;\n  const columns = [];\n  columns.push({\n    id: \"selectionCheckbox\",\n    name: \"selection\",\n    sortable: false,\n    resizable: false,\n    formatter: dataGrid1.formatters.selectionCheckbox,\n    align: \"center\"\n  });\n  columns.push({\n    id: \"rowNumber\",\n    name: \"#\",\n    formatter: dataGrid1.formatters.rowNumber,\n    sortable: false,\n    resizable: true,\n    reorderable: true,\n    readonly: true,\n    width: 65\n  });\n  columns.push({\n    id: \"description\",\n    name: \"Description\",\n    field: \"description\",\n    sortable: true,\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid1.formatters.text\n  });\n  columns.push({\n    id: \"ledger\",\n    name: \"Ledger\",\n    field: \"ledger\",\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid1.formatters.text\n  });\n  columns.push({\n    id: \"publishDate\",\n    name: \"Pub. Date\",\n    field: \"publishDate\",\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid1.formatters.date\n  });\n  columns.push({\n    id: \"publishTime\",\n    name: \"Pub. Time\",\n    field: \"publishDate\",\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid1.formatters.time\n  });\n  columns.push({\n    id: \"price\",\n    name: \"Price\",\n    field: \"price\",\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid1.formatters.decimal,\n    formatOptions: { locale: \"en-US\" }\n    // Data Values are in en-US\n  });\n  columns.push({\n    id: \"bookCurrency\",\n    name: \"Currency\",\n    field: \"bookCurrency\",\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid1.formatters.text\n  });\n  columns.push({\n    id: \"transactionCurrency\",\n    name: \"Transaction Currency\",\n    field: \"transactionCurrency\",\n    formatter: dataGrid1.formatters.text\n  });\n  columns.push({\n    id: \"integer\",\n    name: \"Price (Int)\",\n    field: \"price\",\n    formatter: dataGrid1.formatters.integer,\n    formatOptions: { locale: \"en-US\" }\n    // Data Values are in en-US\n  });\n  columns.push({\n    id: \"location\",\n    name: \"Location\",\n    field: \"location\",\n    formatter: dataGrid1.formatters.hyperlink,\n    href: \"#\"\n  });\n  columns.push({\n    id: \"postHistory\",\n    name: \"Post History\",\n    field: \"postHistory\",\n    formatter: dataGrid1.formatters.text\n  });\n  columns.push({\n    id: \"active\",\n    name: \"Active\",\n    field: \"active\",\n    formatter: dataGrid1.formatters.text\n  });\n  columns.push({\n    id: \"convention\",\n    name: \"Convention\",\n    field: \"convention\",\n    formatter: dataGrid1.formatters.text\n  });\n  columns.push({\n    id: \"methodSwitch\",\n    name: \"Method Switch\",\n    field: \"methodSwitch\",\n    formatter: dataGrid1.formatters.text\n  });\n  columns.push({\n    id: \"trackDeprecationHistory\",\n    name: \"Track Deprecation History\",\n    field: \"trackDeprecationHistory\",\n    formatter: dataGrid1.formatters.text\n  });\n  columns.push({\n    id: \"useForEmployee\",\n    name: \"Use For Employee\",\n    field: \"useForEmployee\",\n    formatter: dataGrid1.formatters.password\n  });\n  columns.push({\n    id: \"deprecationHistory\",\n    name: \"Deprecation History\",\n    field: \"deprecationHistory\",\n    formatter: dataGrid1.formatters.text\n  });\n  dataGrid1.columns = columns;\n  const setData = async () => {\n    const res = await fetch(url);\n    const data = await res.json();\n    dataGrid1.data = data;\n  };\n  setData();\n})();\nconst dataGrid2 = document.querySelector(\"#data-grid-2\");\n(async function init2() {\n  const columns = [];\n  columns.push({\n    id: \"selectionCheckbox\",\n    name: \"selection\",\n    sortable: false,\n    resizable: false,\n    formatter: dataGrid2.formatters.selectionCheckbox,\n    align: \"center\"\n  });\n  columns.push({\n    id: \"id\",\n    name: \"ID\",\n    field: \"id\",\n    width: 80,\n    resizable: true,\n    reorderable: true,\n    sortable: true,\n    formatter: dataGrid2.formatters.text\n  });\n  columns.push({\n    id: \"customTooltip\",\n    name: \"Custom Tooltip\",\n    field: \"productId\",\n    sortable: true,\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid2.formatters.hyperlink,\n    formatOptions: { group: \"\" },\n    width: 88,\n    tooltip: \"This is a product Id\",\n    headerTooltip: \"This is the product Id header\"\n  });\n  columns.push({\n    id: \"color\",\n    name: \"Tooltip Callback\",\n    field: \"color\",\n    sortable: true,\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid2.formatters.text,\n    width: 105\n  });\n  columns.push({\n    id: \"productId\",\n    name: \"Tooltip async Callback\",\n    field: \"productId\",\n    sortable: true,\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid2.formatters.integer,\n    formatOptions: { group: \"\" }\n  });\n  columns.push({\n    id: \"productName\",\n    name: \"Product Name\",\n    field: \"productName\",\n    sortable: true,\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid2.formatters.text\n  });\n  columns.push({\n    id: \"inStock\",\n    name: \"In Stock\",\n    field: \"inStock\",\n    sortable: true,\n    resizable: true,\n    reorderable: true,\n    align: \"center\",\n    formatter: dataGrid2.formatters.text,\n    headerIcon: \"info\",\n    headerIconTooltip: \"This is header icon\"\n  });\n  columns.push({\n    id: \"unitPrice\",\n    name: \"Unit Price\",\n    field: \"unitPrice\",\n    sortable: true,\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid2.formatters.integer\n  });\n  columns.push({\n    id: \"units\",\n    name: \"Units\",\n    field: \"units\",\n    sortable: true,\n    resizable: true,\n    reorderable: true,\n    formatter: dataGrid2.formatters.text\n  });\n  const url = _assets_data_products_json__WEBPACK_IMPORTED_MODULE_2__;\n  dataGrid2.columns = columns;\n  const setData = async () => {\n    const res = await fetch(url);\n    const data = await res.json();\n    dataGrid2.data = data.slice(0, 10);\n  };\n  setData();\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL211bHRpcGxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDTztBQUVlO0FBQ0c7QUFFekIsTUFBTSxZQUFZLFNBQVMsY0FBMkIsY0FBYztBQUFBLENBRW5FLGVBQWUsT0FBTztBQUVyQixRQUFNLE1BQVcsb0RBQVM7QUFDMUIsUUFBTSxVQUErQixDQUFDO0FBR3RDLFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsV0FBVyxVQUFVLFdBQVc7QUFBQSxJQUNoQyxPQUFPO0FBQUEsRUFDVCxDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixXQUFXLFVBQVUsV0FBVztBQUFBLElBQ2hDLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxFQUNULENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxJQUNiLFdBQVcsVUFBVSxXQUFXO0FBQUEsRUFDbEMsQ0FBQztBQUNELFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsV0FBVyxVQUFVLFdBQVc7QUFBQSxFQUNsQyxDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsSUFDYixXQUFXLFVBQVUsV0FBVztBQUFBLEVBQ2xDLENB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QSxFQUNsQyxDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsSUFDUCxXQUFXLFVBQVUsV0FBVztBQUFBLElBQ2hDLFlBQVk7QUFBQSxJQUNaLG1CQUFtQjtBQUFBLEVBQ3JCLENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxJQUNiLFdBQVcsVUFBVSxXQUFXO0FBQUEsRUFDbEMsQ0FBQztBQUNELFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsV0FBVyxVQUFVLFdBQVc7QUFBQSxFQUNsQyxDQUFDO0FBR0QsUUFBTSxNQUFXLHVEQUFZO0FBRTdCLFlBQVUsVUFBVTtBQUVwQixRQUFNLFVBQVUsWUFBWTtBQUMxQixVQUFNLE1BQU0sTUFBTSxNQUFNLEdBQUc7QUFDM0IsVUFBTSxPQUFPLE1BQU0sSUFBSSxLQUFLO0FBQzVCLGNBQVUsT0FBTyxLQUFLLE1BQU0sR0FBRyxFQUFFO0FBQUEsRUFDbkM7QUFDQSxVQUFRO0FBQ1YsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWRhdGEtZ3JpZC9kZW1vcy9tdWx0aXBsZS50cz80ODA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIElkc0RhdGFHcmlkIGZyb20gJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0ICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCB0eXBlIHsgSWRzRGF0YUdyaWRDb2x1bW4gfSBmcm9tICcuLi9pZHMtZGF0YS1ncmlkLWNvbHVtbic7XG5pbXBvcnQgYm9va3NKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL2Jvb2tzLmpzb24nO1xuaW1wb3J0IHByb2R1Y3RzSlNPTiBmcm9tICcuLi8uLi8uLi9hc3NldHMvZGF0YS9wcm9kdWN0cy5qc29uJztcblxuY29uc3QgZGF0YUdyaWQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNEYXRhR3JpZD4oJyNkYXRhLWdyaWQtMScpITtcblxuKGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vIERvIGFuIGFqYXggcmVxdWVzdFxuICBjb25zdCB1cmw6IGFueSA9IGJvb2tzSlNPTjtcbiAgY29uc3QgY29sdW1uczogSWRzRGF0YUdyaWRDb2x1bW5bXSA9IFtdO1xuXG4gIC8vIFNldCB1cCBjb2x1bW5zXG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdzZWxlY3Rpb25DaGVja2JveCcsXG4gICAgbmFtZTogJ3NlbGVjdGlvbicsXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZDEuZm9ybWF0dGVycy5zZWxlY3Rpb25DaGVja2JveCxcbiAgICBhbGlnbjogJ2NlbnRlcidcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdyb3dOdW1iZXInLFxuICAgIG5hbWU6ICcjJyxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMS5mb3JtYXR0ZXJzLnJvd051bWJlcixcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgIHdpZHRoOiA2NVxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcbiAgICBuYW1lOiAnRGVzY3JpcHRpb24nLFxuICAgIGZpZWxkOiAnZGVzY3JpcHRpb24nLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMS5mb3JtYXR0ZXJzLnRleHRcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdsZWRnZXInLFxuICAgIG5hbWU6ICdMZWRnZXInLFxuICAgIGZpZWxkOiAnbGVkZ2VyJyxcbiAgICByZXNpemFibGU6IHRydWUsXG4gICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZDEuZm9ybWF0dGVycy50ZXh0XG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAncHVibGlzaERhdGUnLFxuICAgIG5hbWU6ICdQdWIuIERhdGUnLFxuICAgIGZpZWxkOiAncHVibGlzaERhdGUnLFxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMS5mb3JtYXR0ZXJzLmRhdGVcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdwdWJsaXNoVGltZScsXG4gICAgbmFtZTogJ1B1Yi4gVGltZScsXG4gICAgZmllbGQ6ICdwdWJsaXNoRGF0ZScsXG4gICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgIGZvcm1hdHRlcjogZGF0YUdyaWQxLmZvcm1hdHRlcnMudGltZVxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ3ByaWNlJyxcbiAgICBuYW1lOiAnUHJpY2UnLFxuICAgIGZpZWxkOiAncHJpY2UnLFxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMS5mb3JtYXR0ZXJzLmRlY2ltYWwsXG4gICAgZm9ybWF0T3B0aW9uczogeyBsb2NhbGU6ICdlbi1VUycgfSAvLyBEYXRhIFZhbHVlcyBhcmUgaW4gZW4tVVNcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdib29rQ3VycmVuY3knLFxuICAgIG5hbWU6ICdDdXJyZW5jeScsXG4gICAgZmllbGQ6ICdib29rQ3VycmVuY3knLFxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMS5mb3JtYXR0ZXJzLnRleHRcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICd0cmFuc2FjdGlvbkN1cnJlbmN5JyxcbiAgICBuYW1lOiAnVHJhbnNhY3Rpb24gQ3VycmVuY3knLFxuICAgIGZpZWxkOiAndHJhbnNhY3Rpb25DdXJyZW5jeScsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZDEuZm9ybWF0dGVycy50ZXh0LFxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ2ludGVnZXInLFxuICAgIG5hbWU6ICdQcmljZSAoSW50KScsXG4gICAgZmllbGQ6ICdwcmljZScsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZDEuZm9ybWF0dGVycy5pbnRlZ2VyLFxuICAgIGZvcm1hdE9wdGlvbnM6IHsgbG9jYWxlOiAnZW4tVVMnIH0gLy8gRGF0YSBWYWx1ZXMgYXJlIGluIGVuLVVTXG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnbG9jYXRpb24nLFxuICAgIG5hbWU6ICdMb2NhdGlvbicsXG4gICAgZmllbGQ6ICdsb2NhdGlvbicsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZDEuZm9ybWF0dGVycy5oeXBlcmxpbmssXG4gICAgaHJlZjogJyMnXG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAncG9zdEhpc3RvcnknLFxuICAgIG5hbWU6ICdQb3N0IEhpc3RvcnknLFxuICAgIGZpZWxkOiAncG9zdEhpc3RvcnknLFxuICAgIGZvcm1hdHRlcjogZGF0YUdyaWQxLmZvcm1hdHRlcnMudGV4dFxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ2FjdGl2ZScsXG4gICAgbmFtZTogJ0FjdGl2ZScsXG4gICAgZmllbGQ6ICdhY3RpdmUnLFxuICAgIGZvcm1hdHRlcjogZGF0YUdyaWQxLmZvcm1hdHRlcnMudGV4dFxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ2NvbnZlbnRpb24nLFxuICAgIG5hbWU6ICdDb252ZW50aW9uJyxcbiAgICBmaWVsZDogJ2NvbnZlbnRpb24nLFxuICAgIGZvcm1hdHRlcjogZGF0YUdyaWQxLmZvcm1hdHRlcnMudGV4dFxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ21ldGhvZFN3aXRjaCcsXG4gICAgbmFtZTogJ01ldGhvZCBTd2l0Y2gnLFxuICAgIGZpZWxkOiAnbWV0aG9kU3dpdGNoJyxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMS5mb3JtYXR0ZXJzLnRleHRcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICd0cmFja0RlcHJlY2F0aW9uSGlzdG9yeScsXG4gICAgbmFtZTogJ1RyYWNrIERlcHJlY2F0aW9uIEhpc3RvcnknLFxuICAgIGZpZWxkOiAndHJhY2tEZXByZWNhdGlvbkhpc3RvcnknLFxuICAgIGZvcm1hdHRlcjogZGF0YUdyaWQxLmZvcm1hdHRlcnMudGV4dFxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ3VzZUZvckVtcGxveWVlJyxcbiAgICBuYW1lOiAnVXNlIEZvciBFbXBsb3llZScsXG4gICAgZmllbGQ6ICd1c2VGb3JFbXBsb3llZScsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZDEuZm9ybWF0dGVycy5wYXNzd29yZFxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ2RlcHJlY2F0aW9uSGlzdG9yeScsXG4gICAgbmFtZTogJ0RlcHJlY2F0aW9uIEhpc3RvcnknLFxuICAgIGZpZWxkOiAnZGVwcmVjYXRpb25IaXN0b3J5JyxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMS5mb3JtYXR0ZXJzLnRleHRcbiAgfSk7XG5cbiAgZGF0YUdyaWQxLmNvbHVtbnMgPSBjb2x1bW5zO1xuICBjb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgZGF0YUdyaWQxLmRhdGEgPSBkYXRhO1xuICB9O1xuXG4gIHNldERhdGEoKTtcbn0oKSk7XG5cbmNvbnN0IGRhdGFHcmlkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SWRzRGF0YUdyaWQ+KCcjZGF0YS1ncmlkLTInKSE7XG5cbihhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBjb2x1bW5zOiBJZHNEYXRhR3JpZENvbHVtbltdID0gW107XG5cbiAgLy8gU2V0IHVwIGNvbHVtbnNcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ3NlbGVjdGlvbkNoZWNrYm94JyxcbiAgICBuYW1lOiAnc2VsZWN0aW9uJyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMi5mb3JtYXR0ZXJzLnNlbGVjdGlvbkNoZWNrYm94LFxuICAgIGFsaWduOiAnY2VudGVyJ1xuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ2lkJyxcbiAgICBuYW1lOiAnSUQnLFxuICAgIGZpZWxkOiAnaWQnLFxuICAgIHdpZHRoOiA4MCxcbiAgICByZXNpemFibGU6IHRydWUsXG4gICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZDIuZm9ybWF0dGVycy50ZXh0XG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnY3VzdG9tVG9vbHRpcCcsXG4gICAgbmFtZTogJ0N1c3RvbSBUb29sdGlwJyxcbiAgICBmaWVsZDogJ3Byb2R1Y3RJZCcsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgIGZvcm1hdHRlcjogZGF0YUdyaWQyLmZvcm1hdHRlcnMuaHlwZXJsaW5rLFxuICAgIGZvcm1hdE9wdGlvbnM6IHsgZ3JvdXA6ICcnIH0sXG4gICAgd2lkdGg6IDg4LFxuICAgIHRvb2x0aXA6ICdUaGlzIGlzIGEgcHJvZHVjdCBJZCcsXG4gICAgaGVhZGVyVG9vbHRpcDogJ1RoaXMgaXMgdGhlIHByb2R1Y3QgSWQgaGVhZGVyJ1xuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ2NvbG9yJyxcbiAgICBuYW1lOiAnVG9vbHRpcCBDYWxsYmFjaycsXG4gICAgZmllbGQ6ICdjb2xvcicsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgIGZvcm1hdHRlcjogZGF0YUdyaWQyLmZvcm1hdHRlcnMudGV4dCxcbiAgICB3aWR0aDogMTA1XG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAncHJvZHVjdElkJyxcbiAgICBuYW1lOiAnVG9vbHRpcCBhc3luYyBDYWxsYmFjaycsXG4gICAgZmllbGQ6ICdwcm9kdWN0SWQnLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMi5mb3JtYXR0ZXJzLmludGVnZXIsXG4gICAgZm9ybWF0T3B0aW9uczogeyBncm91cDogJycgfVxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ3Byb2R1Y3ROYW1lJyxcbiAgICBuYW1lOiAnUHJvZHVjdCBOYW1lJyxcbiAgICBmaWVsZDogJ3Byb2R1Y3ROYW1lJyxcbiAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICByZXNpemFibGU6IHRydWUsXG4gICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZDIuZm9ybWF0dGVycy50ZXh0LFxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ2luU3RvY2snLFxuICAgIG5hbWU6ICdJbiBTdG9jaycsXG4gICAgZmllbGQ6ICdpblN0b2NrJyxcbiAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICByZXNpemFibGU6IHRydWUsXG4gICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZvcm1hdHRlcjogZGF0YUdyaWQyLmZvcm1hdHRlcnMudGV4dCxcbiAgICBoZWFkZXJJY29uOiAnaW5mbycsXG4gICAgaGVhZGVySWNvblRvb2x0aXA6ICdUaGlzIGlzIGhlYWRlciBpY29uJyxcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICd1bml0UHJpY2UnLFxuICAgIG5hbWU6ICdVbml0IFByaWNlJyxcbiAgICBmaWVsZDogJ3VuaXRQcmljZScsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgIGZvcm1hdHRlcjogZGF0YUdyaWQyLmZvcm1hdHRlcnMuaW50ZWdlclxuICB9KTtcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ3VuaXRzJyxcbiAgICBuYW1lOiAnVW5pdHMnLFxuICAgIGZpZWxkOiAndW5pdHMnLFxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkMi5mb3JtYXR0ZXJzLnRleHRcbiAgfSk7XG5cbiAgLy8gRG8gYW4gYWpheCByZXF1ZXN0XG4gIGNvbnN0IHVybDogYW55ID0gcHJvZHVjdHNKU09OO1xuXG4gIGRhdGFHcmlkMi5jb2x1bW5zID0gY29sdW1ucztcblxuICBjb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgZGF0YUdyaWQyLmRhdGEgPSBkYXRhLnNsaWNlKDAsIDEwKTtcbiAgfTtcbiAgc2V0RGF0YSgpO1xufSgpKTtcbiJdLCJuYW1lcyI6WyJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/multiple.ts\n");

/***/ }),

/***/ "./src/assets/data/books.json":
/*!************************************!*\
  !*** ./src/assets/data/books.json ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/books.json";

/***/ }),

/***/ "./src/assets/data/products.json":
/*!***************************************!*\
  !*** ./src/assets/data/products.json ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/products.json";

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
/******/ 		__webpack_require__.h = () => ("c877cfadba00fac98356")
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
/******/ 			"ids-data-grid-multiple": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/multiple.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;