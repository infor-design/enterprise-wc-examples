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

/***/ "./src/components/ids-data-grid/demos/contextmenu-before-show.ts":
/*!***********************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/contextmenu-before-show.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/books.json */ \"./src/assets/data/books.json\");\n/* harmony import */ var _assets_data_menu_contents_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/menu-contents.json */ \"./src/assets/data/menu-contents.json\");\n\n\n\nconst dataGrid = document.querySelector(\"#data-grid-contextmenu-before-show\");\nconst container = document.querySelector(\"ids-container\");\nif (dataGrid) {\n  (async function init() {\n    await container?.setLocale(\"en-US\");\n    const url = _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__;\n    const menuUrl = _assets_data_menu_contents_json__WEBPACK_IMPORTED_MODULE_2__;\n    const headerMenuData = {\n      id: \"grid-header-menu\",\n      contents: [{\n        id: \"actions-group\",\n        items: [\n          { id: \"actions-split\", value: \"actions-split\", text: \"Split\" },\n          { id: \"actions-sort\", value: \"actions-sort\", text: \"Sort\" },\n          { id: \"actions-hide\", value: \"actions-hide\", text: \"Hide\" }\n        ]\n      }]\n    };\n    const newMenuData = {\n      id: \"grid-new-menu\",\n      contents: [{\n        id: \"actions-group\",\n        items: [\n          { id: \"actions-new1\", value: \"actions-new-1\", text: \"Some New menu item 1\" },\n          { id: \"actions-new2\", value: \"actions-new-2\", text: \"Some New menu item 2\" },\n          { id: \"actions-new3\", value: \"actions-new-3\", text: \"Some New menu item 3\" }\n        ]\n      }]\n    };\n    const columns = [];\n    columns.push({\n      id: \"selectionCheckbox\",\n      name: \"selection\",\n      sortable: false,\n      resizable: false,\n      formatter: dataGrid.formatters.selectionCheckbox,\n      align: \"center\"\n    });\n    columns.push({\n      id: \"rowNumber\",\n      name: \"#\",\n      formatter: dataGrid.formatters.rowNumber,\n      sortable: false,\n      readonly: true,\n      width: 65\n    });\n    columns.push({\n      id: \"description\",\n      name: \"Description\",\n      field: \"description\",\n      sortable: true,\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"ledger\",\n      name: \"Ledger\",\n      field: \"ledger\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"publishDate\",\n      name: \"Pub. Date\",\n      field: \"publishDate\",\n      formatter: dataGrid.formatters.date\n    });\n    columns.push({\n      id: \"publishTime\",\n      name: \"Pub. Time\",\n      field: \"publishDate\",\n      formatter: dataGrid.formatters.time\n    });\n    columns.push({\n      id: \"price\",\n      name: \"Price\",\n      field: \"price\",\n      formatter: dataGrid.formatters.decimal,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"bookCurrency\",\n      name: \"Currency\",\n      field: \"bookCurrency\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"transactionCurrency\",\n      name: \"Transaction Currency\",\n      field: \"transactionCurrency\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"integer\",\n      name: \"Price (Int)\",\n      field: \"price\",\n      formatter: dataGrid.formatters.integer,\n      formatOptions: { locale: \"en-US\" }\n      // Data Values are in en-US\n    });\n    columns.push({\n      id: \"location\",\n      name: \"Location\",\n      field: \"location\",\n      formatter: dataGrid.formatters.hyperlink,\n      href: \"#\"\n    });\n    columns.push({\n      id: \"postHistory\",\n      name: \"Post History\",\n      field: \"postHistory\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"active\",\n      name: \"Active\",\n      field: \"active\",\n      formatter: dataGrid.formatters.text\n    });\n    columns.push({\n      id: \"convention\",\n      name: \"Convention\",\n      field: \"convention\",\n      formatter: dataGrid.formatters.text\n    });\n    dataGrid.columns = columns;\n    const setData = async () => {\n      const res = await fetch(url);\n      const menuRes = await fetch(menuUrl);\n      const data = await res.json();\n      const menuData = await menuRes.json();\n      dataGrid.data = data;\n      dataGrid.menuData = menuData;\n      dataGrid.headerMenuData = headerMenuData;\n      dataGrid.addEventListener(\"beforemenushow\", (e) => {\n        console.info(\"Before contextmenu show\", e.detail);\n        const thisData = e.detail?.data;\n        if (thisData?.type === dataGrid.contextmenuTypes.BODY_CELL) {\n          const rowIndex = thisData.rowIndex ?? 0;\n          const newData = rowIndex % 2 === 0 ? newMenuData : menuData;\n          dataGrid.menuData = newData;\n        }\n      });\n      dataGrid.addEventListener(\"menushow\", (e) => {\n        console.info(\"After contextmenu show\", e.detail);\n      });\n      dataGrid.addEventListener(\"menuselected\", (e) => {\n        console.info(\"contextmenu item selected\", e.detail);\n        dataGrid.columns = [...columns];\n      });\n    };\n    setData();\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL2NvbnRleHRtZW51LWJlZm9yZS1zaG93LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNlO0FBQ087QUFHN0IsTUFBTSxXQUFnQixTQUFTLGNBQWMsb0NBQW9DO0FBQ2pGLE1BQU0sWUFBaUIsU0FBUyxjQUFjLGVBQWU7QUFFN0QsSUFBSSxVQUFVO0FBQ1osR0FBQyxlQUFlLE9BQU87QUFFckIsVUFBTSxXQUFXLFVBQVUsT0FBTztBQUdsQyxVQUFNLE1BQVcsb0RBQVM7QUFDMUIsVUFBTSxVQUFlLDREQUFnQjtBQUdyQyxVQUFNLGlCQUFpQjtBQUFBLE1BQ3JCLElBQUk7QUFBQSxNQUNKLFVBQVUsQ0FBQztBQUFBLFFBQ1QsSUFBSTtBQUFBLFFBQ0osT0FBTztBQUFBLFVBQ0wsRUFBRSxJQUFJLGlCQUFpQixPQUFPLGlCQUFpQixNQUFNLFFBQVE7QUFBQSxVQUM3RCxFQUFFLElBQUksZ0JBQWdCLE9BQU8sZ0JBQWdCLE1BQU0sT0FBTztBQUFBLFVBQzFELEVBQUUsSUFBSSxnQkFBZ0IsT0FBTyxnQkFBZ0IsTUFBTSxPQUFPO0FBQUEsUUFDNUQ7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBRUEsVUFBTSxjQUFjO0FBQUEsTUFDbEIsSUFBSTtBQUFBLE1BQ0osVUFBVSxDQUFDO0FBQUEsUUFDVCxJQUFJO0FBQUEsUUFDSixPQUFPO0FBQUEsVUFDTCxFQUFFLElBQUksZ0JBQWdCLE9BQU8saUJBQWlCLE1BQU0sdUJBQXVCO0FBQUEsVUFDM0UsRUFBRSxJQUFJLGdCQUFnQixPQUFPLGlCQUFpQixNQUFNLHVCQUF1QjtBQUFBLFVBQzNFLEVBQUUsSUFBSSxnQkFBZ0IsT0FBTyxpQkFBaUIsTUFBTSx1QkFBdUI7QUFBQSxRQUM3RTtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFHQSxVQUFNLFVBQWlCLENBQUM7QUFDeEIsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFN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LEVBQUUsTUFBTTtBQUNoRCxjQUFNLFdBQVcsRUFBRSxRQUFRO0FBQzNCLFlBQUksVUFBVSxTQUFTLFNBQVMsaUJBQWlCLFdBQVc7QUFDMUQsZ0JBQU0sV0FBVyxTQUFTLFlBQVk7QUFDdEMsZ0JBQU0sVUFBWSxXQUFXLE1BQU8sSUFBSyxjQUFjO0FBQ3ZELG1CQUFTLFdBQVc7QUFBQSxRQUN0QjtBQUFBLE1BQ0YsQ0FBQztBQUVELGVBQVMsaUJBQWlCLFlBQVksQ0FBQyxNQUFXO0FBQ2hELGdCQUFRLEtBQUssMEJBQTBCLEVBQUUsTUFBTTtBQUFBLE1BQ2pELENBQUM7QUFFRCxlQUFTLGlCQUFpQixnQkFBZ0IsQ0FBQyxNQUFXO0FBQ3BELGdCQUFRLEtBQUssNkJBQTZCLEVBQUUsTUFBTTtBQUdsRCxpQkFBUyxVQUFVLENBQUMsR0FBRyxPQUFPO0FBQUEsTUFDaEMsQ0FBQztBQUFBLElBQ0g7QUFFQSxZQUFRO0FBQUEsRUFDVixHQUFFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRhLWdyaWQvZGVtb3MvY29udGV4dG1lbnUtYmVmb3JlLXNob3cudHM/YzgwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0IGJvb2tzSlNPTiBmcm9tICcuLi8uLi8uLi9hc3NldHMvZGF0YS9ib29rcy5qc29uJztcbmltcG9ydCBtZW51Q29udGVudHNKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL21lbnUtY29udGVudHMuanNvbic7XG5cbi8vIEV4YW1wbGUgZm9yIHBvcHVsYXRpbmcgdGhlIERhdGFHcmlkXG5jb25zdCBkYXRhR3JpZDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGEtZ3JpZC1jb250ZXh0bWVudS1iZWZvcmUtc2hvdycpO1xuY29uc3QgY29udGFpbmVyOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZHMtY29udGFpbmVyJyk7XG5cbmlmIChkYXRhR3JpZCkge1xuICAoYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBTZXQgTG9jYWxlIGFuZCB3YWl0IGZvciBpdCB0byBsb2FkXG4gICAgYXdhaXQgY29udGFpbmVyPy5zZXRMb2NhbGUoJ2VuLVVTJyk7XG5cbiAgICAvLyBEbyBhbiBhamF4IHJlcXVlc3RcbiAgICBjb25zdCB1cmw6IGFueSA9IGJvb2tzSlNPTjtcbiAgICBjb25zdCBtZW51VXJsOiBhbnkgPSBtZW51Q29udGVudHNKU09OO1xuXG4gICAgLy8gSGVhZGVyIGNvbnRleHRtZW51IGRhdGFcbiAgICBjb25zdCBoZWFkZXJNZW51RGF0YSA9IHtcbiAgICAgIGlkOiAnZ3JpZC1oZWFkZXItbWVudScsXG4gICAgICBjb250ZW50czogW3tcbiAgICAgICAgaWQ6ICdhY3Rpb25zLWdyb3VwJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IGlkOiAnYWN0aW9ucy1zcGxpdCcsIHZhbHVlOiAnYWN0aW9ucy1zcGxpdCcsIHRleHQ6ICdTcGxpdCcgfSxcbiAgICAgICAgICB7IGlkOiAnYWN0aW9ucy1zb3J0JywgdmFsdWU6ICdhY3Rpb25zLXNvcnQnLCB0ZXh0OiAnU29ydCcgfSxcbiAgICAgICAgICB7IGlkOiAnYWN0aW9ucy1oaWRlJywgdmFsdWU6ICdhY3Rpb25zLWhpZGUnLCB0ZXh0OiAnSGlkZScgfVxuICAgICAgICBdXG4gICAgICB9XSxcbiAgICB9O1xuXG4gICAgY29uc3QgbmV3TWVudURhdGEgPSB7XG4gICAgICBpZDogJ2dyaWQtbmV3LW1lbnUnLFxuICAgICAgY29udGVudHM6IFt7XG4gICAgICAgIGlkOiAnYWN0aW9ucy1ncm91cCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyBpZDogJ2FjdGlvbnMtbmV3MScsIHZhbHVlOiAnYWN0aW9ucy1uZXctMScsIHRleHQ6ICdTb21lIE5ldyBtZW51IGl0ZW0gMScgfSxcbiAgICAgICAgICB7IGlkOiAnYWN0aW9ucy1uZXcyJywgdmFsdWU6ICdhY3Rpb25zLW5ldy0yJywgdGV4dDogJ1NvbWUgTmV3IG1lbnUgaXRlbSAyJyB9LFxuICAgICAgICAgIHsgaWQ6ICdhY3Rpb25zLW5ldzMnLCB2YWx1ZTogJ2FjdGlvbnMtbmV3LTMnLCB0ZXh0OiAnU29tZSBOZXcgbWVudSBpdGVtIDMnIH1cbiAgICAgICAgXVxuICAgICAgfV0sXG4gICAgfTtcblxuICAgIC8vIFNldCB1cCBjb2x1bW5zXG4gICAgY29uc3QgY29sdW1uczogYW55W10gPSBbXTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdzZWxlY3Rpb25DaGVja2JveCcsXG4gICAgICBuYW1lOiAnc2VsZWN0aW9uJyxcbiAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuc2VsZWN0aW9uQ2hlY2tib3gsXG4gICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdyb3dOdW1iZXInLFxuICAgICAgbmFtZTogJyMnLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnJvd051bWJlcixcbiAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgd2lkdGg6IDY1XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgbmFtZTogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgIGZpZWxkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2xlZGdlcicsXG4gICAgICBuYW1lOiAnTGVkZ2VyJyxcbiAgICAgIGZpZWxkOiAnbGVkZ2VyJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAncHVibGlzaERhdGUnLFxuICAgICAgbmFtZTogJ1B1Yi4gRGF0ZScsXG4gICAgICBmaWVsZDogJ3B1Ymxpc2hEYXRlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5kYXRlXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAncHVibGlzaFRpbWUnLFxuICAgICAgbmFtZTogJ1B1Yi4gVGltZScsXG4gICAgICBmaWVsZDogJ3B1Ymxpc2hEYXRlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50aW1lXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAncHJpY2UnLFxuICAgICAgbmFtZTogJ1ByaWNlJyxcbiAgICAgIGZpZWxkOiAncHJpY2UnLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmRlY2ltYWwsXG4gICAgICBmb3JtYXRPcHRpb25zOiB7IGxvY2FsZTogJ2VuLVVTJyB9IC8vIERhdGEgVmFsdWVzIGFyZSBpbiBlbi1VU1xuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2Jvb2tDdXJyZW5jeScsXG4gICAgICBuYW1lOiAnQ3VycmVuY3knLFxuICAgICAgZmllbGQ6ICdib29rQ3VycmVuY3knLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICd0cmFuc2FjdGlvbkN1cnJlbmN5JyxcbiAgICAgIG5hbWU6ICdUcmFuc2FjdGlvbiBDdXJyZW5jeScsXG4gICAgICBmaWVsZDogJ3RyYW5zYWN0aW9uQ3VycmVuY3knLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnaW50ZWdlcicsXG4gICAgICBuYW1lOiAnUHJpY2UgKEludCknLFxuICAgICAgZmllbGQ6ICdwcmljZScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuaW50ZWdlcixcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHsgbG9jYWxlOiAnZW4tVVMnIH0gLy8gRGF0YSBWYWx1ZXMgYXJlIGluIGVuLVVTXG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnbG9jYXRpb24nLFxuICAgICAgbmFtZTogJ0xvY2F0aW9uJyxcbiAgICAgIGZpZWxkOiAnbG9jYXRpb24nLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmh5cGVybGluayxcbiAgICAgIGhyZWY6ICcjJ1xuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3Bvc3RIaXN0b3J5JyxcbiAgICAgIG5hbWU6ICdQb3N0IEhpc3RvcnknLFxuICAgICAgZmllbGQ6ICdwb3N0SGlzdG9yeScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ2FjdGl2ZScsXG4gICAgICBuYW1lOiAnQWN0aXZlJyxcbiAgICAgIGZpZWxkOiAnYWN0aXZlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnY29udmVudGlvbicsXG4gICAgICBuYW1lOiAnQ29udmVudGlvbicsXG4gICAgICBmaWVsZDogJ2NvbnZlbnRpb24nLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcblxuICAgIGRhdGFHcmlkLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIGNvbnN0IHNldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgY29uc3QgbWVudVJlcyA9IGF3YWl0IGZldGNoKG1lbnVVcmwpO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgbWVudVJlcy5qc29uKCk7XG5cbiAgICAgIGRhdGFHcmlkLmRhdGEgPSBkYXRhO1xuICAgICAgZGF0YUdyaWQubWVudURhdGEgPSBtZW51RGF0YTtcbiAgICAgIGRhdGFHcmlkLmhlYWRlck1lbnVEYXRhID0gaGVhZGVyTWVudURhdGE7XG5cbiAgICAgIGRhdGFHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZW1lbnVzaG93JywgKGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oJ0JlZm9yZSBjb250ZXh0bWVudSBzaG93JywgZS5kZXRhaWwpO1xuICAgICAgICBjb25zdCB0aGlzRGF0YSA9IGUuZGV0YWlsPy5kYXRhO1xuICAgICAgICBpZiAodGhpc0RhdGE/LnR5cGUgPT09IGRhdGFHcmlkLmNvbnRleHRtZW51VHlwZXMuQk9EWV9DRUxMKSB7XG4gICAgICAgICAgY29uc3Qgcm93SW5kZXggPSB0aGlzRGF0YS5yb3dJbmRleCA/PyAwO1xuICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSAoKHJvd0luZGV4ICUgMikgPT09IDApID8gbmV3TWVudURhdGEgOiBtZW51RGF0YTtcbiAgICAgICAgICBkYXRhR3JpZC5tZW51RGF0YSA9IG5ld0RhdGE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBkYXRhR3JpZC5hZGRFdmVudExpc3RlbmVyKCdtZW51c2hvdycsIChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdBZnRlciBjb250ZXh0bWVudSBzaG93JywgZS5kZXRhaWwpO1xuICAgICAgfSk7XG5cbiAgICAgIGRhdGFHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21lbnVzZWxlY3RlZCcsIChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdjb250ZXh0bWVudSBpdGVtIHNlbGVjdGVkJywgZS5kZXRhaWwpO1xuXG4gICAgICAgIC8vIHNpbXVsYXRlIGEgY29sdW1uIGNoYW5nZSBhZnRlciBtZW51c2VsZWN0aW9uXG4gICAgICAgIGRhdGFHcmlkLmNvbHVtbnMgPSBbLi4uY29sdW1uc107XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2V0RGF0YSgpO1xuICB9KCkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/contextmenu-before-show.ts\n");

/***/ }),

/***/ "./src/assets/data/books.json":
/*!************************************!*\
  !*** ./src/assets/data/books.json ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/books.json";

/***/ }),

/***/ "./src/assets/data/menu-contents.json":
/*!********************************************!*\
  !*** ./src/assets/data/menu-contents.json ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/menu-contents.json";

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
/******/ 		__webpack_require__.h = () => ("8afaac54c72cc910bce7")
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
/******/ 			"ids-data-grid-contextmenu-before-show": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/contextmenu-before-show.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;