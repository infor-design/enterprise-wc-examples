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

/***/ "./src/components/ids-message/demos/example.ts":
/*!*****************************************************!*\
  !*** ./src/components/ids-message/demos/example.ts ***!
  \*****************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const triggerBtn = document.querySelector(\"#message-example-error-trigger\");\n  const message = document.querySelector(\"#message-example-error\");\n  if (!message) {\n    return;\n  }\n  message.target = triggerBtn;\n  message.triggerType = \"click\";\n  message.onButtonClick = (buttonEl) => {\n    const response = buttonEl.cancel ? \"cancelled\" : \"confirmed\";\n    console.info(`IdsMessage was ${response}`);\n    message.hide();\n  };\n  message.addEventListener(\"beforeshow\", () => {\n    triggerBtn.disabled = true;\n    return true;\n  });\n  message.addEventListener(\"hide\", () => {\n    triggerBtn.disabled = false;\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1tZXNzYWdlL2RlbW9zL2V4YW1wbGUudHM/YjEzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCB0cmlnZ2VyQnRuOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS1leGFtcGxlLWVycm9yLXRyaWdnZXInKTtcbiAgY29uc3QgbWVzc2FnZTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtZXhhbXBsZS1lcnJvcicpO1xuXG4gIGlmICghbWVzc2FnZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIExpbmsgdGhlIE1lc3NhZ2UgdG8gaXRzIHRyaWdnZXIgYnV0dG9uXG4gIG1lc3NhZ2UudGFyZ2V0ID0gdHJpZ2dlckJ0bjtcbiAgbWVzc2FnZS50cmlnZ2VyVHlwZSA9ICdjbGljayc7XG5cbiAgLy8gU2V0dXAgdGhlIHJlc3BvbnNlIGNhbGxiYWNrXG4gIG1lc3NhZ2Uub25CdXR0b25DbGljayA9IChidXR0b25FbDogYW55KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBidXR0b25FbC5jYW5jZWwgPyAnY2FuY2VsbGVkJyA6ICdjb25maXJtZWQnO1xuICAgIGNvbnNvbGUuaW5mbyhgSWRzTWVzc2FnZSB3YXMgJHtyZXNwb25zZX1gKTtcbiAgICBtZXNzYWdlLmhpZGUoKTtcbiAgfTtcblxuICAvLyBEaXNhYmxlIHRoZSB0cmlnZ2VyIGJ1dHRvbiB3aGVuIHNob3dpbmcgdGhlIE1vZGFsLlxuICBtZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXNob3cnLCAoKSA9PiB7XG4gICAgdHJpZ2dlckJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIC8vIEFmdGVyIHRoZSBtb2RhbCBpcyBkb25lIGhpZGluZywgcmUtZW5hYmxlIGl0cyB0cmlnZ2VyIGJ1dHRvbi5cbiAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xuICAgIHRyaWdnZXJCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDbEQsUUFBTSxhQUFrQixTQUFTLGNBQWMsZ0NBQWdDO0FBQy9FLFFBQU0sVUFBZSxTQUFTLGNBQWMsd0JBQXdCO0FBRXBFLE1BQUksQ0FBQyxTQUFTO0FBQ1o7QUFBQSxFQUNGO0FBR0EsVUFBUSxTQUFTO0FBQ2pCLFVBQVEsY0FBYztBQUd0QixVQUFRLGdCQUFnQixDQUFDLGFBQWtCO0FBQ3pDLFVBQU0sV0FBVyxTQUFTLFNBQVMsY0FBYztBQUNqRCxZQUFRLEtBQUssa0JBQWtCLFVBQVU7QUFDekMsWUFBUSxLQUFLO0FBQUEsRUFDZjtBQUdBLFVBQVEsaUJBQWlCLGNBQWMsTUFBTTtBQUMzQyxlQUFXLFdBQVc7QUFDdEIsV0FBTztBQUFBLEVBQ1QsQ0FBQztBQUdELFVBQVEsaUJBQWlCLFFBQVEsTUFBTTtBQUNyQyxlQUFXLFdBQVc7QUFBQSxFQUN4QixDQUFDO0FBQ0gsQ0FBQzsiLCJuYW1lcyI6W10sImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2lkcy1tZXNzYWdlL2RlbW9zL2V4YW1wbGUudHMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-message/demos/example.ts\n");

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
/******/ 			"ids-message-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-message/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;