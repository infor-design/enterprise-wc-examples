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

/***/ "./src/components/ids-dropdown/demos/separate-list.ts":
/*!************************************************************!*\
  !*** ./src/components/ids-dropdown/demos/separate-list.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-dropdown */ \"./src/components/ids-dropdown/ids-dropdown.ts\");\n/* harmony import */ var _ids_dropdown_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ids-dropdown-list */ \"./src/components/ids-dropdown/ids-dropdown-list.ts\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const demoIdsContainer = document.querySelector(\"ids-container\");\n  const dropdownEl = document.querySelector(\"#dropdown-1\");\n  const getFieldIdFromBtnId = (btnEl) => btnEl.getAttribute(\"id\")?.replace(\"-button\", \"-field\") || \"\";\n  const createPopup = (fieldId, btnId) => {\n    const pickerHTML = `<ids-dropdown-list\n          target=\"#${fieldId}\"\n          trigger-elem=\"#${btnId}\"\n          trigger-type=\"custom\"></ids-dropdown-list>`;\n    demoIdsContainer.insertAdjacentHTML(\"beforeend\", pickerHTML);\n    const picker = document.querySelector(\"ids-dropdown-list\");\n    return picker;\n  };\n  const configurePopup = (btnEl) => {\n    const btnId = btnEl.getAttribute(\"id\");\n    const fieldId = btnId.replace(\"-button\", \"-field\");\n    const field = document.querySelector(`#${fieldId}`);\n    let picker = document.querySelector(\"ids-dropdown-list\");\n    let currentTarget;\n    if (picker) {\n      if (picker.popup)\n        picker.popup.animated = false;\n      currentTarget = picker.target;\n      picker.target = `#${fieldId}`;\n      picker.triggerElem = `#${btnId}`;\n      if (field.value)\n        picker.value = field.value;\n    } else {\n      picker = createPopup(fieldId, btnId);\n      currentTarget = picker.target;\n      if (field.value)\n        picker.value = field.value;\n      picker.onEvent(\"hide\", picker, (e) => {\n        e.stopPropagation();\n        if (e.detail.doFocus) {\n          picker.target?.focus();\n        }\n      });\n      picker.onEvent(\"show\", picker, (e) => {\n        e.stopPropagation();\n        picker.value = currentTarget?.value;\n      });\n    }\n  };\n  configurePopup(dropdownEl);\n  dropdownEl.onEvent(\"selected\", dropdownEl, (e) => {\n    const target = e.target;\n    if (target) {\n      const picker = document.querySelector(\"ids-dropdown-list\");\n      const fieldId = getFieldIdFromBtnId(target);\n      console.info('\"selected\" event triggered: ', e.detail.value, ` -- Value will be passed to field \"${fieldId}\"`);\n      target.value = picker.value;\n      picker.hide(true);\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZHJvcGRvd24vZGVtb3Mvc2VwYXJhdGUtbGlzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDTztBQUNBO0FBTVAsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDbEQsUUFBTSxtQkFBbUIsU0FBUyxjQUE0QixlQUFlO0FBQzdFLFFBQU0sYUFBYSxTQUFTLGNBQTJCLGFBQWE7QUFFcEUsUUFBTSxzQkFBc0IsQ0FBQyxVQUFlLE1BQU0sYUFBYSxJQUFJLEdBQUcsUUFBUSxXQUFXLFFBQVEsS0FBSztBQUd0RyxRQUFNLGNBQWMsQ0FBQyxTQUFpQixVQUFrQjtBQUN0RCxVQUFNLGFBQWE7QUFBQSxxQkFDRjtBQUFBLDJCQUNNO0FBQUE7QUFFdkIscUJBQWlCLG1CQUFtQixhQUFhLFVBQVU7QUFFM0QsVUFBTSxTQUFTLFNBQVMsY0FBK0IsbUJBQW1CO0FBQzFFLFdBQU87QUFBQSxFQUNUO0FBSUEsUUFBTSxpQkFBaUIsQ0FBQyxVQUFlO0FBQ3JDLFVBQU0sUUFBUSxNQUFNLGFBQWEsSUFBSTtBQUNyQyxVQUFNLFVBQVUsTUFBTSxRQUFRLFdBQVcsUUFBUTtBQUNqRCxVQUFNLFFBQVEsU0FBUyxjQUEyQixJQUFJLFNBQVM7QUFFL0QsUUFBSSxTQUFTLFNBQVMsY0FBK0IsbUJBQW1CO0FBQ3hFLFFBQUk7QUFFSixRQUFJLFFBQVE7QUFDVixVQUFJLE9BQU87QUFBTyxlQUFPLE1BQU0sV0FBVztBQUMxQyxzQkFBZ0IsT0FBTztBQUN2QixhQUFPLFNBQVMsSUFBSTtBQUNwQixhQUFPLGNBQWMsSUFBSTtBQUN6QixVQUFJLE1BQU07QUFBTyxlQUFPLFFBQVEsTUFBTTtBQUFBLElBQ3hDLE9BQU87QUFDTCxlQUFTLFlBQVksU0FBUyxLQUFLO0FBQ25DLHNCQUFnQixPQUFPO0FBQ3ZCLFVBQUksTUFBTTtBQUFPLGVBQU8sUUFBUSxNQUFNO0FBR3RDLGFBQU8sUUFBUSxRQUFRLFFBQVEsQ0FBQyxNQUFtQjtBQUNqRCxVQUFFLGdCQUFnQjtBQUNsQixZQUFJLEVBQUUsT0FBTyxTQUFTO0FBQ3BCLGlCQUFPLFFBQVEsTUFBTTtBQUFBLFFBQ3ZCO0FBQUEsTUFDRixDQUFDO0FBSUQsYUFBTyxRQUFRLFFBQVEsUUFBUSxDQUFDLE1BQW1CO0FBQ2pELFVBQUUsZ0JBQWdCO0FBQ2xCLGVBQU8sUUFBUSxlQUFlO0FBQUEsTUFDaEMsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBRUEsaUJBQWUsVUFBVTtBQUd6QixhQUFXLFFBQVEsWUFBWSxZQUFZLENBQUMsTUFBbUI7QUFDN0QsVUFBTSxTQUFVLEVBQUU7QUFDbEIsUUFBSSxRQUFRO0FBQ1YsWUFBTSxTQUFTLFNBQVMsY0FBK0IsbUJBQW1CO0FBQzFFLFlBQU0sVUFBVSxvQkFBb0IsTUFBTTtBQUUxQyxjQUFRLEtBQUssZ0NBQWdDLEVBQUUsT0FBTyxPQUFPLHNDQUFzQyxVQUFVO0FBQzdHLGFBQU8sUUFBUSxPQUFPO0FBQ3RCLGFBQU8sS0FBSyxJQUFJO0FBQUEsSUFDbEI7QUFBQSxFQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtZHJvcGRvd24vZGVtb3Mvc2VwYXJhdGUtbGlzdC50cz8yYmU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN1cHBvcnRpbmcgY29tcG9uZW50c1xuaW1wb3J0ICcuLi9pZHMtZHJvcGRvd24nO1xuaW1wb3J0ICcuLi9pZHMtZHJvcGRvd24tbGlzdCc7XG5cbmltcG9ydCB0eXBlIElkc0NvbnRhaW5lciBmcm9tICcuLi8uLi9pZHMtY29udGFpbmVyL2lkcy1jb250YWluZXInO1xuaW1wb3J0IHR5cGUgSWRzRHJvcGRvd24gZnJvbSAnLi4vaWRzLWRyb3Bkb3duJztcbmltcG9ydCB0eXBlIElkc0Ryb3Bkb3duTGlzdCBmcm9tICcuLi9pZHMtZHJvcGRvd24tbGlzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGRlbW9JZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0NvbnRhaW5lcj4oJ2lkcy1jb250YWluZXInKSE7XG4gIGNvbnN0IGRyb3Bkb3duRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0Ryb3Bkb3duPignI2Ryb3Bkb3duLTEnKSE7XG5cbiAgY29uc3QgZ2V0RmllbGRJZEZyb21CdG5JZCA9IChidG5FbDogYW55KSA9PiBidG5FbC5nZXRBdHRyaWJ1dGUoJ2lkJyk/LnJlcGxhY2UoJy1idXR0b24nLCAnLWZpZWxkJykgfHwgJyc7XG5cbiAgLy8gQ3JlYXRlcyBhIG5ldyBJZHNEcm9wZG93bkxpc3RcbiAgY29uc3QgY3JlYXRlUG9wdXAgPSAoZmllbGRJZDogc3RyaW5nLCBidG5JZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcGlja2VySFRNTCA9IGA8aWRzLWRyb3Bkb3duLWxpc3RcbiAgICAgICAgICB0YXJnZXQ9XCIjJHtmaWVsZElkfVwiXG4gICAgICAgICAgdHJpZ2dlci1lbGVtPVwiIyR7YnRuSWR9XCJcbiAgICAgICAgICB0cmlnZ2VyLXR5cGU9XCJjdXN0b21cIj48L2lkcy1kcm9wZG93bi1saXN0PmA7XG4gICAgZGVtb0lkc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHBpY2tlckhUTUwpO1xuXG4gICAgY29uc3QgcGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNEcm9wZG93bkxpc3Q+KCdpZHMtZHJvcGRvd24tbGlzdCcpITtcbiAgICByZXR1cm4gcGlja2VyO1xuICB9O1xuXG4gIC8vIEFzc2lnbnMgdGhlIGNvcnJlY3QgcHJvcGVydGllcy9hdHRyaWJ1dGVzIHRvIHRoZSBzdGFuZGFsb25lIGxpc3QgdGhhdCBjb3JyZWN0bHlcbiAgLy8gYmluZHMgaXQgdG8gZWFjaCB0cmlnZ2VyIGZpZWxkXG4gIGNvbnN0IGNvbmZpZ3VyZVBvcHVwID0gKGJ0bkVsOiBhbnkpID0+IHtcbiAgICBjb25zdCBidG5JZCA9IGJ0bkVsLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBmaWVsZElkID0gYnRuSWQucmVwbGFjZSgnLWJ1dHRvbicsICctZmllbGQnKTtcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SWRzRHJvcGRvd24+KGAjJHtmaWVsZElkfWApITtcblxuICAgIGxldCBwaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0Ryb3Bkb3duTGlzdD4oJ2lkcy1kcm9wZG93bi1saXN0JykhO1xuICAgIGxldCBjdXJyZW50VGFyZ2V0OiBJZHNEcm9wZG93bjtcblxuICAgIGlmIChwaWNrZXIpIHtcbiAgICAgIGlmIChwaWNrZXIucG9wdXApIHBpY2tlci5wb3B1cC5hbmltYXRlZCA9IGZhbHNlO1xuICAgICAgY3VycmVudFRhcmdldCA9IHBpY2tlci50YXJnZXQgYXMgSWRzRHJvcGRvd247XG4gICAgICBwaWNrZXIudGFyZ2V0ID0gYCMke2ZpZWxkSWR9YDtcbiAgICAgIHBpY2tlci50cmlnZ2VyRWxlbSA9IGAjJHtidG5JZH1gO1xuICAgICAgaWYgKGZpZWxkLnZhbHVlKSBwaWNrZXIudmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGlja2VyID0gY3JlYXRlUG9wdXAoZmllbGRJZCwgYnRuSWQpO1xuICAgICAgY3VycmVudFRhcmdldCA9IHBpY2tlci50YXJnZXQgYXMgSWRzRHJvcGRvd247XG4gICAgICBpZiAoZmllbGQudmFsdWUpIHBpY2tlci52YWx1ZSA9IGZpZWxkLnZhbHVlO1xuXG4gICAgICAvLyBEcm9wZG93biBMaXN0J3MgYGhpZGVgIGV2ZW50IGNhbiBjYXVzZSB0aGUgZmllbGQgdG8gYmVjb21lIGZvY3VzZWRcbiAgICAgIHBpY2tlci5vbkV2ZW50KCdoaWRlJywgcGlja2VyLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKGUuZGV0YWlsLmRvRm9jdXMpIHtcbiAgICAgICAgICBwaWNrZXIudGFyZ2V0Py5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gRHJvcGRvd24gTGlzdCdzYHNob3dgIGV2ZW50IHdpbGwgYmUgdXNlZCB0byBjYXB0dXJlIHRoZSB2YWx1ZSBmcm9tXG4gICAgICAvLyBpdHMgYXNzaWduZWQgdHJpZ2dlciBmaWVsZFxuICAgICAgcGlja2VyLm9uRXZlbnQoJ3Nob3cnLCBwaWNrZXIsIChlOiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBwaWNrZXIudmFsdWUgPSBjdXJyZW50VGFyZ2V0Py52YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25maWd1cmVQb3B1cChkcm9wZG93bkVsKTtcblxuICAvLyBIYW5kbGUgc2VsZWN0aW9uc1xuICBkcm9wZG93bkVsLm9uRXZlbnQoJ3NlbGVjdGVkJywgZHJvcGRvd25FbCwgKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IGFzIGFueSk7IC8vIHRyaWdnZXIgZmllbGRcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBjb25zdCBwaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0Ryb3Bkb3duTGlzdD4oJ2lkcy1kcm9wZG93bi1saXN0JykhO1xuICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWRGcm9tQnRuSWQodGFyZ2V0KTtcblxuICAgICAgY29uc29sZS5pbmZvKCdcInNlbGVjdGVkXCIgZXZlbnQgdHJpZ2dlcmVkOiAnLCBlLmRldGFpbC52YWx1ZSwgYCAtLSBWYWx1ZSB3aWxsIGJlIHBhc3NlZCB0byBmaWVsZCBcIiR7ZmllbGRJZH1cImApO1xuICAgICAgdGFyZ2V0LnZhbHVlID0gcGlja2VyLnZhbHVlO1xuICAgICAgcGlja2VyLmhpZGUodHJ1ZSk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-dropdown/demos/separate-list.ts\n");

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
/******/ 			"ids-dropdown-separate-list": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-trigger-field_ids-trigger-field_scss","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts"], () => (__webpack_require__("./src/components/ids-dropdown/demos/separate-list.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;