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

/***/ "./src/components/ids-data-grid/demos/pagination-client-side.ts":
/*!**********************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/pagination-client-side.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/products.json */ \"./src/assets/data/products.json\");\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n\n\nconst dataGrid = document.querySelector(\"#data-grid-paging-client-side\");\n(async function init() {\n  const columns = [];\n  columns.push({\n    id: \"selectionCheckbox\",\n    name: \"selection\",\n    sortable: false,\n    resizable: false,\n    formatter: dataGrid.formatters.selectionCheckbox,\n    align: \"center\"\n  });\n  columns.push({\n    id: \"id\",\n    name: \"ID\",\n    field: \"id\",\n    formatter: dataGrid.formatters.text,\n    width: 80,\n    sortable: true\n  });\n  columns.push({\n    id: \"color\",\n    name: \"Color\",\n    field: \"color\",\n    formatter: dataGrid.formatters.text,\n    sortable: true\n  });\n  columns.push({\n    id: \"inStock\",\n    name: \"In Stock\",\n    field: \"inStock\",\n    formatter: dataGrid.formatters.text,\n    sortable: true\n  });\n  columns.push({\n    id: \"productId\",\n    name: \"Product Id\",\n    field: \"productId\",\n    formatter: dataGrid.formatters.text,\n    sortable: true\n  });\n  columns.push({\n    id: \"productName\",\n    name: \"Product Name\",\n    field: \"productName\",\n    formatter: dataGrid.formatters.text,\n    sortable: true\n  });\n  columns.push({\n    id: \"unitPrice\",\n    name: \"Unit Price\",\n    field: \"unitPrice\",\n    formatter: dataGrid.formatters.text,\n    sortable: true\n  });\n  columns.push({\n    id: \"units\",\n    name: \"Units\",\n    field: \"units\",\n    formatter: dataGrid.formatters.text,\n    sortable: true\n  });\n  const url = _assets_data_products_json__WEBPACK_IMPORTED_MODULE_0__;\n  const response = await fetch(url);\n  const data = await response.json();\n  dataGrid.pagination = \"client-side\";\n  dataGrid.columns = columns;\n  dataGrid.data = data;\n  dataGrid.pageTotal = data.length;\n  dataGrid.pager.addEventListener(\"pagenumberchange\", (e) => {\n    console.info(`client-side page-number # ${e.detail.value}`);\n  });\n  dataGrid.pager.addEventListener(\"pagesizechange\", (e) => {\n    console.info(`client-side page-size # ${e.detail.value}`);\n  });\n  console.info(\"Loading Time:\", window.performance.now());\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL3BhZ2luYXRpb24tY2xpZW50LXNpZGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXlCO0FBRWxCO0FBSVAsTUFBTSxXQUFXLFNBQVMsY0FBMkIsK0JBQStCO0FBQUEsQ0FFbkYsZUFBZSxPQUFPO0FBQ3JCLFFBQU0sVUFBK0IsQ0FBQztBQUd0QyxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLFdBQVcsU0FBUyxXQUFXO0FBQUEsSUFDL0IsT0FBTztBQUFBLEVBQ1QsQ0FBQztBQUNELFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxJQUMvQixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsRUFDWixDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLElBQy9CLFVBQVU7QUFBQSxFQUNaLENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsSUFDL0IsVUFBVTtBQUFBLEVBQ1osQ0FBQztBQUNELFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxJQUMvQixVQUFVO0FBQUEsRUFDWixDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxXQUFXLFNBQVMsV0FBVztBQUFBLElBQy9CLFVBQVU7QUFBQSxFQUNaLENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFdBQVcsU0FBUyxXQUFXO0FBQUEsSUFDL0IsVUFBVTtBQUFBLEVBQ1osQ0FBQztBQUNELFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxJQUMvQixVQUFVO0FBQUEsRUFDWixDQUFDO0FBR0QsUUFBTSxNQUFXLHVEQUFZO0FBQzdCLFFBQU0sV0FBVyxNQUFNLE1BQU0sR0FBRztBQUNoQyxRQUFNLE9BQU8sTUFBTSxTQUFTLEtBQUs7QUFDakMsV0FBUyxhQUFhO0FBQ3RCLFdBQVMsVUFBVTtBQUNuQixXQUFTLE9BQU87QUFDaEIsV0FBUyxZQUFZLEtBQUs7QUFFMUIsV0FBUyxNQUFNLGlCQUFpQixvQkFBb0IsQ0FBQyxNQUFhO0FBQ2hFLFlBQVEsS0FBSyw2QkFBMkMsRUFBRyxPQUFPLE9BQU87QUFBQSxFQUMzRSxDQUFDO0FBRUQsV0FBUyxNQUFNLGlCQUFpQixrQkFBa0IsQ0FBQyxNQUFhO0FBQzlELFlBQVEsS0FBSywyQkFBeUMsRUFBRyxPQUFPLE9BQU87QUFBQSxFQUN6RSxDQUFDO0FBRUQsVUFBUSxLQUFLLGlCQUFpQixPQUFPLFlBQVksSUFBSSxDQUFDO0FBQ3hELEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRhLWdyaWQvZGVtb3MvcGFnaW5hdGlvbi1jbGllbnQtc2lkZS50cz82NjEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWN0c0pTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvcHJvZHVjdHMuanNvbic7XG5pbXBvcnQgdHlwZSBJZHNEYXRhR3JpZCBmcm9tICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCAnLi4vaWRzLWRhdGEtZ3JpZCc7XG5pbXBvcnQgdHlwZSB7IElkc0RhdGFHcmlkQ29sdW1uIH0gZnJvbSAnLi4vaWRzLWRhdGEtZ3JpZC1jb2x1bW4nO1xuXG4vLyBFeGFtcGxlIGZvciBwb3B1bGF0aW5nIHRoZSBEYXRhR3JpZFxuY29uc3QgZGF0YUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0RhdGFHcmlkPignI2RhdGEtZ3JpZC1wYWdpbmctY2xpZW50LXNpZGUnKSE7XG5cbihhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBjb2x1bW5zOiBJZHNEYXRhR3JpZENvbHVtbltdID0gW107XG5cbiAgLy8gU2V0IHVwIGNvbHVtbnNcbiAgY29sdW1ucy5wdXNoKHtcbiAgICBpZDogJ3NlbGVjdGlvbkNoZWNrYm94JyxcbiAgICBuYW1lOiAnc2VsZWN0aW9uJyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuc2VsZWN0aW9uQ2hlY2tib3gsXG4gICAgYWxpZ246ICdjZW50ZXInXG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnaWQnLFxuICAgIG5hbWU6ICdJRCcsXG4gICAgZmllbGQ6ICdpZCcsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgd2lkdGg6IDgwLFxuICAgIHNvcnRhYmxlOiB0cnVlXG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnY29sb3InLFxuICAgIG5hbWU6ICdDb2xvcicsXG4gICAgZmllbGQ6ICdjb2xvcicsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgc29ydGFibGU6IHRydWVcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdpblN0b2NrJyxcbiAgICBuYW1lOiAnSW4gU3RvY2snLFxuICAgIGZpZWxkOiAnaW5TdG9jaycsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgc29ydGFibGU6IHRydWVcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdwcm9kdWN0SWQnLFxuICAgIG5hbWU6ICdQcm9kdWN0IElkJyxcbiAgICBmaWVsZDogJ3Byb2R1Y3RJZCcsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgc29ydGFibGU6IHRydWVcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdwcm9kdWN0TmFtZScsXG4gICAgbmFtZTogJ1Byb2R1Y3QgTmFtZScsXG4gICAgZmllbGQ6ICdwcm9kdWN0TmFtZScsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgc29ydGFibGU6IHRydWVcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICd1bml0UHJpY2UnLFxuICAgIG5hbWU6ICdVbml0IFByaWNlJyxcbiAgICBmaWVsZDogJ3VuaXRQcmljZScsXG4gICAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gICAgc29ydGFibGU6IHRydWVcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICd1bml0cycsXG4gICAgbmFtZTogJ1VuaXRzJyxcbiAgICBmaWVsZDogJ3VuaXRzJyxcbiAgICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgICBzb3J0YWJsZTogdHJ1ZVxuICB9KTtcblxuICAvLyBEbyBhbiBhamF4IHJlcXVlc3RcbiAgY29uc3QgdXJsOiBhbnkgPSBwcm9kdWN0c0pTT047XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgZGF0YUdyaWQucGFnaW5hdGlvbiA9ICdjbGllbnQtc2lkZSc7XG4gIGRhdGFHcmlkLmNvbHVtbnMgPSBjb2x1bW5zO1xuICBkYXRhR3JpZC5kYXRhID0gZGF0YTtcbiAgZGF0YUdyaWQucGFnZVRvdGFsID0gZGF0YS5sZW5ndGg7XG5cbiAgZGF0YUdyaWQucGFnZXIuYWRkRXZlbnRMaXN0ZW5lcigncGFnZW51bWJlcmNoYW5nZScsIChlOiBFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbyhgY2xpZW50LXNpZGUgcGFnZS1udW1iZXIgIyAkeyg8Q3VzdG9tRXZlbnQ+ZSkuZGV0YWlsLnZhbHVlfWApO1xuICB9KTtcblxuICBkYXRhR3JpZC5wYWdlci5hZGRFdmVudExpc3RlbmVyKCdwYWdlc2l6ZWNoYW5nZScsIChlOiBFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbyhgY2xpZW50LXNpZGUgcGFnZS1zaXplICMgJHsoPEN1c3RvbUV2ZW50PmUpLmRldGFpbC52YWx1ZX1gKTtcbiAgfSk7XG5cbiAgY29uc29sZS5pbmZvKCdMb2FkaW5nIFRpbWU6Jywgd2luZG93LnBlcmZvcm1hbmNlLm5vdygpKTtcbn0oKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/pagination-client-side.ts\n");

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
/******/ 		__webpack_require__.h = () => ("1d497cfbe7f5008f070f")
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
/******/ 			"ids-data-grid-pagination-client-side": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/pagination-client-side.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;