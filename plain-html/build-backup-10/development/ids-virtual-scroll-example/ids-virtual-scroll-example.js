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

/***/ "./src/components/ids-virtual-scroll/demos/example.ts":
/*!************************************************************!*\
  !*** ./src/components/ids-virtual-scroll/demos/example.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/products.json */ \"./src/assets/data/products.json\");\n/* harmony import */ var _assets_css_ids_virtual_scroll_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/css/ids-virtual-scroll/index.css */ \"./src/assets/css/ids-virtual-scroll/index.css\");\n\n\nconst cssLink = `<link href=\"${_assets_css_ids_virtual_scroll_index_css__WEBPACK_IMPORTED_MODULE_1__}\" rel=\"stylesheet\">`;\nconst head = document.querySelector(\"head\");\nif (head) {\n  head.insertAdjacentHTML(\"afterbegin\", cssLink);\n}\nconst virtualScrollList = document.querySelector(\"#virtual-scroll-1\");\nconst virtualScrollTable = document.querySelector(\"#virtual-scroll-2\");\nif (virtualScrollList) {\n  const url = _assets_data_products_json__WEBPACK_IMPORTED_MODULE_0__;\n  const setData = async () => {\n    const res = await fetch(url);\n    const data = await res.json();\n    virtualScrollList.data = data;\n    virtualScrollList.itemTemplate = (item) => `<div part=\"list-item\">${item.productName}</div>`;\n    virtualScrollList.scrollTarget = document.querySelector(\"ids-card\")?.shadowRoot?.querySelector(\".ids-card-content\");\n    virtualScrollTable.scrollTarget = document.querySelector(\".ids-data-grid\");\n    virtualScrollTable.itemTemplate = (item) => `<div part=\"row\" role=\"row\" class=\"ids-data-grid-row\">\n      <span role=\"cell\" part=\"cell\" class=\"ids-data-grid-cell\"><span class=\"text-ellipsis\" part=\"text-ellipsis\">${item.productId}</span></span>\n      <span role=\"cell\" part=\"cell\" class=\"ids-data-grid-cell\"><span class=\"text-ellipsis\" part=\"text-ellipsis\">${item.productName}</span></span>\n    </div>`;\n    virtualScrollTable.data = data;\n  };\n  setData();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtdmlydHVhbC1zY3JvbGwvZGVtb3MvZXhhbXBsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBeUI7QUFDVDtBQUVoQixNQUFNLFVBQVUsZUFBZSxxRUFBRztBQUNsQyxNQUFNLE9BQU8sU0FBUyxjQUFjLE1BQU07QUFDMUMsSUFBSSxNQUFNO0FBQ1IsT0FBSyxtQkFBbUIsY0FBYyxPQUFPO0FBQy9DO0FBR0EsTUFBTSxvQkFBeUIsU0FBUyxjQUFjLG1CQUFtQjtBQUN6RSxNQUFNLHFCQUEwQixTQUFTLGNBQWMsbUJBQW1CO0FBQzFFLElBQUksbUJBQW1CO0FBQ3JCLFFBQU0sTUFBVyx1REFBWTtBQUM3QixRQUFNLFVBQVUsWUFBWTtBQUMxQixVQUFNLE1BQU0sTUFBTSxNQUFNLEdBQUc7QUFDM0IsVUFBTSxPQUFPLE1BQU0sSUFBSSxLQUFLO0FBRTVCLHNCQUFrQixPQUFPO0FBQ3pCLHNCQUFrQixlQUFlLENBQUMsU0FBYyx5QkFBeUIsS0FBSztBQUc5RSxzQkFBa0IsZUFBZSxTQUFTLGNBQWMsVUFBVSxHQUFHLFlBQVksY0FBYyxtQkFBbUI7QUFHbEgsdUJBQW1CLGVBQWUsU0FBUyxjQUFjLGdCQUFnQjtBQUN6RSx1QkFBbUIsZUFBZSxDQUFDLFNBQWM7QUFBQSxrSEFDNkQsS0FBSztBQUFBLGtIQUNMLEtBQUs7QUFBQTtBQUVuSCx1QkFBbUIsT0FBTztBQUFBLEVBQzVCO0FBRUEsVUFBUTtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtdmlydHVhbC1zY3JvbGwvZGVtb3MvZXhhbXBsZS50cz8wZjlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWN0c0pTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvcHJvZHVjdHMuanNvbic7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9jc3MvaWRzLXZpcnR1YWwtc2Nyb2xsL2luZGV4LmNzcyc7XG5cbmNvbnN0IGNzc0xpbmsgPSBgPGxpbmsgaHJlZj1cIiR7Y3NzfVwiIHJlbD1cInN0eWxlc2hlZXRcIj5gO1xuY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbmlmIChoZWFkKSB7XG4gIGhlYWQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgY3NzTGluayk7XG59XG5cbi8vIEV4YW1wbGUgZm9yIHBvcHVsYXRpbmcgdGhlIFZpcnR1YWwgU2NvbGxlclxuY29uc3QgdmlydHVhbFNjcm9sbExpc3Q6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXJ0dWFsLXNjcm9sbC0xJyk7XG5jb25zdCB2aXJ0dWFsU2Nyb2xsVGFibGU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXJ0dWFsLXNjcm9sbC0yJyk7XG5pZiAodmlydHVhbFNjcm9sbExpc3QpIHtcbiAgY29uc3QgdXJsOiBhbnkgPSBwcm9kdWN0c0pTT047XG4gIGNvbnN0IHNldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAvLyBTZXR1cCB0aGUgbGlzdCB2aWV3XG4gICAgdmlydHVhbFNjcm9sbExpc3QuZGF0YSA9IGRhdGE7XG4gICAgdmlydHVhbFNjcm9sbExpc3QuaXRlbVRlbXBsYXRlID0gKGl0ZW06IGFueSkgPT4gYDxkaXYgcGFydD1cImxpc3QtaXRlbVwiPiR7aXRlbS5wcm9kdWN0TmFtZX08L2Rpdj5gO1xuXG4gICAgLy8gVE9ETzogQ2FuIHRoaXMgYmUgZG9uZSBhdXRvbWF0aWNhbGx5P1xuICAgIHZpcnR1YWxTY3JvbGxMaXN0LnNjcm9sbFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1jYXJkJyk/LnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy5pZHMtY2FyZC1jb250ZW50Jyk7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHRhYmxlLCB3aGljaCBoYXMgYSBjdXN0b20gYXJlYSB3aXRoIHNjcm9sbGluZ1xuICAgIHZpcnR1YWxTY3JvbGxUYWJsZS5zY3JvbGxUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWRzLWRhdGEtZ3JpZCcpO1xuICAgIHZpcnR1YWxTY3JvbGxUYWJsZS5pdGVtVGVtcGxhdGUgPSAoaXRlbTogYW55KSA9PiBgPGRpdiBwYXJ0PVwicm93XCIgcm9sZT1cInJvd1wiIGNsYXNzPVwiaWRzLWRhdGEtZ3JpZC1yb3dcIj5cbiAgICAgIDxzcGFuIHJvbGU9XCJjZWxsXCIgcGFydD1cImNlbGxcIiBjbGFzcz1cImlkcy1kYXRhLWdyaWQtY2VsbFwiPjxzcGFuIGNsYXNzPVwidGV4dC1lbGxpcHNpc1wiIHBhcnQ9XCJ0ZXh0LWVsbGlwc2lzXCI+JHtpdGVtLnByb2R1Y3RJZH08L3NwYW4+PC9zcGFuPlxuICAgICAgPHNwYW4gcm9sZT1cImNlbGxcIiBwYXJ0PVwiY2VsbFwiIGNsYXNzPVwiaWRzLWRhdGEtZ3JpZC1jZWxsXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0LWVsbGlwc2lzXCIgcGFydD1cInRleHQtZWxsaXBzaXNcIj4ke2l0ZW0ucHJvZHVjdE5hbWV9PC9zcGFuPjwvc3Bhbj5cbiAgICA8L2Rpdj5gO1xuICAgIHZpcnR1YWxTY3JvbGxUYWJsZS5kYXRhID0gZGF0YTtcbiAgfTtcblxuICBzZXREYXRhKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-virtual-scroll/demos/example.ts\n");

/***/ }),

/***/ "./src/assets/css/ids-virtual-scroll/index.css":
/*!*****************************************************!*\
  !*** ./src/assets/css/ids-virtual-scroll/index.css ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/css/ids-virtual-scroll/index.css";

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
/******/ 		__webpack_require__.h = () => ("c877cfadba00fac98356")
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
/******/ 			"ids-virtual-scroll-example": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-virtual-scroll/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;