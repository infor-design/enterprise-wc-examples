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

/***/ "./src/components/ids-icon/demos/example.ts":
/*!**************************************************!*\
  !*** ./src/components/ids-icon/demos/example.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ids_identity_dist_theme_new_icons_standard_path_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ids-identity/dist/theme-new/icons/standard/path-data.json */ \"./node_modules/ids-identity/dist/theme-new/icons/standard/path-data.json\");\n/* harmony import */ var ids_identity_dist_theme_new_icons_empty_path_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ids-identity/dist/theme-new/icons/empty/path-data.json */ \"./node_modules/ids-identity/dist/theme-new/icons/empty/path-data.json\");\n\n\nconst queryString = window.location.search;\nconst justOne = queryString === \"?count=1\";\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const section = document.querySelector(\".ids-icon-list\");\n  const emptySection = document.querySelector(\".ids-empty-icon-list\");\n  let iconHtml = \"\";\n  let emptyIconHtml = \"\";\n  const iconData = Object.entries(ids_identity_dist_theme_new_icons_standard_path_data_json__WEBPACK_IMPORTED_MODULE_0__);\n  const emptyIconData = Object.entries(ids_identity_dist_theme_new_icons_empty_path_data_json__WEBPACK_IMPORTED_MODULE_1__);\n  for (let i = 0; i < iconData.length; i++) {\n    iconHtml += `<span class=\"ids-icon-container\"><ids-text font-size=\"10\">icon-${iconData[i][0]}</ids-text><br/>\n      <ids-icon icon=\"${iconData[i][0]}\" ${iconData[i][0] === \"logo\" || iconData[i][0] === \"logo-trademark\" ? 'viewbox=\"0 0 35 34\"' : \"\"} size=\"large\"></ids-icon>\n      <ids-icon icon=\"${iconData[i][0]}\" ${iconData[i][0] === \"logo\" || iconData[i][0] === \"logo-trademark\" ? 'viewbox=\"0 0 35 34\"' : \"\"} ></ids-icon>\n      <ids-icon icon=\"${iconData[i][0]}\" ${iconData[i][0] === \"logo\" || iconData[i][0] === \"logo-trademark\" ? 'viewbox=\"0 0 35 34\"' : \"\"} size=\"small\"></ids-icon></span>`;\n    if (i === 0 && justOne) {\n      break;\n    }\n  }\n  for (let i = 0; i < emptyIconData.length; i++) {\n    emptyIconHtml += `<span class=\"ids-icon-container\"><ids-text font-size=\"10\">icon-${emptyIconData[i][0]}</ids-text><br/>\n    <ids-icon icon=\"${emptyIconData[i][0]}\" height=\"80\" viewbox=\"0 0 80 80\" width=\"80\"></ids-icon></span>`;\n  }\n  if (section) {\n    section.insertAdjacentHTML(\"beforeend\", iconHtml);\n  }\n  if (emptySection) {\n    emptySection.insertAdjacentHTML(\"beforeend\", emptyIconHtml);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtaWNvbi9kZW1vcy9leGFtcGxlLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNxQjtBQUNTO0FBRzlCLE1BQU0sY0FBYyxPQUFPLFNBQVM7QUFDcEMsTUFBTSxVQUFVLGdCQUFnQjtBQUVoQyxTQUFTLGlCQUFpQixvQkFBb0IsTUFBTTtBQUNsRCxRQUFNLFVBQVUsU0FBUyxjQUFjLGdCQUFnQjtBQUN2RCxRQUFNLGVBQWUsU0FBUyxjQUFjLHNCQUFzQjtBQUNsRSxNQUFJLFdBQVc7QUFDZixNQUFJLGdCQUFnQjtBQUNwQixRQUFNLFdBQVcsT0FBTyxRQUFRLHNGQUFRO0FBQ3hDLFFBQU0sZ0JBQWdCLE9BQU8sUUFBUSxtRkFBaUI7QUFFdEQsV0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLFFBQVEsS0FBSztBQUN4QyxnQkFBWSxrRUFBa0UsU0FBUyxDQUFDLEVBQUUsQ0FBQztBQUFBLHdCQUN2RSxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLFVBQVUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLG1CQUFvQix3QkFBd0I7QUFBQSx3QkFDaEgsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxVQUFVLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxtQkFBb0Isd0JBQXdCO0FBQUEsd0JBQ2hILFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sVUFBVSxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sbUJBQW9CLHdCQUF3QjtBQUVwSSxRQUFJLE1BQU0sS0FBSyxTQUFTO0FBQ3RCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxXQUFTLElBQUksR0FBRyxJQUFJLGNBQWMsUUFBUSxLQUFLO0FBQzdDLHFCQUFpQixrRUFBa0UsY0FBYyxDQUFDLEVBQUUsQ0FBQztBQUFBLHNCQUNuRixjQUFjLENBQUMsRUFBRSxDQUFDO0FBQUEsRUFDdEM7QUFFQSxNQUFJLFNBQVM7QUFDWCxZQUFRLG1CQUFtQixhQUFhLFFBQVE7QUFBQSxFQUNsRDtBQUNBLE1BQUksY0FBYztBQUNoQixpQkFBYSxtQkFBbUIsYUFBYSxhQUFhO0FBQUEsRUFDNUQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtaWNvbi9kZW1vcy9leGFtcGxlLnRzPzU4OTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3VwcG9ydGluZyBjb21wb25lbnRzXG5pbXBvcnQgcGF0aERhdGEgZnJvbSAnaWRzLWlkZW50aXR5L2Rpc3QvdGhlbWUtbmV3L2ljb25zL3N0YW5kYXJkL3BhdGgtZGF0YS5qc29uJztcbmltcG9ydCBlbXB0eUljb25QYXRoRGF0YSBmcm9tICdpZHMtaWRlbnRpdHkvZGlzdC90aGVtZS1uZXcvaWNvbnMvZW1wdHkvcGF0aC1kYXRhLmpzb24nO1xuXG4vLyBIZXJlIHdlIGFwcGVuZCBhbGwgdGhlIEhUTUwgdG8gc2hvdyBvZmYgdGhlIGljb25zIHRvIHRoZSBpY29uIGRpdiBzZWN0aW9uXG5jb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG5jb25zdCBqdXN0T25lID0gcXVlcnlTdHJpbmcgPT09ICc/Y291bnQ9MSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWRzLWljb24tbGlzdCcpO1xuICBjb25zdCBlbXB0eVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWRzLWVtcHR5LWljb24tbGlzdCcpO1xuICBsZXQgaWNvbkh0bWwgPSAnJztcbiAgbGV0IGVtcHR5SWNvbkh0bWwgPSAnJztcbiAgY29uc3QgaWNvbkRhdGEgPSBPYmplY3QuZW50cmllcyhwYXRoRGF0YSk7XG4gIGNvbnN0IGVtcHR5SWNvbkRhdGEgPSBPYmplY3QuZW50cmllcyhlbXB0eUljb25QYXRoRGF0YSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY29uRGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGljb25IdG1sICs9IGA8c3BhbiBjbGFzcz1cImlkcy1pY29uLWNvbnRhaW5lclwiPjxpZHMtdGV4dCBmb250LXNpemU9XCIxMFwiPmljb24tJHtpY29uRGF0YVtpXVswXX08L2lkcy10ZXh0Pjxici8+XG4gICAgICA8aWRzLWljb24gaWNvbj1cIiR7aWNvbkRhdGFbaV1bMF19XCIgJHsoaWNvbkRhdGFbaV1bMF0gPT09ICdsb2dvJyB8fCBpY29uRGF0YVtpXVswXSA9PT0gJ2xvZ28tdHJhZGVtYXJrJykgPyAndmlld2JveD1cIjAgMCAzNSAzNFwiJyA6ICcnfSBzaXplPVwibGFyZ2VcIj48L2lkcy1pY29uPlxuICAgICAgPGlkcy1pY29uIGljb249XCIke2ljb25EYXRhW2ldWzBdfVwiICR7KGljb25EYXRhW2ldWzBdID09PSAnbG9nbycgfHwgaWNvbkRhdGFbaV1bMF0gPT09ICdsb2dvLXRyYWRlbWFyaycpID8gJ3ZpZXdib3g9XCIwIDAgMzUgMzRcIicgOiAnJ30gPjwvaWRzLWljb24+XG4gICAgICA8aWRzLWljb24gaWNvbj1cIiR7aWNvbkRhdGFbaV1bMF19XCIgJHsoaWNvbkRhdGFbaV1bMF0gPT09ICdsb2dvJyB8fCBpY29uRGF0YVtpXVswXSA9PT0gJ2xvZ28tdHJhZGVtYXJrJykgPyAndmlld2JveD1cIjAgMCAzNSAzNFwiJyA6ICcnfSBzaXplPVwic21hbGxcIj48L2lkcy1pY29uPjwvc3Bhbj5gO1xuXG4gICAgaWYgKGkgPT09IDAgJiYganVzdE9uZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbXB0eUljb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgZW1wdHlJY29uSHRtbCArPSBgPHNwYW4gY2xhc3M9XCJpZHMtaWNvbi1jb250YWluZXJcIj48aWRzLXRleHQgZm9udC1zaXplPVwiMTBcIj5pY29uLSR7ZW1wdHlJY29uRGF0YVtpXVswXX08L2lkcy10ZXh0Pjxici8+XG4gICAgPGlkcy1pY29uIGljb249XCIke2VtcHR5SWNvbkRhdGFbaV1bMF19XCIgaGVpZ2h0PVwiODBcIiB2aWV3Ym94PVwiMCAwIDgwIDgwXCIgd2lkdGg9XCI4MFwiPjwvaWRzLWljb24+PC9zcGFuPmA7XG4gIH1cblxuICBpZiAoc2VjdGlvbikge1xuICAgIHNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBpY29uSHRtbCk7XG4gIH1cbiAgaWYgKGVtcHR5U2VjdGlvbikge1xuICAgIGVtcHR5U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGVtcHR5SWNvbkh0bWwpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-icon/demos/example.ts\n");

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
/******/ 			"ids-icon-example": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json"], () => (__webpack_require__("./src/components/ids-icon/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;