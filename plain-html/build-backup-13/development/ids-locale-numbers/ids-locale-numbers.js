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

/***/ "./src/components/ids-locale/demos/numbers.ts":
/*!****************************************************!*\
  !*** ./src/components/ids-locale/demos/numbers.ts ***!
  \****************************************************/
/***/ (() => {

eval("const container = document.querySelector(\"ids-container\");\n(async function runExamples() {\n  const append = (number) => {\n    const html = `<ids-layout-grid-cell col-span=\"3\">\n    <ids-text>${number}</ids-text>\n    </ids-layout-grid-cell>`;\n    document.querySelector(\"#container\").insertAdjacentHTML(\"beforeend\", html);\n  };\n  await container.setLocale(\"de-DE\");\n  await container.setLocale(\"en-US\");\n  append(container.localeAPI.formatNumber(1.0019, {\n    style: \"decimal\",\n    minimumFractionDigits: 0,\n    maximumFractionDigits: 3\n  }));\n  let num = \"123456789012.123456\";\n  append(container.localeAPI.formatNumber(num, {\n    style: \"decimal\",\n    minimumFractionDigits: 7,\n    maximumFractionDigits: 7\n  }));\n  num = \"123456789012.123456\";\n  append(container.localeAPI.formatNumber(num, {\n    style: \"decimal\",\n    minimumFractionDigits: 6,\n    maximumFractionDigits: 6\n  }));\n  num = \"123456789012.123456\";\n  append(container.localeAPI.formatNumber(num, {\n    style: \"decimal\",\n    minimumFractionDigits: 5,\n    maximumFractionDigits: 5\n  }));\n  num = \"123456789012345678.123456\";\n  append(container.localeAPI.formatNumber(num, {\n    style: \"decimal\",\n    minimumFractionDigits: 5,\n    maximumFractionDigits: 5\n  }));\n  container.setLocale(\"en-US\");\n  append(container.localeAPI.formatNumber(\"12,345.123\"));\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1sb2NhbGUvZGVtb3MvbnVtYmVycy50cz83MzNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFVzZSB0aGUgY29udGFpbmVyIHRvIHNldCB0aGUgbGFuZ3VhZ2VcbmNvbnN0IGNvbnRhaW5lcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLWNvbnRhaW5lcicpO1xuXG4vLyBBc3luY3Jvbm91c2x5IGxvYWQgYSBsYW5ndWFnZSBhbmQgZGlzcGxheSB0aGUgc3RyaW5nc1xuKGFzeW5jIGZ1bmN0aW9uIHJ1bkV4YW1wbGVzKCkge1xuICBjb25zdCBhcHBlbmQgPSAobnVtYmVyOiBhbnkpID0+IHtcbiAgICBjb25zdCBodG1sID0gYDxpZHMtbGF5b3V0LWdyaWQtY2VsbCBjb2wtc3Bhbj1cIjNcIj5cbiAgICA8aWRzLXRleHQ+JHtudW1iZXJ9PC9pZHMtdGV4dD5cbiAgICA8L2lkcy1sYXlvdXQtZ3JpZC1jZWxsPmA7XG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKSBhcyBhbnkpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gIH07XG5cbiAgLy8gU2V0IGxvY2FsZSBhbmQgd2FpdCBmb3IgaXQgdG8gbG9hZFxuICBhd2FpdCBjb250YWluZXIuc2V0TG9jYWxlKCdkZS1ERScpO1xuICBhd2FpdCBjb250YWluZXIuc2V0TG9jYWxlKCdlbi1VUycpO1xuXG4gIC8vIFNob3cgc29tZSBudW1iZXJzIGluIHRoZSBwYWdlXG4gIGFwcGVuZChjb250YWluZXIubG9jYWxlQVBJLmZvcm1hdE51bWJlcigxLjAwMTksIHtcbiAgICBzdHlsZTogJ2RlY2ltYWwnLFxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDNcbiAgfSkpO1xuXG4gIGxldCBudW0gPSAnMTIzNDU2Nzg5MDEyLjEyMzQ1Nic7XG4gIGFwcGVuZChjb250YWluZXIubG9jYWxlQVBJLmZvcm1hdE51bWJlcihudW0sIHtcbiAgICBzdHlsZTogJ2RlY2ltYWwnLFxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogNyxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDdcbiAgfSkpO1xuXG4gIG51bSA9ICcxMjM0NTY3ODkwMTIuMTIzNDU2JztcbiAgYXBwZW5kKGNvbnRhaW5lci5sb2NhbGVBUEkuZm9ybWF0TnVtYmVyKG51bSwge1xuICAgIHN0eWxlOiAnZGVjaW1hbCcsXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiA2LFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogNlxuICB9KSk7XG5cbiAgbnVtID0gJzEyMzQ1Njc4OTAxMi4xMjM0NTYnO1xuICBhcHBlbmQoY29udGFpbmVyLmxvY2FsZUFQSS5mb3JtYXROdW1iZXIobnVtLCB7XG4gICAgc3R5bGU6ICdkZWNpbWFsJyxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDUsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiA1XG4gIH0pKTtcblxuICBudW0gPSAnMTIzNDU2Nzg5MDEyMzQ1Njc4LjEyMzQ1Nic7XG4gIGFwcGVuZChjb250YWluZXIubG9jYWxlQVBJLmZvcm1hdE51bWJlcihudW0sIHtcbiAgICBzdHlsZTogJ2RlY2ltYWwnLFxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogNSxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDVcbiAgfSkpO1xuXG4gIGNvbnRhaW5lci5zZXRMb2NhbGUoJ2VuLVVTJyk7XG4gIGFwcGVuZChjb250YWluZXIubG9jYWxlQVBJLmZvcm1hdE51bWJlcignMTIsMzQ1LjEyMycpKTtcbn0oKSk7XG4iXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sWUFBaUIsU0FBUyxjQUFjLGVBQWU7QUFBQSxDQUc1RCxlQUFlLGNBQWM7QUFDNUIsUUFBTSxTQUFTLENBQUMsV0FBZ0I7QUFDOUIsVUFBTSxPQUFPO0FBQUEsZ0JBQ0Q7QUFBQTtBQUVaLElBQUMsU0FBUyxjQUFjLFlBQVksRUFBVSxtQkFBbUIsYUFBYSxJQUFJO0FBQUEsRUFDcEY7QUFHQSxRQUFNLFVBQVUsVUFBVSxPQUFPO0FBQ2pDLFFBQU0sVUFBVSxVQUFVLE9BQU87QUFHakMsU0FBTyxVQUFVLFVBQVUsYUFBYSxRQUFRO0FBQUEsSUFDOUMsT0FBTztBQUFBLElBQ1AsdUJBQXVCO0FBQUEsSUFDdkIsdUJBQXVCO0FBQUEsRUFDekIsQ0FBQyxDQUFDO0FBRUYsTUFBSSxNQUFNO0FBQ1YsU0FBTyxVQUFVLFVBQVUsYUFBYSxLQUFLO0FBQUEsSUFDM0MsT0FBTztBQUFBLElBQ1AsdUJBQXVCO0FBQUEsSUFDdkIsdUJBQXVCO0FBQUEsRUFDekIsQ0FBQyxDQUFDO0FBRUYsUUFBTTtBQUNOLFNBQU8sVUFBVSxVQUFVLGFBQWEsS0FBSztBQUFBLElBQzNDLE9BQU87QUFBQSxJQUNQLHVCQUF1QjtBQUFBLElBQ3ZCLHVCQUF1QjtBQUFBLEVBQ3pCLENBQUMsQ0FBQztBQUVGLFFBQU07QUFDTixTQUFPLFVBQVUsVUFBVSxhQUFhLEtBQUs7QUFBQSxJQUMzQyxPQUFPO0FBQUEsSUFDUCx1QkFBdUI7QUFBQSxJQUN2Qix1QkFBdUI7QUFBQSxFQUN6QixDQUFDLENBQUM7QUFFRixRQUFNO0FBQ04sU0FBTyxVQUFVLFVBQVUsYUFBYSxLQUFLO0FBQUEsSUFDM0MsT0FBTztBQUFBLElBQ1AsdUJBQXVCO0FBQUEsSUFDdkIsdUJBQXVCO0FBQUEsRUFDekIsQ0FBQyxDQUFDO0FBRUYsWUFBVSxVQUFVLE9BQU87QUFDM0IsU0FBTyxVQUFVLFVBQVUsYUFBYSxZQUFZLENBQUM7QUFDdkQsR0FBRTsiLCJuYW1lcyI6W10sImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2lkcy1sb2NhbGUvZGVtb3MvbnVtYmVycy50cy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-locale/demos/numbers.ts\n");

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
/******/ 			"ids-locale-numbers": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-locale/demos/numbers.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;