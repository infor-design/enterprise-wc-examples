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

/***/ "./src/components/ids-menu/demos/side-by-side.ts":
/*!*******************************************************!*\
  !*** ./src/components/ids-menu/demos/side-by-side.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_menu_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-menu-header */ \"./src/components/ids-menu/ids-menu-header.ts\");\n/* harmony import */ var _ids_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ids-menu-item */ \"./src/components/ids-menu/ids-menu-item.ts\");\n/* harmony import */ var _ids_menu_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ids-menu-group */ \"./src/components/ids-menu/ids-menu-group.ts\");\n/* harmony import */ var _ids_separator_ids_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ids-separator/ids-separator */ \"./src/components/ids-separator/ids-separator.ts\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  $(\"body\").initialize();\n  $(\"#popupmenu-trigger\").popupmenu();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbWVudS9kZW1vcy9zaWRlLWJ5LXNpZGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUdQLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELElBQUUsTUFBTSxFQUFFLFdBQVc7QUFDckIsSUFBRSxvQkFBb0IsRUFBRSxVQUFVO0FBQ3BDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1tZW51L2RlbW9zL3NpZGUtYnktc2lkZS50cz8wYmVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN1cHBvcnRpbmcgY29tcG9uZW50c1xuaW1wb3J0ICcuLi9pZHMtbWVudS1oZWFkZXInO1xuaW1wb3J0ICcuLi9pZHMtbWVudS1pdGVtJztcbmltcG9ydCAnLi4vaWRzLW1lbnUtZ3JvdXAnO1xuaW1wb3J0ICcuLi8uLi9pZHMtc2VwYXJhdG9yL2lkcy1zZXBhcmF0b3InO1xuXG4vLyBJbml0aWFsaXplIHRoZSA0LnhcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICQoJ2JvZHknKS5pbml0aWFsaXplKCk7XG4gICQoJyNwb3B1cG1lbnUtdHJpZ2dlcicpLnBvcHVwbWVudSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-menu/demos/side-by-side.ts\n");

/***/ }),

