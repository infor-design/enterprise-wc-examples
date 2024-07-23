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

/***/ "./src/components/ids-breadcrumb/demos/sandbox.ts":
/*!********************************************************!*\
  !*** ./src/components/ids-breadcrumb/demos/sandbox.ts ***!
  \********************************************************/
/***/ (() => {

eval("const enableListTruncationCheck = document.querySelector(\"#enable-truncation\");\nconst addBtn = document.querySelector(\"#add-new-breadcrumb\");\nconst removeBtn = document.querySelector(\"#remove-last-breadcrumb\");\nconst breadcrumb = document.querySelector(\"ids-breadcrumb\");\nconst disableBreadcrumbCheck = document.querySelector(\"#disable-breadcrumb\");\naddBtn.onclick = () => {\n  const link = document.createElement(\"ids-hyperlink\");\n  link.innerText = `Breadcrumb ${breadcrumb.children.length + 1}`;\n  link.href = \"#\";\n  link.disabled = disableBreadcrumbCheck.checked;\n  breadcrumb.add(link);\n};\nremoveBtn.onclick = () => breadcrumb.delete();\nenableListTruncationCheck.addEventListener(\"change\", (e) => {\n  breadcrumb.truncate = e.target?.checked;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1icmVhZGNydW1iL2RlbW9zL3NhbmRib3gudHM/YmJjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbmFibGVMaXN0VHJ1bmNhdGlvbkNoZWNrOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5hYmxlLXRydW5jYXRpb24nKTtcbmNvbnN0IGFkZEJ0bjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1uZXctYnJlYWRjcnVtYicpO1xuY29uc3QgcmVtb3ZlQnRuOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlLWxhc3QtYnJlYWRjcnVtYicpO1xuXG5jb25zdCBicmVhZGNydW1iOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZHMtYnJlYWRjcnVtYicpO1xuY29uc3QgZGlzYWJsZUJyZWFkY3J1bWJDaGVjazogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc2FibGUtYnJlYWRjcnVtYicpO1xuXG4vLyBDbGljayB0aGUgXCJBZGQgTGlua1wiIGJ1dHRvbiB0byBhZGQgYnJlYWRjcnVtYnNcbmFkZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb25zdCBsaW5rOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZHMtaHlwZXJsaW5rJyk7XG4gIGxpbmsuaW5uZXJUZXh0ID0gYEJyZWFkY3J1bWIgJHticmVhZGNydW1iLmNoaWxkcmVuLmxlbmd0aCArIDF9YDtcbiAgbGluay5ocmVmID0gJyMnO1xuICBsaW5rLmRpc2FibGVkID0gZGlzYWJsZUJyZWFkY3J1bWJDaGVjay5jaGVja2VkO1xuICBicmVhZGNydW1iLmFkZChsaW5rKTtcbn07XG5cbi8vIENsaWNrIFwicmVtb3ZlXCIgdG8gcmVtb3ZlXG5yZW1vdmVCdG4ub25jbGljayA9ICgpID0+IGJyZWFkY3J1bWIuZGVsZXRlKCk7XG5cbi8vIEVuYWJsZS9EaXNhYmxlIHRydW5jYXRpb25cbmVuYWJsZUxpc3RUcnVuY2F0aW9uQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICBicmVhZGNydW1iLnRydW5jYXRlID0gZS50YXJnZXQ/LmNoZWNrZWQ7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSw0QkFBaUMsU0FBUyxjQUFjLG9CQUFvQjtBQUNsRixNQUFNLFNBQWMsU0FBUyxjQUFjLHFCQUFxQjtBQUNoRSxNQUFNLFlBQWlCLFNBQVMsY0FBYyx5QkFBeUI7QUFFdkUsTUFBTSxhQUFrQixTQUFTLGNBQWMsZ0JBQWdCO0FBQy9ELE1BQU0seUJBQThCLFNBQVMsY0FBYyxxQkFBcUI7QUFHaEYsT0FBTyxVQUFVLE1BQU07QUFDckIsUUFBTSxPQUFZLFNBQVMsY0FBYyxlQUFlO0FBQ3hELE9BQUssWUFBWSxjQUFjLFdBQVcsU0FBUyxTQUFTO0FBQzVELE9BQUssT0FBTztBQUNaLE9BQUssV0FBVyx1QkFBdUI7QUFDdkMsYUFBVyxJQUFJLElBQUk7QUFDckI7QUFHQSxVQUFVLFVBQVUsTUFBTSxXQUFXLE9BQU87QUFHNUMsMEJBQTBCLGlCQUFpQixVQUFVLENBQUMsTUFBVztBQUMvRCxhQUFXLFdBQVcsRUFBRSxRQUFRO0FBQ2xDLENBQUM7IiwibmFtZXMiOltdLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtYnJlYWRjcnVtYi9kZW1vcy9zYW5kYm94LnRzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-breadcrumb/demos/sandbox.ts\n");

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
/******/ 			"ids-breadcrumb-sandbox": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-breadcrumb/demos/sandbox.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;