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

/***/ "./src/components/ids-upload-advanced/demos/example.ts":
/*!*************************************************************!*\
  !*** ./src/components/ids-upload-advanced/demos/example.ts ***!
  \*************************************************************/
/***/ (() => {

eval("function customSendMethodXhr(formData, uiElem) {\n  const xhr = new XMLHttpRequest();\n  xhr.upload.addEventListener(\"progress\", uiElem.progressHandler.bind(uiElem), false);\n  xhr.addEventListener(\"load\", uiElem.completeHandler.bind(uiElem), false);\n  xhr.addEventListener(\"error\", uiElem.errorHandler.bind(uiElem), false);\n  xhr.addEventListener(\"abort\", uiElem.abortHandler.bind(uiElem), false);\n  xhr.open(\"POST\", \"http://localhost:4300/upload\");\n  xhr.send(formData);\n  uiElem?.addEventListener(\"abort\", () => {\n    xhr.abort();\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const uploadEl = document.querySelector(\"#elem-upload-advanced-send\");\n  if (uploadEl) {\n    uploadEl.send = customSendMethodXhr;\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy11cGxvYWQtYWR2YW5jZWQvZGVtb3MvZXhhbXBsZS50cz9lMTVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXhhbXBsZSB0byBzaG93IHRoZSB3YXkgdG8gY3VzdG9tIHNlbmQgbWV0aG9kIGZvciB1cGxvYWRpbmcgZmlsZXMuXG4gKiBTZW5kIGZpbGVzIHRvIERlbW8gQXBwIHNlcnZlciwgZmlsZXMgd2lsbCByZW1vdmUgc29vbiB1cGxvYWRlZC5cbiAqIEluIENocm9tZSBuZXR3b3JrIHRhYiwgc2ltdWxhdGUgYSBzbG93IGludGVybmV0IGNvbm5lY3Rpb24gZm9yIHRlc3RpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBmb3JtRGF0YSBDb250YWlucyB0aGUgZmlsZSBkYXRhLlxuICogQHBhcmFtIHtvYmplY3R9IHVpRWxlbSBUaGUgdWkgZWxlbWVudFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGN1c3RvbVNlbmRNZXRob2RYaHIoZm9ybURhdGE6IGFueSwgdWlFbGVtOiBhbnkpIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCB1aUVsZW0ucHJvZ3Jlc3NIYW5kbGVyLmJpbmQodWlFbGVtKSwgZmFsc2UpO1xuICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHVpRWxlbS5jb21wbGV0ZUhhbmRsZXIuYmluZCh1aUVsZW0pLCBmYWxzZSk7XG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHVpRWxlbS5lcnJvckhhbmRsZXIuYmluZCh1aUVsZW0pLCBmYWxzZSk7XG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHVpRWxlbS5hYm9ydEhhbmRsZXIuYmluZCh1aUVsZW0pLCBmYWxzZSk7XG4gIHhoci5vcGVuKCdQT1NUJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6NDMwMC91cGxvYWQnKTtcbiAgeGhyLnNlbmQoZm9ybURhdGEpO1xuXG4gIC8vIEZpbGUgYWJvcnRcbiAgdWlFbGVtPy5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICB4aHIuYWJvcnQoKTtcbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHVwbG9hZEVsOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWxlbS11cGxvYWQtYWR2YW5jZWQtc2VuZCcpO1xuICBpZiAodXBsb2FkRWwpIHtcbiAgICB1cGxvYWRFbC5zZW5kID0gY3VzdG9tU2VuZE1ldGhvZFhocjtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQVFBLFNBQVMsb0JBQW9CLFVBQWUsUUFBYTtBQUN2RCxRQUFNLE1BQU0sSUFBSSxlQUFlO0FBQy9CLE1BQUksT0FBTyxpQkFBaUIsWUFBWSxPQUFPLGdCQUFnQixLQUFLLE1BQU0sR0FBRyxLQUFLO0FBQ2xGLE1BQUksaUJBQWlCLFFBQVEsT0FBTyxnQkFBZ0IsS0FBSyxNQUFNLEdBQUcsS0FBSztBQUN2RSxNQUFJLGlCQUFpQixTQUFTLE9BQU8sYUFBYSxLQUFLLE1BQU0sR0FBRyxLQUFLO0FBQ3JFLE1BQUksaUJBQWlCLFNBQVMsT0FBTyxhQUFhLEtBQUssTUFBTSxHQUFHLEtBQUs7QUFDckUsTUFBSSxLQUFLLFFBQVEsOEJBQThCO0FBQy9DLE1BQUksS0FBSyxRQUFRO0FBR2pCLFVBQVEsaUJBQWlCLFNBQVMsTUFBTTtBQUN0QyxRQUFJLE1BQU07QUFBQSxFQUNaLENBQUM7QUFDSDtBQUVBLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELFFBQU0sV0FBZ0IsU0FBUyxjQUFjLDRCQUE0QjtBQUN6RSxNQUFJLFVBQVU7QUFDWixhQUFTLE9BQU87QUFBQSxFQUNsQjtBQUNGLENBQUM7IiwibmFtZXMiOltdLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtdXBsb2FkLWFkdmFuY2VkL2RlbW9zL2V4YW1wbGUudHMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-upload-advanced/demos/example.ts\n");

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
/******/ 		__webpack_require__.h = () => ("32a897c9506c6bf2ea1d")
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
/******/ 			"ids-upload-advanced-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-upload-advanced/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;