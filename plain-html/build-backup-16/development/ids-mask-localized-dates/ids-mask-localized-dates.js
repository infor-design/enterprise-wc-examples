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

/***/ "./src/components/ids-mask/demos/localized-dates.ts":
/*!**********************************************************!*\
  !*** ./src/components/ids-mask/demos/localized-dates.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_input_ids_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ids-input/ids-input */ \"./src/components/ids-input/ids-input.ts\");\n/* harmony import */ var _ids_dropdown_ids_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-dropdown/ids-dropdown */ \"./src/components/ids-dropdown/ids-dropdown.ts\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const pageContainer = document.querySelector(\"ids-container\");\n  let calendar = pageContainer.localeAPI.calendar();\n  const dateInputShort = document.querySelector(\"#mask-date-short\");\n  dateInputShort.mask = \"date\";\n  dateInputShort.placeholder = dateInputShort.maskOptions.format;\n  const dateInputTime = document.querySelector(\"#mask-date-time\");\n  dateInputTime.mask = \"date\";\n  dateInputTime.maskOptions = {\n    format: calendar.dateFormat.timestamp\n  };\n  dateInputTime.placeholder = dateInputTime.maskOptions.format;\n  const dateHourTime = document.querySelector(\"#mask-hour-time\");\n  dateHourTime.mask = \"date\";\n  dateHourTime.maskOptions = {\n    format: calendar.dateFormat.hour\n  };\n  dateHourTime.placeholder = dateHourTime.maskOptions.format;\n  pageContainer.addEventListener(\"localechange\", () => {\n    calendar = pageContainer.localeAPI.calendar();\n    const shortFormat = calendar.dateFormat.short;\n    const timeFormat = calendar.dateFormat.timestamp;\n    dateInputShort.value = \"\";\n    dateInputShort.maskOptions.format = shortFormat;\n    dateInputShort.placeholder = dateInputShort.maskOptions.format;\n    dateInputTime.value = \"\";\n    dateInputTime.maskOptions.format = timeFormat;\n    dateInputTime.placeholder = dateInputTime.maskOptions.format;\n    dateHourTime.value = \"\";\n    dateHourTime.maskOptions.format = calendar.dateFormat.hour;\n    dateHourTime.placeholder = dateHourTime.maskOptions.format;\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbWFzay9kZW1vcy9sb2NhbGl6ZWQtZGF0ZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ087QUFDQTtBQUVQLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELFFBQU0sZ0JBQXFCLFNBQVMsY0FBYyxlQUFlO0FBQ2pFLE1BQUksV0FBVyxjQUFjLFVBQVUsU0FBUztBQUdoRCxRQUFNLGlCQUFzQixTQUFTLGNBQWMsa0JBQWtCO0FBQ3JFLGlCQUFlLE9BQU87QUFDdEIsaUJBQWUsY0FBYyxlQUFlLFlBQVk7QUFJeEQsUUFBTSxnQkFBcUIsU0FBUyxjQUFjLGlCQUFpQjtBQUNuRSxnQkFBYyxPQUFPO0FBQ3JCLGdCQUFjLGNBQWM7QUFBQSxJQUMxQixRQUFRLFNBQVMsV0FBVztBQUFBLEVBQzlCO0FBQ0EsZ0JBQWMsY0FBYyxjQUFjLFlBQVk7QUFFdEQsUUFBTSxlQUFvQixTQUFTLGNBQWMsaUJBQWlCO0FBQ2xFLGVBQWEsT0FBTztBQUNwQixlQUFhLGNBQWM7QUFBQSxJQUN6QixRQUFRLFNBQVMsV0FBVztBQUFBLEVBQzlCO0FBQ0EsZUFBYSxjQUFjLGFBQWEsWUFBWTtBQUdwRCxnQkFBYyxpQkFBaUIsZ0JBQWdCLE1BQU07QUFDbkQsZUFBVyxjQUFjLFVBQVUsU0FBUztBQUM1QyxVQUFNLGNBQWMsU0FBUyxXQUFXO0FBQ3hDLFVBQU0sYUFBYSxTQUFTLFdBQVc7QUFFdkMsbUJBQWUsUUFBUTtBQUN2QixtQkFBZSxZQUFZLFNBQVM7QUFDcEMsbUJBQWUsY0FBYyxlQUFlLFlBQVk7QUFFeEQsa0JBQWMsUUFBUTtBQUN0QixrQkFBYyxZQUFZLFNBQVM7QUFDbkMsa0JBQWMsY0FBYyxjQUFjLFlBQVk7QUFFdEQsaUJBQWEsUUFBUTtBQUNyQixpQkFBYSxZQUFZLFNBQVMsU0FBUyxXQUFXO0FBQ3RELGlCQUFhLGNBQWMsYUFBYSxZQUFZO0FBQUEsRUFDdEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1tYXNrL2RlbW9zL2xvY2FsaXplZC1kYXRlcy50cz9lZjg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN1cHBvcnRpbmcgY29tcG9uZW50c1xuaW1wb3J0ICcuLi8uLi9pZHMtaW5wdXQvaWRzLWlucHV0JztcbmltcG9ydCAnLi4vLi4vaWRzLWRyb3Bkb3duL2lkcy1kcm9wZG93bic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VDb250YWluZXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1jb250YWluZXInKTtcbiAgbGV0IGNhbGVuZGFyID0gcGFnZUNvbnRhaW5lci5sb2NhbGVBUEkuY2FsZW5kYXIoKTtcblxuICAvLyBDb25maWd1cmUgU2hvcnQgRGF0ZSBpbnB1dFxuICBjb25zdCBkYXRlSW5wdXRTaG9ydDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hc2stZGF0ZS1zaG9ydCcpO1xuICBkYXRlSW5wdXRTaG9ydC5tYXNrID0gJ2RhdGUnO1xuICBkYXRlSW5wdXRTaG9ydC5wbGFjZWhvbGRlciA9IGRhdGVJbnB1dFNob3J0Lm1hc2tPcHRpb25zLmZvcm1hdDtcblxuICAvLyBUaGUgZGVmYXVsdCBkYXRlIGZvcm1hdCBhYnNvcmJlZCBieSB0aGUgTWFzayBNaXhpbiBmcm9tIElkc0xvY2FsZSBpcyBcInNob3J0XCIuXG4gIC8vIEZvciB0aGUgdGltZXN0YW1wIGZpZWxkLCB3ZSBoYXZlIHRvIG1hbnVhbGx5IG92ZXJyaWRlIHRoZSBmb3JtYXQgc2V0IGJ5IHRoZSBtaXhpbi5cbiAgY29uc3QgZGF0ZUlucHV0VGltZTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hc2stZGF0ZS10aW1lJyk7XG4gIGRhdGVJbnB1dFRpbWUubWFzayA9ICdkYXRlJztcbiAgZGF0ZUlucHV0VGltZS5tYXNrT3B0aW9ucyA9IHtcbiAgICBmb3JtYXQ6IGNhbGVuZGFyLmRhdGVGb3JtYXQudGltZXN0YW1wXG4gIH07XG4gIGRhdGVJbnB1dFRpbWUucGxhY2Vob2xkZXIgPSBkYXRlSW5wdXRUaW1lLm1hc2tPcHRpb25zLmZvcm1hdDtcblxuICBjb25zdCBkYXRlSG91clRpbWU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXNrLWhvdXItdGltZScpO1xuICBkYXRlSG91clRpbWUubWFzayA9ICdkYXRlJztcbiAgZGF0ZUhvdXJUaW1lLm1hc2tPcHRpb25zID0ge1xuICAgIGZvcm1hdDogY2FsZW5kYXIuZGF0ZUZvcm1hdC5ob3VyXG4gIH07XG4gIGRhdGVIb3VyVGltZS5wbGFjZWhvbGRlciA9IGRhdGVIb3VyVGltZS5tYXNrT3B0aW9ucy5mb3JtYXQ7XG5cbiAgLy8gQ2hhbmdlIGxvY2FsZSBvbiB0aGUgZGF0ZSBpbnB1dCB3aGVuIHRoZSBQYWdlIGNvbnRhaW5lcidzIGxvY2FsZSBjaGFuZ2VzXG4gIHBhZ2VDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9jYWxlY2hhbmdlJywgKCkgPT4ge1xuICAgIGNhbGVuZGFyID0gcGFnZUNvbnRhaW5lci5sb2NhbGVBUEkuY2FsZW5kYXIoKTtcbiAgICBjb25zdCBzaG9ydEZvcm1hdCA9IGNhbGVuZGFyLmRhdGVGb3JtYXQuc2hvcnQ7XG4gICAgY29uc3QgdGltZUZvcm1hdCA9IGNhbGVuZGFyLmRhdGVGb3JtYXQudGltZXN0YW1wO1xuXG4gICAgZGF0ZUlucHV0U2hvcnQudmFsdWUgPSAnJztcbiAgICBkYXRlSW5wdXRTaG9ydC5tYXNrT3B0aW9ucy5mb3JtYXQgPSBzaG9ydEZvcm1hdDtcbiAgICBkYXRlSW5wdXRTaG9ydC5wbGFjZWhvbGRlciA9IGRhdGVJbnB1dFNob3J0Lm1hc2tPcHRpb25zLmZvcm1hdDtcblxuICAgIGRhdGVJbnB1dFRpbWUudmFsdWUgPSAnJztcbiAgICBkYXRlSW5wdXRUaW1lLm1hc2tPcHRpb25zLmZvcm1hdCA9IHRpbWVGb3JtYXQ7XG4gICAgZGF0ZUlucHV0VGltZS5wbGFjZWhvbGRlciA9IGRhdGVJbnB1dFRpbWUubWFza09wdGlvbnMuZm9ybWF0O1xuXG4gICAgZGF0ZUhvdXJUaW1lLnZhbHVlID0gJyc7XG4gICAgZGF0ZUhvdXJUaW1lLm1hc2tPcHRpb25zLmZvcm1hdCA9IGNhbGVuZGFyLmRhdGVGb3JtYXQuaG91cjtcbiAgICBkYXRlSG91clRpbWUucGxhY2Vob2xkZXIgPSBkYXRlSG91clRpbWUubWFza09wdGlvbnMuZm9ybWF0O1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-mask/demos/localized-dates.ts\n");

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
/******/ 			"ids-mask-localized-dates": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-trigger-field_ids-trigger-field_scss","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-trigger-field_ids-trigger-field_scss","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts"], () => (__webpack_require__("./src/components/ids-mask/demos/localized-dates.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;