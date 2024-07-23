/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ids-calendar/demos/example.ts":
/*!******************************************************!*\
  !*** ./src/components/ids-calendar/demos/example.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_data_events_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/events.json */ \"./src/assets/data/events.json\");\n/* harmony import */ var _assets_data_event_types_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/event-types.json */ \"./src/assets/data/event-types.json\");\n\n\nconst eventsURL = _assets_data_events_json__WEBPACK_IMPORTED_MODULE_0__;\nconst eventTypesURL = _assets_data_event_types_json__WEBPACK_IMPORTED_MODULE_1__;\nfunction getCalendarEvents() {\n  return fetch(eventsURL).then((res) => res.json());\n}\nfunction getEventTypes() {\n  return fetch(eventTypesURL).then((res) => res.json());\n}\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n  const calendar = document.querySelector(\"ids-calendar\");\n  const addEventMenu = document.querySelector(\"#add-event\");\n  calendar.eventTypesData = await getEventTypes();\n  calendar.eventsData = await getCalendarEvents();\n  addEventMenu?.addEventListener(\"selected\", (evt) => {\n    const id = Date.now().toString() + Math.floor(Math.random() * 100);\n    switch (evt.detail.value) {\n      case \"add-modal\":\n        calendar.createNewEvent(id, true);\n        break;\n      case \"add-api\":\n        calendar.createNewEvent(id, false);\n        break;\n      case \"clear\":\n        calendar.clearEvents();\n        break;\n      default:\n        break;\n    }\n  });\n});\nconst monthview = document.querySelector(\"ids-calendar\");\nmonthview?.addEventListener(\"beforeeventrendered\", (e) => {\n  console.info(`Before Event Rendered`, e.detail);\n});\nmonthview?.addEventListener(\"aftereventrendered\", (e) => {\n  console.info(`After Event Rendered`, e.detail);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtY2FsZW5kYXIvZGVtb3MvZXhhbXBsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBdUI7QUFDSTtBQUUzQixNQUFNLFlBQWlCLHFEQUFVO0FBQ2pDLE1BQU0sZ0JBQXFCLDBEQUFjO0FBTXpDLFNBQVMsb0JBQWtDO0FBQ3pDLFNBQU8sTUFBTSxTQUFTLEVBQUUsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7QUFDbEQ7QUFNQSxTQUFTLGdCQUE4QjtBQUNyQyxTQUFPLE1BQU0sYUFBYSxFQUFFLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO0FBQ3REO0FBRUEsU0FBUyxpQkFBaUIsb0JBQW9CLFlBQVk7QUFDeEQsUUFBTSxXQUFnQixTQUFTLGNBQWMsY0FBYztBQUMzRCxRQUFNLGVBQWUsU0FBUyxjQUFjLFlBQVk7QUFHeEQsV0FBUyxpQkFBaUIsTUFBTSxjQUFjO0FBQzlDLFdBQVMsYUFBYSxNQUFNLGtCQUFrQjtBQUU5QyxnQkFBYyxpQkFBaUIsWUFBWSxDQUFDLFFBQWE7QUFFdkQsVUFBTSxLQUFhLEtBQUssSUFBSSxFQUFFLFNBQVMsSUFBSSxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksR0FBRztBQUV6RSxZQUFRLElBQUksT0FBTyxPQUFPO0FBQUEsTUFDeEIsS0FBSztBQUNILGlCQUFTLGVBQWUsSUFBSSxJQUFJO0FBQ2hDO0FBQUEsTUFDRixLQUFLO0FBQ0gsaUJBQVMsZUFBZSxJQUFJLEtBQUs7QUFDakM7QUFBQSxNQUNGLEtBQUs7QUFDSCxpQkFBUyxZQUFZO0FBQ3JCO0FBQUEsTUFDRjtBQUNFO0FBQUEsSUFDSjtBQUFBLEVBQ0YsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLFlBQVksU0FBUyxjQUFjLGNBQWM7QUFDdkQsV0FBVyxpQkFBaUIsdUJBQXVCLENBQUMsTUFBYTtBQUMvRCxVQUFRLEtBQUsseUJBQTBCLEVBQWtCLE1BQU07QUFDakUsQ0FBQztBQUVELFdBQVcsaUJBQWlCLHNCQUFzQixDQUFDLE1BQWE7QUFDOUQsVUFBUSxLQUFLLHdCQUF5QixFQUFrQixNQUFNO0FBQ2hFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1jYWxlbmRhci9kZW1vcy9leGFtcGxlLnRzPzEwZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV2ZW50c0pTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvZXZlbnRzLmpzb24nO1xuaW1wb3J0IGV2ZW50VHlwZXNKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL2V2ZW50LXR5cGVzLmpzb24nO1xuXG5jb25zdCBldmVudHNVUkw6IGFueSA9IGV2ZW50c0pTT047XG5jb25zdCBldmVudFR5cGVzVVJMOiBhbnkgPSBldmVudFR5cGVzSlNPTjtcblxuLyoqXG4gKiBGZXRjaCBldmVudHMuanNvblxuICogQHJldHVybnMge1Byb21pc2V9IGV2ZW50cy5qc29uIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2FsZW5kYXJFdmVudHMoKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKGV2ZW50c1VSTCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbn1cblxuLyoqXG4gKiBGZXRjaCBldmVudC10eXBlcy5qc29uXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gZXZlbnQtdHlwZXMuanNvbiBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIGdldEV2ZW50VHlwZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKGV2ZW50VHlwZXNVUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNhbGVuZGFyOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZHMtY2FsZW5kYXInKTtcbiAgY29uc3QgYWRkRXZlbnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1ldmVudCcpO1xuXG4gIC8vIFNldCBldmVudCB0eXBlc1xuICBjYWxlbmRhci5ldmVudFR5cGVzRGF0YSA9IGF3YWl0IGdldEV2ZW50VHlwZXMoKTtcbiAgY2FsZW5kYXIuZXZlbnRzRGF0YSA9IGF3YWl0IGdldENhbGVuZGFyRXZlbnRzKCk7XG5cbiAgYWRkRXZlbnRNZW51Py5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZCcsIChldnQ6IGFueSkgPT4ge1xuICAgIC8vIE1vY2sgdXNlciBkZWZpbmVkIGlkXG4gICAgY29uc3QgaWQ6IHN0cmluZyA9IERhdGUubm93KCkudG9TdHJpbmcoKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG5cbiAgICBzd2l0Y2ggKGV2dC5kZXRhaWwudmFsdWUpIHtcbiAgICAgIGNhc2UgJ2FkZC1tb2RhbCc6XG4gICAgICAgIGNhbGVuZGFyLmNyZWF0ZU5ld0V2ZW50KGlkLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZGQtYXBpJzpcbiAgICAgICAgY2FsZW5kYXIuY3JlYXRlTmV3RXZlbnQoaWQsIGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGVhcic6XG4gICAgICAgIGNhbGVuZGFyLmNsZWFyRXZlbnRzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5jb25zdCBtb250aHZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZHMtY2FsZW5kYXInKTtcbm1vbnRodmlldz8uYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlZXZlbnRyZW5kZXJlZCcsIChlOiBFdmVudCkgPT4ge1xuICBjb25zb2xlLmluZm8oYEJlZm9yZSBFdmVudCBSZW5kZXJlZGAsIChlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwpO1xufSk7XG5cbm1vbnRodmlldz8uYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJldmVudHJlbmRlcmVkJywgKGU6IEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhgQWZ0ZXIgRXZlbnQgUmVuZGVyZWRgLCAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-calendar/demos/example.ts\n");

/***/ }),

/***/ "./src/assets/data/event-types.json":
/*!******************************************!*\
  !*** ./src/assets/data/event-types.json ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/event-types.json";

/***/ }),

/***/ "./src/assets/data/events.json":
/*!*************************************!*\
  !*** ./src/assets/data/events.json ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/events.json";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
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
/******/ 			"ids-calendar-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-calendar/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;