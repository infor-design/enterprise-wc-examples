/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ids-editor/demos/sandbox.ts":
/*!****************************************************!*\
  !*** ./src/components/ids-editor/demos/sandbox.ts ***!
  \****************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", async () => {\n  const editorModalElementsValueEl = document.querySelector(\"#editor-modal-elements-value\");\n  if (editorModalElementsValueEl) {\n    const modals = {\n      hyperlink: {\n        url: \"https://\",\n        classes: \"\",\n        targets: [{ text: \"New Window\", value: \"_blank\", selected: true }],\n        showIsClickable: false\n      },\n      insertimage: { url: \"../assets/images/placeholder-200x200.png\" }\n    };\n    editorModalElementsValueEl.modalElementsValue(modals);\n  }\n  const editorEventsEl = document.querySelector(\"#editor-events\");\n  const radioBeforeEditor = document.querySelector(\"#radio-editor-evt-beforeeditormode\");\n  const radioBeforeSource = document.querySelector(\"#radio-editor-evt-beforesourcemode\");\n  const radioBeforePaste = document.querySelector(\"#radio-editor-evt-beforepaste\");\n  const cbPasteAsPlainText = document.querySelector(\"#cb-paste-as-plain-text\");\n  if (editorEventsEl) {\n    const show = (type, detail, veto) => {\n      const showVeto = typeof veto !== \"undefined\" ? `veto: ${veto}` : \"\";\n      console.info(type, detail ?? \"\", showVeto);\n    };\n    editorEventsEl.addEventListener(\"beforeeditormode\", (e) => {\n      const veto = radioBeforeEditor.value;\n      show(\"beforeeditormode\", e.detail, veto);\n      e.detail.response(veto);\n    });\n    editorEventsEl.addEventListener(\"aftereditormode\", (e) => {\n      show(\"aftereditormode\", e.detail);\n    });\n    editorEventsEl.addEventListener(\"beforesourcemode\", (e) => {\n      const veto = radioBeforeSource.value;\n      show(\"beforesourcemode\", e.detail, veto);\n      e.detail.response(veto);\n    });\n    editorEventsEl.addEventListener(\"aftersourcemode\", (e) => {\n      show(\"aftersourcemode\", e.detail);\n    });\n    editorEventsEl.addEventListener(\"rejectviewchange\", (e) => {\n      show(\"rejectviewchange\", e.detail);\n    });\n    editorEventsEl.addEventListener(\"viewchange\", (e) => {\n      show(\"viewchange\", e.detail);\n    });\n    editorEventsEl.addEventListener(\"beforepaste\", (e) => {\n      editorEventsEl.pasteAsPlainText = cbPasteAsPlainText.checked;\n      const veto = radioBeforePaste.value;\n      show(\"beforepaste\", e.detail, veto);\n      e.detail.response(veto);\n    });\n    editorEventsEl.addEventListener(\"afterpaste\", (e) => {\n      show(\"afterpaste\", e.detail);\n    });\n    editorEventsEl.addEventListener(\"rejectpaste\", (e) => {\n      show(\"rejectpaste\", e.detail);\n    });\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1lZGl0b3IvZGVtb3Mvc2FuZGJveC50cz80ZTE0Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIC8qKlxuICAgKiBNT0RBTCBFTEVNRU5UUyBERUZBVUxUIFZBTFVFXG4gICAqL1xuICBjb25zdCBlZGl0b3JNb2RhbEVsZW1lbnRzVmFsdWVFbDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRvci1tb2RhbC1lbGVtZW50cy12YWx1ZScpO1xuICBpZiAoZWRpdG9yTW9kYWxFbGVtZW50c1ZhbHVlRWwpIHtcbiAgICBjb25zdCBtb2RhbHMgPSB7XG4gICAgICBoeXBlcmxpbms6IHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly8nLFxuICAgICAgICBjbGFzc2VzOiAnJyxcbiAgICAgICAgdGFyZ2V0czogW3sgdGV4dDogJ05ldyBXaW5kb3cnLCB2YWx1ZTogJ19ibGFuaycsIHNlbGVjdGVkOiB0cnVlIH1dLFxuICAgICAgICBzaG93SXNDbGlja2FibGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgaW5zZXJ0aW1hZ2U6IHsgdXJsOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci0yMDB4MjAwLnBuZycgfVxuICAgIH07XG4gICAgZWRpdG9yTW9kYWxFbGVtZW50c1ZhbHVlRWwubW9kYWxFbGVtZW50c1ZhbHVlKG1vZGFscyk7XG4gIH1cblxuICAvKipcbiAgICogRURJVE9SIEVWRU5UU1xuICAgKi9cbiAgY29uc3QgZWRpdG9yRXZlbnRzRWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0b3ItZXZlbnRzJyk7XG4gIGNvbnN0IHJhZGlvQmVmb3JlRWRpdG9yOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFkaW8tZWRpdG9yLWV2dC1iZWZvcmVlZGl0b3Jtb2RlJyk7XG4gIGNvbnN0IHJhZGlvQmVmb3JlU291cmNlOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFkaW8tZWRpdG9yLWV2dC1iZWZvcmVzb3VyY2Vtb2RlJyk7XG4gIGNvbnN0IHJhZGlvQmVmb3JlUGFzdGU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYWRpby1lZGl0b3ItZXZ0LWJlZm9yZXBhc3RlJyk7XG4gIGNvbnN0IGNiUGFzdGVBc1BsYWluVGV4dDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NiLXBhc3RlLWFzLXBsYWluLXRleHQnKTtcbiAgaWYgKGVkaXRvckV2ZW50c0VsKSB7XG4gICAgLy8gZGlzcGxheSBjb25zb2xlIGxvZ3NcbiAgICBjb25zdCBzaG93ID0gKHR5cGU6IHN0cmluZywgZGV0YWlsOiBzdHJpbmcsIHZldG8/OiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCBzaG93VmV0byA9IHR5cGVvZiB2ZXRvICE9PSAndW5kZWZpbmVkJyA/IGB2ZXRvOiAke3ZldG99YCA6ICcnO1xuICAgICAgY29uc29sZS5pbmZvKHR5cGUsIChkZXRhaWwgPz8gJycpLCBzaG93VmV0byk7XG4gICAgfTtcblxuICAgIC8vIGJlZm9yZSBlZGl0b3IgbW9kZVxuICAgIGVkaXRvckV2ZW50c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWVkaXRvcm1vZGUnLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCB2ZXRvOiBib29sZWFuID0gcmFkaW9CZWZvcmVFZGl0b3IudmFsdWU7XG4gICAgICBzaG93KCdiZWZvcmVlZGl0b3Jtb2RlJywgZS5kZXRhaWwsIHZldG8pO1xuICAgICAgZS5kZXRhaWwucmVzcG9uc2UodmV0byk7XG4gICAgfSk7XG4gICAgLy8gYWZ0ZXIgZWRpdG9yIG1vZGVcbiAgICBlZGl0b3JFdmVudHNFbC5hZGRFdmVudExpc3RlbmVyKCdhZnRlcmVkaXRvcm1vZGUnLCAoZTogYW55KSA9PiB7XG4gICAgICBzaG93KCdhZnRlcmVkaXRvcm1vZGUnLCBlLmRldGFpbCk7XG4gICAgfSk7XG4gICAgLy8gYmVmb3JlIHNvdXJjZSBtb2RlXG4gICAgZWRpdG9yRXZlbnRzRWwuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3Jlc291cmNlbW9kZScsIChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHZldG8gPSByYWRpb0JlZm9yZVNvdXJjZS52YWx1ZTtcbiAgICAgIHNob3coJ2JlZm9yZXNvdXJjZW1vZGUnLCBlLmRldGFpbCwgdmV0byk7XG4gICAgICBlLmRldGFpbC5yZXNwb25zZSh2ZXRvKTtcbiAgICB9KTtcbiAgICAvLyBhZnRlciBzb3VyY2UgbW9kZVxuICAgIGVkaXRvckV2ZW50c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2FmdGVyc291cmNlbW9kZScsIChlOiBhbnkpID0+IHtcbiAgICAgIHNob3coJ2FmdGVyc291cmNlbW9kZScsIGUuZGV0YWlsKTtcbiAgICB9KTtcbiAgICAvLyBpZiByZXF1ZXN0ZWQgdmlldyBtb2RlIHJlamVjdFxuICAgIGVkaXRvckV2ZW50c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3JlamVjdHZpZXdjaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICBzaG93KCdyZWplY3R2aWV3Y2hhbmdlJywgZS5kZXRhaWwpO1xuICAgIH0pO1xuICAgIC8vIGFmdGVyIHJlcXVlc3RlZCB2aWV3IG1vZGUgY2hhbmdlXG4gICAgZWRpdG9yRXZlbnRzRWwuYWRkRXZlbnRMaXN0ZW5lcigndmlld2NoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgIHNob3coJ3ZpZXdjaGFuZ2UnLCBlLmRldGFpbCk7XG4gICAgfSk7XG4gICAgLy8gYmVmb3JlIHBhc3RlXG4gICAgZWRpdG9yRXZlbnRzRWwuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcGFzdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICAvLyBTZXQgcGFzdGUgYXMgcGxhaW4gdGV4dCBzZXR0aW5nXG4gICAgICBlZGl0b3JFdmVudHNFbC5wYXN0ZUFzUGxhaW5UZXh0ID0gY2JQYXN0ZUFzUGxhaW5UZXh0LmNoZWNrZWQ7XG4gICAgICBjb25zdCB2ZXRvID0gcmFkaW9CZWZvcmVQYXN0ZS52YWx1ZTtcbiAgICAgIHNob3coJ2JlZm9yZXBhc3RlJywgZS5kZXRhaWwsIHZldG8pO1xuICAgICAgZS5kZXRhaWwucmVzcG9uc2UodmV0byk7XG4gICAgfSk7XG4gICAgLy8gYWZ0ZXIgcGFzdGVcbiAgICBlZGl0b3JFdmVudHNFbC5hZGRFdmVudExpc3RlbmVyKCdhZnRlcnBhc3RlJywgKGU6IGFueSkgPT4ge1xuICAgICAgc2hvdygnYWZ0ZXJwYXN0ZScsIGUuZGV0YWlsKTtcbiAgICB9KTtcbiAgICAvLyBpZiByZWplY3QgcGFzdGUgY29udGVudFxuICAgIGVkaXRvckV2ZW50c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3JlamVjdHBhc3RlJywgKGU6IGFueSkgPT4ge1xuICAgICAgc2hvdygncmVqZWN0cGFzdGUnLCBlLmRldGFpbCk7XG4gICAgfSk7XG4gICAgLy8gLy8gY2hhbmdlIGV2ZW50XG4gICAgLy8gZWRpdG9yRXZlbnRzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIC8vICAgc2hvdygnY2hhbmdlJyk7XG4gICAgLy8gfSk7XG4gICAgLy8gLy8gaW5pdGlhbGl6ZSBldmVudFxuICAgIC8vIGVkaXRvckV2ZW50c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2luaXRpYWxpemUnLCAoKSA9PiB7XG4gICAgLy8gICBzaG93KCdpbml0aWFsaXplJyk7XG4gICAgLy8gfSk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGlCQUFpQixvQkFBb0IsWUFBWTtBQUl4RCxRQUFNLDZCQUFrQyxTQUFTLGNBQWMsOEJBQThCO0FBQzdGLE1BQUksNEJBQTRCO0FBQzlCLFVBQU0sU0FBUztBQUFBLE1BQ2IsV0FBVztBQUFBLFFBQ1QsS0FBSztBQUFBLFFBQ0wsU0FBUztBQUFBLFFBQ1QsU0FBUyxDQUFDLEVBQUUsTUFBTSxjQUFjLE9BQU8sVUFBVSxVQUFVLEtBQUssQ0FBQztBQUFBLFFBQ2pFLGlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsTUFDQSxhQUFhLEVBQUUsS0FBSywyQ0FBMkM7QUFBQSxJQUNqRTtBQUNBLCtCQUEyQixtQkFBbUIsTUFBTTtBQUFBLEVBQ3REO0FBS0EsUUFBTSxpQkFBc0IsU0FBUyxjQUFjLGdCQUFnQjtBQUNuRSxRQUFNLG9CQUF5QixTQUFTLGNBQWMsb0NBQW9DO0FBQzFGLFFBQU0sb0JBQXlCLFNBQVMsY0FBYyxvQ0FBb0M7QUFDMUYsUUFBTSxtQkFBd0IsU0FBUyxjQUFjLCtCQUErQjtBQUNwRixRQUFNLHFCQUEwQixTQUFTLGNBQWMseUJBQXlCO0FBQ2hGLE1BQUksZ0JBQWdCO0FBRWxCLFVBQU0sT0FBTyxDQUFDLE1BQWMsUUFBZ0IsU0FBbUI7QUFDN0QsWUFBTSxXQUFXLE9BQU8sU0FBUyxjQUFjLFNBQVMsU0FBUztBQUNqRSxjQUFRLEtBQUssTUFBTyxVQUFVLElBQUssUUFBUTtBQUFBLElBQzdDO0FBR0EsbUJBQWUsaUJBQWlCLG9CQUFvQixDQUFDLE1BQVc7QUFDOUQsWUFBTSxPQUFnQixrQkFBa0I7QUFDeEMsV0FBSyxvQkFBb0IsRUFBRSxRQUFRLElBQUk7QUFDdkMsUUFBRSxPQUFPLFNBQVMsSUFBSTtBQUFBLElBQ3hCLENBQUM7QUFFRCxtQkFBZSxpQkFBaUIsbUJBQW1CLENBQUMsTUFBVztBQUM3RCxXQUFLLG1CQUFtQixFQUFFLE1BQU07QUFBQSxJQUNsQyxDQUFDO0FBRUQsbUJBQWUsaUJBQWlCLG9CQUFvQixDQUFDLE1BQVc7QUFDOUQsWUFBTSxPQUFPLGtCQUFrQjtBQUMvQixXQUFLLG9CQUFvQixFQUFFLFFBQVEsSUFBSTtBQUN2QyxRQUFFLE9BQU8sU0FBUyxJQUFJO0FBQUEsSUFDeEIsQ0FBQztBQUVELG1CQUFlLGlCQUFpQixtQkFBbUIsQ0FBQyxNQUFXO0FBQzdELFdBQUssbUJBQW1CLEVBQUUsTUFBTTtBQUFBLElBQ2xDLENBQUM7QUFFRCxtQkFBZSxpQkFBaUIsb0JBQW9CLENBQUMsTUFBVztBQUM5RCxXQUFLLG9CQUFvQixFQUFFLE1BQU07QUFBQSxJQUNuQyxDQUFDO0FBRUQsbUJBQWUsaUJBQWlCLGNBQWMsQ0FBQyxNQUFXO0FBQ3hELFdBQUssY0FBYyxFQUFFLE1BQU07QUFBQSxJQUM3QixDQUFDO0FBRUQsbUJBQWUsaUJBQWlCLGVBQWUsQ0FBQyxNQUFXO0FBRXpELHFCQUFlLG1CQUFtQixtQkFBbUI7QUFDckQsWUFBTSxPQUFPLGlCQUFpQjtBQUM5QixXQUFLLGVBQWUsRUFBRSxRQUFRLElBQUk7QUFDbEMsUUFBRSxPQUFPLFNBQVMsSUFBSTtBQUFBLElBQ3hCLENBQUM7QUFFRCxtQkFBZSxpQkFBaUIsY0FBYyxDQUFDLE1BQVc7QUFDeEQsV0FBSyxjQUFjLEVBQUUsTUFBTTtBQUFBLElBQzdCLENBQUM7QUFFRCxtQkFBZSxpQkFBaUIsZUFBZSxDQUFDLE1BQVc7QUFDekQsV0FBSyxlQUFlLEVBQUUsTUFBTTtBQUFBLElBQzlCLENBQUM7QUFBQSxFQVNIO0FBQ0YsQ0FBQzsiLCJuYW1lcyI6W10sImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2lkcy1lZGl0b3IvZGVtb3Mvc2FuZGJveC50cy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-editor/demos/sandbox.ts\n");

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
/******/ 			"ids-editor-sandbox": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-editor/demos/sandbox.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;