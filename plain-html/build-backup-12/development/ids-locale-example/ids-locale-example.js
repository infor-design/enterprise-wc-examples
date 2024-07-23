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

/***/ "./src/components/ids-locale/demos/example.ts":
/*!****************************************************!*\
  !*** ./src/components/ids-locale/demos/example.ts ***!
  \****************************************************/
/***/ (() => {

eval("(async function loadMessages() {\n  let html = \"\";\n  const initialLocale = \"en\";\n  const container = document.querySelector(\"ids-container\");\n  await container.setLanguage(initialLocale);\n  const keys = Object.keys(container.language.messages);\n  for (let i = 0; i < keys.length; i++) {\n    html += `<ids-layout-grid-cell col-span=\"1\">\n      <ids-text font-weight=\"bold\">${keys[i]}</ids-text>\n    </ids-layout-grid-cell>\n    <ids-layout-grid-cell col-span=\"3\">\n      <ids-text translate-text=\"true\" language=\"${initialLocale}\">${keys[i]}</ids-text>\n      </ids-layout-grid-cell>`;\n  }\n  document.querySelector(\"#translation-container\").innerHTML = html;\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1sb2NhbGUvZGVtb3MvZXhhbXBsZS50cz9hMDZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFzeW5jcm9ub3VzbHkgbG9hZCBhIGxhbmd1YWdlIGFuZCBkaXNwbGF5IHRoZSBzdHJpbmdzXG4oYXN5bmMgZnVuY3Rpb24gbG9hZE1lc3NhZ2VzKCkge1xuICBsZXQgaHRtbCA9ICcnO1xuICAvLyBTZXQgbGFuZ3VhZ2UgYW5kIHdhaXQgZm9yIGl0IHRvIGxvYWRcbiAgY29uc3QgaW5pdGlhbExvY2FsZSA9ICdlbic7XG4gIGNvbnN0IGNvbnRhaW5lcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLWNvbnRhaW5lcicpO1xuICBhd2FpdCBjb250YWluZXIuc2V0TGFuZ3VhZ2UoaW5pdGlhbExvY2FsZSk7XG5cbiAgLy8gU2hvdyB0aGVtIGluIHRoZSBwYWdlXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb250YWluZXIubGFuZ3VhZ2UubWVzc2FnZXMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBodG1sICs9IGA8aWRzLWxheW91dC1ncmlkLWNlbGwgY29sLXNwYW49XCIxXCI+XG4gICAgICA8aWRzLXRleHQgZm9udC13ZWlnaHQ9XCJib2xkXCI+JHtrZXlzW2ldfTwvaWRzLXRleHQ+XG4gICAgPC9pZHMtbGF5b3V0LWdyaWQtY2VsbD5cbiAgICA8aWRzLWxheW91dC1ncmlkLWNlbGwgY29sLXNwYW49XCIzXCI+XG4gICAgICA8aWRzLXRleHQgdHJhbnNsYXRlLXRleHQ9XCJ0cnVlXCIgbGFuZ3VhZ2U9XCIke2luaXRpYWxMb2NhbGV9XCI+JHtrZXlzW2ldfTwvaWRzLXRleHQ+XG4gICAgICA8L2lkcy1sYXlvdXQtZ3JpZC1jZWxsPmA7XG4gIH1cbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmFuc2xhdGlvbi1jb250YWluZXInKSBhcyBhbnkpLmlubmVySFRNTCA9IGh0bWw7XG59KCkpO1xuIl0sIm1hcHBpbmdzIjoiQ0FDQyxlQUFlLGVBQWU7QUFDN0IsTUFBSSxPQUFPO0FBRVgsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxZQUFpQixTQUFTLGNBQWMsZUFBZTtBQUM3RCxRQUFNLFVBQVUsWUFBWSxhQUFhO0FBR3pDLFFBQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxTQUFTLFFBQVE7QUFDcEQsV0FBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxZQUFRO0FBQUEscUNBQ3lCLEtBQUssQ0FBQztBQUFBO0FBQUE7QUFBQSxrREFHTyxrQkFBa0IsS0FBSyxDQUFDO0FBQUE7QUFBQSxFQUV4RTtBQUNBLEVBQUMsU0FBUyxjQUFjLHdCQUF3QixFQUFVLFlBQVk7QUFDeEUsR0FBRTsiLCJuYW1lcyI6W10sImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2lkcy1sb2NhbGUvZGVtb3MvZXhhbXBsZS50cy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-locale/demos/example.ts\n");

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
/******/ 		__webpack_require__.h = () => ("b93b8c20d15f32a7e13f")
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
/******/ 			"ids-locale-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-locale/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;