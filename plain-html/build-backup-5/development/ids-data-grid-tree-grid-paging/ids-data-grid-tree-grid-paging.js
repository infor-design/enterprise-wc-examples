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

/***/ "./src/components/ids-data-grid/demos/tree-grid-paging.ts":
/*!****************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/tree-grid-paging.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_data_tree_large_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/tree-large.json */ \"./src/assets/data/tree-large.json\");\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n\n\nconst dataGrid = document.querySelector(\"#tree-grid-paging\");\nconst url = _assets_data_tree_large_json__WEBPACK_IMPORTED_MODULE_0__;\nconst columns = [];\ncolumns.push({\n  id: \"selectionCheckbox\",\n  name: \"selection\",\n  sortable: false,\n  resizable: false,\n  formatter: dataGrid.formatters.selectionCheckbox,\n  align: \"center\",\n  frozen: \"left\"\n});\ncolumns.push({\n  id: \"name\",\n  name: \"Name\",\n  field: \"name\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.tree,\n  click: (info) => {\n    console.info(\"Tree Expander Clicked\", info);\n  },\n  width: 220,\n  frozen: \"left\"\n});\ncolumns.push({\n  id: \"rowNumber\",\n  name: \"#\",\n  formatter: dataGrid.formatters.rowNumber,\n  sortable: false,\n  readonly: true,\n  width: 66\n});\ncolumns.push({\n  id: \"id\",\n  name: \"Id\",\n  field: \"id\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"location\",\n  name: \"Location\",\n  field: \"location\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ncolumns.push({\n  id: \"capacity\",\n  name: \"Capacity\",\n  field: \"capacity\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.integer\n});\ncolumns.push({\n  id: \"available\",\n  name: \"Available\",\n  field: \"available\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.date\n});\ncolumns.push({\n  id: \"comments\",\n  name: \"Comments\",\n  field: \"comments\",\n  sortable: true,\n  resizable: true,\n  formatter: dataGrid.formatters.text\n});\ndataGrid.columns = columns;\nconst setData = async () => {\n  const res = await fetch(url);\n  const data = await res.json();\n  dataGrid.pagination = \"client-side\";\n  dataGrid.data = data;\n  dataGrid.pageTotal = data.length;\n};\nsetData();\ndataGrid.addEventListener(\"selectionchanged\", (e) => {\n  console.info(`Selection Changed`, e.detail);\n});\ndataGrid.pager.addEventListener(\"pagenumberchange\", (e) => {\n  console.info(`client-side page-number # ${e.detail.value}`);\n});\ndataGrid.pager.addEventListener(\"pagesizechange\", (e) => {\n  console.info(`client-side page-size # ${e.detail.value}`);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL3RyZWUtZ3JpZC1wYWdpbmcudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTBCO0FBRW5CO0FBSVAsTUFBTSxXQUFXLFNBQVMsY0FBMkIsbUJBQW1CO0FBR3hFLE1BQU0sTUFBVyx5REFBYTtBQUM5QixNQUFNLFVBQStCLENBQUM7QUFHdEMsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxXQUFXLFNBQVMsV0FBVztBQUFBLEVBQy9CLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFDVixDQUFDO0FBQ0QsUUFBUSxLQUFLO0FBQUEsRUFDWCxJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxXQUFXLFNBQVMsV0FBVztBQUFBLEVBQy9CLE9BQU8sQ0FBQyxTQUFjO0FBQ3BCLFlBQVEsS0FBSyx5QkFBeUIsSUFBSTtBQUFBLEVBQzVDO0FBQUEsRUFDQSxPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQ1YsQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixPQUFPO0FBQ1QsQ0FBQztBQUVELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsV0FBVyxTQUFTLFdBQVc7QUFDakMsQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsV0FBVyxTQUFTLFdBQVc7QUFDakMsQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsV0FBVyxTQUFTLFdBQVc7QUFDakMsQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsV0FBVyxTQUFTLFdBQVc7QUFDakMsQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsV0FBVyxTQUFTLFdBQVc7QUFDakMsQ0FBQztBQUVELFNBQVMsVUFBVTtBQUVuQixNQUFNLFVBQVUsWUFBWTtBQUMxQixRQUFNLE1BQU0sTUFBTSxNQUFNLEdBQUc7QUFDM0IsUUFBTSxPQUFPLE1BQU0sSUFBSSxLQUFLO0FBQzVCLFdBQVMsYUFBYTtBQUN0QixXQUFTLE9BQU87QUFDaEIsV0FBUyxZQUFZLEtBQUs7QUFDNUI7QUFFQSxRQUFRO0FBRVIsU0FBUyxpQkFBaUIsb0JBQW9CLENBQUMsTUFBYTtBQUMxRCxVQUFRLEtBQUsscUJBQW1DLEVBQUcsTUFBTTtBQUMzRCxDQUFDO0FBRUQsU0FBUyxNQUFNLGlCQUFpQixvQkFBb0IsQ0FBQyxNQUFhO0FBQ2hFLFVBQVEsS0FBSyw2QkFBMkMsRUFBRyxPQUFPLE9BQU87QUFDM0UsQ0FBQztBQUVELFNBQVMsTUFBTSxpQkFBaUIsa0JBQWtCLENBQUMsTUFBYTtBQUM5RCxVQUFRLEtBQUssMkJBQXlDLEVBQUcsT0FBTyxPQUFPO0FBQ3pFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRhLWdyaWQvZGVtb3MvdHJlZS1ncmlkLXBhZ2luZy50cz9kNmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmVlTGFyZ2VKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL3RyZWUtbGFyZ2UuanNvbic7XG5pbXBvcnQgdHlwZSBJZHNEYXRhR3JpZCBmcm9tICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCAnLi4vaWRzLWRhdGEtZ3JpZCc7XG5pbXBvcnQgdHlwZSB7IElkc0RhdGFHcmlkQ29sdW1uIH0gZnJvbSAnLi4vaWRzLWRhdGEtZ3JpZC1jb2x1bW4nO1xuXG4vLyBFeGFtcGxlIGZvciBwb3B1bGF0aW5nIHRoZSBEYXRhR3JpZFxuY29uc3QgZGF0YUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0RhdGFHcmlkPignI3RyZWUtZ3JpZC1wYWdpbmcnKSE7XG5cbi8vIERvIGFuIGFqYXggcmVxdWVzdFxuY29uc3QgdXJsOiBhbnkgPSB0cmVlTGFyZ2VKU09OO1xuY29uc3QgY29sdW1uczogSWRzRGF0YUdyaWRDb2x1bW5bXSA9IFtdO1xuXG4vLyBTZXQgdXAgY29sdW1uc1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdzZWxlY3Rpb25DaGVja2JveCcsXG4gIG5hbWU6ICdzZWxlY3Rpb24nLFxuICBzb3J0YWJsZTogZmFsc2UsXG4gIHJlc2l6YWJsZTogZmFsc2UsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5zZWxlY3Rpb25DaGVja2JveCxcbiAgYWxpZ246ICdjZW50ZXInLFxuICBmcm96ZW46ICdsZWZ0J1xufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ25hbWUnLFxuICBuYW1lOiAnTmFtZScsXG4gIGZpZWxkOiAnbmFtZScsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50cmVlLFxuICBjbGljazogKGluZm86IGFueSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnVHJlZSBFeHBhbmRlciBDbGlja2VkJywgaW5mbyk7XG4gIH0sXG4gIHdpZHRoOiAyMjAsXG4gIGZyb3plbjogJ2xlZnQnXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAncm93TnVtYmVyJyxcbiAgbmFtZTogJyMnLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMucm93TnVtYmVyLFxuICBzb3J0YWJsZTogZmFsc2UsXG4gIHJlYWRvbmx5OiB0cnVlLFxuICB3aWR0aDogNjZcbn0pO1xuXG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ2lkJyxcbiAgbmFtZTogJ0lkJyxcbiAgZmllbGQ6ICdpZCcsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnbG9jYXRpb24nLFxuICBuYW1lOiAnTG9jYXRpb24nLFxuICBmaWVsZDogJ2xvY2F0aW9uJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdjYXBhY2l0eScsXG4gIG5hbWU6ICdDYXBhY2l0eScsXG4gIGZpZWxkOiAnY2FwYWNpdHknLFxuICBzb3J0YWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuaW50ZWdlclxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ2F2YWlsYWJsZScsXG4gIG5hbWU6ICdBdmFpbGFibGUnLFxuICBmaWVsZDogJ2F2YWlsYWJsZScsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy5kYXRlXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnY29tbWVudHMnLFxuICBuYW1lOiAnQ29tbWVudHMnLFxuICBmaWVsZDogJ2NvbW1lbnRzJyxcbiAgc29ydGFibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbn0pO1xuXG5kYXRhR3JpZC5jb2x1bW5zID0gY29sdW1ucztcblxuY29uc3Qgc2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGRhdGFHcmlkLnBhZ2luYXRpb24gPSAnY2xpZW50LXNpZGUnO1xuICBkYXRhR3JpZC5kYXRhID0gZGF0YTtcbiAgZGF0YUdyaWQucGFnZVRvdGFsID0gZGF0YS5sZW5ndGg7XG59O1xuXG5zZXREYXRhKCk7XG5cbmRhdGFHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZWQnLCAoZTogRXZlbnQpID0+IHtcbiAgY29uc29sZS5pbmZvKGBTZWxlY3Rpb24gQ2hhbmdlZGAsICg8Q3VzdG9tRXZlbnQ+ZSkuZGV0YWlsKTtcbn0pO1xuXG5kYXRhR3JpZC5wYWdlci5hZGRFdmVudExpc3RlbmVyKCdwYWdlbnVtYmVyY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhgY2xpZW50LXNpZGUgcGFnZS1udW1iZXIgIyAkeyg8Q3VzdG9tRXZlbnQ+ZSkuZGV0YWlsLnZhbHVlfWApO1xufSk7XG5cbmRhdGFHcmlkLnBhZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VzaXplY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhgY2xpZW50LXNpZGUgcGFnZS1zaXplICMgJHsoPEN1c3RvbUV2ZW50PmUpLmRldGFpbC52YWx1ZX1gKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/tree-grid-paging.ts\n");

/***/ }),

/***/ "./src/assets/data/tree-large.json":
/*!*****************************************!*\
  !*** ./src/assets/data/tree-large.json ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/tree-large.json";

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
/******/ 		__webpack_require__.h = () => ("c2884dcdc9b3eff5a55f")
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
/******/ 			"ids-data-grid-tree-grid-paging": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/tree-grid-paging.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;