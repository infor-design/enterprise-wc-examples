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

/***/ "./src/components/ids-progress-bar/demos/example.ts":
/*!**********************************************************!*\
  !*** ./src/components/ids-progress-bar/demos/example.ts ***!
  \**********************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const btnUpdateVal = document.querySelector(\"#btn-progress-value\");\n  const btnDisable = document.querySelector(\"#btn-progress-disable\");\n  const btnSetLabel = document.querySelector(\"#btn-progress-set-label\");\n  const elem = document.querySelector(\"#elem-progress\") || {};\n  const orgValue = elem.value;\n  btnUpdateVal?.addEventListener(\"click\", (e) => {\n    if (elem.disabled) {\n      return;\n    }\n    e.target.toggle();\n    const max = \"100\";\n    elem.value = elem.value === max ? orgValue : max;\n  });\n  btnDisable?.addEventListener(\"click\", (e) => {\n    e.target.toggle();\n    elem.disabled = !elem.disabled;\n  });\n  btnSetLabel?.addEventListener(\"click\", (e) => {\n    if (elem.disabled) {\n      return;\n    }\n    e.target.toggle();\n    elem.labelAudible = !elem.labelAudible;\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1wcm9ncmVzcy1iYXIvZGVtb3MvZXhhbXBsZS50cz8zMzdjIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGJ0blVwZGF0ZVZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcHJvZ3Jlc3MtdmFsdWUnKTtcbiAgY29uc3QgYnRuRGlzYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcHJvZ3Jlc3MtZGlzYWJsZScpO1xuICBjb25zdCBidG5TZXRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcHJvZ3Jlc3Mtc2V0LWxhYmVsJyk7XG4gIGNvbnN0IGVsZW06IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbGVtLXByb2dyZXNzJykgfHwge307XG4gIGNvbnN0IG9yZ1ZhbHVlOiBhbnkgPSBlbGVtLnZhbHVlO1xuXG4gIC8vIFVwZGF0ZSBhbmQgcmVzZXQgdmFsdWVcbiAgYnRuVXBkYXRlVmFsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZWxlbS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnRhcmdldC50b2dnbGUoKTtcbiAgICBjb25zdCBtYXggPSAnMTAwJztcbiAgICBlbGVtLnZhbHVlID0gZWxlbS52YWx1ZSA9PT0gbWF4ID8gb3JnVmFsdWUgOiBtYXg7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBkaXNhYmxlL2VuYWJsZVxuICBidG5EaXNhYmxlPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICBlLnRhcmdldC50b2dnbGUoKTtcbiAgICBlbGVtLmRpc2FibGVkID0gIWVsZW0uZGlzYWJsZWQ7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZSBsYWJlbCBhdWRpYmxlXG4gIGJ0blNldExhYmVsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICBpZiAoZWxlbS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnRhcmdldC50b2dnbGUoKTtcbiAgICBlbGVtLmxhYmVsQXVkaWJsZSA9ICFlbGVtLmxhYmVsQXVkaWJsZTtcbiAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDbEQsUUFBTSxlQUFlLFNBQVMsY0FBYyxxQkFBcUI7QUFDakUsUUFBTSxhQUFhLFNBQVMsY0FBYyx1QkFBdUI7QUFDakUsUUFBTSxjQUFjLFNBQVMsY0FBYyx5QkFBeUI7QUFDcEUsUUFBTSxPQUFZLFNBQVMsY0FBYyxnQkFBZ0IsS0FBSyxDQUFDO0FBQy9ELFFBQU0sV0FBZ0IsS0FBSztBQUczQixnQkFBYyxpQkFBaUIsU0FBUyxDQUFDLE1BQVc7QUFDbEQsUUFBSSxLQUFLLFVBQVU7QUFDakI7QUFBQSxJQUNGO0FBQ0EsTUFBRSxPQUFPLE9BQU87QUFDaEIsVUFBTSxNQUFNO0FBQ1osU0FBSyxRQUFRLEtBQUssVUFBVSxNQUFNLFdBQVc7QUFBQSxFQUMvQyxDQUFDO0FBR0QsY0FBWSxpQkFBaUIsU0FBUyxDQUFDLE1BQVc7QUFDaEQsTUFBRSxPQUFPLE9BQU87QUFDaEIsU0FBSyxXQUFXLENBQUMsS0FBSztBQUFBLEVBQ3hCLENBQUM7QUFHRCxlQUFhLGlCQUFpQixTQUFTLENBQUMsTUFBVztBQUNqRCxRQUFJLEtBQUssVUFBVTtBQUNqQjtBQUFBLElBQ0Y7QUFDQSxNQUFFLE9BQU8sT0FBTztBQUNoQixTQUFLLGVBQWUsQ0FBQyxLQUFLO0FBQUEsRUFDNUIsQ0FBQztBQUNILENBQUM7IiwibmFtZXMiOltdLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtcHJvZ3Jlc3MtYmFyL2RlbW9zL2V4YW1wbGUudHMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-progress-bar/demos/example.ts\n");

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
/******/ 		__webpack_require__.h = () => ("fa881e121f73cf02bdf9")
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
/******/ 			"ids-progress-bar-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-progress-bar/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;