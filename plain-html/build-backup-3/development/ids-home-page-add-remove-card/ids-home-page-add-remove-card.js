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

/***/ "./src/components/ids-home-page/demos/add-remove-card.ts":
/*!***************************************************************!*\
  !*** ./src/components/ids-home-page/demos/add-remove-card.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-home-page */ \"./src/components/ids-home-page/ids-home-page.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const homePage = document.querySelector(\"#home-page-toggle-card\");\n  const btnToggle = document.querySelector(\"#btn-home-page-toggle-card\");\n  const toggleCardId = \"toggle-card\";\n  let isAdded = false;\n  const addCard = () => {\n    btnToggle.text = \"Remove Card\";\n    const template = document.createElement(\"template\");\n    template.innerHTML = `\n      <ids-card slot=\"card\" id=\"${toggleCardId}\">\n        <div slot=\"card-header\">\n          <ids-text font-size=\"20\" type=\"h2\" overflow=\"ellipsis\" tooltip=\"true\">Card 1x1 (Dom Order 4) - D</ids-text>\n        </div>\n        <div slot=\"card-content\"></div>\n      </ids-card>`;\n    const card = template.content.cloneNode(true);\n    const refEl = document.querySelector(\"#hp-card-2\");\n    homePage.insertBefore(card, refEl);\n  };\n  const removeCard = () => {\n    const toggleCard = document.querySelector(`#${toggleCardId}`);\n    toggleCard?.remove();\n    btnToggle.text = \"Add Card\";\n  };\n  btnToggle?.addEventListener(\"click\", () => {\n    if (isAdded)\n      removeCard();\n    else\n      addCard();\n    isAdded = !isAdded;\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtaG9tZS1wYWdlL2RlbW9zL2FkZC1yZW1vdmUtY2FyZC50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUNPO0FBRVAsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDbEQsUUFBTSxXQUFnQixTQUFTLGNBQWMsd0JBQXdCO0FBQ3JFLFFBQU0sWUFBaUIsU0FBUyxjQUFjLDRCQUE0QjtBQUUxRSxRQUFNLGVBQWU7QUFDckIsTUFBSSxVQUFVO0FBR2QsUUFBTSxVQUFVLE1BQU07QUFDcEIsY0FBVSxPQUFPO0FBQ2pCLFVBQU0sV0FBVyxTQUFTLGNBQWMsVUFBVTtBQUNsRCxhQUFTLFlBQVk7QUFBQSxrQ0FDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPOUIsVUFBTSxPQUFPLFNBQVMsUUFBUSxVQUFVLElBQUk7QUFDNUMsVUFBTSxRQUFRLFNBQVMsY0FBYyxZQUFZO0FBQ2pELGFBQVMsYUFBYSxNQUFNLEtBQUs7QUFBQSxFQUNuQztBQUdBLFFBQU0sYUFBYSxNQUFNO0FBQ3ZCLFVBQU0sYUFBYSxTQUFTLGNBQWMsSUFBSSxjQUFjO0FBQzVELGdCQUFZLE9BQU87QUFDbkIsY0FBVSxPQUFPO0FBQUEsRUFDbkI7QUFHQSxhQUFXLGlCQUFpQixTQUFTLE1BQU07QUFDekMsUUFBSTtBQUFTLGlCQUFXO0FBQUE7QUFDbkIsY0FBUTtBQUNiLGNBQVUsQ0FBQztBQUFBLEVBQ2IsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1ob21lLXBhZ2UvZGVtb3MvYWRkLXJlbW92ZS1jYXJkLnRzP2IxNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9tZSBwYWdlIGFkZC9yZW1vdmUgY2FyZFxuaW1wb3J0ICcuLi9pZHMtaG9tZS1wYWdlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgaG9tZVBhZ2U6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLXBhZ2UtdG9nZ2xlLWNhcmQnKTtcbiAgY29uc3QgYnRuVG9nZ2xlOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLWhvbWUtcGFnZS10b2dnbGUtY2FyZCcpO1xuXG4gIGNvbnN0IHRvZ2dsZUNhcmRJZCA9ICd0b2dnbGUtY2FyZCc7XG4gIGxldCBpc0FkZGVkID0gZmFsc2U7XG5cbiAgLy8gQWRkIGNhcmRcbiAgY29uc3QgYWRkQ2FyZCA9ICgpID0+IHtcbiAgICBidG5Ub2dnbGUudGV4dCA9ICdSZW1vdmUgQ2FyZCc7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICAgIDxpZHMtY2FyZCBzbG90PVwiY2FyZFwiIGlkPVwiJHt0b2dnbGVDYXJkSWR9XCI+XG4gICAgICAgIDxkaXYgc2xvdD1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgPGlkcy10ZXh0IGZvbnQtc2l6ZT1cIjIwXCIgdHlwZT1cImgyXCIgb3ZlcmZsb3c9XCJlbGxpcHNpc1wiIHRvb2x0aXA9XCJ0cnVlXCI+Q2FyZCAxeDEgKERvbSBPcmRlciA0KSAtIEQ8L2lkcy10ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzbG90PVwiY2FyZC1jb250ZW50XCI+PC9kaXY+XG4gICAgICA8L2lkcy1jYXJkPmA7XG5cbiAgICBjb25zdCBjYXJkID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgcmVmRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHAtY2FyZC0yJyk7XG4gICAgaG9tZVBhZ2UuaW5zZXJ0QmVmb3JlKGNhcmQsIHJlZkVsKTtcbiAgfTtcblxuICAvLyBSZW1vdmUgY2FyZFxuICBjb25zdCByZW1vdmVDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZ2dsZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0b2dnbGVDYXJkSWR9YCk7XG4gICAgdG9nZ2xlQ2FyZD8ucmVtb3ZlKCk7XG4gICAgYnRuVG9nZ2xlLnRleHQgPSAnQWRkIENhcmQnO1xuICB9O1xuXG4gIC8vIEJpbmQgdG9nZ2xlIGJ1dHRvblxuICBidG5Ub2dnbGU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChpc0FkZGVkKSByZW1vdmVDYXJkKCk7XG4gICAgZWxzZSBhZGRDYXJkKCk7XG4gICAgaXNBZGRlZCA9ICFpc0FkZGVkO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-home-page/demos/add-remove-card.ts\n");

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
/******/ 		__webpack_require__.h = () => ("1d497cfbe7f5008f070f")
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
/******/ 			"ids-home-page-add-remove-card": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-card_ids-card_ts","src_components_ids-home-page_ids-home-page_ts-src_mixins_ids-color-variant-mixin_ids-color-va-72e1d8"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-card_ids-card_ts","src_components_ids-home-page_ids-home-page_ts-src_mixins_ids-color-variant-mixin_ids-color-va-72e1d8"], () => (__webpack_require__("./src/components/ids-home-page/demos/add-remove-card.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;