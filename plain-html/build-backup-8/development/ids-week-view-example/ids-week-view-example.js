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

/***/ "./src/components/ids-week-view/demos/example.ts":
/*!*******************************************************!*\
  !*** ./src/components/ids-week-view/demos/example.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_data_events_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/events.json */ \"./src/assets/data/events.json\");\n/* harmony import */ var _assets_data_event_types_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/event-types.json */ \"./src/assets/data/event-types.json\");\n\n\nconst weekview = document.querySelector(\"ids-week-view\");\nweekview?.addEventListener(\"beforeeventrendered\", (e) => {\n  console.info(`Before Event Rendered`, e.detail);\n});\nweekview?.addEventListener(\"aftereventrendered\", (e) => {\n  console.info(`After Event Rendered`, e.detail);\n});\nconst eventsURL = _assets_data_events_json__WEBPACK_IMPORTED_MODULE_0__;\nconst eventTypesURL = _assets_data_event_types_json__WEBPACK_IMPORTED_MODULE_1__;\nfunction getEventsWithinWeek(startDate, endDate) {\n  return fetch(eventsURL).then((res) => res.json()).then((events) => {\n    const weekStart = startDate.getTime();\n    const weekEnd = endDate.getTime();\n    const weekEvents = events.filter((event) => {\n      const eventStart = new Date(event.starts).getTime();\n      return weekStart <= eventStart && eventStart < weekEnd;\n    });\n    return weekEvents;\n  });\n}\nfunction getEventTypes() {\n  return fetch(eventTypesURL).then((res) => res.json());\n}\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n  const weekView = document.querySelector(\"ids-week-view\");\n  if (!weekView)\n    return;\n  weekView.eventTypesData = await getEventTypes();\n  weekView.beforeEventsRender = (startDate, endDate) => {\n    const starts = startDate;\n    const ends = endDate;\n    return getEventsWithinWeek(starts, ends);\n  };\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtd2Vlay12aWV3L2RlbW9zL2V4YW1wbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVCO0FBQ0k7QUFFM0IsTUFBTSxXQUFXLFNBQVMsY0FBYyxlQUFlO0FBQ3ZELFVBQVUsaUJBQWlCLHVCQUF1QixDQUFDLE1BQWE7QUFDOUQsVUFBUSxLQUFLLHlCQUEwQixFQUFrQixNQUFNO0FBQ2pFLENBQUM7QUFFRCxVQUFVLGlCQUFpQixzQkFBc0IsQ0FBQyxNQUFhO0FBQzdELFVBQVEsS0FBSyx3QkFBeUIsRUFBa0IsTUFBTTtBQUNoRSxDQUFDO0FBRUQsTUFBTSxZQUFpQixxREFBVTtBQUNqQyxNQUFNLGdCQUFxQiwwREFBYztBQVF6QyxTQUFTLG9CQUFvQixXQUFpQixTQUE2QjtBQUN6RSxTQUFPLE1BQU0sU0FBUyxFQUNuQixLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxFQUN4QixLQUFLLENBQUMsV0FBa0I7QUFDdkIsVUFBTSxZQUFZLFVBQVUsUUFBUTtBQUNwQyxVQUFNLFVBQVUsUUFBUSxRQUFRO0FBQ2hDLFVBQU0sYUFBYSxPQUFPLE9BQU8sQ0FBQyxVQUFVO0FBQzFDLFlBQU0sYUFBYSxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsUUFBUTtBQUNsRCxhQUFPLGFBQWEsY0FBYyxhQUFhO0FBQUEsSUFDakQsQ0FBQztBQUNELFdBQU87QUFBQSxFQUNULENBQUM7QUFDTDtBQU1BLFNBQVMsZ0JBQThCO0FBQ3JDLFNBQU8sTUFBTSxhQUFhLEVBQUUsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7QUFDdEQ7QUFFQSxTQUFTLGlCQUFpQixvQkFBb0IsWUFBWTtBQUN4RCxRQUFNLFdBQWdCLFNBQVMsY0FBYyxlQUFlO0FBRTVELE1BQUksQ0FBQztBQUFVO0FBR2YsV0FBUyxpQkFBaUIsTUFBTSxjQUFjO0FBRTlDLFdBQVMscUJBQXFCLENBQUMsV0FBaUIsWUFBa0I7QUFDaEUsVUFBTSxTQUFTO0FBQ2YsVUFBTSxPQUFPO0FBRWIsV0FBTyxvQkFBb0IsUUFBUSxJQUFJO0FBQUEsRUFDekM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtd2Vlay12aWV3L2RlbW9zL2V4YW1wbGUudHM/NmUwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXZlbnRzSlNPTiBmcm9tICcuLi8uLi8uLi9hc3NldHMvZGF0YS9ldmVudHMuanNvbic7XG5pbXBvcnQgZXZlbnRUeXBlc0pTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvZXZlbnQtdHlwZXMuanNvbic7XG5cbmNvbnN0IHdlZWt2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLXdlZWstdmlldycpO1xud2Vla3ZpZXc/LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWV2ZW50cmVuZGVyZWQnLCAoZTogRXZlbnQpID0+IHtcbiAgY29uc29sZS5pbmZvKGBCZWZvcmUgRXZlbnQgUmVuZGVyZWRgLCAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsKTtcbn0pO1xuXG53ZWVrdmlldz8uYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJldmVudHJlbmRlcmVkJywgKGU6IEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhgQWZ0ZXIgRXZlbnQgUmVuZGVyZWRgLCAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsKTtcbn0pO1xuXG5jb25zdCBldmVudHNVUkw6IGFueSA9IGV2ZW50c0pTT047XG5jb25zdCBldmVudFR5cGVzVVJMOiBhbnkgPSBldmVudFR5cGVzSlNPTjtcblxuLyoqXG4gKiBGZXRjaCBldmVudHMuanNvblxuICogQHBhcmFtIHtEYXRlfSBzdGFydERhdGUgc3RhcnQgZGF0ZSBvZiB3ZWVrXG4gKiBAcGFyYW0ge0RhdGV9IGVuZERhdGUgZW5kIGRhdGUgb2Ygd2Vla1xuICogQHJldHVybnMge1Byb21pc2V9IGV2ZW50cy5qc29uIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0RXZlbnRzV2l0aGluV2VlayhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2goZXZlbnRzVVJMKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGV2ZW50czogYW55W10pID0+IHtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IHN0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCB3ZWVrRW5kID0gZW5kRGF0ZS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCB3ZWVrRXZlbnRzID0gZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnRTdGFydCA9IG5ldyBEYXRlKGV2ZW50LnN0YXJ0cykuZ2V0VGltZSgpO1xuICAgICAgICByZXR1cm4gd2Vla1N0YXJ0IDw9IGV2ZW50U3RhcnQgJiYgZXZlbnRTdGFydCA8IHdlZWtFbmQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB3ZWVrRXZlbnRzO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZldGNoIGV2ZW50LXR5cGVzLmpzb25cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBldmVudC10eXBlcy5qc29uIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0RXZlbnRUeXBlcygpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2goZXZlbnRUeXBlc1VSTCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3Qgd2Vla1ZpZXc6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy13ZWVrLXZpZXcnKTtcblxuICBpZiAoIXdlZWtWaWV3KSByZXR1cm47XG5cbiAgLy8gU2V0IGV2ZW50IHR5cGVzXG4gIHdlZWtWaWV3LmV2ZW50VHlwZXNEYXRhID0gYXdhaXQgZ2V0RXZlbnRUeXBlcygpO1xuXG4gIHdlZWtWaWV3LmJlZm9yZUV2ZW50c1JlbmRlciA9IChzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpID0+IHtcbiAgICBjb25zdCBzdGFydHMgPSBzdGFydERhdGU7XG4gICAgY29uc3QgZW5kcyA9IGVuZERhdGU7XG5cbiAgICByZXR1cm4gZ2V0RXZlbnRzV2l0aGluV2VlayhzdGFydHMsIGVuZHMpO1xuICB9O1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-week-view/demos/example.ts\n");

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
/******/ 			"ids-week-view-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-week-view/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;