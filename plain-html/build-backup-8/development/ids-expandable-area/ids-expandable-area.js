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

/***/ "./src/components/ids-expandable-area/demos/index.ts":
/*!***********************************************************!*\
  !*** ./src/components/ids-expandable-area/demos/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_expandable_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-expandable-area */ \"./src/components/ids-expandable-area/ids-expandable-area.ts\");\n/* harmony import */ var _ids_input_ids_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-input/ids-input */ \"./src/components/ids-input/ids-input.ts\");\n/* harmony import */ var _ids_toggle_button_ids_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ids-toggle-button/ids-toggle-button */ \"./src/components/ids-toggle-button/ids-toggle-button.ts\");\n/* harmony import */ var _ids_icon_ids_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ids-icon/ids-icon */ \"./src/components/ids-icon/ids-icon.ts\");\n/* harmony import */ var _ids_hyperlink_ids_hyperlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ids-hyperlink/ids-hyperlink */ \"./src/components/ids-hyperlink/ids-hyperlink.ts\");\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZXhwYW5kYWJsZS1hcmVhL2RlbW9zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1leHBhbmRhYmxlLWFyZWEvZGVtb3MvaW5kZXgudHM/MmI0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdXBwb3J0aW5nIGNvbXBvbmVudHNcbmltcG9ydCAnLi4vaWRzLWV4cGFuZGFibGUtYXJlYSc7XG5pbXBvcnQgJy4uLy4uL2lkcy1pbnB1dC9pZHMtaW5wdXQnO1xuaW1wb3J0ICcuLi8uLi9pZHMtdG9nZ2xlLWJ1dHRvbi9pZHMtdG9nZ2xlLWJ1dHRvbic7XG5pbXBvcnQgJy4uLy4uL2lkcy1pY29uL2lkcy1pY29uJztcbmltcG9ydCAnLi4vLi4vaWRzLWh5cGVybGluay9pZHMtaHlwZXJsaW5rJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-expandable-area/demos/index.ts\n");

/***/ }),

/***/ "./src/mixins/ids-hitbox-mixin/ids-hitbox-mixin.ts":
/*!*********************************************************!*\
  !*** ./src/mixins/ids-hitbox-mixin/ids-hitbox-mixin.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_hitbox_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-string-utils/ids-string-utils */ \"./src/utils/ids-string-utils/ids-string-utils.ts\");\n\n\nconst IdsHitboxMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX\n    ];\n  }\n  connectedCallback() {\n    super.connectedCallback?.();\n    this.#setHitbox();\n  }\n  /**\n   * Sets the checkbox to add hitbox style.\n   * @param {boolean|string} value If true, it will apply the hitbox stylings.\n   */\n  set hitbox(value) {\n    const val = (0,_utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_1__.stringToBool)(value);\n    if (val) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX, val.toString());\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX);\n    }\n    this.#setHitbox();\n  }\n  get hitbox() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX);\n  }\n  #setHitbox() {\n    this.container?.classList.toggle(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX, Boolean(this.hitbox));\n  }\n};\nvar ids_hitbox_mixin_default = IdsHitboxMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1oaXRib3gtbWl4aW4vaWRzLWhpdGJveC1taXhpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkI7QUFFRTtBQVE3QixNQUFNLGlCQUFpQixDQUErQixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUMvRixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFBQSxFQUNmO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLG1FQUFpQjtBQUFOLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFFQSxvQkFBMEI7QUFDeEIsVUFBTSxvQkFBb0I7QUFDMUIsU0FBSyxXQUFXO0FBQUEsRUFDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsSUFBSSxPQUFPLE9BQU87QUFDaEIsVUFBTSxNQUFNLHNGQUFZLENBQUMsS0FBSztBQUM5QixRQUFJLEtBQUs7QUFDUCxXQUFLLGFBQWEsbUVBQWlCLEVBQUUsSUFBSSxTQUFTLENBQUM7QUFBQSxJQUNyRCxPQUFPO0FBQ0wsV0FBSyxnQkFBZ0IsbUVBQWlCO0FBQUEsSUFDeEM7QUFFQSxTQUFLLFdBQVc7QUFBQSxFQUNsQjtBQUFBLEVBRUEsSUFBSSxTQUFTO0FBQUUsV0FBTyxLQUFLLGFBQWEsbUVBQWlCO0FBQUEsRUFBRztBQUFBLEVBRTVELGFBQWE7QUFDWCxTQUFLLFdBQVcsVUFBVSxPQUFPLG1FQUFpQixFQUFFLFFBQVEsS0FBSyxNQUFNLENBQUM7QUFBQSxFQUMxRTtBQUNGO0FBRUEsSUFBTywyQkFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtaGl0Ym94LW1peGluL2lkcy1oaXRib3gtbWl4aW4udHM/YTcxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtYXR0cmlidXRlcyc7XG5pbXBvcnQgeyBJZHNCYXNlQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1lbGVtZW50JztcbmltcG9ydCB7IHN0cmluZ1RvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lkcy1zdHJpbmctdXRpbHMvaWRzLXN0cmluZy11dGlscyc7XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IHdpbGwgYWRkIGhpdGJveCBzdHlsaW5ncyB0byB0aGUgY29tcG9uZW50IGVsZW1lbnQuXG4gKiBAbWl4aW4gSWRzSGl0Ym94TWl4aW5cbiAqIEBwYXJhbSB7YW55fSBzdXBlcmNsYXNzIEFjY2VwdHMgYSBzdXBlcmNsYXNzIGFuZCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIGZyb20gaXQuXG4gKiBAcmV0dXJucyB7YW55fSBUaGUgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmNvbnN0IElkc0hpdGJveE1peGluID0gPFQgZXh0ZW5kcyBJZHNCYXNlQ29uc3RydWN0b3I+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuSElUQk9YXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrPy4oKTtcbiAgICB0aGlzLiNzZXRIaXRib3goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjaGVja2JveCB0byBhZGQgaGl0Ym94IHN0eWxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSB2YWx1ZSBJZiB0cnVlLCBpdCB3aWxsIGFwcGx5IHRoZSBoaXRib3ggc3R5bGluZ3MuXG4gICAqL1xuICBzZXQgaGl0Ym94KHZhbHVlKSB7XG4gICAgY29uc3QgdmFsID0gc3RyaW5nVG9Cb29sKHZhbHVlKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkhJVEJPWCwgdmFsLnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLkhJVEJPWCk7XG4gICAgfVxuXG4gICAgdGhpcy4jc2V0SGl0Ym94KCk7XG4gIH1cblxuICBnZXQgaGl0Ym94KCkgeyByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5ISVRCT1gpOyB9XG5cbiAgI3NldEhpdGJveCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lcj8uY2xhc3NMaXN0LnRvZ2dsZShhdHRyaWJ1dGVzLkhJVEJPWCwgQm9vbGVhbih0aGlzLmhpdGJveCkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNIaXRib3hNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-hitbox-mixin/ids-hitbox-mixin.ts\n");

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ids-expandable-area": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b"], () => (__webpack_require__("./src/components/ids-expandable-area/demos/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;