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

/***/ "./src/components/ids-data-grid/demos/columns-frozen.ts":
/*!**************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/columns-frozen.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/products.json */ \"./src/assets/data/products.json\");\n\n\nconst dataGrid = document.querySelector(\"#data-grid-frozen\");\nconst container = document.querySelector(\"ids-container\");\nif (dataGrid) {\n  (async function init() {\n    await container?.setLocale(\"en-US\");\n    const url = _assets_data_products_json__WEBPACK_IMPORTED_MODULE_1__.slice(0, 50);\n    const columns = [];\n    columns.push({\n      id: \"selectionCheckbox\",\n      name: \"selection\",\n      sortable: false,\n      resizable: false,\n      formatter: dataGrid.formatters.selectionCheckbox,\n      align: \"center\",\n      frozen: \"left\"\n    });\n    columns.push({\n      id: \"id\",\n      name: \"ID\",\n      field: \"id\",\n      formatter: dataGrid.formatters.text,\n      frozen: \"left\",\n      sortable: true,\n      resizable: true,\n      width: 90,\n      filterType: dataGrid.filters.text\n    });\n    columns.push({\n      id: \"color\",\n      name: \"Color\",\n      field: \"color\",\n      formatter: dataGrid.formatters.text,\n      sortable: true,\n      resizable: true,\n      filterType: dataGrid.filters.text\n    });\n    columns.push({\n      id: \"inStock\",\n      name: \"In Stock\",\n      field: \"inStock\",\n      formatter: dataGrid.formatters.text,\n      sortable: true,\n      resizable: true,\n      filterType: dataGrid.filters.text\n    });\n    columns.push({\n      id: \"productId\",\n      name: \"Product Id\",\n      field: \"productId\",\n      formatter: dataGrid.formatters.text,\n      sortable: true,\n      resizable: true,\n      filterType: dataGrid.filters.text\n    });\n    columns.push({\n      id: \"productName\",\n      name: \"Product Name\",\n      field: \"productName\",\n      formatter: dataGrid.formatters.text,\n      sortable: true,\n      resizable: true,\n      filterType: dataGrid.filters.text\n    });\n    columns.push({\n      id: \"unitPrice\",\n      name: \"Unit Price\",\n      field: \"unitPrice\",\n      formatter: dataGrid.formatters.text,\n      sortable: true,\n      resizable: true,\n      filterType: dataGrid.filters.text\n    });\n    columns.push({\n      id: \"units\",\n      name: \"Units\",\n      field: \"units\",\n      formatter: dataGrid.formatters.text,\n      sortable: true,\n      resizable: true,\n      filterType: dataGrid.filters.text\n    });\n    columns.push({\n      id: \"unitPrice\",\n      name: \"GB Unit Price\",\n      field: \"unitPrice\",\n      formatter: dataGrid.formatters.text,\n      sortable: true,\n      resizable: true,\n      filterType: dataGrid.filters.text\n    });\n    columns.push({\n      id: \"units\",\n      name: \"GB Units\",\n      field: \"units\",\n      align: \"center\",\n      formatter: dataGrid.formatters.text,\n      sortable: true,\n      resizable: true,\n      filterType: dataGrid.filters.text\n    });\n    columns.push({\n      id: \"more\",\n      name: \"More\",\n      sortable: false,\n      resizable: false,\n      formatter: dataGrid.formatters.button,\n      icon: \"more\",\n      type: \"icon\",\n      align: \"center\",\n      click: (info) => {\n        console.info(\"Actions clicked\", info);\n      },\n      text: \"\",\n      width: 65,\n      frozen: \"right\"\n    });\n    dataGrid.columns = columns;\n    const setData = async () => {\n      const res = await fetch(url);\n      const data = await res.json();\n      dataGrid.data = data.slice(0, 100);\n    };\n    setData();\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL2NvbHVtbnMtZnJvemVuLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNPO0FBRWtCO0FBR3pCLE1BQU0sV0FBVyxTQUFTLGNBQTJCLG1CQUFtQjtBQUN4RSxNQUFNLFlBQWlCLFNBQVMsY0FBYyxlQUFlO0FBRTdELElBQUksVUFBVTtBQUNaLEdBQUMsZUFBZSxPQUFPO0FBRXJCLFVBQU0sV0FBVyxVQUFVLE9BQU87QUFHbEMsVUFBTSxNQUFXLDZEQUFrQixDQUFDLEdBQUcsRUFBRTtBQUN6QyxVQUFNLFVBQStCLENBQUM7QUFHdEMsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNWLENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsWUFBWSxTQUFTLFFBQVE7QUFBQSxJQUMvQixDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVksU0FBUyxRQUFRO0FBQUEsSUFDL0IsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxZQUFZLFNBQVMsUUFBUTtBQUFBLElBQy9CLENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDL0IsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsWUFBWSxTQUFTLFFBQVE7QUFBQSxJQUMvQixDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVksU0FBUyxRQUFRO0FBQUEsSUFDL0IsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxZQUFZLFNBQVMsUUFBUTtBQUFBLElBQy9CLENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDL0IsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsWUFBWSxTQUFTLFFBQVE7QUFBQSxJQUMvQixDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLE1BQy9CLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVksU0FBUyxRQUFRO0FBQUEsSUFDL0IsQ0FBQztBQUNELFlBQVEsS0FBSztBQUFBLE1BQ1gsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxNQUMvQixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxZQUFZLFNBQVMsUUFBUTtBQUFBLElBQy9CLENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFdBQVcsU0FBUyxXQUFXO0FBQUEsTUFDL0IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsT0FBTyxDQUFDLFNBQWM7QUFDcEIsZ0JBQVEsS0FBSyxtQkFBbUIsSUFBSTtBQUFBLE1BQ3RDO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDVixDQUFDO0FBRUQsYUFBUyxVQUFVO0FBQ25CLFVBQU0sVUFBVSxZQUFZO0FBQzFCLFlBQU0sTUFBTSxNQUFNLE1BQU0sR0FBRztBQUMzQixZQUFNLE9BQU8sTUFBTSxJQUFJLEtBQUs7QUFDNUIsZUFBUyxPQUFPLEtBQUssTUFBTSxHQUFHLEdBQUc7QUFBQSxJQUNuQztBQUVBLFlBQVE7QUFBQSxFQUNWLEdBQUU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWRhdGEtZ3JpZC9kZW1vcy9jb2x1bW5zLWZyb3plbi50cz85YzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIElkc0RhdGFHcmlkIGZyb20gJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0ICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCB0eXBlIHsgSWRzRGF0YUdyaWRDb2x1bW4gfSBmcm9tICcuLi9pZHMtZGF0YS1ncmlkLWNvbHVtbic7XG5pbXBvcnQgcHJvZHVjdHNKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL3Byb2R1Y3RzLmpzb24nO1xuXG4vLyBFeGFtcGxlIGZvciBwb3B1bGF0aW5nIHRoZSBEYXRhR3JpZFxuY29uc3QgZGF0YUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0RhdGFHcmlkPignI2RhdGEtZ3JpZC1mcm96ZW4nKTtcbmNvbnN0IGNvbnRhaW5lcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLWNvbnRhaW5lcicpO1xuXG5pZiAoZGF0YUdyaWQpIHtcbiAgKGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gU2V0IExvY2FsZSBhbmQgd2FpdCBmb3IgaXQgdG8gbG9hZFxuICAgIGF3YWl0IGNvbnRhaW5lcj8uc2V0TG9jYWxlKCdlbi1VUycpO1xuXG4gICAgLy8gRG8gYW4gYWpheCByZXF1ZXN0XG4gICAgY29uc3QgdXJsOiBhbnkgPSBwcm9kdWN0c0pTT04uc2xpY2UoMCwgNTApO1xuICAgIGNvbnN0IGNvbHVtbnM6IElkc0RhdGFHcmlkQ29sdW1uW10gPSBbXTtcblxuICAgIC8vIFNldCB1cCBjb2x1bW5zXG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnc2VsZWN0aW9uQ2hlY2tib3gnLFxuICAgICAgbmFtZTogJ3NlbGVjdGlvbicsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnNlbGVjdGlvbkNoZWNrYm94LFxuICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgZnJvemVuOiAnbGVmdCdcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdpZCcsXG4gICAgICBuYW1lOiAnSUQnLFxuICAgICAgZmllbGQ6ICdpZCcsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgICAgIGZyb3plbjogJ2xlZnQnLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICB3aWR0aDogOTAsXG4gICAgICBmaWx0ZXJUeXBlOiBkYXRhR3JpZC5maWx0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdjb2xvcicsXG4gICAgICBuYW1lOiAnQ29sb3InLFxuICAgICAgZmllbGQ6ICdjb2xvcicsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgZmlsdGVyVHlwZTogZGF0YUdyaWQuZmlsdGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnaW5TdG9jaycsXG4gICAgICBuYW1lOiAnSW4gU3RvY2snLFxuICAgICAgZmllbGQ6ICdpblN0b2NrJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICBmaWx0ZXJUeXBlOiBkYXRhR3JpZC5maWx0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdwcm9kdWN0SWQnLFxuICAgICAgbmFtZTogJ1Byb2R1Y3QgSWQnLFxuICAgICAgZmllbGQ6ICdwcm9kdWN0SWQnLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgIGZpbHRlclR5cGU6IGRhdGFHcmlkLmZpbHRlcnMudGV4dFxuICAgIH0pO1xuICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICBpZDogJ3Byb2R1Y3ROYW1lJyxcbiAgICAgIG5hbWU6ICdQcm9kdWN0IE5hbWUnLFxuICAgICAgZmllbGQ6ICdwcm9kdWN0TmFtZScsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgZmlsdGVyVHlwZTogZGF0YUdyaWQuZmlsdGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAndW5pdFByaWNlJyxcbiAgICAgIG5hbWU6ICdVbml0IFByaWNlJyxcbiAgICAgIGZpZWxkOiAndW5pdFByaWNlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICBmaWx0ZXJUeXBlOiBkYXRhR3JpZC5maWx0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICd1bml0cycsXG4gICAgICBuYW1lOiAnVW5pdHMnLFxuICAgICAgZmllbGQ6ICd1bml0cycsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgZmlsdGVyVHlwZTogZGF0YUdyaWQuZmlsdGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAndW5pdFByaWNlJyxcbiAgICAgIG5hbWU6ICdHQiBVbml0IFByaWNlJyxcbiAgICAgIGZpZWxkOiAndW5pdFByaWNlJyxcbiAgICAgIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICBmaWx0ZXJUeXBlOiBkYXRhR3JpZC5maWx0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICd1bml0cycsXG4gICAgICBuYW1lOiAnR0IgVW5pdHMnLFxuICAgICAgZmllbGQ6ICd1bml0cycsXG4gICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgZmlsdGVyVHlwZTogZGF0YUdyaWQuZmlsdGVycy50ZXh0XG4gICAgfSk7XG4gICAgY29sdW1ucy5wdXNoKHtcbiAgICAgIGlkOiAnbW9yZScsXG4gICAgICBuYW1lOiAnTW9yZScsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmJ1dHRvbixcbiAgICAgIGljb246ICdtb3JlJyxcbiAgICAgIHR5cGU6ICdpY29uJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgIGNsaWNrOiAoaW5mbzogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnQWN0aW9ucyBjbGlja2VkJywgaW5mbyk7XG4gICAgICB9LFxuICAgICAgdGV4dDogJycsXG4gICAgICB3aWR0aDogNjUsXG4gICAgICBmcm96ZW46ICdyaWdodCdcbiAgICB9KTtcblxuICAgIGRhdGFHcmlkLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIGNvbnN0IHNldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBkYXRhR3JpZC5kYXRhID0gZGF0YS5zbGljZSgwLCAxMDApO1xuICAgIH07XG5cbiAgICBzZXREYXRhKCk7XG4gIH0oKSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/columns-frozen.ts\n");

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
/******/ 		__webpack_require__.h = () => ("c372f59fb5be38f43bb9")
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
/******/ 			"ids-data-grid-columns-frozen": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/columns-frozen.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;