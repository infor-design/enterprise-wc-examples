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

/***/ "./src/components/ids-data-grid/demos/virtual-scroll-infinite-scroll.ts":
/*!******************************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/virtual-scroll-infinite-scroll.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/products.json */ \"./src/assets/data/products.json\");\n\n\nconst dataGrid = document.querySelector(\"#data-grid-virtual-scroll\");\nconst url = _assets_data_products_json__WEBPACK_IMPORTED_MODULE_1__;\nconst columns = [];\ncolumns.push({\n  id: \"selectionCheckbox\",\n  name: \"selection\",\n  sortable: false,\n  resizable: false,\n  formatter: dataGrid.formatters.selectionCheckbox,\n  align: \"center\"\n});\ncolumns.push({\n  id: \"rowNumber\",\n  name: \"#\",\n  formatter: dataGrid.formatters.rowNumber,\n  sortable: false,\n  readonly: true,\n  width: 66\n});\ncolumns.push({\n  id: \"id\",\n  name: \"ID\",\n  field: \"id\",\n  formatter: dataGrid.formatters.text,\n  width: 80,\n  sortable: true\n});\ncolumns.push({\n  id: \"color\",\n  name: \"Color\",\n  field: \"color\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"inStock\",\n  name: \"In Stock\",\n  field: \"inStock\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"productId\",\n  name: \"Product Id\",\n  field: \"productId\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"productName\",\n  name: \"Product Name\",\n  field: \"productName\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"unitPrice\",\n  name: \"Unit Price\",\n  field: \"unitPrice\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"units\",\n  name: \"Units\",\n  field: \"units\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ndataGrid.columns = columns;\nconst fetchData = async (startIndex = 0) => {\n  const res = await fetch(url);\n  const data = await res.json();\n  return data.splice(startIndex, 33);\n};\nconst setData = async () => {\n  dataGrid.data = await fetchData();\n};\nsetData();\ndataGrid.addEventListener(\"scrollstart\", async (e) => {\n  console.info(`Virtual Scroll reached start`, e.detail);\n});\ndataGrid.addEventListener(\"scrollend\", async (e) => {\n  console.info(`Virtual Scroll reached end`, e.detail);\n  const endIndex = e.detail?.value || 0;\n  const MAX_ROW_INDEX = 299;\n  if (endIndex < MAX_ROW_INDEX) {\n    const moreData = await fetchData(endIndex + 1);\n    dataGrid.appendData(moreData);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL3ZpcnR1YWwtc2Nyb2xsLWluZmluaXRlLXNjcm9sbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDTztBQUVrQjtBQUd6QixNQUFNLFdBQVcsU0FBUyxjQUEyQiwyQkFBMkI7QUFHaEYsTUFBTSxNQUFXLHVEQUFZO0FBQzdCLE1BQU0sVUFBK0IsQ0FBQztBQUd0QyxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsT0FBTztBQUNULENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsT0FBTztBQUNULENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUNaLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsVUFBVTtBQUNaLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsVUFBVTtBQUNaLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsVUFBVTtBQUNaLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsVUFBVTtBQUNaLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsVUFBVTtBQUNaLENBQUM7QUFDRCxRQUFRLEtBQUs7QUFBQSxFQUNYLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsRUFDL0IsVUFBVTtBQUNaLENBQUM7QUFFRCxTQUFTLFVBQVU7QUFFbkIsTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNO0FBQzFDLFFBQU0sTUFBTSxNQUFNLE1BQU0sR0FBRztBQUMzQixRQUFNLE9BQU8sTUFBTSxJQUFJLEtBQUs7QUFDNUIsU0FBTyxLQUFLLE9BQU8sWUFBWSxFQUFFO0FBQ25DO0FBRUEsTUFBTSxVQUFVLFlBQVk7QUFDMUIsV0FBUyxPQUFPLE1BQU0sVUFBVTtBQUNsQztBQUVBLFFBQVE7QUFFUixTQUFTLGlCQUFpQixlQUFlLE9BQU8sTUFBYTtBQUMzRCxVQUFRLEtBQUssZ0NBQThDLEVBQUcsTUFBTTtBQUN0RSxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsYUFBYSxPQUFPLE1BQWE7QUFDekQsVUFBUSxLQUFLLDhCQUE0QyxFQUFHLE1BQU07QUFDbEUsUUFBTSxXQUF5QixFQUFHLFFBQVEsU0FBUztBQUNuRCxRQUFNLGdCQUFnQjtBQUV0QixNQUFJLFdBQVcsZUFBZTtBQUM1QixVQUFNLFdBQVcsTUFBTSxVQUFVLFdBQVcsQ0FBQztBQUM3QyxhQUFTLFdBQVcsUUFBUTtBQUFBLEVBQzlCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWRhdGEtZ3JpZC9kZW1vcy92aXJ0dWFsLXNjcm9sbC1pbmZpbml0ZS1zY3JvbGwudHM/YzNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSBJZHNEYXRhR3JpZCBmcm9tICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCAnLi4vaWRzLWRhdGEtZ3JpZCc7XG5pbXBvcnQgdHlwZSB7IElkc0RhdGFHcmlkQ29sdW1uIH0gZnJvbSAnLi4vaWRzLWRhdGEtZ3JpZC1jb2x1bW4nO1xuaW1wb3J0IHByb2R1Y3RzSlNPTiBmcm9tICcuLi8uLi8uLi9hc3NldHMvZGF0YS9wcm9kdWN0cy5qc29uJztcblxuLy8gRXhhbXBsZSBmb3IgcG9wdWxhdGluZyB0aGUgRGF0YUdyaWRcbmNvbnN0IGRhdGFHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNEYXRhR3JpZD4oJyNkYXRhLWdyaWQtdmlydHVhbC1zY3JvbGwnKSE7XG5cbi8vIERvIGFuIGFqYXggcmVxdWVzdFxuY29uc3QgdXJsOiBhbnkgPSBwcm9kdWN0c0pTT047XG5jb25zdCBjb2x1bW5zOiBJZHNEYXRhR3JpZENvbHVtbltdID0gW107XG5cbi8vIFNldCB1cCBjb2x1bW5zXG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ3NlbGVjdGlvbkNoZWNrYm94JyxcbiAgbmFtZTogJ3NlbGVjdGlvbicsXG4gIHNvcnRhYmxlOiBmYWxzZSxcbiAgcmVzaXphYmxlOiBmYWxzZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnNlbGVjdGlvbkNoZWNrYm94LFxuICBhbGlnbjogJ2NlbnRlcidcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdyb3dOdW1iZXInLFxuICBuYW1lOiAnIycsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5yb3dOdW1iZXIsXG4gIHNvcnRhYmxlOiBmYWxzZSxcbiAgcmVhZG9ubHk6IHRydWUsXG4gIHdpZHRoOiA2NlxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ2lkJyxcbiAgbmFtZTogJ0lEJyxcbiAgZmllbGQ6ICdpZCcsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICB3aWR0aDogODAsXG4gIHNvcnRhYmxlOiB0cnVlXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnY29sb3InLFxuICBuYW1lOiAnQ29sb3InLFxuICBmaWVsZDogJ2NvbG9yJyxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gIHNvcnRhYmxlOiB0cnVlXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnaW5TdG9jaycsXG4gIG5hbWU6ICdJbiBTdG9jaycsXG4gIGZpZWxkOiAnaW5TdG9jaycsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICBzb3J0YWJsZTogdHJ1ZVxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ3Byb2R1Y3RJZCcsXG4gIG5hbWU6ICdQcm9kdWN0IElkJyxcbiAgZmllbGQ6ICdwcm9kdWN0SWQnLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgc29ydGFibGU6IHRydWVcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdwcm9kdWN0TmFtZScsXG4gIG5hbWU6ICdQcm9kdWN0IE5hbWUnLFxuICBmaWVsZDogJ3Byb2R1Y3ROYW1lJyxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gIHNvcnRhYmxlOiB0cnVlXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAndW5pdFByaWNlJyxcbiAgbmFtZTogJ1VuaXQgUHJpY2UnLFxuICBmaWVsZDogJ3VuaXRQcmljZScsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICBzb3J0YWJsZTogdHJ1ZVxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ3VuaXRzJyxcbiAgbmFtZTogJ1VuaXRzJyxcbiAgZmllbGQ6ICd1bml0cycsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICBzb3J0YWJsZTogdHJ1ZVxufSk7XG5cbmRhdGFHcmlkLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAoc3RhcnRJbmRleCA9IDApID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhLnNwbGljZShzdGFydEluZGV4LCAzMyk7XG59O1xuXG5jb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBkYXRhR3JpZC5kYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG59O1xuXG5zZXREYXRhKCk7XG5cbmRhdGFHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbHN0YXJ0JywgYXN5bmMgKGU6IEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhgVmlydHVhbCBTY3JvbGwgcmVhY2hlZCBzdGFydGAsICg8Q3VzdG9tRXZlbnQ+ZSkuZGV0YWlsKTtcbn0pO1xuXG5kYXRhR3JpZC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxlbmQnLCBhc3luYyAoZTogRXZlbnQpID0+IHtcbiAgY29uc29sZS5pbmZvKGBWaXJ0dWFsIFNjcm9sbCByZWFjaGVkIGVuZGAsICg8Q3VzdG9tRXZlbnQ+ZSkuZGV0YWlsKTtcbiAgY29uc3QgZW5kSW5kZXggPSAoPEN1c3RvbUV2ZW50PmUpLmRldGFpbD8udmFsdWUgfHwgMDtcbiAgY29uc3QgTUFYX1JPV19JTkRFWCA9IDI5OTtcblxuICBpZiAoZW5kSW5kZXggPCBNQVhfUk9XX0lOREVYKSB7XG4gICAgY29uc3QgbW9yZURhdGEgPSBhd2FpdCBmZXRjaERhdGEoZW5kSW5kZXggKyAxKTtcbiAgICBkYXRhR3JpZC5hcHBlbmREYXRhKG1vcmVEYXRhKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/virtual-scroll-infinite-scroll.ts\n");

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
/******/ 			"ids-data-grid-virtual-scroll-infinite-scroll": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/virtual-scroll-infinite-scroll.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;