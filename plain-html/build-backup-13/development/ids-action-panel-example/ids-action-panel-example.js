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

/***/ "./src/components/ids-action-panel/demos/example.ts":
/*!**********************************************************!*\
  !*** ./src/components/ids-action-panel/demos/example.ts ***!
  \**********************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const triggerId = \"#cap-trigger-btn\";\n  const triggerBtn = document.querySelector(triggerId);\n  const cap = document.querySelector(\"ids-action-panel\");\n  cap.target = triggerBtn;\n  cap.triggerType = \"click\";\n  cap.addEventListener(\"beforeshow\", () => {\n    triggerBtn.disabled = true;\n    return true;\n  });\n  cap.onButtonClick = () => {\n    cap.hide();\n  };\n  cap.addEventListener(\"hide\", () => {\n    triggerBtn.disabled = false;\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1hY3Rpb24tcGFuZWwvZGVtb3MvZXhhbXBsZS50cz9jNDBlIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHRyaWdnZXJJZDogYW55ID0gJyNjYXAtdHJpZ2dlci1idG4nO1xuICBjb25zdCB0cmlnZ2VyQnRuOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRyaWdnZXJJZCk7XG4gIGNvbnN0IGNhcDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLWFjdGlvbi1wYW5lbCcpO1xuXG4gIC8vIExpbmtzIHRoZSBDQVAgdG8gaXRzIHRyaWdnZXIgYnV0dG9uIChzZXRzIHVwIGNsaWNrL2ZvY3VzIGV2ZW50cylcbiAgY2FwLnRhcmdldCA9IHRyaWdnZXJCdG47XG4gIGNhcC50cmlnZ2VyVHlwZSA9ICdjbGljayc7XG5cbiAgLy8gRGlzYWJsZSB0aGUgdHJpZ2dlciBidXR0b24gd2hlbiBzaG93aW5nIHRoZSBDQVAuXG4gIGNhcC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVzaG93JywgKCkgPT4ge1xuICAgIHRyaWdnZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICAvLyBDbG9zZSB0aGUgbW9kYWwgd2hlbiBpdHMgaW5uZXIgYnV0dG9ucyBhcmUgY2xpY2tlZFxuICAvLyAodGhpcyBjYW4gYmUgaW4gdGhlIHN0YW5kYXJkIGJ1dHRvbiBhcmVhLCBPUiBpbnNpZGUgYSBUb29sYmFyKVxuICBjYXAub25CdXR0b25DbGljayA9ICgpID0+IHtcbiAgICBjYXAuaGlkZSgpO1xuICB9O1xuXG4gIC8vIEFmdGVyIHRoZSBtb2RhbCBpcyBkb25lIGhpZGluZywgcmUtZW5hYmxlIGl0cyB0cmlnZ2VyIGJ1dHRvbi5cbiAgY2FwLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XG4gICAgdHJpZ2dlckJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGlCQUFpQixvQkFBb0IsTUFBTTtBQUNsRCxRQUFNLFlBQWlCO0FBQ3ZCLFFBQU0sYUFBa0IsU0FBUyxjQUFjLFNBQVM7QUFDeEQsUUFBTSxNQUFXLFNBQVMsY0FBYyxrQkFBa0I7QUFHMUQsTUFBSSxTQUFTO0FBQ2IsTUFBSSxjQUFjO0FBR2xCLE1BQUksaUJBQWlCLGNBQWMsTUFBTTtBQUN2QyxlQUFXLFdBQVc7QUFDdEIsV0FBTztBQUFBLEVBQ1QsQ0FBQztBQUlELE1BQUksZ0JBQWdCLE1BQU07QUFDeEIsUUFBSSxLQUFLO0FBQUEsRUFDWDtBQUdBLE1BQUksaUJBQWlCLFFBQVEsTUFBTTtBQUNqQyxlQUFXLFdBQVc7QUFBQSxFQUN4QixDQUFDO0FBQ0gsQ0FBQzsiLCJuYW1lcyI6W10sImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2lkcy1hY3Rpb24tcGFuZWwvZGVtb3MvZXhhbXBsZS50cy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-action-panel/demos/example.ts\n");

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
/******/ 		__webpack_require__.h = () => ("c30130eb833f399b5475")
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
/******/ 			"ids-action-panel-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-action-panel/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;