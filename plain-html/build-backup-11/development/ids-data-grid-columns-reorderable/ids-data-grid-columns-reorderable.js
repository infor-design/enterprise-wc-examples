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

/***/ "./src/components/ids-data-grid/demos/columns-reorderable.ts":
/*!*******************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/columns-reorderable.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/books.json */ \"./src/assets/data/books.json\");\n\n\nconst dataGrid = document.querySelector(\"#data-grid-columns-resize\");\nif (dataGrid) {\n  (async function init() {\n    const url = _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__;\n    const columns = [];\n    columns.push({\n      id: \"selectionCheckbox\",\n      name: \"selection\",\n      sortable: false,\n      resizable: false,\n      formatter: dataGrid.formatters.selectionCheckbox,\n      align: \"center\"\n    });\n    columns.push({\n      id: \"rowNumber\",\n      name: \"#\",\n      formatter: dataGrid.formatters.rowNumber,\n      sortable: false,\n      resizable: true,\n      reorderable: true,\n      readonly: true,\n      width: 65\n    });\n    columns.push({\n      id: \"description\",\n      name: \"Description\",\n      field: \"description\",\n      sortable: true,\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"ledger\",\n      name: \"Ledger\",\n      field: \"ledger\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text,\n      hidden: true\n    });\n    columns.push({\n      id: \"publishDate\",\n      name: \"Pub. Date\",\n      field: \"publishDate\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.date,\n      minWidth: 50,\n      maxWidth: 300\n    });\n    columns.push({\n      id: \"publishTime\",\n      name: \"Pub. Time\",\n      field: \"publishDate\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.time,\n      minWidth: 50,\n      maxWidth: 300\n    });\n    columns.push({\n      id: \"price\",\n      name: \"Price\",\n      field: \"price\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.decimal,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"bookCurrency\",\n      name: \"Currency\",\n      field: \"bookCurrency\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"transactionCurrency\",\n      name: \"Transaction Currency\",\n      field: \"transactionCurrency\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"integer\",\n      name: \"Price (Int)\",\n      field: \"price\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.integer,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"location\",\n      name: \"Location\",\n      field: \"location\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.hyperlink,\n      href: \"#\"\n    });\n    columns.push({\n      id: \"postHistory\",\n      name: \"Post History\",\n      field: \"postHistory\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"active\",\n      name: \"Active\",\n      field: \"active\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"convention\",\n      name: \"Convention\",\n      field: \"convention\",\n      resizable: true,\n      reorderable: true,\n      align: \"center\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"methodSwitch\",\n      name: \"Method Switch\",\n      field: \"methodSwitch\",\n      align: \"right\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"trackDeprecationHistory\",\n      name: \"Track Deprecation History\",\n      field: \"trackDeprecationHistory\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"useForEmployee\",\n      name: \"Use For Employee\",\n      field: \"useForEmployee\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.password,\n      hidden: true\n    });\n    columns.push({\n      id: \"deprecationHistory\",\n      name: \"Deprecation History\",\n      field: \"deprecationHistory\",\n      resizable: true,\n      reorderable: true,\n      formatter: dataGrid.formatters.text,\n      hidden: true\n    });\n    dataGrid.columns = columns;\n    const setData = async () => {\n      const res = await fetch(url);\n      const data = await res.json();\n      dataGrid.data = data;\n    };\n    setData();\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL2NvbHVtbnMtcmVvcmRlcmFibGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ087QUFFZTtBQUd0QixNQUFNLFdBQVcsU0FBUyxjQUEyQiwyQkFBMkI7QUFDaEYsSUFBSSxVQUFVO0FBQ1osR0FBQyxlQUFlLE9BQU87QUFFckIsVUFBTSxNQUFXLG9EQUFTO0FBQzFCLFVBQU0sVUFBK0IsQ0FBQztBQUd0QyxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDL0IsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsTUFDYixXQUFXLFNBQVMsV0FBVztBQUFBLElBQ2pDLENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLGFBQWE7QUFBQSxNQUNiLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsYUFBYTtB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QUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsTUFDYixXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxJQUNWLENBQUM7QUFFRCxhQUFTLFVBQVU7QUFDbkIsVUFBTSxVQUFVLFlBQVk7QUFDMUIsWUFBTSxNQUFNLE1BQU0sTUFBTSxHQUFHO0FBQzNCLFlBQU0sT0FBTyxNQUFNLElBQUksS0FBSztBQUM1QixlQUFTLE9BQU87QUFBQSxJQUNsQjtBQUVBLFlBQVE7QUFBQSxFQUNWLEdBQUU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWRhdGEtZ3JpZC9kZW1vcy9jb2x1bW5zLXJlb3JkZXJhYmxlLnRzPzk0NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgSWRzRGF0YUdyaWQgZnJvbSAnLi4vaWRzLWRhdGEtZ3JpZCc7XG5pbXBvcnQgJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0IHR5cGUgeyBJZHNEYXRhR3JpZENvbHVtbiB9IGZyb20gJy4uL2lkcy1kYXRhLWdyaWQtY29sdW1uJztcbmltcG9ydCBib29rc0pTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvYm9va3MuanNvbic7XG5cbi8vIEV4YW1wbGUgZm9yIHBvcHVsYXRpbmcgdGhlIERhdGFHcmlkXG5jb25zdCBkYXRhR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SWRzRGF0YUdyaWQ+KCcjZGF0YS1ncmlkLWNvbHVtbnMtcmVzaXplJykhO1xuaWYgKGRhdGFHcmlkKSB7XG4gIChhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIERvIGFuIGFqYXggcmVxdWVzdFxuICAgIGNvbnN0IHVybDogYW55ID0gYm9va3NKU09OO1xuICAgIGNvbnN0IGNvbHVtbnM6IElkc0RhdGFHcmlkQ29sdW1uW10gPSBbXTtcblxuICAgIC8vIFNldCB1cCBjb2x1bW5zXG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnc2VsZWN0aW9uQ2hlY2tib3gnLFxuICAgICAgbmFtZTogJ3NlbGVjdGlvbicsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnNlbGVjdGlvbkNoZWNrYm94LFxuICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAncm93TnVtYmVyJyxcbiAgICAgIG5hbWU6ICcjJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5yb3dOdW1iZXIsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgd2lkdGg6IDY1XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgbmFtZTogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgIGZpZWxkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnbGVkZ2VyJyxcbiAgICAgIG5hbWU6ICdMZWRnZXInLFxuICAgICAgZmllbGQ6ICdsZWRnZXInLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgICAgIGhpZGRlbjogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3B1Ymxpc2hEYXRlJyxcbiAgICAgIG5hbWU6ICdQdWIuIERhdGUnLFxuICAgICAgZmllbGQ6ICdwdWJsaXNoRGF0ZScsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5kYXRlLFxuICAgICAgbWluV2lkdGg6IDUwLFxuICAgICAgbWF4V2lkdGg6IDMwMFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3B1Ymxpc2hUaW1lJyxcbiAgICAgIG5hbWU6ICdQdWIuIFRpbWUnLFxuICAgICAgZmllbGQ6ICdwdWJsaXNoRGF0ZScsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50aW1lLFxuICAgICAgbWluV2lkdGg6IDUwLFxuICAgICAgbWF4V2lkdGg6IDMwMFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3ByaWNlJyxcbiAgICAgIG5hbWU6ICdQcmljZScsXG4gICAgICBmaWVsZDogJ3ByaWNlJyxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmRlY2ltYWwsXG4gICAgICBmb3JtYXRPcHRpb25zOiB7IGxvY2FsZTogJ2VuLVVTJyB9IC8vIERhdGEgVmFsdWVzIGFyZSBpbiBlbi1VU1xuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2Jvb2tDdXJyZW5jeScsXG4gICAgICBuYW1lOiAnQ3VycmVuY3knLFxuICAgICAgZmllbGQ6ICdib29rQ3VycmVuY3knLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3RyYW5zYWN0aW9uQ3VycmVuY3knLFxuICAgICAgbmFtZTogJ1RyYW5zYWN0aW9uIEN1cnJlbmN5JyxcbiAgICAgIGZpZWxkOiAndHJhbnNhY3Rpb25DdXJyZW5jeScsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2ludGVnZXInLFxuICAgICAgbmFtZTogJ1ByaWNlIChJbnQpJyxcbiAgICAgIGZpZWxkOiAncHJpY2UnLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuaW50ZWdlcixcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHsgbG9jYWxlOiAnZW4tVVMnIH0gLy8gRGF0YSBWYWx1ZXMgYXJlIGluIGVuLVVTXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnbG9jYXRpb24nLFxuICAgICAgbmFtZTogJ0xvY2F0aW9uJyxcbiAgICAgIGZpZWxkOiAnbG9jYXRpb24nLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuaHlwZXJsaW5rLFxuICAgICAgaHJlZjogJyMnXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAncG9zdEhpc3RvcnknLFxuICAgICAgbmFtZTogJ1Bvc3QgSGlzdG9yeScsXG4gICAgICBmaWVsZDogJ3Bvc3RIaXN0b3J5JyxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdhY3RpdmUnLFxuICAgICAgbmFtZTogJ0FjdGl2ZScsXG4gICAgICBmaWVsZDogJ2FjdGl2ZScsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICByZW9yZGVyYWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnY29udmVudGlvbicsXG4gICAgICBuYW1lOiAnQ29udmVudGlvbicsXG4gICAgICBmaWVsZDogJ2NvbnZlbnRpb24nLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgcmVvcmRlcmFibGU6IHRydWUsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ21ldGhvZFN3aXRjaCcsXG4gICAgICBuYW1lOiAnTWV0aG9kIFN3aXRjaCcsXG4gICAgICBmaWVsZDogJ21ldGhvZFN3aXRjaCcsXG4gICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICd0cmFja0RlcHJlY2F0aW9uSGlzdG9yeScsXG4gICAgICBuYW1lOiAnVHJhY2sgRGVwcmVjYXRpb24gSGlzdG9yeScsXG4gICAgICBmaWVsZDogJ3RyYWNrRGVwcmVjYXRpb25IaXN0b3J5JyxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICd1c2VGb3JFbXBsb3llZScsXG4gICAgICBuYW1lOiAnVXNlIEZvciBFbXBsb3llZScsXG4gICAgICBmaWVsZDogJ3VzZUZvckVtcGxveWVlJyxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnBhc3N3b3JkLFxuICAgICAgaGlkZGVuOiB0cnVlXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnZGVwcmVjYXRpb25IaXN0b3J5JyxcbiAgICAgIG5hbWU6ICdEZXByZWNhdGlvbiBIaXN0b3J5JyxcbiAgICAgIGZpZWxkOiAnZGVwcmVjYXRpb25IaXN0b3J5JyxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgIHJlb3JkZXJhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgICBoaWRkZW46IHRydWVcbiAgICB9KTtcblxuICAgIGRhdGFHcmlkLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIGNvbnN0IHNldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBkYXRhR3JpZC5kYXRhID0gZGF0YTtcbiAgICB9O1xuXG4gICAgc2V0RGF0YSgpO1xuICB9KCkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/columns-reorderable.ts\n");

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
/******/ 		__webpack_require__.h = () => ("32a897c9506c6bf2ea1d")
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
/******/ 			"ids-data-grid-columns-reorderable": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/columns-reorderable.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;