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

/***/ "./src/components/ids-data-grid/demos/contextmenu-overflow.ts":
/*!********************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/contextmenu-overflow.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/books.json */ \"./src/assets/data/books.json\");\n\n\nconst dataGrid = document.querySelector(\"#data-grid-contextmenu-overflow\");\nconst container = document.querySelector(\"ids-container\");\nif (dataGrid) {\n  (async function init() {\n    await container?.setLocale(\"en-US\");\n    const url = _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__;\n    const genrateItems = (max = 1) => [...new Array(Math.abs(max))].map((v, i) => ({ id: `a-${i}`, value: `actions-${i}`, text: `Actions - ${i}` }));\n    const menuData = {\n      id: \"grid-menu\",\n      contents: [{\n        id: \"actions-group\",\n        items: genrateItems(25)\n      }]\n    };\n    const columns = [];\n    columns.push({\n      id: \"selectionCheckbox\",\n      name: \"selection\",\n      sortable: false,\n      resizable: false,\n      formatter: dataGrid.formatters.selectionCheckbox,\n      align: \"center\"\n    });\n    columns.push({\n      id: \"rowNumber\",\n      name: \"#\",\n      formatter: dataGrid.formatters.rowNumber,\n      sortable: false,\n      readonly: true,\n      width: 65\n    });\n    columns.push({\n      id: \"description\",\n      name: \"Description\",\n      field: \"description\",\n      sortable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"ledger\",\n      name: \"Ledger\",\n      field: \"ledger\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"publishDate\",\n      name: \"Pub. Date\",\n      field: \"publishDate\",\n      formatter: dataGrid.formatters.date\n    });\n    columns.push({\n      id: \"publishTime\",\n      name: \"Pub. Time\",\n      field: \"publishDate\",\n      formatter: dataGrid.formatters.time\n    });\n    columns.push({\n      id: \"price\",\n      name: \"Price\",\n      field: \"price\",\n      formatter: dataGrid.formatters.decimal,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"bookCurrency\",\n      name: \"Currency\",\n      field: \"bookCurrency\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"transactionCurrency\",\n      name: \"Transaction Currency\",\n      field: \"transactionCurrency\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"integer\",\n      name: \"Price (Int)\",\n      field: \"price\",\n      formatter: dataGrid.formatters.integer,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"location\",\n      name: \"Location\",\n      field: \"location\",\n      formatter: dataGrid.formatters.hyperlink,\n      href: \"#\"\n    });\n    columns.push({\n      id: \"postHistory\",\n      name: \"Post History\",\n      field: \"postHistory\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"active\",\n      name: \"Active\",\n      field: \"active\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"convention\",\n      name: \"Convention\",\n      field: \"convention\",\n      formatter: dataGrid.formatters.text\n    });\n    dataGrid.columns = columns;\n    const setData = async () => {\n      const res = await fetch(url);\n      const data = await res.json();\n      dataGrid.data = data;\n      dataGrid.menuData = menuData;\n      dataGrid.headerMenuData = menuData;\n    };\n    setData();\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL2NvbnRleHRtZW51LW92ZXJmbG93LnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFPO0FBQ2U7QUFHdEIsTUFBTSxXQUFnQixTQUFTLGNBQWMsaUNBQWlDO0FBQzlFLE1BQU0sWUFBaUIsU0FBUyxjQUFjLGVBQWU7QUFFN0QsSUFBSSxVQUFVO0FBQ1osR0FBQyxlQUFlLE9BQU87QUFFckIsVUFBTSxXQUFXLFVBQVUsT0FBTztBQUdsQyxVQUFNLE1BQVcsb0RBQVM7QUFHMUIsVUFBTSxlQUFlLENBQUMsTUFBTSxNQUMxQixDQUFDLEdBQUcsSUFBSSxNQUFNLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLE9BQ3BDLEVBQUUsSUFBSSxLQUFLLEtBQUssT0FBTyxXQUFXLEtBQUssTUFBTSxhQUFhLElBQUksRUFDL0Q7QUFJSCxVQUFNLFdBQVc7QUFBQSxNQUNmLElBQUk7QUFBQSxNQUNKLFVBQVUsQ0FBQztBQUFBLFFBQ1QsSUFBSTtBQUFBLFFBQ0osT0FBTyxhQUFhLEVBQUU7QUFBQSxNQUN4QixDQUFDO0FBQUEsSUFDSDtBQUdBLFVBQU0sVUFBVSxDQUFDO0FBQ2pCLFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVcsU0FBUyxXQUFXO0FBQUEsSUFDakMsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxJQUNqQyxDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLElBQ2pDLENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsSUFDakMsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixlQUFlLEVBQUUsUUFBUSxRQUFRO0FBQUE7QUFBQSxJQUNuQyxDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLElBQ2pDLENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsSUFDakMsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixlQUFlLEVBQUUsUUFBUSxRQUFRO0FBQUE7QUFBQSxJQUNuQyxDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLE1BQU07QUFBQSxJQUNSLENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsSUFDakMsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxJQUNqQyxDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLElBQ2pDLENBQUM7QUFFRCxhQUFTLFVBQVU7QUFDbkIsVUFBTSxVQUFVLFlBQVk7QUFDMUIsWUFBTSxNQUFNLE1BQU0sTUFBTSxHQUFHO0FBQzNCLFlBQU0sT0FBTyxNQUFNLElBQUksS0FBSztBQUU1QixlQUFTLE9BQU87QUFDaEIsZUFBUyxXQUFXO0FBQ3BCLGVBQVMsaUJBQWlCO0FBQUEsSUFDNUI7QUFFQSxZQUFRO0FBQUEsRUFDVixHQUFFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRhLWdyaWQvZGVtb3MvY29udGV4dG1lbnUtb3ZlcmZsb3cudHM/MDFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0IGJvb2tzSlNPTiBmcm9tICcuLi8uLi8uLi9hc3NldHMvZGF0YS9ib29rcy5qc29uJztcblxuLy8gRXhhbXBsZSBmb3IgcG9wdWxhdGluZyB0aGUgRGF0YUdyaWRcbmNvbnN0IGRhdGFHcmlkOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0YS1ncmlkLWNvbnRleHRtZW51LW92ZXJmbG93Jyk7XG5jb25zdCBjb250YWluZXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1jb250YWluZXInKTtcblxuaWYgKGRhdGFHcmlkKSB7XG4gIChhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIFNldCBMb2NhbGUgYW5kIHdhaXQgZm9yIGl0IHRvIGxvYWRcbiAgICBhd2FpdCBjb250YWluZXI/LnNldExvY2FsZSgnZW4tVVMnKTtcblxuICAgIC8vIERvIGFuIGFqYXggcmVxdWVzdFxuICAgIGNvbnN0IHVybDogYW55ID0gYm9va3NKU09OO1xuXG4gICAgLy8gR2VucmF0ZSBpdGVtcyBmb3IgY29udGV4dG1lbnVcbiAgICBjb25zdCBnZW5yYXRlSXRlbXMgPSAobWF4ID0gMSkgPT4gKFxuICAgICAgWy4uLm5ldyBBcnJheShNYXRoLmFicyhtYXgpKV0ubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgIHsgaWQ6IGBhLSR7aX1gLCB2YWx1ZTogYGFjdGlvbnMtJHtpfWAsIHRleHQ6IGBBY3Rpb25zIC0gJHtpfWAgfVxuICAgICAgKSlcbiAgICApO1xuXG4gICAgLy8gQ29udGV4dG1lbnUgZGF0YVxuICAgIGNvbnN0IG1lbnVEYXRhID0ge1xuICAgICAgaWQ6ICdncmlkLW1lbnUnLFxuICAgICAgY29udGVudHM6IFt7XG4gICAgICAgIGlkOiAnYWN0aW9ucy1ncm91cCcsXG4gICAgICAgIGl0ZW1zOiBnZW5yYXRlSXRlbXMoMjUpXG4gICAgICB9XSxcbiAgICB9O1xuXG4gICAgLy8gU2V0IHVwIGNvbHVtbnNcbiAgICBjb25zdCBjb2x1bW5zID0gW107XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnc2VsZWN0aW9uQ2hlY2tib3gnLFxuICAgICAgbmFtZTogJ3NlbGVjdGlvbicsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnNlbGVjdGlvbkNoZWNrYm94LFxuICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAncm93TnVtYmVyJyxcbiAgICAgIG5hbWU6ICcjJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5yb3dOdW1iZXIsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICByZWFkb25seTogdHJ1ZSxcbiAgICAgIHdpZHRoOiA2NVxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgIG5hbWU6ICdEZXNjcmlwdGlvbicsXG4gICAgICBmaWVsZDogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdsZWRnZXInLFxuICAgICAgbmFtZTogJ0xlZGdlcicsXG4gICAgICBmaWVsZDogJ2xlZGdlcicsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3B1Ymxpc2hEYXRlJyxcbiAgICAgIG5hbWU6ICdQdWIuIERhdGUnLFxuICAgICAgZmllbGQ6ICdwdWJsaXNoRGF0ZScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuZGF0ZVxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3B1Ymxpc2hUaW1lJyxcbiAgICAgIG5hbWU6ICdQdWIuIFRpbWUnLFxuICAgICAgZmllbGQ6ICdwdWJsaXNoRGF0ZScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGltZVxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3ByaWNlJyxcbiAgICAgIG5hbWU6ICdQcmljZScsXG4gICAgICBmaWVsZDogJ3ByaWNlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5kZWNpbWFsLFxuICAgICAgZm9ybWF0T3B0aW9uczogeyBsb2NhbGU6ICdlbi1VUycgfSAvLyBEYXRhIFZhbHVlcyBhcmUgaW4gZW4tVVNcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdib29rQ3VycmVuY3knLFxuICAgICAgbmFtZTogJ0N1cnJlbmN5JyxcbiAgICAgIGZpZWxkOiAnYm9va0N1cnJlbmN5JyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAndHJhbnNhY3Rpb25DdXJyZW5jeScsXG4gICAgICBuYW1lOiAnVHJhbnNhY3Rpb24gQ3VycmVuY3knLFxuICAgICAgZmllbGQ6ICd0cmFuc2FjdGlvbkN1cnJlbmN5JyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2ludGVnZXInLFxuICAgICAgbmFtZTogJ1ByaWNlIChJbnQpJyxcbiAgICAgIGZpZWxkOiAncHJpY2UnLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmludGVnZXIsXG4gICAgICBmb3JtYXRPcHRpb25zOiB7IGxvY2FsZTogJ2VuLVVTJyB9IC8vIERhdGEgVmFsdWVzIGFyZSBpbiBlbi1VU1xuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2xvY2F0aW9uJyxcbiAgICAgIG5hbWU6ICdMb2NhdGlvbicsXG4gICAgICBmaWVsZDogJ2xvY2F0aW9uJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5oeXBlcmxpbmssXG4gICAgICBocmVmOiAnIydcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdwb3N0SGlzdG9yeScsXG4gICAgICBuYW1lOiAnUG9zdCBIaXN0b3J5JyxcbiAgICAgIGZpZWxkOiAncG9zdEhpc3RvcnknLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdhY3RpdmUnLFxuICAgICAgbmFtZTogJ0FjdGl2ZScsXG4gICAgICBmaWVsZDogJ2FjdGl2ZScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2NvbnZlbnRpb24nLFxuICAgICAgbmFtZTogJ0NvbnZlbnRpb24nLFxuICAgICAgZmllbGQ6ICdjb252ZW50aW9uJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG5cbiAgICBkYXRhR3JpZC5jb2x1bW5zID0gY29sdW1ucztcbiAgICBjb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICBkYXRhR3JpZC5kYXRhID0gZGF0YTtcbiAgICAgIGRhdGFHcmlkLm1lbnVEYXRhID0gbWVudURhdGE7XG4gICAgICBkYXRhR3JpZC5oZWFkZXJNZW51RGF0YSA9IG1lbnVEYXRhO1xuICAgIH07XG5cbiAgICBzZXREYXRhKCk7XG4gIH0oKSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/contextmenu-overflow.ts\n");

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
/******/ 		__webpack_require__.h = () => ("5f77bc3ebf205637b850")
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
/******/ 			"ids-data-grid-contextmenu-overflow": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/contextmenu-overflow.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;