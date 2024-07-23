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

/***/ "./src/components/ids-hierarchy/demos/lazy-load.ts":
/*!*********************************************************!*\
  !*** ./src/components/ids-hierarchy/demos/lazy-load.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_hierarchy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-hierarchy */ \"./src/components/ids-hierarchy/ids-hierarchy.ts\");\n/* harmony import */ var _ids_hierarchy_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ids-hierarchy-item */ \"./src/components/ids-hierarchy/ids-hierarchy-item.ts\");\n/* harmony import */ var _ids_hierarchy_legend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ids-hierarchy-legend */ \"./src/components/ids-hierarchy/ids-hierarchy-legend.ts\");\n/* harmony import */ var _ids_hierarchy_legend_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ids-hierarchy-legend-item */ \"./src/components/ids-hierarchy/ids-hierarchy-legend-item.ts\");\n/* harmony import */ var _assets_images_headshot_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/headshot-1.jpg */ \"./src/assets/images/headshot-1.jpg\");\n/* harmony import */ var _assets_data_hierarchy_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/data/hierarchy.json */ \"./src/assets/data/hierarchy.json\");\n\n\n\n\n\n\nconst headshotImg = window.document.getElementById(\"headshot\");\nheadshotImg.src = _assets_images_headshot_1_jpg__WEBPACK_IMPORTED_MODULE_4__;\nconst hierarchyLazyItem = document.querySelector(\"ids-hierarchy-item\");\nif (hierarchyLazyItem) {\n  hierarchyLazyItem.hasChildren = true;\n  hierarchyLazyItem.loadChildren = async function loadChildren() {\n    const url = _assets_data_hierarchy_json__WEBPACK_IMPORTED_MODULE_5__;\n    const res = await fetch(url);\n    const data = await res.json();\n    return data;\n  };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtaGllcmFyY2h5L2RlbW9zL2xhenktbG9hZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ087QUFFQTtBQUNBO0FBRUE7QUFDYztBQUNLO0FBRTFCLE1BQU0sY0FBbUIsT0FBTyxTQUFTLGVBQWUsVUFBVTtBQUNsRSxZQUFZLE1BQU0sMERBQVE7QUFFMUIsTUFBTSxvQkFBeUIsU0FBUyxjQUFjLG9CQUFvQjtBQUMxRSxJQUFJLG1CQUFtQjtBQUNyQixvQkFBa0IsY0FBYztBQUNoQyxvQkFBa0IsZUFBZSxlQUFlLGVBQWU7QUFDN0QsVUFBTSxNQUFXLHdEQUFhO0FBQzlCLFVBQU0sTUFBTSxNQUFNLE1BQU0sR0FBRztBQUMzQixVQUFNLE9BQU8sTUFBTSxJQUFJLEtBQUs7QUFDNUIsV0FBTztBQUFBLEVBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWhpZXJhcmNoeS9kZW1vcy9sYXp5LWxvYWQudHM/MzZiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdXBwb3J0aW5nIGNvbXBvbmVudHNcbmltcG9ydCAnLi4vaWRzLWhpZXJhcmNoeSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCAnLi4vaWRzLWhpZXJhcmNoeS1pdGVtJztcbmltcG9ydCAnLi4vaWRzLWhpZXJhcmNoeS1sZWdlbmQnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgJy4uL2lkcy1oaWVyYXJjaHktbGVnZW5kLWl0ZW0nO1xuaW1wb3J0IGhlYWRzaG90IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZHNob3QtMS5qcGcnO1xuaW1wb3J0IGhpZXJhcmNoeUpTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvaGllcmFyY2h5Lmpzb24nO1xuXG5jb25zdCBoZWFkc2hvdEltZzogYW55ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkc2hvdCcpO1xuaGVhZHNob3RJbWcuc3JjID0gaGVhZHNob3Q7XG5cbmNvbnN0IGhpZXJhcmNoeUxhenlJdGVtOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZHMtaGllcmFyY2h5LWl0ZW0nKTtcbmlmIChoaWVyYXJjaHlMYXp5SXRlbSkge1xuICBoaWVyYXJjaHlMYXp5SXRlbS5oYXNDaGlsZHJlbiA9IHRydWU7XG4gIGhpZXJhcmNoeUxhenlJdGVtLmxvYWRDaGlsZHJlbiA9IGFzeW5jIGZ1bmN0aW9uIGxvYWRDaGlsZHJlbigpIHtcbiAgICBjb25zdCB1cmw6IGFueSA9IGhpZXJhcmNoeUpTT047XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-hierarchy/demos/lazy-load.ts\n");

/***/ }),

/***/ "./src/assets/data/hierarchy.json":
/*!****************************************!*\
  !*** ./src/assets/data/hierarchy.json ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/hierarchy.json";

/***/ }),

/***/ "./src/assets/images/headshot-1.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/headshot-1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/images/headshot-1.jpg";

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
/******/ 			"ids-hierarchy-lazy-load": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-hierarchy_ids-hierarchy-item_ts-src_components_ids-hierarchy_ids-hierarchy-4d935c"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-hierarchy_ids-hierarchy-item_ts-src_components_ids-hierarchy_ids-hierarchy-4d935c"], () => (__webpack_require__("./src/components/ids-hierarchy/demos/lazy-load.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;