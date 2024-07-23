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

/***/ "./src/components/ids-popup-menu/demos/shortcut-keys.ts":
/*!**************************************************************!*\
  !*** ./src/components/ids-popup-menu/demos/shortcut-keys.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_data_menu_shortcuts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/menu-shortcuts.json */ \"./src/assets/data/menu-shortcuts.json\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const popupmenuEl = document.querySelector(\"#popupmenu\");\n  const popupEl = popupmenuEl.popup;\n  popupEl.setAttribute(\"align\", \"left, top\");\n  const url = _assets_data_menu_shortcuts_json__WEBPACK_IMPORTED_MODULE_0__;\n  const setData = async () => {\n    const res = await fetch(url);\n    const data = await res.json();\n    popupmenuEl.data = data;\n  };\n  setData();\n  const singleSelectCheckEl = document.querySelector(\"#controls-selection\");\n  singleSelectCheckEl.addEventListener(\"change\", (e) => {\n    const menuGroupEl = popupmenuEl.children[0];\n    menuGroupEl.select = e.target?.checked ? \"single\" : \"none\";\n  });\n  const iconsCheckEl = document.querySelector(\"#controls-icons\");\n  iconsCheckEl.addEventListener(\"change\", (e) => {\n    const items = popupmenuEl.items;\n    const checked = e.target?.checked;\n    if (!checked) {\n      items.forEach((item) => {\n        if (item.iconEl) {\n          item.removeAttribute(\"icon\");\n        }\n      });\n    } else {\n      items[0].icon = \"folder\";\n      items[5].icon = \"edit\";\n      items[6].icon = \"delete\";\n      if (items[7])\n        items[7].icon = \"settings\";\n    }\n  });\n  const submenuCheckEl = document.querySelector(\"#controls-submenu\");\n  submenuCheckEl.addEventListener(\"change\", (e) => {\n    const submenuItem = popupmenuEl.items[7];\n    const menuGroupEl = popupmenuEl.children[0];\n    const checked = e.target?.checked;\n    if (!checked)\n      submenuItem?.remove();\n    else {\n      const iconAttr = iconsCheckEl.checked ? ' icon=\"settings\"' : \"\";\n      menuGroupEl.insertAdjacentHTML(\n        \"beforeend\",\n        `<ids-menu-item id=\"contains-submenu\"${iconAttr}>\n          More Options...\n          <ids-popup-menu>\n            <ids-menu-header id=\"keep-open-header\">Single-selectable Items that keep the menu open</ids-menu-header>\n            <ids-menu-group id=\"single-sub-items\" select=\"single\" keep-open aria-labelledby=\"keep-open-header\">\n              <ids-menu-item value=\"sub-sub-single-1\">Sub-Sub-Item One</ids-menu-item>\n              <ids-menu-item value=\"sub-sub-single-2\">Sub-Sub-Item Two</ids-menu-item>\n              <ids-menu-item value=\"sub-sub-single-3\">Sub-Sub-Item Three</ids-menu-item>\n              <ids-menu-item value=\"sub-sub-single-4\">Sub-Sub-Item Four</ids-menu-item>\n            </ids-menu-group>\n          </ids-popup-menu>\n        </ids-menu-item>`\n      );\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtcG9wdXAtbWVudS9kZW1vcy9zaG9ydGN1dC1rZXlzLnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBT2lCO0FBRWpCLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELFFBQU0sY0FBNEIsU0FBUyxjQUE0QixZQUFZO0FBR25GLFFBQU0sVUFBb0IsWUFBWTtBQUN0QyxVQUFRLGFBQWEsU0FBUyxXQUFXO0FBR3pDLFFBQU0sTUFBVyw2REFBSTtBQUNyQixRQUFNLFVBQVUsWUFBWTtBQUMxQixVQUFNLE1BQU0sTUFBTSxNQUFNLEdBQUc7QUFDM0IsVUFBTSxPQUFPLE1BQU0sSUFBSSxLQUFLO0FBQzVCLGdCQUFZLE9BQU87QUFBQSxFQUNyQjtBQUNBLFVBQVE7QUFHUixRQUFNLHNCQUFzQixTQUFTLGNBQTJCLHFCQUFxQjtBQUNyRixzQkFBb0IsaUJBQWlCLFVBQVUsQ0FBQyxNQUFhO0FBQzNELFVBQU0sY0FBYyxZQUFZLFNBQVMsQ0FBQztBQUMxQyxnQkFBWSxTQUFVLEVBQUUsUUFBd0IsVUFBVSxXQUFXO0FBQUEsRUFDdkUsQ0FBQztBQUdELFFBQU0sZUFBZSxTQUFTLGNBQTJCLGlCQUFpQjtBQUMxRSxlQUFhLGlCQUFpQixVQUFVLENBQUMsTUFBYTtBQUNwRCxVQUFNLFFBQVEsWUFBWTtBQUMxQixVQUFNLFVBQVcsRUFBRSxRQUF3QjtBQUUzQyxRQUFJLENBQUMsU0FBUztBQUNaLFlBQU0sUUFBUSxDQUFDLFNBQXNCO0FBQ25DLFlBQUksS0FBSyxRQUFRO0FBQ2YsZUFBSyxnQkFBZ0IsTUFBTTtBQUFBLFFBQzdCO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSCxPQUFPO0FBQ0wsWUFBTSxDQUFDLEVBQUUsT0FBTztBQUNoQixZQUFNLENBQUMsRUFBRSxPQUFPO0FBQ2hCLFlBQU0sQ0FBQyxFQUFFLE9BQU87QUFDaEIsVUFBSSxNQUFNLENBQUM7QUFBRyxjQUFNLENBQUMsRUFBRSxPQUFPO0FBQUEsSUFDaEM7QUFBQSxFQUNGLENBQUM7QUFHRCxRQUFNLGlCQUFpQixTQUFTLGNBQTJCLG1CQUFtQjtBQUM5RSxpQkFBZSxpQkFBaUIsVUFBVSxDQUFDLE1BQWE7QUFDdEQsVUFBTSxjQUFjLFlBQVksTUFBTSxDQUFDO0FBQ3ZDLFVBQU0sY0FBYyxZQUFZLFNBQVMsQ0FBQztBQUMxQyxVQUFNLFVBQVcsRUFBRSxRQUF3QjtBQUUzQyxRQUFJLENBQUM7QUFBUyxtQkFBYSxPQUFPO0FBQUEsU0FDN0I7QUFDSCxZQUFNLFdBQVcsYUFBYSxVQUFVLHFCQUFxQjtBQUM3RCxrQkFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBLHVDQUF1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVl6QztBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtcG9wdXAtbWVudS9kZW1vcy9zaG9ydGN1dC1rZXlzLnRzPzUwOWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3VwcG9ydGluZyBjb21wb25lbnRzXG5pbXBvcnQgdHlwZSBJZHNQb3B1cE1lbnUgZnJvbSAnLi4vaWRzLXBvcHVwLW1lbnUnO1xuaW1wb3J0IHR5cGUgSWRzTWVudUdyb3VwIGZyb20gJy4uLy4uL2lkcy1tZW51L2lkcy1tZW51LWdyb3VwJztcbmltcG9ydCB0eXBlIElkc01lbnVJdGVtIGZyb20gJy4uLy4uL2lkcy1tZW51L2lkcy1tZW51LWl0ZW0nO1xuaW1wb3J0IHR5cGUgSWRzUG9wdXAgZnJvbSAnLi4vLi4vaWRzLXBvcHVwL2lkcy1wb3B1cCc7XG5pbXBvcnQgdHlwZSBJZHNDaGVja2JveCBmcm9tICcuLi8uLi9pZHMtY2hlY2tib3gvaWRzLWNoZWNrYm94JztcblxuaW1wb3J0IGpzb24gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvbWVudS1zaG9ydGN1dHMuanNvbic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHBvcHVwbWVudUVsOiBJZHNQb3B1cE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc1BvcHVwTWVudT4oJyNwb3B1cG1lbnUnKSE7XG5cbiAgLy8gQ29uZmlndXJlIHRoZSBtZW51XG4gIGNvbnN0IHBvcHVwRWw6IElkc1BvcHVwID0gcG9wdXBtZW51RWwucG9wdXAhO1xuICBwb3B1cEVsLnNldEF0dHJpYnV0ZSgnYWxpZ24nLCAnbGVmdCwgdG9wJyk7XG5cbiAgLy8gTG9hZC9zZXQgZGF0YVxuICBjb25zdCB1cmw6IGFueSA9IGpzb247XG4gIGNvbnN0IHNldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBwb3B1cG1lbnVFbC5kYXRhID0gZGF0YTtcbiAgfTtcbiAgc2V0RGF0YSgpO1xuXG4gIC8vIERpc2FibGUvRW5hYmxlIHNlbGVjdGlvbiBvbiB0aGUgbWVudVxuICBjb25zdCBzaW5nbGVTZWxlY3RDaGVja0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNDaGVja2JveD4oJyNjb250cm9scy1zZWxlY3Rpb24nKSE7XG4gIHNpbmdsZVNlbGVjdENoZWNrRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgbWVudUdyb3VwRWwgPSBwb3B1cG1lbnVFbC5jaGlsZHJlblswXSBhcyBJZHNNZW51R3JvdXA7XG4gICAgbWVudUdyb3VwRWwuc2VsZWN0ID0gKGUudGFyZ2V0IGFzIElkc0NoZWNrYm94KT8uY2hlY2tlZCA/ICdzaW5nbGUnIDogJ25vbmUnO1xuICB9KTtcblxuICAvLyBBZGQvcmVtb3ZlIGljb25zIHRvIHNvbWUgbWVudSBpdGVtc1xuICBjb25zdCBpY29uc0NoZWNrRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0NoZWNrYm94PignI2NvbnRyb2xzLWljb25zJykhO1xuICBpY29uc0NoZWNrRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBwb3B1cG1lbnVFbC5pdGVtcztcbiAgICBjb25zdCBjaGVja2VkID0gKGUudGFyZ2V0IGFzIElkc0NoZWNrYm94KT8uY2hlY2tlZDtcblxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogSWRzTWVudUl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWNvbkVsKSB7XG4gICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2ljb24nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1zWzBdLmljb24gPSAnZm9sZGVyJztcbiAgICAgIGl0ZW1zWzVdLmljb24gPSAnZWRpdCc7XG4gICAgICBpdGVtc1s2XS5pY29uID0gJ2RlbGV0ZSc7XG4gICAgICBpZiAoaXRlbXNbN10pIGl0ZW1zWzddLmljb24gPSAnc2V0dGluZ3MnO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRkL3JlbW92ZSBhIG1lbnUgaXRlbSB0aGF0IGNvbnRhaW5zIGEgc3VibWVudSAoZnVydGhlciBhbHRlcmluZyBtZW51IGl0ZW0gYWxpZ25tZW50KVxuICBjb25zdCBzdWJtZW51Q2hlY2tFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SWRzQ2hlY2tib3g+KCcjY29udHJvbHMtc3VibWVudScpITtcbiAgc3VibWVudUNoZWNrRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc3VibWVudUl0ZW0gPSBwb3B1cG1lbnVFbC5pdGVtc1s3XSBhcyBJZHNNZW51SXRlbTtcbiAgICBjb25zdCBtZW51R3JvdXBFbCA9IHBvcHVwbWVudUVsLmNoaWxkcmVuWzBdIGFzIElkc01lbnVHcm91cDtcbiAgICBjb25zdCBjaGVja2VkID0gKGUudGFyZ2V0IGFzIElkc0NoZWNrYm94KT8uY2hlY2tlZDtcblxuICAgIGlmICghY2hlY2tlZCkgc3VibWVudUl0ZW0/LnJlbW92ZSgpO1xuICAgIGVsc2Uge1xuICAgICAgY29uc3QgaWNvbkF0dHIgPSBpY29uc0NoZWNrRWwuY2hlY2tlZCA/ICcgaWNvbj1cInNldHRpbmdzXCInIDogJyc7XG4gICAgICBtZW51R3JvdXBFbC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgPGlkcy1tZW51LWl0ZW0gaWQ9XCJjb250YWlucy1zdWJtZW51XCIke2ljb25BdHRyfT5cbiAgICAgICAgICBNb3JlIE9wdGlvbnMuLi5cbiAgICAgICAgICA8aWRzLXBvcHVwLW1lbnU+XG4gICAgICAgICAgICA8aWRzLW1lbnUtaGVhZGVyIGlkPVwia2VlcC1vcGVuLWhlYWRlclwiPlNpbmdsZS1zZWxlY3RhYmxlIEl0ZW1zIHRoYXQga2VlcCB0aGUgbWVudSBvcGVuPC9pZHMtbWVudS1oZWFkZXI+XG4gICAgICAgICAgICA8aWRzLW1lbnUtZ3JvdXAgaWQ9XCJzaW5nbGUtc3ViLWl0ZW1zXCIgc2VsZWN0PVwic2luZ2xlXCIga2VlcC1vcGVuIGFyaWEtbGFiZWxsZWRieT1cImtlZXAtb3Blbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGlkcy1tZW51LWl0ZW0gdmFsdWU9XCJzdWItc3ViLXNpbmdsZS0xXCI+U3ViLVN1Yi1JdGVtIE9uZTwvaWRzLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgPGlkcy1tZW51LWl0ZW0gdmFsdWU9XCJzdWItc3ViLXNpbmdsZS0yXCI+U3ViLVN1Yi1JdGVtIFR3bzwvaWRzLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgPGlkcy1tZW51LWl0ZW0gdmFsdWU9XCJzdWItc3ViLXNpbmdsZS0zXCI+U3ViLVN1Yi1JdGVtIFRocmVlPC9pZHMtbWVudS1pdGVtPlxuICAgICAgICAgICAgICA8aWRzLW1lbnUtaXRlbSB2YWx1ZT1cInN1Yi1zdWItc2luZ2xlLTRcIj5TdWItU3ViLUl0ZW0gRm91cjwvaWRzLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDwvaWRzLW1lbnUtZ3JvdXA+XG4gICAgICAgICAgPC9pZHMtcG9wdXAtbWVudT5cbiAgICAgICAgPC9pZHMtbWVudS1pdGVtPmBcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-popup-menu/demos/shortcut-keys.ts\n");

/***/ }),

/***/ "./src/assets/data/menu-shortcuts.json":
/*!*********************************************!*\
  !*** ./src/assets/data/menu-shortcuts.json ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/menu-shortcuts.json";

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
/******/ 		__webpack_require__.h = () => ("c2884dcdc9b3eff5a55f")
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
/******/ 			"ids-popup-menu-shortcut-keys": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-popup-menu/demos/shortcut-keys.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;