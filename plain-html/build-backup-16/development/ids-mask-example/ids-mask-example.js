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

/***/ "./src/components/ids-mask/demos/example.ts":
/*!**************************************************!*\
  !*** ./src/components/ids-mask/demos/example.ts ***!
  \**************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const phoneInput = document.querySelector(\"#mask-phone-number\");\n  if (!phoneInput)\n    return;\n  phoneInput.mask = [\"(\", /[1-9]/, /\\d/, /\\d/, \")\", \" \", /\\d/, /\\d/, /\\d/, \"-\", /\\d/, /\\d/, /\\d/, /\\d/];\n  const dateInput = document.querySelector(\"#mask-date\");\n  dateInput.mask = \"date\";\n  dateInput.maskOptions = {\n    format: \"M/d/yyyy hh:mm a\"\n  };\n  const numberInput = document.querySelector(\"#mask-number\");\n  numberInput.mask = \"number\";\n  numberInput.maskOptions = {\n    allowDecimal: true,\n    allowNegative: true,\n    allowThousandsSeparator: true,\n    decimalLimit: 2,\n    integerLimit: 7\n  };\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1tYXNrL2RlbW9zL2V4YW1wbGUudHM/YzczOSJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBQaG9uZSBOdW1iZXIgSW5wdXQgLSBzdGFuZGFyZCBwYXR0ZXJuIG1hc2tcbiAgY29uc3QgcGhvbmVJbnB1dDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hc2stcGhvbmUtbnVtYmVyJyk7XG4gIGlmICghcGhvbmVJbnB1dCkgcmV0dXJuO1xuICBwaG9uZUlucHV0Lm1hc2sgPSBbJygnLCAvWzEtOV0vLCAvXFxkLywgL1xcZC8sICcpJywgJyAnLCAvXFxkLywgL1xcZC8sIC9cXGQvLCAnLScsIC9cXGQvLCAvXFxkLywgL1xcZC8sIC9cXGQvXTtcblxuICAvLyBEYXRlIElucHV0IC0gdXNlIGBkYXRlYCBzdHJpbmcgdG8gcHJlLWNvbmZpZ3VyZSB0aGUgaW50ZXJuYWwgRGF0ZSBNYXNrXG4gIGNvbnN0IGRhdGVJbnB1dDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hc2stZGF0ZScpO1xuICBkYXRlSW5wdXQubWFzayA9ICdkYXRlJztcbiAgZGF0ZUlucHV0Lm1hc2tPcHRpb25zID0ge1xuICAgIGZvcm1hdDogJ00vZC95eXl5IGhoOm1tIGEnXG4gIH07XG5cbiAgLy8gTnVtYmVyIElucHV0IC0gdXNlIGBudW1iZXJgIHN0cmluZyB0byBwcmUtY29uZmlndXJlIHRoZSBpbnRlcm5hbCBOdW1iZXIgTWFza1xuICBjb25zdCBudW1iZXJJbnB1dDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hc2stbnVtYmVyJyk7XG4gIG51bWJlcklucHV0Lm1hc2sgPSAnbnVtYmVyJztcbiAgbnVtYmVySW5wdXQubWFza09wdGlvbnMgPSB7XG4gICAgYWxsb3dEZWNpbWFsOiB0cnVlLFxuICAgIGFsbG93TmVnYXRpdmU6IHRydWUsXG4gICAgYWxsb3dUaG91c2FuZHNTZXBhcmF0b3I6IHRydWUsXG4gICAgZGVjaW1hbExpbWl0OiAyLFxuICAgIGludGVnZXJMaW1pdDogN1xuICB9O1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBRWxELFFBQU0sYUFBa0IsU0FBUyxjQUFjLG9CQUFvQjtBQUNuRSxNQUFJLENBQUM7QUFBWTtBQUNqQixhQUFXLE9BQU8sQ0FBQyxLQUFLLFNBQVMsTUFBTSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFHcEcsUUFBTSxZQUFpQixTQUFTLGNBQWMsWUFBWTtBQUMxRCxZQUFVLE9BQU87QUFDakIsWUFBVSxjQUFjO0FBQUEsSUFDdEIsUUFBUTtBQUFBLEVBQ1Y7QUFHQSxRQUFNLGNBQW1CLFNBQVMsY0FBYyxjQUFjO0FBQzlELGNBQVksT0FBTztBQUNuQixjQUFZLGNBQWM7QUFBQSxJQUN4QixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsSUFDZix5QkFBeUI7QUFBQSxJQUN6QixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsIm5hbWVzIjpbXSwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaWRzLW1hc2svZGVtb3MvZXhhbXBsZS50cy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-mask/demos/example.ts\n");

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
/******/ 		__webpack_require__.h = () => ("8f8cb4b11203c863bf42")
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
/******/ 			"ids-mask-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-mask/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;