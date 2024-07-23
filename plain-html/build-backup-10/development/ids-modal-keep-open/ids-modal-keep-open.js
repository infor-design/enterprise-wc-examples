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

/***/ "./src/components/ids-modal/demos/keep-open.ts":
/*!*****************************************************!*\
  !*** ./src/components/ids-modal/demos/keep-open.ts ***!
  \*****************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const triggerId = \"#modal-trigger-btn\";\n  const triggerBtn = document.querySelector(triggerId);\n  const modal = document.querySelector(\"ids-modal\");\n  modal.target = triggerBtn;\n  modal.triggerType = \"click\";\n  modal.addEventListener(\"beforeshow\", () => {\n    triggerBtn.disabled = true;\n    return true;\n  });\n  modal.onButtonClick = () => {\n    modal.hide();\n  };\n  modal.addEventListener(\"hide\", () => {\n    triggerBtn.disabled = false;\n  });\n  const checkbox = document.querySelector(\"ids-checkbox\");\n  const defaultOnOutsideClick = modal.onOutsideClick;\n  checkbox.addEventListener(\"change\", (e) => {\n    const isChecked = e.target.checked;\n    if (isChecked) {\n      modal.onOutsideClick = defaultOnOutsideClick;\n    } else {\n      modal.onOutsideClick = () => {\n      };\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1tb2RhbC9kZW1vcy9rZWVwLW9wZW4udHM/MzEwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCB0cmlnZ2VySWQgPSAnI21vZGFsLXRyaWdnZXItYnRuJztcbiAgY29uc3QgdHJpZ2dlckJ0bjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0cmlnZ2VySWQpO1xuICBjb25zdCBtb2RhbDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLW1vZGFsJyk7XG5cbiAgLy8gTGlua3MgdGhlIE1vZGFsIHRvIGl0cyB0cmlnZ2VyIGJ1dHRvbiAoc2V0cyB1cCBjbGljay9mb2N1cyBldmVudHMpXG4gIG1vZGFsLnRhcmdldCA9IHRyaWdnZXJCdG47XG4gIG1vZGFsLnRyaWdnZXJUeXBlID0gJ2NsaWNrJztcblxuICAvLyBEaXNhYmxlIHRoZSB0cmlnZ2VyIGJ1dHRvbiB3aGVuIHNob3dpbmcgdGhlIE1vZGFsLlxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVzaG93JywgKCkgPT4ge1xuICAgIHRyaWdnZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICAvLyBDbG9zZSB0aGUgbW9kYWwgd2hlbiBpdHMgaW5uZXIgYnV0dG9uIGlzIGNsaWNrZWQuXG4gIG1vZGFsLm9uQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgbW9kYWwuaGlkZSgpO1xuICB9O1xuXG4gIC8vIEFmdGVyIHRoZSBtb2RhbCBpcyBkb25lIGhpZGluZywgcmUtZW5hYmxlIGl0cyB0cmlnZ2VyIGJ1dHRvbi5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsICgpID0+IHtcbiAgICB0cmlnZ2VyQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBDbG9zZSBiZWhhdmlvclxuXG4gIGNvbnN0IGNoZWNrYm94OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZHMtY2hlY2tib3gnKTtcbiAgY29uc3QgZGVmYXVsdE9uT3V0c2lkZUNsaWNrID0gbW9kYWwub25PdXRzaWRlQ2xpY2s7XG5cbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXNDaGVja2VkID0gKGUudGFyZ2V0IGFzIGFueSkuY2hlY2tlZDtcbiAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICBtb2RhbC5vbk91dHNpZGVDbGljayA9IGRlZmF1bHRPbk91dHNpZGVDbGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGBvbk91dHNpZGVDbGlja2AgdG8ganVzdCBrZWVwIHRoZSBNb2RhbCBvcGVuXG4gICAgICBtb2RhbC5vbk91dHNpZGVDbGljayA9ICgpID0+IHt9O1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDbEQsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sYUFBa0IsU0FBUyxjQUFjLFNBQVM7QUFDeEQsUUFBTSxRQUFhLFNBQVMsY0FBYyxXQUFXO0FBR3JELFFBQU0sU0FBUztBQUNmLFFBQU0sY0FBYztBQUdwQixRQUFNLGlCQUFpQixjQUFjLE1BQU07QUFDekMsZUFBVyxXQUFXO0FBQ3RCLFdBQU87QUFBQSxFQUNULENBQUM7QUFHRCxRQUFNLGdCQUFnQixNQUFNO0FBQzFCLFVBQU0sS0FBSztBQUFBLEVBQ2I7QUFHQSxRQUFNLGlCQUFpQixRQUFRLE1BQU07QUFDbkMsZUFBVyxXQUFXO0FBQUEsRUFDeEIsQ0FBQztBQUtELFFBQU0sV0FBZ0IsU0FBUyxjQUFjLGNBQWM7QUFDM0QsUUFBTSx3QkFBd0IsTUFBTTtBQUVwQyxXQUFTLGlCQUFpQixVQUFVLENBQUMsTUFBbUI7QUFDdEQsVUFBTSxZQUFhLEVBQUUsT0FBZTtBQUNwQyxRQUFJLFdBQVc7QUFDYixZQUFNLGlCQUFpQjtBQUFBLElBQ3pCLE9BQU87QUFFTCxZQUFNLGlCQUFpQixNQUFNO0FBQUEsTUFBQztBQUFBLElBQ2hDO0FBQUEsRUFDRixDQUFDO0FBQ0gsQ0FBQzsiLCJuYW1lcyI6W10sImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2lkcy1tb2RhbC9kZW1vcy9rZWVwLW9wZW4udHMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-modal/demos/keep-open.ts\n");

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
/******/ 		__webpack_require__.h = () => ("c877cfadba00fac98356")
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
/******/ 			"ids-modal-keep-open": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-modal/demos/keep-open.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;