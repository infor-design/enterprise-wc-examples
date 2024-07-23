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

/***/ "./src/components/ids-data-grid/demos/combo-sort.ts":
/*!**********************************************************!*\
  !*** ./src/components/ids-data-grid/demos/combo-sort.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n\nconst dataGrid = document.querySelector(\"#data-grid-1\");\nif (dataGrid) {\n  (async function init() {\n    const columns = [];\n    const data = [];\n    data.push({ id: 4, productId: 2445204, productName: \"01AM\", activity: \"Inspect and Repair\", portable: true, quantity: 3, price: null, status: \"OK\", orderDate: new Date(2015, 3, 3), action: \"ac\", description: \"Compressor comes with with air tool kit\" });\n    data.push({ id: 5, productId: 2542205, productName: \"01PT\", activity: \"Inspect and Repair\", portable: false, quantity: 4, price: 210.99, status: \"OK\", orderDate: new Date(2015, 5, 5), action: \"oh\" });\n    data.push({ id: 6, productId: 2642205, productName: \"02PT\", activity: \"Inspect and Repair\", portable: false, quantity: 41, price: 120.99, status: \"OK\", orderDate: new Date(2014, 6, 9), action: \"oh\" });\n    data.push({ id: 7, productId: 2642206, productName: \"03AM\", activity: \"Inspect and Repair\", portable: true, quantity: 41, price: 123.99, status: \"OK\", orderDate: new Date(2014, 6, 9), action: \"oh\" });\n    data.push({ id: 2, productId: 2241202, productName: \"1\", activity: \"Inspect and Repair\", quantity: 2, price: 210.991, status: \"\", orderDate: new Date(2016, 2, 15, 0, 30, 36), portable: false, action: \"oh\", description: \"The kit has an air blow gun that can be used for cleaning\" });\n    data.push({ id: 3, productId: 2342203, productName: \"10\", activity: \"Inspect and Repair\", portable: true, quantity: 1, price: 120.992, status: null, orderDate: new Date(2014, 6, 3), action: \"ac\" });\n    data.push({ id: 8, productId: 2642207, productName: \"05AM\", activity: \"Inspect and Repair\", portable: true, quantity: 12, price: 12.99, status: \"OK\", orderDate: new Date(2014, 6, 9), action: \"oh\" });\n    data.push({ id: 9, productId: 2142201, productName: \"05PT\", activity: \"Inspect and Repair\", quantity: 1, price: 210.99, status: \"OK\", orderDate: new Date(2016, 2, 15, 12, 30, 36), portable: false, action: \"ac\" });\n    data.push({ id: 10, productId: 2642206, productName: \"06AM\", activity: \"Inspect and Repair\", portable: true, quantity: 41, price: 123.99, status: \"OK\", orderDate: new Date(2014, 6, 9), action: \"oh\" });\n    data.push({ id: 11, productId: 2642206, productName: \"07PT\", activity: \"Inspect and Repair\", portable: true, quantity: 41, price: 123.99, status: \"OK\", orderDate: new Date(2014, 6, 9), action: \"oh\" });\n    data.push({ id: 12, productId: 2642206, productName: \"10CD\", activity: \"Inspect and Repair\", portable: true, quantity: 41, price: 123.99, status: \"OK\", orderDate: new Date(2014, 6, 9), action: \"oh\" });\n    data.push({ id: 13 });\n    data.push({ id: 14 });\n    columns.push({\n      id: \"selectionCheckbox\",\n      name: \"selection\",\n      sortable: false,\n      resizable: false,\n      formatter: dataGrid.formatters.selectionCheckbox,\n      align: \"center\"\n    });\n    columns.push({\n      id: \"productId\",\n      name: \"Product Id\",\n      field: \"productId\",\n      sortable: true,\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"productName\",\n      name: \"Product Name\",\n      field: \"productName\",\n      sortable: true,\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.hyperlink\n    });\n    columns.push({\n      id: \"activity\",\n      name: \"Activity\",\n      field: \"activity\",\n      sortable: true,\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"quantity\",\n      name: \"Quantity\",\n      field: \"quantity\",\n      sortable: true,\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.integer,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    dataGrid.columns = columns;\n    dataGrid.data = data;\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL2NvbWJvLXNvcnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFFTztBQUlQLE1BQU0sV0FBVyxTQUFTLGNBQTJCLGNBQWM7QUFFbkUsSUFBSSxVQUFVO0FBQ1osR0FBQyxlQUFlLE9BQU87QUFFckIsVUFBTSxVQUErQixDQUFDO0FBQ3RDLFVBQU0sT0FBTyxDQUFDO0FBRWQsU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLFFBQVEsVUFBVSxzQkFBc0IsVUFBVSxNQUFNLFVBQVUsR0FBRyxPQUFPLE1BQU0sUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxNQUFNLGFBQWEsMENBQTBDLENBQUM7QUFDM1AsU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLFFBQVEsVUFBVSxzQkFBc0IsVUFBVSxPQUFPLFVBQVUsR0FBRyxPQUFPLFFBQVEsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDdE0sU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLFFBQVEsVUFBVSxzQkFBc0IsVUFBVSxPQUFPLFVBQVUsSUFBSSxPQUFPLFFBQVEsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDdk0sU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLFFBQVEsVUFBVSxzQkFBc0IsVUFBVSxNQUFNLFVBQVUsSUFBSSxPQUFPLFFBQVEsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDdE0sU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLEtBQUssVUFBVSxzQkFBc0IsVUFBVSxHQUFHLE9BQU8sU0FBUyxRQUFRLElBQUksV0FBVyxJQUFJLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsR0FBRyxVQUFVLE9BQU8sUUFBUSxNQUFNLGFBQWEsNERBQTRELENBQUM7QUFDeFIsU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLE1BQU0sVUFBVSxzQkFBc0IsVUFBVSxNQUFNLFVBQVUsR0FBRyxPQUFPLFNBQVMsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDcE0sU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLFFBQVEsVUFBVSxzQkFBc0IsVUFBVSxNQUFNLFVBQVUsSUFBSSxPQUFPLE9BQU8sUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDck0sU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLFFBQVEsVUFBVSxzQkFBc0IsVUFBVSxHQUFHLE9BQU8sUUFBUSxRQUFRLE1BQU0sV0FBVyxJQUFJLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxVQUFVLE9BQU8sUUFBUSxLQUFLLENBQUM7QUFDbk4sU0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLFdBQVcsU0FBUyxhQUFhLFFBQVEsVUFBVSxzQkFBc0IsVUFBVSxNQUFNLFVBQVUsSUFBSSxPQUFPLFFBQVEsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDdk0sU0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLFdBQVcsU0FBUyxhQUFhLFFBQVEsVUFBVSxzQkFBc0IsVUFBVSxNQUFNLFVBQVUsSUFBSSxPQUFPLFFBQVEsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDdk0sU0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLFdBQVcsU0FBUyxhQUFhLFFBQVEsVUFBVSxzQkFBc0IsVUFBVSxNQUFNLFVBQVUsSUFBSSxPQUFPLFFBQVEsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDdk0sU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFDcEIsU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFHcEIsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLGFBQWE7QUFBQSxNQUNiLFdBQVcsU0FBUyxXQUFXO0FBQUEsSUFDakMsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsYUFBYTtBQUFBLE1BQ2IsV0FBVyxTQUFTLFdBQVc7QUFBQSxJQUNqQyxDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsTUFDYixXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLGVBQWUsRUFBRSxRQUFRLFFBQVE7QUFBQTtBQUFBLElBQ25DLENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLGFBQWE7QUFBQSxNQUNiLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDL0IsZUFBZSxFQUFFLFFBQVEsUUFBUTtBQUFBO0FBQUEsSUFDbkMsQ0FBQztBQUVELGFBQVMsVUFBVTtBQUNuQixhQUFTLE9BQU87QUFBQSxFQUNsQixHQUFFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRhLWdyaWQvZGVtb3MvY29tYm8tc29ydC50cz8xMzQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG5pbXBvcnQgdHlwZSBJZHNEYXRhR3JpZCBmcm9tICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCAnLi4vaWRzLWRhdGEtZ3JpZCc7XG5pbXBvcnQgdHlwZSB7IElkc0RhdGFHcmlkQ29sdW1uIH0gZnJvbSAnLi4vaWRzLWRhdGEtZ3JpZC1jb2x1bW4nO1xuXG4vLyBFeGFtcGxlIGZvciBwb3B1bGF0aW5nIHRoZSBEYXRhR3JpZFxuY29uc3QgZGF0YUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0RhdGFHcmlkPignI2RhdGEtZ3JpZC0xJykhO1xuXG5pZiAoZGF0YUdyaWQpIHtcbiAgKGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gRG8gYW4gYWpheCByZXF1ZXN0XG4gICAgY29uc3QgY29sdW1uczogSWRzRGF0YUdyaWRDb2x1bW5bXSA9IFtdO1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGRhdGEucHVzaCh7IGlkOiA0LCBwcm9kdWN0SWQ6IDI0NDUyMDQsIHByb2R1Y3ROYW1lOiAnMDFBTScsIGFjdGl2aXR5OiAnSW5zcGVjdCBhbmQgUmVwYWlyJywgcG9ydGFibGU6IHRydWUsIHF1YW50aXR5OiAzLCBwcmljZTogbnVsbCwgc3RhdHVzOiAnT0snLCBvcmRlckRhdGU6IG5ldyBEYXRlKDIwMTUsIDMsIDMpLCBhY3Rpb246ICdhYycsIGRlc2NyaXB0aW9uOiAnQ29tcHJlc3NvciBjb21lcyB3aXRoIHdpdGggYWlyIHRvb2wga2l0JyB9KTtcbiAgICBkYXRhLnB1c2goeyBpZDogNSwgcHJvZHVjdElkOiAyNTQyMjA1LCBwcm9kdWN0TmFtZTogJzAxUFQnLCBhY3Rpdml0eTogJ0luc3BlY3QgYW5kIFJlcGFpcicsIHBvcnRhYmxlOiBmYWxzZSwgcXVhbnRpdHk6IDQsIHByaWNlOiAyMTAuOTksIHN0YXR1czogJ09LJywgb3JkZXJEYXRlOiBuZXcgRGF0ZSgyMDE1LCA1LCA1KSwgYWN0aW9uOiAnb2gnIH0pO1xuICAgIGRhdGEucHVzaCh7IGlkOiA2LCBwcm9kdWN0SWQ6IDI2NDIyMDUsIHByb2R1Y3ROYW1lOiAnMDJQVCcsIGFjdGl2aXR5OiAnSW5zcGVjdCBhbmQgUmVwYWlyJywgcG9ydGFibGU6IGZhbHNlLCBxdWFudGl0eTogNDEsIHByaWNlOiAxMjAuOTksIHN0YXR1czogJ09LJywgb3JkZXJEYXRlOiBuZXcgRGF0ZSgyMDE0LCA2LCA5KSwgYWN0aW9uOiAnb2gnIH0pO1xuICAgIGRhdGEucHVzaCh7IGlkOiA3LCBwcm9kdWN0SWQ6IDI2NDIyMDYsIHByb2R1Y3ROYW1lOiAnMDNBTScsIGFjdGl2aXR5OiAnSW5zcGVjdCBhbmQgUmVwYWlyJywgcG9ydGFibGU6IHRydWUsIHF1YW50aXR5OiA0MSwgcHJpY2U6IDEyMy45OSwgc3RhdHVzOiAnT0snLCBvcmRlckRhdGU6IG5ldyBEYXRlKDIwMTQsIDYsIDkpLCBhY3Rpb246ICdvaCcgfSk7XG4gICAgZGF0YS5wdXNoKHsgaWQ6IDIsIHByb2R1Y3RJZDogMjI0MTIwMiwgcHJvZHVjdE5hbWU6ICcxJywgYWN0aXZpdHk6ICdJbnNwZWN0IGFuZCBSZXBhaXInLCBxdWFudGl0eTogMiwgcHJpY2U6IDIxMC45OTEsIHN0YXR1czogJycsIG9yZGVyRGF0ZTogbmV3IERhdGUoMjAxNiwgMiwgMTUsIDAsIDMwLCAzNiksIHBvcnRhYmxlOiBmYWxzZSwgYWN0aW9uOiAnb2gnLCBkZXNjcmlwdGlvbjogJ1RoZSBraXQgaGFzIGFuIGFpciBibG93IGd1biB0aGF0IGNhbiBiZSB1c2VkIGZvciBjbGVhbmluZycgfSk7XG4gICAgZGF0YS5wdXNoKHsgaWQ6IDMsIHByb2R1Y3RJZDogMjM0MjIwMywgcHJvZHVjdE5hbWU6ICcxMCcsIGFjdGl2aXR5OiAnSW5zcGVjdCBhbmQgUmVwYWlyJywgcG9ydGFibGU6IHRydWUsIHF1YW50aXR5OiAxLCBwcmljZTogMTIwLjk5Miwgc3RhdHVzOiBudWxsLCBvcmRlckRhdGU6IG5ldyBEYXRlKDIwMTQsIDYsIDMpLCBhY3Rpb246ICdhYycgfSk7XG4gICAgZGF0YS5wdXNoKHsgaWQ6IDgsIHByb2R1Y3RJZDogMjY0MjIwNywgcHJvZHVjdE5hbWU6ICcwNUFNJywgYWN0aXZpdHk6ICdJbnNwZWN0IGFuZCBSZXBhaXInLCBwb3J0YWJsZTogdHJ1ZSwgcXVhbnRpdHk6IDEyLCBwcmljZTogMTIuOTksIHN0YXR1czogJ09LJywgb3JkZXJEYXRlOiBuZXcgRGF0ZSgyMDE0LCA2LCA5KSwgYWN0aW9uOiAnb2gnIH0pO1xuICAgIGRhdGEucHVzaCh7IGlkOiA5LCBwcm9kdWN0SWQ6IDIxNDIyMDEsIHByb2R1Y3ROYW1lOiAnMDVQVCcsIGFjdGl2aXR5OiAnSW5zcGVjdCBhbmQgUmVwYWlyJywgcXVhbnRpdHk6IDEsIHByaWNlOiAyMTAuOTksIHN0YXR1czogJ09LJywgb3JkZXJEYXRlOiBuZXcgRGF0ZSgyMDE2LCAyLCAxNSwgMTIsIDMwLCAzNiksIHBvcnRhYmxlOiBmYWxzZSwgYWN0aW9uOiAnYWMnIH0pO1xuICAgIGRhdGEucHVzaCh7IGlkOiAxMCwgcHJvZHVjdElkOiAyNjQyMjA2LCBwcm9kdWN0TmFtZTogJzA2QU0nLCBhY3Rpdml0eTogJ0luc3BlY3QgYW5kIFJlcGFpcicsIHBvcnRhYmxlOiB0cnVlLCBxdWFudGl0eTogNDEsIHByaWNlOiAxMjMuOTksIHN0YXR1czogJ09LJywgb3JkZXJEYXRlOiBuZXcgRGF0ZSgyMDE0LCA2LCA5KSwgYWN0aW9uOiAnb2gnIH0pO1xuICAgIGRhdGEucHVzaCh7IGlkOiAxMSwgcHJvZHVjdElkOiAyNjQyMjA2LCBwcm9kdWN0TmFtZTogJzA3UFQnLCBhY3Rpdml0eTogJ0luc3BlY3QgYW5kIFJlcGFpcicsIHBvcnRhYmxlOiB0cnVlLCBxdWFudGl0eTogNDEsIHByaWNlOiAxMjMuOTksIHN0YXR1czogJ09LJywgb3JkZXJEYXRlOiBuZXcgRGF0ZSgyMDE0LCA2LCA5KSwgYWN0aW9uOiAnb2gnIH0pO1xuICAgIGRhdGEucHVzaCh7IGlkOiAxMiwgcHJvZHVjdElkOiAyNjQyMjA2LCBwcm9kdWN0TmFtZTogJzEwQ0QnLCBhY3Rpdml0eTogJ0luc3BlY3QgYW5kIFJlcGFpcicsIHBvcnRhYmxlOiB0cnVlLCBxdWFudGl0eTogNDEsIHByaWNlOiAxMjMuOTksIHN0YXR1czogJ09LJywgb3JkZXJEYXRlOiBuZXcgRGF0ZSgyMDE0LCA2LCA5KSwgYWN0aW9uOiAnb2gnIH0pO1xuICAgIGRhdGEucHVzaCh7IGlkOiAxMyB9KTtcbiAgICBkYXRhLnB1c2goeyBpZDogMTQgfSk7XG5cbiAgICAvLyBTZXQgdXAgY29sdW1uc1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3NlbGVjdGlvbkNoZWNrYm94JyxcbiAgICAgIG5hbWU6ICdzZWxlY3Rpb24nLFxuICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5zZWxlY3Rpb25DaGVja2JveCxcbiAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3Byb2R1Y3RJZCcsXG4gICAgICBuYW1lOiAnUHJvZHVjdCBJZCcsXG4gICAgICBmaWVsZDogJ3Byb2R1Y3RJZCcsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdwcm9kdWN0TmFtZScsXG4gICAgICBuYW1lOiAnUHJvZHVjdCBOYW1lJyxcbiAgICAgIGZpZWxkOiAncHJvZHVjdE5hbWUnLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5oeXBlcmxpbmtcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdhY3Rpdml0eScsXG4gICAgICBuYW1lOiAnQWN0aXZpdHknLFxuICAgICAgZmllbGQ6ICdhY3Rpdml0eScsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgICBmb3JtYXRPcHRpb25zOiB7IGxvY2FsZTogJ2VuLVVTJyB9IC8vIERhdGEgVmFsdWVzIGFyZSBpbiBlbi1VU1xuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3F1YW50aXR5JyxcbiAgICAgIG5hbWU6ICdRdWFudGl0eScsXG4gICAgICBmaWVsZDogJ3F1YW50aXR5JyxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuaW50ZWdlcixcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHsgbG9jYWxlOiAnZW4tVVMnIH0gLy8gRGF0YSBWYWx1ZXMgYXJlIGluIGVuLVVTXG4gICAgfSk7XG5cbiAgICBkYXRhR3JpZC5jb2x1bW5zID0gY29sdW1ucztcbiAgICBkYXRhR3JpZC5kYXRhID0gZGF0YTtcbiAgfSgpKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/combo-sort.ts\n");

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
/******/ 		__webpack_require__.h = () => ("919871523b4f16874939")
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ids-data-grid-combo-sort": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/combo-sort.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;