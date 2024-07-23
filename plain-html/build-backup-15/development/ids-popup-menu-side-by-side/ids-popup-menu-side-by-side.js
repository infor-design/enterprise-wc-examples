/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ids-popup-menu/demos/side-by-side.ts":
/*!*************************************************************!*\
  !*** ./src/components/ids-popup-menu/demos/side-by-side.ts ***!
  \*************************************************************/
/***/ (() => {

eval("document.querySelector(\"ids-popup-menu#popupmenu\").addEventListener(\"show\", () => {\n  console.info(\"On Show\", $(\"input#input-menu\").data(\"popupmenu\"));\n  const input = $(\"input#input-menu\");\n  if (input.data(\"popupmenu\").isOpen) {\n    input.data(\"popupmenu\").close();\n  }\n});\n$(\"input#input-menu\").on(\"beforeopen\", () => {\n  console.info(\"On Before Open\");\n  document.querySelector(\"ids-popup-menu#popupmenu\")?.hide();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1wb3B1cC1tZW51L2RlbW9zL3NpZGUtYnktc2lkZS50cz84MDc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJZHNQb3B1cE1lbnUgZnJvbSAnLi4vaWRzLXBvcHVwLW1lbnUnO1xuXG4vLyBBZGQgRXZlbnQgRm9yIFdlYiBDb21wb25lbnQgTWVudVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLXBvcHVwLW1lbnUjcG9wdXBtZW51JykhLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cnLCAoKSA9PiB7XG4gIGNvbnNvbGUuaW5mbygnT24gU2hvdycsICQoJ2lucHV0I2lucHV0LW1lbnUnKS5kYXRhKCdwb3B1cG1lbnUnKSk7XG5cbiAgY29uc3QgaW5wdXQgPSAkKCdpbnB1dCNpbnB1dC1tZW51Jyk7XG4gIGlmIChpbnB1dC5kYXRhKCdwb3B1cG1lbnUnKS5pc09wZW4pIHtcbiAgICBpbnB1dC5kYXRhKCdwb3B1cG1lbnUnKS5jbG9zZSgpO1xuICB9XG59KTtcblxuLy8gQWRkIEV2ZW50IGZvciBvbGQgY29tcG9uZW50XG4kKCdpbnB1dCNpbnB1dC1tZW51JykhLm9uKCdiZWZvcmVvcGVuJywgKCkgPT4ge1xuICBjb25zb2xlLmluZm8oJ09uIEJlZm9yZSBPcGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SWRzUG9wdXBNZW51PignaWRzLXBvcHVwLW1lbnUjcG9wdXBtZW51Jyk/LmhpZGUoKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFHQSxTQUFTLGNBQWMsMEJBQTBCLEVBQUcsaUJBQWlCLFFBQVEsTUFBTTtBQUNqRixVQUFRLEtBQUssV0FBVyxFQUFFLGtCQUFrQixFQUFFLEtBQUssV0FBVyxDQUFDO0FBRS9ELFFBQU0sUUFBUSxFQUFFLGtCQUFrQjtBQUNsQyxNQUFJLE1BQU0sS0FBSyxXQUFXLEVBQUUsUUFBUTtBQUNsQyxVQUFNLEtBQUssV0FBVyxFQUFFLE1BQU07QUFBQSxFQUNoQztBQUNGLENBQUM7QUFHRCxFQUFFLGtCQUFrQixFQUFHLEdBQUcsY0FBYyxNQUFNO0FBQzVDLFVBQVEsS0FBSyxnQkFBZ0I7QUFDN0IsV0FBUyxjQUE0QiwwQkFBMEIsR0FBRyxLQUFLO0FBQ3pFLENBQUM7IiwibmFtZXMiOltdLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtcG9wdXAtbWVudS9kZW1vcy9zaWRlLWJ5LXNpZGUudHMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-popup-menu/demos/side-by-side.ts\n");

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ids-popup-menu-side-by-side": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-popup-menu/demos/side-by-side.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;