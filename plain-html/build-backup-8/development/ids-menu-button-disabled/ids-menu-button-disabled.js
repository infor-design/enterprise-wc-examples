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

/***/ "./src/components/ids-menu-button/demos/disabled.ts":
/*!**********************************************************!*\
  !*** ./src/components/ids-menu-button/demos/disabled.ts ***!
  \**********************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const menuBtnEl = document.querySelector(\"ids-menu-button\");\n  const toggleDisabledCheck = document.querySelector(\"#toggle-disabled-menubutton\");\n  toggleDisabledCheck.addEventListener(\"change\", (e) => {\n    menuBtnEl.disabled = e.target.checked;\n  });\n  const forceMenuCheck = document.querySelector(\"#force-menu-show\");\n  const defaultOnOutsideClick = menuBtnEl.menuEl.onOutsideClick;\n  forceMenuCheck.addEventListener(\"change\", (e) => {\n    const checked = e.target.checked;\n    menuBtnEl.menuEl.keepOpen = checked;\n    if (checked) {\n      menuBtnEl.menuEl.show();\n      menuBtnEl.menuEl.onOutsideClick = () => {\n      };\n    } else {\n      menuBtnEl.menuEl.onOutsideClick = defaultOnOutsideClick;\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1tZW51LWJ1dHRvbi9kZW1vcy9kaXNhYmxlZC50cz9jOGU1Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IG1lbnVCdG5FbDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLW1lbnUtYnV0dG9uJyk7XG5cbiAgY29uc3QgdG9nZ2xlRGlzYWJsZWRDaGVjazogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1kaXNhYmxlZC1tZW51YnV0dG9uJyk7XG4gIHRvZ2dsZURpc2FibGVkQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgIG1lbnVCdG5FbC5kaXNhYmxlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gIH0pO1xuXG4gIGNvbnN0IGZvcmNlTWVudUNoZWNrOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9yY2UtbWVudS1zaG93Jyk7XG4gIGNvbnN0IGRlZmF1bHRPbk91dHNpZGVDbGljayA9IG1lbnVCdG5FbC5tZW51RWwub25PdXRzaWRlQ2xpY2s7XG4gIGZvcmNlTWVudUNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICBtZW51QnRuRWwubWVudUVsLmtlZXBPcGVuID0gY2hlY2tlZDtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgbWVudUJ0bkVsLm1lbnVFbC5zaG93KCk7XG4gICAgICBtZW51QnRuRWwubWVudUVsLm9uT3V0c2lkZUNsaWNrID0gKCkgPT4ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVCdG5FbC5tZW51RWwub25PdXRzaWRlQ2xpY2sgPSBkZWZhdWx0T25PdXRzaWRlQ2xpY2s7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGlCQUFpQixvQkFBb0IsTUFBTTtBQUNsRCxRQUFNLFlBQWlCLFNBQVMsY0FBYyxpQkFBaUI7QUFFL0QsUUFBTSxzQkFBMkIsU0FBUyxjQUFjLDZCQUE2QjtBQUNyRixzQkFBb0IsaUJBQWlCLFVBQVUsQ0FBQyxNQUFXO0FBQ3pELGNBQVUsV0FBVyxFQUFFLE9BQU87QUFBQSxFQUNoQyxDQUFDO0FBRUQsUUFBTSxpQkFBc0IsU0FBUyxjQUFjLGtCQUFrQjtBQUNyRSxRQUFNLHdCQUF3QixVQUFVLE9BQU87QUFDL0MsaUJBQWUsaUJBQWlCLFVBQVUsQ0FBQyxNQUFXO0FBQ3BELFVBQU0sVUFBVSxFQUFFLE9BQU87QUFDekIsY0FBVSxPQUFPLFdBQVc7QUFDNUIsUUFBSSxTQUFTO0FBQ1gsZ0JBQVUsT0FBTyxLQUFLO0FBQ3RCLGdCQUFVLE9BQU8saUJBQWlCLE1BQU07QUFBQSxNQUFDO0FBQUEsSUFDM0MsT0FBTztBQUNMLGdCQUFVLE9BQU8saUJBQWlCO0FBQUEsSUFDcEM7QUFBQSxFQUNGLENBQUM7QUFDSCxDQUFDOyIsIm5hbWVzIjpbXSwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaWRzLW1lbnUtYnV0dG9uL2RlbW9zL2Rpc2FibGVkLnRzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-menu-button/demos/disabled.ts\n");

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
/******/ 		__webpack_require__.h = () => ("216ac2806d0661883707")
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
/******/ 			"ids-menu-button-disabled": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-menu-button/demos/disabled.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;