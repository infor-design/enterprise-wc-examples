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

/***/ "./src/components/ids-data-grid/demos/columns-groups.ts":
/*!**************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/columns-groups.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/books.json */ \"./src/assets/data/books.json\");\n\n\nconst dataGrid = document.querySelector(\"#data-grid-column-groups\");\nconst container = document.querySelector(\"ids-container\");\nif (dataGrid) {\n  (async function init() {\n    await container?.setLocale(\"en-US\");\n    const url = _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__;\n    const columns = [];\n    columns.push({\n      id: \"selectionCheckbox\",\n      name: \"selection\",\n      sortable: false,\n      resizable: false,\n      formatter: dataGrid.formatters.selectionCheckbox,\n      align: \"center\"\n    });\n    columns.push({\n      id: \"rowNumber\",\n      name: \"#\",\n      formatter: dataGrid.formatters.rowNumber,\n      sortable: false,\n      readonly: true,\n      width: 65\n    });\n    columns.push({\n      id: \"description\",\n      name: \"Description\",\n      field: \"description\",\n      sortable: true,\n      formatter: dataGrid.formatters.text,\n      resizable: true\n    });\n    columns.push({\n      id: \"ledger\",\n      name: \"Ledger\",\n      field: \"ledger\",\n      formatter: dataGrid.formatters.text,\n      resizable: true,\n      hidden: true\n    });\n    columns.push({\n      id: \"publishDate\",\n      name: \"Pub. Date\",\n      field: \"publishDate\",\n      formatter: dataGrid.formatters.date,\n      resizable: true\n    });\n    columns.push({\n      id: \"publishTime\",\n      name: \"Pub. Time\",\n      field: \"publishDate\",\n      formatter: dataGrid.formatters.time,\n      resizable: true\n    });\n    columns.push({\n      id: \"price\",\n      name: \"Price\",\n      field: \"price\",\n      formatter: dataGrid.formatters.decimal,\n      resizable: true,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"bookCurrency\",\n      name: \"Currency\",\n      field: \"bookCurrency\",\n      formatter: dataGrid.formatters.text,\n      resizable: true\n    });\n    columns.push({\n      id: \"transactionCurrency\",\n      name: \"Transaction Currency\",\n      field: \"transactionCurrency\",\n      formatter: dataGrid.formatters.text,\n      resizable: true\n    });\n    columns.push({\n      id: \"integer\",\n      name: \"Price (Int)\",\n      field: \"price\",\n      formatter: dataGrid.formatters.integer,\n      resizable: true,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"location\",\n      name: \"Location\",\n      field: \"location\",\n      formatter: dataGrid.formatters.hyperlink,\n      resizable: true,\n      href: \"#\"\n    });\n    columns.push({\n      id: \"postHistory\",\n      name: \"Post History\",\n      field: \"postHistory\",\n      formatter: dataGrid.formatters.text,\n      resizable: true\n    });\n    columns.push({\n      id: \"active\",\n      name: \"Active\",\n      field: \"active\",\n      formatter: dataGrid.formatters.text,\n      resizable: true\n    });\n    columns.push({\n      id: \"convention\",\n      name: \"Convention\",\n      field: \"convention\",\n      formatter: dataGrid.formatters.text,\n      resizable: true\n    });\n    columns.push({\n      id: \"methodSwitch\",\n      name: \"Method Switch\",\n      field: \"methodSwitch\",\n      formatter: dataGrid.formatters.text,\n      resizable: true\n    });\n    columns.push({\n      id: \"trackDeprecationHistory\",\n      name: \"Track Deprecation History\",\n      field: \"trackDeprecationHistory\",\n      formatter: dataGrid.formatters.text,\n      resizable: true\n    });\n    columns.push({\n      id: \"useForEmployee\",\n      name: \"Use For Employee\",\n      field: \"useForEmployee\",\n      formatter: dataGrid.formatters.password,\n      resizable: true,\n      hidden: true\n    });\n    columns.push({\n      id: \"deprecationHistory\",\n      name: \"Deprecation History\",\n      field: \"deprecationHistory\",\n      formatter: dataGrid.formatters.text,\n      resizable: true,\n      hidden: true\n    });\n    dataGrid.columns = columns;\n    const setData = async () => {\n      const res = await fetch(url);\n      const data = await res.json();\n      dataGrid.columnGroups = [\n        {\n          colspan: 3,\n          id: \"group1\",\n          name: \"Column Group One\",\n          align: \"center\"\n        },\n        {\n          colspan: 2,\n          id: \"group2\",\n          name: \"Column Group Two\",\n          headerIcon: \"error\",\n          headerIconTooltip: \"The group2 icon.\"\n        },\n        {\n          colspan: 2,\n          id: \"group3\",\n          name: \"Column Group Three\",\n          align: \"right\"\n        },\n        {\n          colspan: 11,\n          id: \"group4\",\n          name: \"Column Group Four\",\n          align: \"left\"\n        }\n      ];\n      dataGrid.data = data;\n    };\n    setData();\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL2NvbHVtbnMtZ3JvdXBzLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNPO0FBRWU7QUFHdEIsTUFBTSxXQUFXLFNBQVMsY0FBMkIsMEJBQTBCO0FBQy9FLE1BQU0sWUFBaUIsU0FBUyxjQUFjLGVBQWU7QUFFN0QsSUFBSSxVQUFVO0FBQ1osR0FBQyxlQUFlLE9BQU87QUFFckIsVUFBTSxXQUFXLFVBQVUsT0FBTztBQUdsQyxVQUFNLE1BQVcsb0RBQVM7QUFDMUIsVUFBTSxVQUErQixDQUFDO0FBR3RDLFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDL0IsV0FBVztBQUFBLElBQ2IsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsSUFDVixDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLFdB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QUEsVUFDSixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULElBQUk7QUFBQSxVQUNKLE1BQU07QUFBQSxVQUNOLFlBQVk7QUFBQSxVQUNaLG1CQUFtQjtBQUFBLFFBQ3JCO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsSUFBSTtBQUFBLFVBQ0osTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxJQUFJO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFDQSxlQUFTLE9BQU87QUFBQSxJQUNsQjtBQUVBLFlBQVE7QUFBQSxFQUNWLEdBQUU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWRhdGEtZ3JpZC9kZW1vcy9jb2x1bW5zLWdyb3Vwcy50cz84MTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIElkc0RhdGFHcmlkIGZyb20gJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0ICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCB0eXBlIHsgSWRzRGF0YUdyaWRDb2x1bW4gfSBmcm9tICcuLi9pZHMtZGF0YS1ncmlkLWNvbHVtbic7XG5pbXBvcnQgYm9va3NKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL2Jvb2tzLmpzb24nO1xuXG4vLyBFeGFtcGxlIGZvciBwb3B1bGF0aW5nIHRoZSBEYXRhR3JpZFxuY29uc3QgZGF0YUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0RhdGFHcmlkPignI2RhdGEtZ3JpZC1jb2x1bW4tZ3JvdXBzJyk7XG5jb25zdCBjb250YWluZXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1jb250YWluZXInKTtcblxuaWYgKGRhdGFHcmlkKSB7XG4gIChhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIFNldCBMb2NhbGUgYW5kIHdhaXQgZm9yIGl0IHRvIGxvYWRcbiAgICBhd2FpdCBjb250YWluZXI/LnNldExvY2FsZSgnZW4tVVMnKTtcblxuICAgIC8vIERvIGFuIGFqYXggcmVxdWVzdFxuICAgIGNvbnN0IHVybDogYW55ID0gYm9va3NKU09OO1xuICAgIGNvbnN0IGNvbHVtbnM6IElkc0RhdGFHcmlkQ29sdW1uW10gPSBbXTtcblxuICAgIC8vIFNldCB1cCBjb2x1bW5zXG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnc2VsZWN0aW9uQ2hlY2tib3gnLFxuICAgICAgbmFtZTogJ3NlbGVjdGlvbicsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnNlbGVjdGlvbkNoZWNrYm94LFxuICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAncm93TnVtYmVyJyxcbiAgICAgIG5hbWU6ICcjJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5yb3dOdW1iZXIsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICByZWFkb25seTogdHJ1ZSxcbiAgICAgIHdpZHRoOiA2NVxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgIG5hbWU6ICdEZXNjcmlwdGlvbicsXG4gICAgICBmaWVsZDogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnbGVkZ2VyJyxcbiAgICAgIG5hbWU6ICdMZWRnZXInLFxuICAgICAgZmllbGQ6ICdsZWRnZXInLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICBoaWRkZW46IHRydWVcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdwdWJsaXNoRGF0ZScsXG4gICAgICBuYW1lOiAnUHViLiBEYXRlJyxcbiAgICAgIGZpZWxkOiAncHVibGlzaERhdGUnLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmRhdGUsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAncHVibGlzaFRpbWUnLFxuICAgICAgbmFtZTogJ1B1Yi4gVGltZScsXG4gICAgICBmaWVsZDogJ3B1Ymxpc2hEYXRlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50aW1lLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3ByaWNlJyxcbiAgICAgIG5hbWU6ICdQcmljZScsXG4gICAgICBmaWVsZDogJ3ByaWNlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5kZWNpbWFsLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0T3B0aW9uczogeyBsb2NhbGU6ICdlbi1VUycgfSAvLyBEYXRhIFZhbHVlcyBhcmUgaW4gZW4tVVNcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdib29rQ3VycmVuY3knLFxuICAgICAgbmFtZTogJ0N1cnJlbmN5JyxcbiAgICAgIGZpZWxkOiAnYm9va0N1cnJlbmN5JyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3RyYW5zYWN0aW9uQ3VycmVuY3knLFxuICAgICAgbmFtZTogJ1RyYW5zYWN0aW9uIEN1cnJlbmN5JyxcbiAgICAgIGZpZWxkOiAndHJhbnNhY3Rpb25DdXJyZW5jeScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdpbnRlZ2VyJyxcbiAgICAgIG5hbWU6ICdQcmljZSAoSW50KScsXG4gICAgICBmaWVsZDogJ3ByaWNlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5pbnRlZ2VyLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0T3B0aW9uczogeyBsb2NhbGU6ICdlbi1VUycgfSAvLyBEYXRhIFZhbHVlcyBhcmUgaW4gZW4tVVNcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdsb2NhdGlvbicsXG4gICAgICBuYW1lOiAnTG9jYXRpb24nLFxuICAgICAgZmllbGQ6ICdsb2NhdGlvbicsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuaHlwZXJsaW5rLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgaHJlZjogJyMnXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAncG9zdEhpc3RvcnknLFxuICAgICAgbmFtZTogJ1Bvc3QgSGlzdG9yeScsXG4gICAgICBmaWVsZDogJ3Bvc3RIaXN0b3J5JyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2FjdGl2ZScsXG4gICAgICBuYW1lOiAnQWN0aXZlJyxcbiAgICAgIGZpZWxkOiAnYWN0aXZlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2NvbnZlbnRpb24nLFxuICAgICAgbmFtZTogJ0NvbnZlbnRpb24nLFxuICAgICAgZmllbGQ6ICdjb252ZW50aW9uJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ21ldGhvZFN3aXRjaCcsXG4gICAgICBuYW1lOiAnTWV0aG9kIFN3aXRjaCcsXG4gICAgICBmaWVsZDogJ21ldGhvZFN3aXRjaCcsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICd0cmFja0RlcHJlY2F0aW9uSGlzdG9yeScsXG4gICAgICBuYW1lOiAnVHJhY2sgRGVwcmVjYXRpb24gSGlzdG9yeScsXG4gICAgICBmaWVsZDogJ3RyYWNrRGVwcmVjYXRpb25IaXN0b3J5JyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3VzZUZvckVtcGxveWVlJyxcbiAgICAgIG5hbWU6ICdVc2UgRm9yIEVtcGxveWVlJyxcbiAgICAgIGZpZWxkOiAndXNlRm9yRW1wbG95ZWUnLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnBhc3N3b3JkLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgaGlkZGVuOiB0cnVlXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnZGVwcmVjYXRpb25IaXN0b3J5JyxcbiAgICAgIG5hbWU6ICdEZXByZWNhdGlvbiBIaXN0b3J5JyxcbiAgICAgIGZpZWxkOiAnZGVwcmVjYXRpb25IaXN0b3J5JyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgaGlkZGVuOiB0cnVlXG4gICAgfSk7XG5cbiAgICBkYXRhR3JpZC5jb2x1bW5zID0gY29sdW1ucztcbiAgICBjb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgZGF0YUdyaWQuY29sdW1uR3JvdXBzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgY29sc3BhbjogMyxcbiAgICAgICAgICBpZDogJ2dyb3VwMScsXG4gICAgICAgICAgbmFtZTogJ0NvbHVtbiBHcm91cCBPbmUnLFxuICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29sc3BhbjogMixcbiAgICAgICAgICBpZDogJ2dyb3VwMicsXG4gICAgICAgICAgbmFtZTogJ0NvbHVtbiBHcm91cCBUd28nLFxuICAgICAgICAgIGhlYWRlckljb246ICdlcnJvcicsXG4gICAgICAgICAgaGVhZGVySWNvblRvb2x0aXA6ICdUaGUgZ3JvdXAyIGljb24uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbHNwYW46IDIsXG4gICAgICAgICAgaWQ6ICdncm91cDMnLFxuICAgICAgICAgIG5hbWU6ICdDb2x1bW4gR3JvdXAgVGhyZWUnLFxuICAgICAgICAgIGFsaWduOiAncmlnaHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xzcGFuOiAxMSxcbiAgICAgICAgICBpZDogJ2dyb3VwNCcsXG4gICAgICAgICAgbmFtZTogJ0NvbHVtbiBHcm91cCBGb3VyJyxcbiAgICAgICAgICBhbGlnbjogJ2xlZnQnXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgICBkYXRhR3JpZC5kYXRhID0gZGF0YTtcbiAgICB9O1xuXG4gICAgc2V0RGF0YSgpO1xuICB9KCkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/columns-groups.ts\n");

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
/******/ 		__webpack_require__.h = () => ("828ed0f4f5ac55dfacca")
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
/******/ 			"ids-data-grid-columns-groups": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/columns-groups.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;