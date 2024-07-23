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

/***/ "./src/components/ids-line-chart/demos/side-by-side.ts":
/*!*************************************************************!*\
  !*** ./src/components/ids-line-chart/demos/side-by-side.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_data_components_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/components.json */ \"./src/assets/data/components.json\");\n/* harmony import */ var _assets_css_ids_line_chart_standalone_css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/css/ids-line-chart/standalone-css.css */ \"./src/assets/css/ids-line-chart/standalone-css.css\");\n\n\nconst cssLink = `<link href=\"${_assets_css_ids_line_chart_standalone_css_css__WEBPACK_IMPORTED_MODULE_1__}\" rel=\"stylesheet\">`;\ndocument.querySelector(\"head\").insertAdjacentHTML(\"afterbegin\", cssLink);\nlet data = [];\nconst setData = async () => {\n  const res = await fetch(_assets_data_components_json__WEBPACK_IMPORTED_MODULE_0__);\n  data = await res.json();\n  document.querySelector(\"ids-line-chart\").data = data;\n  document.querySelector(\"ids-container\").removeAttribute(\"hidden\");\n  $(\"#line-example\").chart({ type: \"line\", dataset: data, yAxis: { ticks: { number: 10, format: \"s\" } } });\n};\nsetData();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbGluZS1jaGFydC9kZW1vcy9zaWRlLWJ5LXNpZGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTJCO0FBQ1g7QUFFaEIsTUFBTSxVQUFVLGVBQWUsMEVBQUc7QUFDakMsU0FBaUIsY0FBYyxNQUFNLEVBQUUsbUJBQW1CLGNBQWMsT0FBTztBQUdoRixJQUFJLE9BQU8sQ0FBQztBQUVaLE1BQU0sVUFBVSxZQUFZO0FBQzFCLFFBQU0sTUFBTSxNQUFNLE1BQU0seURBQXFCO0FBQzdDLFNBQU8sTUFBTSxJQUFJLEtBQUs7QUFFdEIsRUFBQyxTQUFpQixjQUFjLGdCQUFnQixFQUFFLE9BQU87QUFHekQsRUFBQyxTQUFpQixjQUFjLGVBQWUsRUFBRSxnQkFBZ0IsUUFBUTtBQUN6RSxJQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLFNBQVMsTUFBTSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsSUFBSSxRQUFRLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekc7QUFFQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtbGluZS1jaGFydC9kZW1vcy9zaWRlLWJ5LXNpZGUudHM/OGNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcG9uZW50c0pTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvY29tcG9uZW50cy5qc29uJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Nzcy9pZHMtbGluZS1jaGFydC9zdGFuZGFsb25lLWNzcy5jc3MnO1xuXG5jb25zdCBjc3NMaW5rID0gYDxsaW5rIGhyZWY9XCIke2Nzc31cIiByZWw9XCJzdHlsZXNoZWV0XCI+YDtcbihkb2N1bWVudCBhcyBhbnkpLnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBjc3NMaW5rKTtcblxuLy8gSW5pdCBXZWIgQ29tcG9uZW50c1xubGV0IGRhdGEgPSBbXTtcblxuY29uc3Qgc2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goY29tcG9uZW50c0pTT04gYXMgYW55KTtcbiAgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgKGRvY3VtZW50IGFzIGFueSkucXVlcnlTZWxlY3RvcignaWRzLWxpbmUtY2hhcnQnKS5kYXRhID0gZGF0YTtcblxuICAvLyBJbml0IDQueFxuICAoZG9jdW1lbnQgYXMgYW55KS5xdWVyeVNlbGVjdG9yKCdpZHMtY29udGFpbmVyJykucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgJCgnI2xpbmUtZXhhbXBsZScpLmNoYXJ0KHsgdHlwZTogJ2xpbmUnLCBkYXRhc2V0OiBkYXRhLCB5QXhpczogeyB0aWNrczogeyBudW1iZXI6IDEwLCBmb3JtYXQ6ICdzJyB9IH0gfSk7XG59O1xuXG5zZXREYXRhKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-line-chart/demos/side-by-side.ts\n");

/***/ }),

/***/ "./src/assets/css/ids-line-chart/standalone-css.css":
/*!**********************************************************!*\
  !*** ./src/assets/css/ids-line-chart/standalone-css.css ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/css/ids-line-chart/standalone-css.css";

/***/ }),

/***/ "./src/assets/data/components.json":
/*!*****************************************!*\
  !*** ./src/assets/data/components.json ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/components.json";

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
/******/ 			"ids-line-chart-side-by-side": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-line-chart/demos/side-by-side.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;