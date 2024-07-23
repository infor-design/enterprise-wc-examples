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

/***/ "./src/components/ids-month-view/demos/example.ts":
/*!********************************************************!*\
  !*** ./src/components/ids-month-view/demos/example.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_data_events_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/events.json */ \"./src/assets/data/events.json\");\n/* harmony import */ var _assets_data_event_types_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/event-types.json */ \"./src/assets/data/event-types.json\");\n\n\nconst eventsURL = _assets_data_events_json__WEBPACK_IMPORTED_MODULE_0__;\nconst eventTypesURL = _assets_data_event_types_json__WEBPACK_IMPORTED_MODULE_1__;\nfunction getEventTypes() {\n  return fetch(eventTypesURL).then((res) => res.json());\n}\nfunction getEvents() {\n  return fetch(eventsURL).then((res) => res.json());\n}\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n  const monthView = document.querySelector(\"ids-month-view\");\n  monthView?.addEventListener(\"dayselected\", (e) => {\n    console.info(\"Day Selected\", e.detail.date);\n  });\n  monthView.eventTypesData = await getEventTypes();\n  monthView.eventsData = await getEvents();\n});\nconst monthview = document.querySelector(\"ids-month-view\");\nmonthview?.addEventListener(\"beforeeventrendered\", (e) => {\n  console.info(`Before Event Rendered`, e.detail);\n});\nmonthview?.addEventListener(\"aftereventrendered\", (e) => {\n  console.info(`After Event Rendered`, e.detail);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbW9udGgtdmlldy9kZW1vcy9leGFtcGxlLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUF1QjtBQUNJO0FBRTNCLE1BQU0sWUFBaUIscURBQVU7QUFDakMsTUFBTSxnQkFBcUIsMERBQWM7QUFNekMsU0FBUyxnQkFBOEI7QUFDckMsU0FBTyxNQUFNLGFBQWEsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztBQUN0RDtBQU1BLFNBQVMsWUFBMEI7QUFDakMsU0FBTyxNQUFNLFNBQVMsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztBQUNsRDtBQUVBLFNBQVMsaUJBQWlCLG9CQUFvQixZQUFZO0FBQ3hELFFBQU0sWUFBaUIsU0FBUyxjQUFjLGdCQUFnQjtBQUU5RCxhQUFXLGlCQUFpQixlQUFlLENBQUMsTUFBVztBQUNyRCxZQUFRLEtBQUssZ0JBQWdCLEVBQUUsT0FBTyxJQUFJO0FBQUEsRUFDNUMsQ0FBQztBQUVELFlBQVUsaUJBQWlCLE1BQU0sY0FBYztBQUMvQyxZQUFVLGFBQWEsTUFBTSxVQUFVO0FBQ3pDLENBQUM7QUFFRCxNQUFNLFlBQVksU0FBUyxjQUFjLGdCQUFnQjtBQUN6RCxXQUFXLGlCQUFpQix1QkFBdUIsQ0FBQyxNQUFhO0FBQy9ELFVBQVEsS0FBSyx5QkFBMEIsRUFBa0IsTUFBTTtBQUNqRSxDQUFDO0FBRUQsV0FBVyxpQkFBaUIsc0JBQXNCLENBQUMsTUFBYTtBQUM5RCxVQUFRLEtBQUssd0JBQXlCLEVBQWtCLE1BQU07QUFDaEUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLW1vbnRoLXZpZXcvZGVtb3MvZXhhbXBsZS50cz8yY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBldmVudHNKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL2V2ZW50cy5qc29uJztcbmltcG9ydCBldmVudFR5cGVzSlNPTiBmcm9tICcuLi8uLi8uLi9hc3NldHMvZGF0YS9ldmVudC10eXBlcy5qc29uJztcblxuY29uc3QgZXZlbnRzVVJMOiBhbnkgPSBldmVudHNKU09OO1xuY29uc3QgZXZlbnRUeXBlc1VSTDogYW55ID0gZXZlbnRUeXBlc0pTT047XG5cbi8qKlxuICogRmV0Y2ggZXZlbnQtdHlwZXMuanNvblxuICogQHJldHVybnMge1Byb21pc2V9IGV2ZW50LXR5cGVzLmpzb24gY29udGVudFxuICovXG5mdW5jdGlvbiBnZXRFdmVudFR5cGVzKCk6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaChldmVudFR5cGVzVVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xufVxuXG4vKipcbiAqIEZldGNoIGV2ZW50LXR5cGVzLmpzb25cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBldmVudC10eXBlcy5qc29uIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0RXZlbnRzKCk6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaChldmVudHNVUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1vbnRoVmlldzogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLW1vbnRoLXZpZXcnKTtcblxuICBtb250aFZpZXc/LmFkZEV2ZW50TGlzdGVuZXIoJ2RheXNlbGVjdGVkJywgKGU6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnRGF5IFNlbGVjdGVkJywgZS5kZXRhaWwuZGF0ZSk7XG4gIH0pO1xuXG4gIG1vbnRoVmlldy5ldmVudFR5cGVzRGF0YSA9IGF3YWl0IGdldEV2ZW50VHlwZXMoKTtcbiAgbW9udGhWaWV3LmV2ZW50c0RhdGEgPSBhd2FpdCBnZXRFdmVudHMoKTtcbn0pO1xuXG5jb25zdCBtb250aHZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZHMtbW9udGgtdmlldycpO1xubW9udGh2aWV3Py5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVldmVudHJlbmRlcmVkJywgKGU6IEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhgQmVmb3JlIEV2ZW50IFJlbmRlcmVkYCwgKGUgYXMgQ3VzdG9tRXZlbnQpLmRldGFpbCk7XG59KTtcblxubW9udGh2aWV3Py5hZGRFdmVudExpc3RlbmVyKCdhZnRlcmV2ZW50cmVuZGVyZWQnLCAoZTogRXZlbnQpID0+IHtcbiAgY29uc29sZS5pbmZvKGBBZnRlciBFdmVudCBSZW5kZXJlZGAsIChlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-month-view/demos/example.ts\n");

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
/******/ 			"ids-month-view-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-month-view/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;