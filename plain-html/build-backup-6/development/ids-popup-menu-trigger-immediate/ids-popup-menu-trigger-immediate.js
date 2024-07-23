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

/***/ "./src/components/ids-popup-menu/demos/trigger-immediate.ts":
/*!******************************************************************!*\
  !*** ./src/components/ids-popup-menu/demos/trigger-immediate.ts ***!
  \******************************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const popupmenuEl = document.querySelector(\"ids-popup-menu\");\n  const popupEl = popupmenuEl.popup;\n  popupEl.align = \"top, left\";\n  popupEl.x = 20;\n  popupEl.y = 120;\n  popupmenuEl.addEventListener(\"selected\", (e) => {\n    console.info(`Item \"${e.detail.elem.text}\" was selected`);\n  });\n  popupEl.addEventListener(\"hide\", () => {\n    popupmenuEl.triggerType = \"contextmenu\";\n  }, { once: true });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1wb3B1cC1tZW51L2RlbW9zL3RyaWdnZXItaW1tZWRpYXRlLnRzPzE5MzciXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgcG9wdXBtZW51RWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1wb3B1cC1tZW51Jyk7XG4gIGNvbnN0IHBvcHVwRWwgPSBwb3B1cG1lbnVFbC5wb3B1cDtcblxuICAvLyBQcmVjb25maWd1cmUgdGhlIFBvcHVwXG4gIHBvcHVwRWwuYWxpZ24gPSAndG9wLCBsZWZ0JztcbiAgcG9wdXBFbC54ID0gMjA7XG4gIHBvcHVwRWwueSA9IDEyMDtcblxuICAvLyBMb2cgdG8gdGhlIGNvbnNvbGUgb24gYHNlbGVjdGVkYFxuICBwb3B1cG1lbnVFbC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZCcsIChlOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmluZm8oYEl0ZW0gXCIke2UuZGV0YWlsLmVsZW0udGV4dH1cIiB3YXMgc2VsZWN0ZWRgKTtcbiAgfSk7XG5cbiAgLy8gVGhlIGZpcnN0IHRpbWUgdGhlIFBvcHVwbWVudSBoaWRlcywgcmUtY29uZmlndXJlIGl0XG4gIC8vIHRvIGFjdGl2YXRlIGFnYWluIHdoZW4gY2xpY2tpbmcgb24gdGhlIHBhZ2UuXG4gIHBvcHVwRWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsICgpID0+IHtcbiAgICBwb3B1cG1lbnVFbC50cmlnZ2VyVHlwZSA9ICdjb250ZXh0bWVudSc7XG4gIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGlCQUFpQixvQkFBb0IsTUFBTTtBQUNsRCxRQUFNLGNBQW1CLFNBQVMsY0FBYyxnQkFBZ0I7QUFDaEUsUUFBTSxVQUFVLFlBQVk7QUFHNUIsVUFBUSxRQUFRO0FBQ2hCLFVBQVEsSUFBSTtBQUNaLFVBQVEsSUFBSTtBQUdaLGNBQVksaUJBQWlCLFlBQVksQ0FBQyxNQUFXO0FBQ25ELFlBQVEsS0FBSyxTQUFTLEVBQUUsT0FBTyxLQUFLLG9CQUFvQjtBQUFBLEVBQzFELENBQUM7QUFJRCxVQUFRLGlCQUFpQixRQUFRLE1BQU07QUFDckMsZ0JBQVksY0FBYztBQUFBLEVBQzVCLEdBQUcsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNuQixDQUFDOyIsIm5hbWVzIjpbXSwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaWRzLXBvcHVwLW1lbnUvZGVtb3MvdHJpZ2dlci1pbW1lZGlhdGUudHMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-popup-menu/demos/trigger-immediate.ts\n");

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
/******/ 		__webpack_require__.h = () => ("828ed0f4f5ac55dfacca")
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
/******/ 			"ids-popup-menu-trigger-immediate": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-popup-menu/demos/trigger-immediate.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;