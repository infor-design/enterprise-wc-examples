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

/***/ "./src/components/ids-lookup/demos/pagination-server.ts":
/*!**************************************************************!*\
  !*** ./src/components/ids-lookup/demos/pagination-server.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-lookup */ \"./src/components/ids-lookup/ids-lookup.ts\");\n/* harmony import */ var _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/books.json */ \"./src/assets/data/books.json\");\n\n\nconst lookup = document.querySelector(\"#lookup-1\");\nconst container = document.querySelector(\"ids-container\");\n(async function init() {\n  await container.setLocale(\"en-US\");\n  const url = _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__;\n  const columns = [];\n  columns.push({\n    id: \"selectionCheckbox\",\n    name: \"selection\",\n    sortable: false,\n    resizable: false,\n    formatter: lookup.dataGrid.formatters.selectionCheckbox,\n    align: \"center\"\n  });\n  columns.push({\n    id: \"rowNumber\",\n    name: \"#\",\n    formatter: lookup.dataGrid.formatters.rowNumber,\n    sortable: false,\n    readonly: true,\n    width: 65\n  });\n  columns.push({\n    id: \"description\",\n    name: \"Description\",\n    field: \"description\",\n    sortable: true,\n    formatter: lookup.dataGrid.formatters.text\n  });\n  columns.push({\n    id: \"ledger\",\n    name: \"Ledger\",\n    field: \"ledger\",\n    formatter: lookup.dataGrid.formatters.text\n  });\n  columns.push({\n    id: \"price\",\n    name: \"Price\",\n    field: \"price\",\n    formatter: lookup.dataGrid.formatters.decimal,\n    formatOptions: { locale: \"en-US\" }\n    // Data Values are in en-US\n  });\n  columns.push({\n    id: \"bookCurrency\",\n    name: \"Currency\",\n    field: \"bookCurrency\",\n    formatter: lookup.dataGrid.formatters.text\n  });\n  lookup.columns = columns;\n  const setData = async () => {\n    const res = await fetch(url);\n    const data = await res.json();\n    lookup.dataGridSettings = {\n      rowSelection: \"multiple\",\n      pageSize: 5,\n      pageNumber: 1,\n      pagination: \"server-side\"\n    };\n    const paginateData = (pageNumber = 1, pageSize = 10) => {\n      const last = pageNumber * pageSize;\n      const start = last - pageSize;\n      lookup.dataGrid.data = data.slice(start, start + pageSize);\n      lookup.dataGrid.pageTotal = data.length;\n      lookup.dataGrid.pageNumber = pageNumber;\n      lookup.dataGrid.pageSize = pageSize;\n    };\n    paginateData(1, lookup.dataGrid.pageSize);\n    lookup.dataGrid.pager.addEventListener(\"pagenumberchange\", async (e) => {\n      paginateData(e.detail.value, lookup.dataGrid.pageSize);\n    });\n  };\n  setData();\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbG9va3VwL2RlbW9zL3BhZ2luYXRpb24tc2VydmVyLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNPO0FBRWU7QUFHdEIsTUFBTSxTQUF3QixTQUFTLGNBQWMsV0FBVztBQUNoRSxNQUFNLFlBQTJCLFNBQVMsY0FBYyxlQUFlO0FBQUEsQ0FFdEUsZUFBZSxPQUFPO0FBRXJCLFFBQU0sVUFBVSxVQUFVLE9BQU87QUFHakMsUUFBTSxNQUFXLG9EQUFTO0FBQzFCLFFBQU0sVUFBVSxDQUFDO0FBR2pCLFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsV0FBVyxPQUFPLFNBQVMsV0FBVztBQUFBLElBQ3RDLE9BQU87QUFBQSxFQUNULENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFdBQVcsT0FBTyxTQUFTLFdBQVc7QUFBQSxJQUN0QyxVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsRUFDVCxDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixXQUFXLE9BQU8sU0FBUyxXQUFXO0FBQUEsRUFDeEMsQ0FBQztBQUNELFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsV0FBVyxPQUFPLFNBQVMsV0FBVztBQUFBLEVBQ3hDLENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFdBQVcsT0FBTyxTQUFTLFdBQVc7QUFBQSxJQUN0QyxlQUFlLEVBQUUsUUFBUSxRQUFRO0FBQUE7QUFBQSxFQUNuQyxDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxXQUFXLE9BQU8sU0FBUyxXQUFXO0FBQUEsRUFDeEMsQ0FBQztBQUVELFNBQU8sVUFBVTtBQUNqQixRQUFNLFVBQVUsWUFBWTtBQUMxQixVQUFNLE1BQU0sTUFBTSxNQUFNLEdBQUc7QUFDM0IsVUFBTSxPQUFPLE1BQU0sSUFBSSxLQUFLO0FBQzVCLFdBQU8sbUJBQW1CO0FBQUEsTUFDeEIsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLElBQ2Q7QUFHQSxVQUFNLGVBQWUsQ0FBQyxhQUFhLEdBQUcsV0FBVyxPQUFPO0FBQ3RELFlBQU0sT0FBTyxhQUFhO0FBQzFCLFlBQU0sUUFBUSxPQUFPO0FBQ3JCLGFBQU8sU0FBUyxPQUFPLEtBQUssTUFBTSxPQUFPLFFBQVEsUUFBUTtBQUN6RCxhQUFPLFNBQVMsWUFBWSxLQUFLO0FBQ2pDLGFBQU8sU0FBUyxhQUFhO0FBQzdCLGFBQU8sU0FBUyxXQUFXO0FBQUEsSUFDN0I7QUFFQSxpQkFBYSxHQUFHLE9BQU8sU0FBUyxRQUFRO0FBRXhDLFdBQU8sU0FBUyxNQUFNLGlCQUFpQixvQkFBb0IsT0FBTyxNQUFtQjtBQUNuRixtQkFBYSxFQUFFLE9BQU8sT0FBTyxPQUFPLFNBQVMsUUFBUTtBQUFBLElBQ3ZELENBQUM7QUFBQSxFQUNIO0FBRUEsVUFBUTtBQUNWLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1sb29rdXAvZGVtb3MvcGFnaW5hdGlvbi1zZXJ2ZXIudHM/YTc3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdXBwb3J0aW5nIGNvbXBvbmVudHNcbmltcG9ydCAnLi4vaWRzLWxvb2t1cCc7XG5cbmltcG9ydCBib29rc0pTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvYm9va3MuanNvbic7XG5cbi8vIEV4YW1wbGUgZm9yIHBvcHVsYXRpbmcgdGhlIERhdGFHcmlkXG5jb25zdCBsb29rdXA6IEVsZW1lbnQgfCBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9va3VwLTEnKTtcbmNvbnN0IGNvbnRhaW5lcjogRWxlbWVudCB8IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1jb250YWluZXInKTtcblxuKGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vIFNldCBhIExvY2FsZSBhbmQgd2FpdCBmb3IgaXQgdG8gbG9hZFxuICBhd2FpdCBjb250YWluZXIuc2V0TG9jYWxlKCdlbi1VUycpO1xuXG4gIC8vIERvIGFuIGFqYXggcmVxdWVzdFxuICBjb25zdCB1cmw6IGFueSA9IGJvb2tzSlNPTjtcbiAgY29uc3QgY29sdW1ucyA9IFtdO1xuXG4gIC8vIFNldCB1cCBjb2x1bW5zXG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdzZWxlY3Rpb25DaGVja2JveCcsXG4gICAgbmFtZTogJ3NlbGVjdGlvbicsXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgZm9ybWF0dGVyOiBsb29rdXAuZGF0YUdyaWQuZm9ybWF0dGVycy5zZWxlY3Rpb25DaGVja2JveCxcbiAgICBhbGlnbjogJ2NlbnRlcidcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdyb3dOdW1iZXInLFxuICAgIG5hbWU6ICcjJyxcbiAgICBmb3JtYXR0ZXI6IGxvb2t1cC5kYXRhR3JpZC5mb3JtYXR0ZXJzLnJvd051bWJlcixcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgcmVhZG9ubHk6IHRydWUsXG4gICAgd2lkdGg6IDY1XG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgIG5hbWU6ICdEZXNjcmlwdGlvbicsXG4gICAgZmllbGQ6ICdkZXNjcmlwdGlvbicsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgZm9ybWF0dGVyOiBsb29rdXAuZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnbGVkZ2VyJyxcbiAgICBuYW1lOiAnTGVkZ2VyJyxcbiAgICBmaWVsZDogJ2xlZGdlcicsXG4gICAgZm9ybWF0dGVyOiBsb29rdXAuZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAncHJpY2UnLFxuICAgIG5hbWU6ICdQcmljZScsXG4gICAgZmllbGQ6ICdwcmljZScsXG4gICAgZm9ybWF0dGVyOiBsb29rdXAuZGF0YUdyaWQuZm9ybWF0dGVycy5kZWNpbWFsLFxuICAgIGZvcm1hdE9wdGlvbnM6IHsgbG9jYWxlOiAnZW4tVVMnIH0gLy8gRGF0YSBWYWx1ZXMgYXJlIGluIGVuLVVTXG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnYm9va0N1cnJlbmN5JyxcbiAgICBuYW1lOiAnQ3VycmVuY3knLFxuICAgIGZpZWxkOiAnYm9va0N1cnJlbmN5JyxcbiAgICBmb3JtYXR0ZXI6IGxvb2t1cC5kYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgfSk7XG5cbiAgbG9va3VwLmNvbHVtbnMgPSBjb2x1bW5zO1xuICBjb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgbG9va3VwLmRhdGFHcmlkU2V0dGluZ3MgPSB7XG4gICAgICByb3dTZWxlY3Rpb246ICdtdWx0aXBsZScsXG4gICAgICBwYWdlU2l6ZTogNSxcbiAgICAgIHBhZ2VOdW1iZXI6IDEsXG4gICAgICBwYWdpbmF0aW9uOiAnc2VydmVyLXNpZGUnXG4gICAgfTtcblxuICAgIC8vIEZha2Ugc2VydmVyIHNpZGUgcGFnaW5hdGlvblxuICAgIGNvbnN0IHBhZ2luYXRlRGF0YSA9IChwYWdlTnVtYmVyID0gMSwgcGFnZVNpemUgPSAxMCkgPT4ge1xuICAgICAgY29uc3QgbGFzdCA9IHBhZ2VOdW1iZXIgKiBwYWdlU2l6ZTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gbGFzdCAtIHBhZ2VTaXplO1xuICAgICAgbG9va3VwLmRhdGFHcmlkLmRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0LCBzdGFydCArIHBhZ2VTaXplKTtcbiAgICAgIGxvb2t1cC5kYXRhR3JpZC5wYWdlVG90YWwgPSBkYXRhLmxlbmd0aDtcbiAgICAgIGxvb2t1cC5kYXRhR3JpZC5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgICAgIGxvb2t1cC5kYXRhR3JpZC5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH07XG5cbiAgICBwYWdpbmF0ZURhdGEoMSwgbG9va3VwLmRhdGFHcmlkLnBhZ2VTaXplKTtcblxuICAgIGxvb2t1cC5kYXRhR3JpZC5wYWdlci5hZGRFdmVudExpc3RlbmVyKCdwYWdlbnVtYmVyY2hhbmdlJywgYXN5bmMgKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBwYWdpbmF0ZURhdGEoZS5kZXRhaWwudmFsdWUsIGxvb2t1cC5kYXRhR3JpZC5wYWdlU2l6ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0RGF0YSgpO1xufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-lookup/demos/pagination-server.ts\n");

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
/******/ 			"ids-lookup-pagination-server": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts","src_components_ids-modal_ids-modal_ts","src_components_ids-lookup_ids-lookup_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts","src_components_ids-modal_ids-modal_ts","src_components_ids-lookup_ids-lookup_ts"], () => (__webpack_require__("./src/components/ids-lookup/demos/pagination-server.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;