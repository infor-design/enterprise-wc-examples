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

/***/ "./src/components/ids-popup-menu/demos/scrolling.ts":
/*!**********************************************************!*\
  !*** ./src/components/ids-popup-menu/demos/scrolling.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_popup_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-popup-menu */ \"./src/components/ids-popup-menu/ids-popup-menu.ts\");\n/* harmony import */ var _ids_popup_ids_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-popup/ids-popup */ \"./src/components/ids-popup/ids-popup.ts\");\n/* harmony import */ var _ids_input_ids_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ids-input/ids-input */ \"./src/components/ids-input/ids-input.ts\");\n/* harmony import */ var _utils_ids_dom_utils_ids_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/ids-dom-utils/ids-dom-utils */ \"./src/utils/ids-dom-utils/ids-dom-utils.ts\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const popupmenuEl = document.querySelector(\"#popupmenu\");\n  const popupEl = popupmenuEl.popup;\n  popupEl.setAttribute(\"align\", \"left, top\");\n  const setData = async () => {\n    const data = {\n      id: \"test-menu\",\n      contents: [\n        {\n          type: \"group\",\n          items: []\n        }\n      ]\n    };\n    const menuItems = 100;\n    const submenuOnEvery = 10;\n    const submenuItems = 5;\n    const createSubmenuItem = (i, j) => {\n      const submenuId = `${i}-${j}`;\n      return {\n        id: `test-submenu-item-${submenuId}`,\n        type: \"item\",\n        text: `Test Submenu Item ${submenuId}`\n      };\n    };\n    const createMenuItem = (i) => {\n      const ret = {\n        id: `menu-item-${i}`,\n        text: `Menu Item ${i}`,\n        type: \"item\"\n      };\n      if (i / submenuOnEvery % 1 === 0) {\n        ret.text = `Menu Item ${i} (with Submenu)`;\n        ret.submenu = {\n          id: `test-submenu-${i}`,\n          contents: [\n            {\n              id: `test-submenu-group-${i}`,\n              type: \"group\",\n              items: []\n            }\n          ]\n        };\n        for (let j = 0; j < submenuItems; j++) {\n          ret.submenu.contents[0].items.push(createSubmenuItem(i, j));\n        }\n      }\n      return ret;\n    };\n    for (let i = 0; i < menuItems; i++) {\n      data.contents[0].items.push(createMenuItem(i));\n    }\n    popupmenuEl.data = data;\n  };\n  setData();\n  const input = document.querySelector(\"ids-input\");\n  input.addEventListener(\"input\", (e) => {\n    const target = e.target;\n    if ((0,_utils_ids_dom_utils_ids_dom_utils__WEBPACK_IMPORTED_MODULE_3__.validMaxHeight)(target.value)) {\n      popupmenuEl.setAttribute(\"max-height\", `${target.value}px`);\n    } else {\n      popupmenuEl.removeAttribute(\"max-height\");\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtcG9wdXAtbWVudS9kZW1vcy9zY3JvbGxpbmcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDTztBQUNBO0FBQ0E7QUFFd0I7QUFTL0IsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDbEQsUUFBTSxjQUFtQixTQUFTLGNBQWMsWUFBWTtBQUc1RCxRQUFNLFVBQVUsWUFBWTtBQUM1QixVQUFRLGFBQWEsU0FBUyxXQUFXO0FBR3pDLFFBQU0sVUFBVSxZQUFZO0FBQzFCLFVBQU0sT0FBMEI7QUFBQSxNQUM5QixJQUFJO0FBQUEsTUFDSixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBR0EsVUFBTSxZQUFZO0FBQ2xCLFVBQU0saUJBQWlCO0FBQ3ZCLFVBQU0sZUFBZTtBQUdyQixVQUFNLG9CQUFvQixDQUFDLEdBQVcsTUFBYztBQUNsRCxZQUFNLFlBQVksR0FBRyxLQUFLO0FBQzFCLGFBQU87QUFBQSxRQUNMLElBQUkscUJBQXFCO0FBQUEsUUFDekIsTUFBTTtBQUFBLFFBQ04sTUFBTSxxQkFBcUI7QUFBQSxNQUM3QjtBQUFBLElBQ0Y7QUFHQSxVQUFNLGlCQUFpQixDQUFDLE1BQWM7QUFDcEMsWUFBTSxNQUF1QjtBQUFBLFFBQzNCLElBQUksYUFBYTtBQUFBLFFBQ2pCLE1BQU0sYUFBYTtBQUFBLFFBQ25CLE1BQU07QUFBQSxNQUNSO0FBR0EsVUFBSyxJQUFJLGlCQUFrQixNQUFNLEdBQUc7QUFDbEMsWUFBSSxPQUFPLGFBQWE7QUFDeEIsWUFBSSxVQUFVO0FBQUEsVUFDWixJQUFJLGdCQUFnQjtBQUFBLFVBQ3BCLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxJQUFJLHNCQUFzQjtBQUFBLGNBQzFCLE1BQU07QUFBQSxjQUNOLE9BQU8sQ0FBQztBQUFBLFlBQ1Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUdBLGlCQUFTLElBQUksR0FBRyxJQUFJLGNBQWMsS0FBSztBQUNyQyxVQUFDLElBQUksUUFBUSxTQUFVLENBQUMsRUFBdUIsTUFBTSxLQUFLLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUFBLFFBQ25GO0FBQUEsTUFDRjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBR0EsYUFBUyxJQUFJLEdBQUcsSUFBSSxXQUFXLEtBQUs7QUFDbEMsTUFBQyxLQUFLLFNBQVUsQ0FBQyxFQUF3QixNQUFNLEtBQUssZUFBZSxDQUFDLENBQUM7QUFBQSxJQUN2RTtBQUVBLGdCQUFZLE9BQU87QUFBQSxFQUNyQjtBQUVBLFVBQVE7QUFHUixRQUFNLFFBQVEsU0FBUyxjQUF3QixXQUFXO0FBQzFELFFBQU0saUJBQWlCLFNBQVMsQ0FBQyxNQUFhO0FBQzVDLFVBQU0sU0FBUyxFQUFFO0FBQ2pCLFFBQUksa0ZBQWMsQ0FBQyxPQUFPLEtBQUssR0FBRztBQUNoQyxrQkFBWSxhQUFhLGNBQWMsR0FBRyxPQUFPLFNBQVM7QUFBQSxJQUM1RCxPQUFPO0FBQ0wsa0JBQVksZ0JBQWdCLFlBQVk7QUFBQSxJQUMxQztBQUFBLEVBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1wb3B1cC1tZW51L2RlbW9zL3Njcm9sbGluZy50cz8zNTk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN1cHBvcnRpbmcgY29tcG9uZW50c1xuaW1wb3J0ICcuLi9pZHMtcG9wdXAtbWVudSc7XG5pbXBvcnQgJy4uLy4uL2lkcy1wb3B1cC9pZHMtcG9wdXAnO1xuaW1wb3J0ICcuLi8uLi9pZHMtaW5wdXQvaWRzLWlucHV0JztcblxuaW1wb3J0IHsgdmFsaWRNYXhIZWlnaHQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9pZHMtZG9tLXV0aWxzL2lkcy1kb20tdXRpbHMnO1xuXG5pbXBvcnQgdHlwZSB7XG4gIElkc01lbnVJdGVtRGF0YSxcbiAgSWRzTWVudU9iamVjdERhdGEsXG4gIElkc01lbnVHcm91cERhdGFcbn0gZnJvbSAnLi4vLi4vaWRzLW1lbnUvaWRzLW1lbnUtYXR0cmlidXRlcyc7XG5pbXBvcnQgdHlwZSBJZHNJbnB1dCBmcm9tICcuLi8uLi9pZHMtaW5wdXQvaWRzLWlucHV0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgcG9wdXBtZW51RWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cG1lbnUnKTtcblxuICAvLyBDb25maWd1cmUgdGhlIG1lbnVcbiAgY29uc3QgcG9wdXBFbCA9IHBvcHVwbWVudUVsLnBvcHVwO1xuICBwb3B1cEVsLnNldEF0dHJpYnV0ZSgnYWxpZ24nLCAnbGVmdCwgdG9wJyk7XG5cbiAgLy8gTG9hZC9zZXQgZGF0YVxuICBjb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGE6IElkc01lbnVPYmplY3REYXRhID0ge1xuICAgICAgaWQ6ICd0ZXN0LW1lbnUnLFxuICAgICAgY29udGVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgLy8gRGF0YSBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICBjb25zdCBtZW51SXRlbXMgPSAxMDA7XG4gICAgY29uc3Qgc3VibWVudU9uRXZlcnkgPSAxMDtcbiAgICBjb25zdCBzdWJtZW51SXRlbXMgPSA1O1xuXG4gICAgLy8gQnVpbGRzIHN1Ym1lbnUgaXRlbSBkYXRhXG4gICAgY29uc3QgY3JlYXRlU3VibWVudUl0ZW0gPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHN1Ym1lbnVJZCA9IGAke2l9LSR7an1gO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGB0ZXN0LXN1Ym1lbnUtaXRlbS0ke3N1Ym1lbnVJZH1gLFxuICAgICAgICB0eXBlOiAnaXRlbScsXG4gICAgICAgIHRleHQ6IGBUZXN0IFN1Ym1lbnUgSXRlbSAke3N1Ym1lbnVJZH1gXG4gICAgICB9IGFzIElkc01lbnVJdGVtRGF0YTtcbiAgICB9O1xuXG4gICAgLy8gQnVpbGRzIG1lbnUgaXRlbSBkYXRhXG4gICAgY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCByZXQ6IElkc01lbnVJdGVtRGF0YSA9IHtcbiAgICAgICAgaWQ6IGBtZW51LWl0ZW0tJHtpfWAsXG4gICAgICAgIHRleHQ6IGBNZW51IEl0ZW0gJHtpfWAsXG4gICAgICAgIHR5cGU6ICdpdGVtJ1xuICAgICAgfTtcblxuICAgICAgLy8gRXZlcnkgKHgpIG1lbnUgaXRlbSAtPiBhZGQgYSBzdWJtZW51IChjb25maWd1cmFibGUpXG4gICAgICBpZiAoKGkgLyBzdWJtZW51T25FdmVyeSkgJSAxID09PSAwKSB7XG4gICAgICAgIHJldC50ZXh0ID0gYE1lbnUgSXRlbSAke2l9ICh3aXRoIFN1Ym1lbnUpYDtcbiAgICAgICAgcmV0LnN1Ym1lbnUgPSB7XG4gICAgICAgICAgaWQ6IGB0ZXN0LXN1Ym1lbnUtJHtpfWAsXG4gICAgICAgICAgY29udGVudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IGB0ZXN0LXN1Ym1lbnUtZ3JvdXAtJHtpfWAsXG4gICAgICAgICAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBZGQgc3VibWVudSBpdGVtcyAoY29uZmlndXJhYmxlKVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1Ym1lbnVJdGVtczsgaisrKSB7XG4gICAgICAgICAgKHJldC5zdWJtZW51LmNvbnRlbnRzIVswXSBhcyBJZHNNZW51R3JvdXBEYXRhKS5pdGVtcy5wdXNoKGNyZWF0ZVN1Ym1lbnVJdGVtKGksIGopKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICAvLyBBZGQgbWVudSBpdGVtcyAoY29uZmlndXJhYmxlKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zOyBpKyspIHtcbiAgICAgIChkYXRhLmNvbnRlbnRzIVswXSBhcyBJZHNNZW51R3JvdXBEYXRhKSEuaXRlbXMucHVzaChjcmVhdGVNZW51SXRlbShpKSk7XG4gICAgfVxuXG4gICAgcG9wdXBtZW51RWwuZGF0YSA9IGRhdGE7XG4gIH07XG5cbiAgc2V0RGF0YSgpO1xuXG4gIC8vIEhhbmRsZSBjaGFuZ2Ugb2YgbWF4SGVpZ2h0IHZpYSBJZHNJbnB1dCAnaW5wdXQnIGV2ZW50XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNJbnB1dD4oJ2lkcy1pbnB1dCcpITtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogRXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBJZHNJbnB1dDtcbiAgICBpZiAodmFsaWRNYXhIZWlnaHQodGFyZ2V0LnZhbHVlKSkge1xuICAgICAgcG9wdXBtZW51RWwuc2V0QXR0cmlidXRlKCdtYXgtaGVpZ2h0JywgYCR7dGFyZ2V0LnZhbHVlfXB4YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcHVwbWVudUVsLnJlbW92ZUF0dHJpYnV0ZSgnbWF4LWhlaWdodCcpO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-popup-menu/demos/scrolling.ts\n");

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
/******/ 			"ids-popup-menu-scrolling": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts"], () => (__webpack_require__("./src/components/ids-popup-menu/demos/scrolling.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;