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

/***/ "./src/components/ids-data-grid/demos/contextmenu-thru-data.ts":
/*!*********************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/contextmenu-thru-data.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/books.json */ \"./src/assets/data/books.json\");\n\n\nconst dataGrid = document.querySelector(\"#data-grid-contextmenu-thru-data\");\nconst container = document.querySelector(\"ids-container\");\nif (dataGrid) {\n  (async function init() {\n    await container?.setLocale(\"en-US\");\n    const url = _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__;\n    const headerMenuData = {\n      id: \"grid-header-menu\",\n      contents: [{\n        id: \"actions-group\",\n        items: [\n          {\n            id: \"actions-split\",\n            value: \"actions-split\",\n            text: \"Split\",\n            type: \"item\"\n          },\n          {\n            id: \"actions-sort\",\n            value: \"actions-sort\",\n            text: \"Sort\",\n            type: \"item\"\n          },\n          {\n            id: \"actions-hide\",\n            value: \"actions-hide\",\n            text: \"Hide\",\n            type: \"item\"\n          }\n        ]\n      }]\n    };\n    const columns = [];\n    columns.push({\n      id: \"selectionCheckbox\",\n      name: \"selection\",\n      sortable: false,\n      resizable: false,\n      formatter: dataGrid.formatters.selectionCheckbox,\n      align: \"center\"\n    });\n    columns.push({\n      id: \"rowNumber\",\n      name: \"#\",\n      formatter: dataGrid.formatters.rowNumber,\n      sortable: false,\n      readonly: true,\n      width: 65\n    });\n    columns.push({\n      id: \"description\",\n      name: \"Description\",\n      field: \"description\",\n      sortable: true,\n      width: 180,\n      editor: {\n        type: \"input\",\n        editorSettings: {\n          autoselect: true,\n          dirtyTracker: true,\n          validate: \"required\"\n        }\n      },\n      filterType: dataGrid.filters.text,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"ledger\",\n      name: \"Ledger\",\n      field: \"ledger\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"publishDate\",\n      name: \"Pub. Date\",\n      field: \"publishDate\",\n      formatter: dataGrid.formatters.date\n    });\n    columns.push({\n      id: \"publishTime\",\n      name: \"Pub. Time\",\n      field: \"publishDate\",\n      formatter: dataGrid.formatters.time\n    });\n    columns.push({\n      id: \"price\",\n      name: \"Price\",\n      field: \"price\",\n      formatter: dataGrid.formatters.decimal,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"bookCurrency\",\n      name: \"Currency\",\n      field: \"bookCurrency\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"transactionCurrency\",\n      name: \"Transaction Currency\",\n      field: \"transactionCurrency\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"integer\",\n      name: \"Price (Int)\",\n      field: \"price\",\n      formatter: dataGrid.formatters.integer,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"location\",\n      name: \"Location\",\n      field: \"location\",\n      formatter: dataGrid.formatters.hyperlink,\n      href: \"#\"\n    });\n    columns.push({\n      id: \"postHistory\",\n      name: \"Post History\",\n      field: \"postHistory\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"active\",\n      name: \"Active\",\n      field: \"active\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"convention\",\n      name: \"Convention\",\n      field: \"convention\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"methodSwitch\",\n      name: \"Method Switch\",\n      field: \"methodSwitch\",\n      formatter: dataGrid.formatters.text\n    });\n    dataGrid.columns = columns;\n    const setData = async () => {\n      const res = await fetch(url);\n      const data = await res.json();\n      const menuData = {\n        id: \"test-menu\",\n        contents: [\n          {\n            type: \"group\",\n            items: []\n          }\n        ]\n      };\n      const numberOfItems = 100;\n      const submenuOnEvery = 10;\n      const createMenuItem = (i) => {\n        const ret = {\n          id: `menu-item-${i}`,\n          text: `Menu Item ${i}`,\n          type: \"item\"\n        };\n        if (i / submenuOnEvery % 1 === 0) {\n          ret.text = `Menu Item ${i} (with Submenu)`;\n          ret.submenu = {\n            id: `test-submenu-${i}`,\n            contents: [\n              {\n                id: `test-submenu-group-${i}`,\n                type: \"group\",\n                items: [\n                  {\n                    id: `test-submenu-item-${i}-1`,\n                    type: \"item\",\n                    text: `Test Submenu Item ${i}-1`\n                  },\n                  {\n                    id: `test-submenu-item-${i}-2`,\n                    type: \"item\",\n                    text: `Test Submenu Item ${i}-2`\n                  },\n                  {\n                    id: `test-submenu-item-${i}-3`,\n                    type: \"item\",\n                    text: `Test Submenu Item ${i}-3`\n                  }\n                ]\n              }\n            ]\n          };\n        }\n        return ret;\n      };\n      for (let i = 0; i < numberOfItems; i++) {\n        menuData.contents[0].items.push(createMenuItem(i));\n      }\n      dataGrid.data = data;\n      dataGrid.menuData = menuData;\n      dataGrid.headerMenuData = headerMenuData;\n      dataGrid.addEventListener(\"beforemenushow\", (e) => {\n        console.info(\"Contextmenu Type:\", e.detail?.data?.type);\n      });\n    };\n    setData();\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL2NvbnRleHRtZW51LXRocnUtZGF0YS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBTztBQUdlO0FBR3RCLE1BQU0sV0FBZ0IsU0FBUyxjQUFjLGtDQUFrQztBQUMvRSxNQUFNLFlBQWlCLFNBQVMsY0FBYyxlQUFlO0FBRTdELElBQUksVUFBVTtBQUNaLEdBQUMsZUFBZSxPQUFPO0FBRXJCLFVBQU0sV0FBVyxVQUFVLE9BQU87QUFHbEMsVUFBTSxNQUFXLG9EQUFTO0FBRzFCLFVBQU0saUJBQW9DO0FBQUEsTUFDeEMsSUFBSTtBQUFBLE1BQ0osVUFBVSxDQUFDO0FBQUEsUUFDVCxJQUFJO0FBQUEsUUFDSixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsSUFBSTtBQUFBLFlBQ0osT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxJQUFJO0FBQUEsWUFDSixPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLElBQUk7QUFBQSxZQUNKLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFHQSxVQUFNLFVBQVUsQ0FBQztBQUNqQixZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDL0IsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVCxD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QUFFQSxZQUFRO0FBQUEsRUFDVixHQUFFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRhLWdyaWQvZGVtb3MvY29udGV4dG1lbnUtdGhydS1kYXRhLnRzP2RkNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCB0eXBlIHsgSWRzTWVudU9iamVjdERhdGEsIElkc01lbnVHcm91cERhdGEsIElkc01lbnVJdGVtRGF0YSB9IGZyb20gJy4uLy4uL2lkcy1tZW51L2lkcy1tZW51LWF0dHJpYnV0ZXMnO1xuXG5pbXBvcnQgYm9va3NKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL2Jvb2tzLmpzb24nO1xuXG4vLyBFeGFtcGxlIGZvciBwb3B1bGF0aW5nIHRoZSBEYXRhR3JpZFxuY29uc3QgZGF0YUdyaWQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRhLWdyaWQtY29udGV4dG1lbnUtdGhydS1kYXRhJyk7XG5jb25zdCBjb250YWluZXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1jb250YWluZXInKTtcblxuaWYgKGRhdGFHcmlkKSB7XG4gIChhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIFNldCBMb2NhbGUgYW5kIHdhaXQgZm9yIGl0IHRvIGxvYWRcbiAgICBhd2FpdCBjb250YWluZXI/LnNldExvY2FsZSgnZW4tVVMnKTtcblxuICAgIC8vIERvIGFuIGFqYXggcmVxdWVzdFxuICAgIGNvbnN0IHVybDogYW55ID0gYm9va3NKU09OO1xuXG4gICAgLy8gSGVhZGVyIGNvbnRleHRtZW51IGRhdGFcbiAgICBjb25zdCBoZWFkZXJNZW51RGF0YTogSWRzTWVudU9iamVjdERhdGEgPSB7XG4gICAgICBpZDogJ2dyaWQtaGVhZGVyLW1lbnUnLFxuICAgICAgY29udGVudHM6IFt7XG4gICAgICAgIGlkOiAnYWN0aW9ucy1ncm91cCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdhY3Rpb25zLXNwbGl0JyxcbiAgICAgICAgICAgIHZhbHVlOiAnYWN0aW9ucy1zcGxpdCcsXG4gICAgICAgICAgICB0ZXh0OiAnU3BsaXQnLFxuICAgICAgICAgICAgdHlwZTogJ2l0ZW0nXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2FjdGlvbnMtc29ydCcsXG4gICAgICAgICAgICB2YWx1ZTogJ2FjdGlvbnMtc29ydCcsXG4gICAgICAgICAgICB0ZXh0OiAnU29ydCcsXG4gICAgICAgICAgICB0eXBlOiAnaXRlbSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnYWN0aW9ucy1oaWRlJyxcbiAgICAgICAgICAgIHZhbHVlOiAnYWN0aW9ucy1oaWRlJyxcbiAgICAgICAgICAgIHRleHQ6ICdIaWRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdpdGVtJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfV0sXG4gICAgfTtcblxuICAgIC8vIFNldCB1cCBjb2x1bW5zXG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3NlbGVjdGlvbkNoZWNrYm94JyxcbiAgICAgIG5hbWU6ICdzZWxlY3Rpb24nLFxuICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5zZWxlY3Rpb25DaGVja2JveCxcbiAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3Jvd051bWJlcicsXG4gICAgICBuYW1lOiAnIycsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMucm93TnVtYmVyLFxuICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICB3aWR0aDogNjVcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdkZXNjcmlwdGlvbicsXG4gICAgICBuYW1lOiAnRGVzY3JpcHRpb24nLFxuICAgICAgZmllbGQ6ICdkZXNjcmlwdGlvbicsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHdpZHRoOiAxODAsXG4gICAgICBlZGl0b3I6IHtcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZWRpdG9yU2V0dGluZ3M6IHtcbiAgICAgICAgICBhdXRvc2VsZWN0OiB0cnVlLFxuICAgICAgICAgIGRpcnR5VHJhY2tlcjogdHJ1ZSxcbiAgICAgICAgICB2YWxpZGF0ZTogJ3JlcXVpcmVkJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmlsdGVyVHlwZTogZGF0YUdyaWQuZmlsdGVycy50ZXh0LFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdsZWRnZXInLFxuICAgICAgbmFtZTogJ0xlZGdlcicsXG4gICAgICBmaWVsZDogJ2xlZGdlcicsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3B1Ymxpc2hEYXRlJyxcbiAgICAgIG5hbWU6ICdQdWIuIERhdGUnLFxuICAgICAgZmllbGQ6ICdwdWJsaXNoRGF0ZScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuZGF0ZVxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3B1Ymxpc2hUaW1lJyxcbiAgICAgIG5hbWU6ICdQdWIuIFRpbWUnLFxuICAgICAgZmllbGQ6ICdwdWJsaXNoRGF0ZScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGltZVxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3ByaWNlJyxcbiAgICAgIG5hbWU6ICdQcmljZScsXG4gICAgICBmaWVsZDogJ3ByaWNlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5kZWNpbWFsLFxuICAgICAgZm9ybWF0T3B0aW9uczogeyBsb2NhbGU6ICdlbi1VUycgfSAvLyBEYXRhIFZhbHVlcyBhcmUgaW4gZW4tVVNcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdib29rQ3VycmVuY3knLFxuICAgICAgbmFtZTogJ0N1cnJlbmN5JyxcbiAgICAgIGZpZWxkOiAnYm9va0N1cnJlbmN5JyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAndHJhbnNhY3Rpb25DdXJyZW5jeScsXG4gICAgICBuYW1lOiAnVHJhbnNhY3Rpb24gQ3VycmVuY3knLFxuICAgICAgZmllbGQ6ICd0cmFuc2FjdGlvbkN1cnJlbmN5JyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2ludGVnZXInLFxuICAgICAgbmFtZTogJ1ByaWNlIChJbnQpJyxcbiAgICAgIGZpZWxkOiAncHJpY2UnLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmludGVnZXIsXG4gICAgICBmb3JtYXRPcHRpb25zOiB7IGxvY2FsZTogJ2VuLVVTJyB9IC8vIERhdGEgVmFsdWVzIGFyZSBpbiBlbi1VU1xuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2xvY2F0aW9uJyxcbiAgICAgIG5hbWU6ICdMb2NhdGlvbicsXG4gICAgICBmaWVsZDogJ2xvY2F0aW9uJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5oeXBlcmxpbmssXG4gICAgICBocmVmOiAnIydcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdwb3N0SGlzdG9yeScsXG4gICAgICBuYW1lOiAnUG9zdCBIaXN0b3J5JyxcbiAgICAgIGZpZWxkOiAncG9zdEhpc3RvcnknLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdhY3RpdmUnLFxuICAgICAgbmFtZTogJ0FjdGl2ZScsXG4gICAgICBmaWVsZDogJ2FjdGl2ZScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2NvbnZlbnRpb24nLFxuICAgICAgbmFtZTogJ0NvbnZlbnRpb24nLFxuICAgICAgZmllbGQ6ICdjb252ZW50aW9uJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnbWV0aG9kU3dpdGNoJyxcbiAgICAgIG5hbWU6ICdNZXRob2QgU3dpdGNoJyxcbiAgICAgIGZpZWxkOiAnbWV0aG9kU3dpdGNoJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG5cbiAgICBkYXRhR3JpZC5jb2x1bW5zID0gY29sdW1ucztcbiAgICBjb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICBjb25zdCBtZW51RGF0YTogSWRzTWVudU9iamVjdERhdGEgPSB7XG4gICAgICAgIGlkOiAndGVzdC1tZW51JyxcbiAgICAgICAgY29udGVudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBudW1iZXJPZkl0ZW1zID0gMTAwO1xuICAgICAgY29uc3Qgc3VibWVudU9uRXZlcnkgPSAxMDtcbiAgICAgIGNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCByZXQ6IElkc01lbnVJdGVtRGF0YSA9IHtcbiAgICAgICAgICBpZDogYG1lbnUtaXRlbS0ke2l9YCxcbiAgICAgICAgICB0ZXh0OiBgTWVudSBJdGVtICR7aX1gLFxuICAgICAgICAgIHR5cGU6ICdpdGVtJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgoaSAvIHN1Ym1lbnVPbkV2ZXJ5KSAlIDEgPT09IDApIHtcbiAgICAgICAgICByZXQudGV4dCA9IGBNZW51IEl0ZW0gJHtpfSAod2l0aCBTdWJtZW51KWA7XG4gICAgICAgICAgcmV0LnN1Ym1lbnUgPSB7XG4gICAgICAgICAgICBpZDogYHRlc3Qtc3VibWVudS0ke2l9YCxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogYHRlc3Qtc3VibWVudS1ncm91cC0ke2l9YCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBgdGVzdC1zdWJtZW51LWl0ZW0tJHtpfS0xYCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgVGVzdCBTdWJtZW51IEl0ZW0gJHtpfS0xYFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGB0ZXN0LXN1Ym1lbnUtaXRlbS0ke2l9LTJgLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBUZXN0IFN1Ym1lbnUgSXRlbSAke2l9LTJgXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogYHRlc3Qtc3VibWVudS1pdGVtLSR7aX0tM2AsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFRlc3QgU3VibWVudSBJdGVtICR7aX0tM2BcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZJdGVtczsgaSsrKSB7XG4gICAgICAgIChtZW51RGF0YS5jb250ZW50cyFbMF0gYXMgSWRzTWVudUdyb3VwRGF0YSkhLml0ZW1zLnB1c2goY3JlYXRlTWVudUl0ZW0oaSkpO1xuICAgICAgfVxuXG4gICAgICBkYXRhR3JpZC5kYXRhID0gZGF0YTtcbiAgICAgIGRhdGFHcmlkLm1lbnVEYXRhID0gbWVudURhdGE7XG4gICAgICBkYXRhR3JpZC5oZWFkZXJNZW51RGF0YSA9IGhlYWRlck1lbnVEYXRhO1xuXG4gICAgICBkYXRhR3JpZC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVtZW51c2hvdycsIChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdDb250ZXh0bWVudSBUeXBlOicsIGUuZGV0YWlsPy5kYXRhPy50eXBlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZXREYXRhKCk7XG4gIH0oKSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/contextmenu-thru-data.ts\n");

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
/******/ 		__webpack_require__.h = () => ("8f8cb4b11203c863bf42")
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
/******/ 			"ids-data-grid-contextmenu-thru-data": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/contextmenu-thru-data.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;