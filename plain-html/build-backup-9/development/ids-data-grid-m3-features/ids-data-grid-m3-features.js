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

/***/ "./src/components/ids-data-grid/demos/m3-features.ts":
/*!***********************************************************!*\
  !*** ./src/components/ids-data-grid/demos/m3-features.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_product_info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/product-info.json */ \"./src/assets/data/product-info.json\");\n/* harmony import */ var _assets_css_ids_data_grid_custom_css_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/css/ids-data-grid/custom-css.css */ \"./src/assets/css/ids-data-grid/custom-css.css\");\n\n\n\nconst cssLink = `<link href=\"${_assets_css_ids_data_grid_custom_css_css__WEBPACK_IMPORTED_MODULE_2__}\" rel=\"stylesheet\">`;\ndocument.querySelector(\"head\")?.insertAdjacentHTML(\"afterbegin\", cssLink);\nconst dataGrid = document.querySelector(\"#m3-virtual-scroll\");\nconst url = _assets_data_product_info_json__WEBPACK_IMPORTED_MODULE_1__;\nconst columns = [];\ncolumns.push({\n  id: \"selectionCheckbox\",\n  name: \"selection\",\n  sortable: false,\n  resizable: false,\n  formatter: dataGrid.formatters.selectionCheckbox,\n  align: \"center\"\n});\ncolumns.push({\n  id: \"id\",\n  name: \"Id\",\n  field: \"id\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"itemNumber\",\n  name: \"Item Number\",\n  field: \"itemNumber\",\n  sortable: true,\n  resizable: true,\n  // formatter: dataGrid.formatters.hyperlink,\n  formatter: dataGrid.formatters.text,\n  filterType: dataGrid.filters.text,\n  filterConditions: []\n});\ncolumns.push({\n  id: \"testingProcedure\",\n  name: \"Testing Procedure\",\n  field: \"testingProcedure\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"eco\",\n  name: \"Eco\",\n  field: \"eco\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.checkbox\n});\ncolumns.push({\n  id: \"check\",\n  name: \"Check\",\n  field: \"check\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.date\n});\ncolumns.push({\n  id: \"release\",\n  name: \"Release\",\n  field: \"release\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"itemMgr\",\n  name: \"Item Mgr\",\n  field: \"itemMgr\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"allocation\",\n  name: \"Allocation\",\n  field: \"allocation\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"unitOfMeasure\",\n  name: \"Unit Of Measure\",\n  field: \"unitOfMeasure\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"businessArea\",\n  name: \"Business Area\",\n  field: \"businessArea\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"price\",\n  name: \"Price\",\n  field: \"price\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.decimal\n});\ncolumns.push({\n  id: \"color\",\n  name: \"Color\",\n  field: \"color\",\n  align: \"center\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.color\n});\ncolumns.push({\n  id: \"icon\",\n  name: \"Icon\",\n  field: \"icon\",\n  align: \"center\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.icon,\n  color: \"success\"\n});\ncolumns.push({\n  id: \"icon-text\",\n  name: \"Icon + Text\",\n  field: \"icon\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.icon,\n  icon: \"user-profile\"\n});\ncolumns.push({\n  id: \"qtyOnHand\",\n  name: \"Qty On Hand\",\n  field: \"qtyOnHand\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"refProductId\",\n  name: \"Ref Product Id\",\n  field: \"refProductId\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"sku\",\n  name: \"SKU\",\n  field: \"sku\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"upc\",\n  name: \"UPC\",\n  field: \"upc\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"category\",\n  name: \"Tag\",\n  field: \"category\",\n  align: \"center\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.tag,\n  color: \"info\",\n  cssPart: (row) => row % 2 === 0 ? \"custom-cell\" : \"\"\n});\ncolumns.push({\n  id: \"category-alert\",\n  name: \"Alert\",\n  field: \"category\",\n  align: \"center\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.alert,\n  color: \"info\",\n  cssPart: (row) => row % 2 === 0 ? \"custom-cell\" : \"\"\n});\ncolumns.push({\n  id: \"weight\",\n  name: \"Weight\",\n  field: \"weight\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text,\n  cssPart: \"custom-cell\"\n});\ncolumns.push({\n  id: \"shipWeight\",\n  name: \"Ship Weight\",\n  field: \"shipWeight\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text,\n  cssPart: \"custom-cell\"\n});\ncolumns.push({\n  id: \"manufacturer\",\n  name: \"Manufacturer\",\n  field: \"manufacturer\",\n  sortable: true,\n  resizable: true,\n  width: 185,\n  formatter: (rowData, columnData) => {\n    const value = `${rowData[columnData.field] || \"\"}`;\n    return !value ? \"\" : `<span class=\"text-ellipsis\">${value}&nbsp;<ids-icon part=\"custom-cell-icon\" icon=\"edit\"></ids-icon></span>`;\n  },\n  cssPart: \"custom-cell\"\n});\ncolumns.push({\n  id: \"qtyOnOrder\",\n  name: \"Qty On Order\",\n  field: \"qtyOnOrder\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.integer\n});\ncolumns.push({\n  id: \"enable\",\n  name: \"Enable\",\n  field: \"enable\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.checkbox\n});\ncolumns.push({\n  id: \"taxable\",\n  name: \"Taxable\",\n  field: \"taxable\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.checkbox\n});\ncolumns.push({\n  id: \"lowStockAlert\",\n  name: \"Low Stock Alert\",\n  field: \"lowStockAlert\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.checkbox\n});\ncolumns.push({\n  id: \"createdData\",\n  name: \"Created Data\",\n  field: \"createdData\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.date\n});\ncolumns.push({\n  id: \"modifiedData\",\n  name: \"Modified Data\",\n  field: \"modifiedData\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.date\n});\ndataGrid.columns = columns;\nconst setData = async () => {\n  const res = await fetch(url);\n  const data = await res.json();\n  dataGrid.data = data;\n};\nsetData();\ndataGrid.addEventListener(\"selectionchanged\", (e) => {\n  console.info(`Selection Changed`, e.detail);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL20zLWZlYXR1cmVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDTztBQUVpQjtBQUdSO0FBRWhCLE1BQU0sVUFBVSxlQUFlLHFFQUFHO0FBQ2xDLFNBQVMsY0FBYyxNQUFNLEdBQUcsbUJBQW1CLGNBQWMsT0FBTztBQUd4RSxNQUFNLFdBQVcsU0FBUyxjQUEyQixvQkFBb0I7QUFHekUsTUFBTSxNQUFXLDJEQUFXO0FBQzVCLE1BQU0sVUFBK0IsQ0FBQztBQUd0QyxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsT0FBTztBQUNULENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQTtBQUFBLEVBRVgsV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixZQUFZLFNBQVMsUUFBUTtBQUFBLEVBQzdCLGtCQUFrQixDQUFDO0FBQ3JCLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsT0FBTztBQUNULENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsTUFBTTtBQUNSLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQ2pDLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87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MUIsUUFBTSxNQUFNLE1BQU0sTUFBTSxHQUFHO0FBQzNCLFFBQU0sT0FBTyxNQUFNLElBQUksS0FBSztBQUM1QixXQUFTLE9BQU87QUFDbEI7QUFFQSxRQUFRO0FBRVIsU0FBUyxpQkFBaUIsb0JBQW9CLENBQUMsTUFBYTtBQUMxRCxVQUFRLEtBQUsscUJBQW1DLEVBQUcsTUFBTTtBQUMzRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL20zLWZlYXR1cmVzLnRzPzNhNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgSWRzRGF0YUdyaWQgZnJvbSAnLi4vaWRzLWRhdGEtZ3JpZCc7XG5pbXBvcnQgJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0IHR5cGUgeyBJZHNEYXRhR3JpZENvbHVtbiB9IGZyb20gJy4uL2lkcy1kYXRhLWdyaWQtY29sdW1uJztcbmltcG9ydCBwcm9kdWN0SW5mbyBmcm9tICcuLi8uLi8uLi9hc3NldHMvZGF0YS9wcm9kdWN0LWluZm8uanNvbic7XG5cbi8vIEN1c3RvbSBEYXRhZ3JpZCBDZWxsIENvbG9ycyBhcmUgZGVmaW5lZCBpbiB0aGlzIGZpbGU6XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9jc3MvaWRzLWRhdGEtZ3JpZC9jdXN0b20tY3NzLmNzcyc7XG5cbmNvbnN0IGNzc0xpbmsgPSBgPGxpbmsgaHJlZj1cIiR7Y3NzfVwiIHJlbD1cInN0eWxlc2hlZXRcIj5gO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpPy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBjc3NMaW5rKTtcblxuLy8gRXhhbXBsZSBmb3IgcG9wdWxhdGluZyB0aGUgRGF0YUdyaWRcbmNvbnN0IGRhdGFHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNEYXRhR3JpZD4oJyNtMy12aXJ0dWFsLXNjcm9sbCcpITtcblxuLy8gRG8gYW4gYWpheCByZXF1ZXN0XG5jb25zdCB1cmw6IGFueSA9IHByb2R1Y3RJbmZvO1xuY29uc3QgY29sdW1uczogSWRzRGF0YUdyaWRDb2x1bW5bXSA9IFtdO1xuXG4vLyBTZXQgdXAgY29sdW1uc1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdzZWxlY3Rpb25DaGVja2JveCcsXG4gIG5hbWU6ICdzZWxlY3Rpb24nLFxuICBzb3J0YWJsZTogZmFsc2UsXG4gIHJlc2l6YWJsZTogZmFsc2UsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5zZWxlY3Rpb25DaGVja2JveCxcbiAgYWxpZ246ICdjZW50ZXInXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnaWQnLFxuICBuYW1lOiAnSWQnLFxuICBmaWVsZDogJ2lkJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdpdGVtTnVtYmVyJyxcbiAgbmFtZTogJ0l0ZW0gTnVtYmVyJyxcbiAgZmllbGQ6ICdpdGVtTnVtYmVyJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgLy8gZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmh5cGVybGluayxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gIGZpbHRlclR5cGU6IGRhdGFHcmlkLmZpbHRlcnMudGV4dCxcbiAgZmlsdGVyQ29uZGl0aW9uczogW11cbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICd0ZXN0aW5nUHJvY2VkdXJlJyxcbiAgbmFtZTogJ1Rlc3RpbmcgUHJvY2VkdXJlJyxcbiAgZmllbGQ6ICd0ZXN0aW5nUHJvY2VkdXJlJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdlY28nLFxuICBuYW1lOiAnRWNvJyxcbiAgZmllbGQ6ICdlY28nLFxuICBzb3J0YWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuY2hlY2tib3hcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdjaGVjaycsXG4gIG5hbWU6ICdDaGVjaycsXG4gIGZpZWxkOiAnY2hlY2snLFxuICBzb3J0YWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuZGF0ZVxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ3JlbGVhc2UnLFxuICBuYW1lOiAnUmVsZWFzZScsXG4gIGZpZWxkOiAncmVsZWFzZScsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnaXRlbU1ncicsXG4gIG5hbWU6ICdJdGVtIE1ncicsXG4gIGZpZWxkOiAnaXRlbU1ncicsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnYWxsb2NhdGlvbicsXG4gIG5hbWU6ICdBbGxvY2F0aW9uJyxcbiAgZmllbGQ6ICdhbGxvY2F0aW9uJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICd1bml0T2ZNZWFzdXJlJyxcbiAgbmFtZTogJ1VuaXQgT2YgTWVhc3VyZScsXG4gIGZpZWxkOiAndW5pdE9mTWVhc3VyZScsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnYnVzaW5lc3NBcmVhJyxcbiAgbmFtZTogJ0J1c2luZXNzIEFyZWEnLFxuICBmaWVsZDogJ2J1c2luZXNzQXJlYScsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAncHJpY2UnLFxuICBuYW1lOiAnUHJpY2UnLFxuICBmaWVsZDogJ3ByaWNlJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmRlY2ltYWxcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdjb2xvcicsXG4gIG5hbWU6ICdDb2xvcicsXG4gIGZpZWxkOiAnY29sb3InLFxuICBhbGlnbjogJ2NlbnRlcicsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5jb2xvcixcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdpY29uJyxcbiAgbmFtZTogJ0ljb24nLFxuICBmaWVsZDogJ2ljb24nLFxuICBhbGlnbjogJ2NlbnRlcicsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5pY29uLFxuICBjb2xvcjogJ3N1Y2Nlc3MnLFxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ2ljb24tdGV4dCcsXG4gIG5hbWU6ICdJY29uICsgVGV4dCcsXG4gIGZpZWxkOiAnaWNvbicsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5pY29uLFxuICBpY29uOiAndXNlci1wcm9maWxlJyxcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdxdHlPbkhhbmQnLFxuICBuYW1lOiAnUXR5IE9uIEhhbmQnLFxuICBmaWVsZDogJ3F0eU9uSGFuZCcsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAncmVmUHJvZHVjdElkJyxcbiAgbmFtZTogJ1JlZiBQcm9kdWN0IElkJyxcbiAgZmllbGQ6ICdyZWZQcm9kdWN0SWQnLFxuICBzb3J0YWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dFxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ3NrdScsXG4gIG5hbWU6ICdTS1UnLFxuICBmaWVsZDogJ3NrdScsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAndXBjJyxcbiAgbmFtZTogJ1VQQycsXG4gIGZpZWxkOiAndXBjJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdjYXRlZ29yeScsXG4gIG5hbWU6ICdUYWcnLFxuICBmaWVsZDogJ2NhdGVnb3J5JyxcbiAgYWxpZ246ICdjZW50ZXInLFxuICBzb3J0YWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGFnLFxuICBjb2xvcjogJ2luZm8nLFxuICBjc3NQYXJ0OiAocm93OiBudW1iZXIpID0+ICgocm93ICUgMiA9PT0gMCkgPyAnY3VzdG9tLWNlbGwnIDogJycpLFxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ2NhdGVnb3J5LWFsZXJ0JyxcbiAgbmFtZTogJ0FsZXJ0JyxcbiAgZmllbGQ6ICdjYXRlZ29yeScsXG4gIGFsaWduOiAnY2VudGVyJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmFsZXJ0LFxuICBjb2xvcjogJ2luZm8nLFxuICBjc3NQYXJ0OiAocm93OiBudW1iZXIpID0+ICgocm93ICUgMiA9PT0gMCkgPyAnY3VzdG9tLWNlbGwnIDogJycpLFxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ3dlaWdodCcsXG4gIG5hbWU6ICdXZWlnaHQnLFxuICBmaWVsZDogJ3dlaWdodCcsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICBjc3NQYXJ0OiAnY3VzdG9tLWNlbGwnXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnc2hpcFdlaWdodCcsXG4gIG5hbWU6ICdTaGlwIFdlaWdodCcsXG4gIGZpZWxkOiAnc2hpcFdlaWdodCcsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICBjc3NQYXJ0OiAnY3VzdG9tLWNlbGwnXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnbWFudWZhY3R1cmVyJyxcbiAgbmFtZTogJ01hbnVmYWN0dXJlcicsXG4gIGZpZWxkOiAnbWFudWZhY3R1cmVyJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgd2lkdGg6IDE4NSxcbiAgZm9ybWF0dGVyOiAocm93RGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIGNvbHVtbkRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGAke3Jvd0RhdGFbY29sdW1uRGF0YS5maWVsZF0gfHwgJyd9YDtcbiAgICByZXR1cm4gIXZhbHVlID8gJycgOiBgPHNwYW4gY2xhc3M9XCJ0ZXh0LWVsbGlwc2lzXCI+JHt2YWx1ZX0mbmJzcDs8aWRzLWljb24gcGFydD1cImN1c3RvbS1jZWxsLWljb25cIiBpY29uPVwiZWRpdFwiPjwvaWRzLWljb24+PC9zcGFuPmA7XG4gIH0sXG4gIGNzc1BhcnQ6ICdjdXN0b20tY2VsbCdcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdxdHlPbk9yZGVyJyxcbiAgbmFtZTogJ1F0eSBPbiBPcmRlcicsXG4gIGZpZWxkOiAncXR5T25PcmRlcicsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5pbnRlZ2VyXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnZW5hYmxlJyxcbiAgbmFtZTogJ0VuYWJsZScsXG4gIGZpZWxkOiAnZW5hYmxlJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmNoZWNrYm94XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAndGF4YWJsZScsXG4gIG5hbWU6ICdUYXhhYmxlJyxcbiAgZmllbGQ6ICd0YXhhYmxlJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmNoZWNrYm94XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnbG93U3RvY2tBbGVydCcsXG4gIG5hbWU6ICdMb3cgU3RvY2sgQWxlcnQnLFxuICBmaWVsZDogJ2xvd1N0b2NrQWxlcnQnLFxuICBzb3J0YWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuY2hlY2tib3hcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdjcmVhdGVkRGF0YScsXG4gIG5hbWU6ICdDcmVhdGVkIERhdGEnLFxuICBmaWVsZDogJ2NyZWF0ZWREYXRhJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmRhdGVcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdtb2RpZmllZERhdGEnLFxuICBuYW1lOiAnTW9kaWZpZWQgRGF0YScsXG4gIGZpZWxkOiAnbW9kaWZpZWREYXRhJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmRhdGVcbn0pO1xuXG5kYXRhR3JpZC5jb2x1bW5zID0gY29sdW1ucztcblxuY29uc3Qgc2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGRhdGFHcmlkLmRhdGEgPSBkYXRhO1xufTtcblxuc2V0RGF0YSgpO1xuXG5kYXRhR3JpZC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2VkJywgKGU6IEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhgU2VsZWN0aW9uIENoYW5nZWRgLCAoPEN1c3RvbUV2ZW50PmUpLmRldGFpbCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/m3-features.ts\n");

/***/ }),

/***/ "./src/assets/css/ids-data-grid/custom-css.css":
/*!*****************************************************!*\
  !*** ./src/assets/css/ids-data-grid/custom-css.css ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/css/ids-data-grid/custom-css.css";

/***/ }),

/***/ "./src/assets/data/product-info.json":
/*!*******************************************!*\
  !*** ./src/assets/data/product-info.json ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/product-info.json";

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
/******/ 			"ids-data-grid-m3-features": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/m3-features.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;