/***/ "./src/mixins/ids-theme-mixin/ids-theme-mixin.ts":
/*!*******************************************************!*\
  !*** ./src/mixins/ids-theme-mixin/ids-theme-mixin.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"THEME_MODES\": () => (/* binding */ THEME_MODES),\n/* harmony export */   \"default\": () => (/* binding */ ids_theme_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n\nconst THEME_MODES = [\"light\", \"dark\", \"contrast\"];\nconst IdsThemeMixin = (superclass) => class extends superclass {\n  switcher = null;\n  constructor(...args) {\n    super(...args);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.MODE\n    ];\n  }\n  connectedCallback() {\n    super.connectedCallback?.();\n    this.initThemeHandlers();\n  }\n  disconnectedCallback() {\n    this.offEvent(\"themechanged\");\n    this.switcher = null;\n    super.disconnectedCallback?.();\n  }\n  /**\n   * Init the mixin events and states\n   * @private\n   */\n  initThemeHandlers() {\n    this.switcher = document.querySelector(\"ids-theme-switcher\");\n    if (!this.switcher) {\n      return;\n    }\n    this.mode = this.switcher.mode;\n    this.onEvent(\"themechanged\", this.switcher, (e) => {\n      this.mode = e.detail.mode;\n    });\n  }\n  /**\n   * Set the mode of the current theme\n   * @param {string} value The mode value for example: light, dark, or contrast\n   */\n  set mode(value) {\n    if (!THEME_MODES.includes(value))\n      value = \"light\";\n    this.setAttribute(\"mode\", value);\n    this.container?.setAttribute(\"mode\", value);\n  }\n  /**\n   * Get the mode of the current theme\n   * @returns {string} light, dark, or contrast\n   */\n  get mode() {\n    return this.getAttribute(\"mode\") || \"light\";\n  }\n};\nvar ids_theme_mixin_default = IdsThemeMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy10aGVtZS1taXhpbi9pZHMtdGhlbWUtbWl4aW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBT3BCLE1BQU0sY0FBYyxDQUFDLFNBQVMsUUFBUSxVQUFVO0FBT3ZELE1BQU0sZ0JBQWdCLENBQXdCLGVBQWtCLGNBQWMsV0FBVztBQUFBLEVBQ3ZGLFdBQW9DO0FBQUEsRUFFcEMsZUFBZSxNQUFhO0FBQzFCLFVBQU0sR0FBRyxJQUFJO0FBQUEsRUFDZjtBQUFBLEVBRUEsV0FBVyxhQUFhO0FBQ3RCLFdBQU87QUFBQSxNQUNMLEdBQUksV0FBbUI7QUFBQSxNQUN2QixpRUFBZTtBQUFKLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFFQSxvQkFBb0I7QUFDbEIsVUFBTSxvQkFBb0I7QUFDMUIsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUFBLEVBRUEsdUJBQXVCO0FBQ3JCLFNBQUssU0FBUyxjQUFjO0FBQzVCLFNBQUssV0FBVztBQUNoQixVQUFNLHVCQUF1QjtBQUFBLEVBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLG9CQUFvQjtBQUNsQixTQUFLLFdBQVcsU0FBUyxjQUFnQyxvQkFBb0I7QUFDN0UsUUFBSSxDQUFDLEtBQUssVUFBVTtBQUNsQjtBQUFBLElBQ0Y7QUFFQSxTQUFLLE9BQU8sS0FBSyxTQUFTO0FBRTFCLFNBQUssUUFBUSxnQkFBZ0IsS0FBSyxVQUFVLENBQUMsTUFBbUI7QUFDOUQsV0FBSyxPQUFPLEVBQUUsT0FBTztBQUFBLElBQ3ZCLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksS0FBSyxPQUFlO0FBQ3RCLFFBQUksQ0FBQyxZQUFZLFNBQVMsS0FBSztBQUFHLGNBQVE7QUFDMUMsU0FBSyxhQUFhLFFBQVEsS0FBSztBQUMvQixTQUFLLFdBQVcsYUFBYSxRQUFRLEtBQUs7QUFBQSxFQUM1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxJQUFJLE9BQWU7QUFDakIsV0FBTyxLQUFLLGFBQWEsTUFBTSxLQUFLO0FBQUEsRUFDdEM7QUFDRjtBQUVBLElBQU8sMEJBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9taXhpbnMvaWRzLXRoZW1lLW1peGluL2lkcy10aGVtZS1taXhpbi50cz8yZGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IEV2ZW50c01peGluSW50ZXJmYWNlIH0gZnJvbSAnLi4vaWRzLWV2ZW50cy1taXhpbi9pZHMtZXZlbnRzLW1peGluJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgdHlwZSBJZHNUaGVtZVN3aXRjaGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaWRzLXRoZW1lLXN3aXRjaGVyL2lkcy10aGVtZS1zd2l0Y2hlcic7XG5cbnR5cGUgQ29uc3RyYWludHMgPSBJZHNDb25zdHJ1Y3RvcjxFdmVudHNNaXhpbkludGVyZmFjZT47XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9NT0RFUyA9IFsnbGlnaHQnLCAnZGFyaycsICdjb250cmFzdCddO1xuXG4vKipcbiAqIEEgbWl4aW4gdGhhdCBhZGRzIHRoZW1pbmcgZnVuY3Rpb25hbGl0eSB0byBjb21wb25lbnRzXG4gKiBAcGFyYW0ge2FueX0gc3VwZXJjbGFzcyBBY2NlcHRzIGEgc3VwZXJjbGFzcyBhbmQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyBmcm9tIGl0XG4gKiBAcmV0dXJucyB7YW55fSBUaGUgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmNvbnN0IElkc1RoZW1lTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cmFpbnRzPihzdXBlcmNsYXNzOiBUKSA9PiBjbGFzcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuICBzd2l0Y2hlcjogSWRzVGhlbWVTd2l0Y2hlciB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuTU9ERVxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaz8uKCk7XG4gICAgdGhpcy5pbml0VGhlbWVIYW5kbGVycygpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5vZmZFdmVudCgndGhlbWVjaGFuZ2VkJyk7XG4gICAgdGhpcy5zd2l0Y2hlciA9IG51bGw7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2s/LigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgdGhlIG1peGluIGV2ZW50cyBhbmQgc3RhdGVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0VGhlbWVIYW5kbGVycygpIHtcbiAgICB0aGlzLnN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNUaGVtZVN3aXRjaGVyPignaWRzLXRoZW1lLXN3aXRjaGVyJyk7XG4gICAgaWYgKCF0aGlzLnN3aXRjaGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb2RlID0gdGhpcy5zd2l0Y2hlci5tb2RlO1xuXG4gICAgdGhpcy5vbkV2ZW50KCd0aGVtZWNoYW5nZWQnLCB0aGlzLnN3aXRjaGVyLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubW9kZSA9IGUuZGV0YWlsLm1vZGU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtb2RlIG9mIHRoZSBjdXJyZW50IHRoZW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgbW9kZSB2YWx1ZSBmb3IgZXhhbXBsZTogbGlnaHQsIGRhcmssIG9yIGNvbnRyYXN0XG4gICAqL1xuICBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCFUSEVNRV9NT0RFUy5pbmNsdWRlcyh2YWx1ZSkpIHZhbHVlID0gJ2xpZ2h0JztcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbW9kZScsIHZhbHVlKTtcbiAgICB0aGlzLmNvbnRhaW5lcj8uc2V0QXR0cmlidXRlKCdtb2RlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9kZSBvZiB0aGUgY3VycmVudCB0aGVtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBsaWdodCwgZGFyaywgb3IgY29udHJhc3RcbiAgICovXG4gIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtb2RlJykgfHwgJ2xpZ2h0JztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWRzVGhlbWVNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-theme-mixin/ids-theme-mixin.ts\n");

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
/******/ 			"ids-menu-side-by-side": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-icon_ids-icon_ts","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-icon_ids-icon_ts","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212"], () => (__webpack_require__("./src/components/ids-menu/demos/side-by-side.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;