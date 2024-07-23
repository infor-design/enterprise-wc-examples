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

/***/ "./src/components/ids-slider/demos/example.ts":
/*!****************************************************!*\
  !*** ./src/components/ids-slider/demos/example.ts ***!
  \****************************************************/
/***/ (() => {

eval("const labels = [\n  {\n    value: 0,\n    text: \"very bad\",\n    color: \"var(--ids-color-palette-ruby-100)\"\n  },\n  {\n    value: 20,\n    text: \"poor\",\n    color: \"var(--ids-color-palette-ruby-80)\"\n  },\n  {\n    value: 40,\n    text: \"average\",\n    color: \"var(--ids-color-palette-amber-80)\"\n  },\n  {\n    value: 60,\n    text: \"good\",\n    color: \"var(--ids-color-palette-amber-40)\"\n  },\n  {\n    value: 80,\n    text: \"very good\",\n    color: \"var(--ids-color-palette-emerald-60)\"\n  },\n  {\n    value: 100,\n    text: \"excellent\",\n    color: \"var(--ids-color-palette-emerald-90)\"\n  }\n];\nconst getClosestLabelSettings = (targetValue) => labels.find((el) => targetValue <= el.value);\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const survey = document.querySelector(\".survey\");\n  if (survey) {\n    survey.labels = labels.map((el) => el.text);\n    const fixSliderColorOnChange = (e) => {\n      const sliderValue = e.detail.value;\n      const targetLabelSettings = getClosestLabelSettings(sliderValue);\n      survey.color = targetLabelSettings?.color;\n    };\n    survey.color = getClosestLabelSettings(survey.value)?.color;\n    survey.onEvent(\"ids-slider-drag\", survey, fixSliderColorOnChange);\n    survey.onEvent(\"change\", survey, fixSliderColorOnChange);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1zbGlkZXIvZGVtb3MvZXhhbXBsZS50cz9lMzVmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxhYmVscyA9IFtcbiAge1xuICAgIHZhbHVlOiAwLFxuICAgIHRleHQ6ICd2ZXJ5IGJhZCcsXG4gICAgY29sb3I6ICd2YXIoLS1pZHMtY29sb3ItcGFsZXR0ZS1ydWJ5LTEwMCknXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjAsXG4gICAgdGV4dDogJ3Bvb3InLFxuICAgIGNvbG9yOiAndmFyKC0taWRzLWNvbG9yLXBhbGV0dGUtcnVieS04MCknXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNDAsXG4gICAgdGV4dDogJ2F2ZXJhZ2UnLFxuICAgIGNvbG9yOiAndmFyKC0taWRzLWNvbG9yLXBhbGV0dGUtYW1iZXItODApJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDYwLFxuICAgIHRleHQ6ICdnb29kJyxcbiAgICBjb2xvcjogJ3ZhcigtLWlkcy1jb2xvci1wYWxldHRlLWFtYmVyLTQwKSdcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA4MCxcbiAgICB0ZXh0OiAndmVyeSBnb29kJyxcbiAgICBjb2xvcjogJ3ZhcigtLWlkcy1jb2xvci1wYWxldHRlLWVtZXJhbGQtNjApJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDEwMCxcbiAgICB0ZXh0OiAnZXhjZWxsZW50JyxcbiAgICBjb2xvcjogJ3ZhcigtLWlkcy1jb2xvci1wYWxldHRlLWVtZXJhbGQtOTApJ1xuICB9XG5dO1xuXG5jb25zdCBnZXRDbG9zZXN0TGFiZWxTZXR0aW5ncyA9ICh0YXJnZXRWYWx1ZTogbnVtYmVyKSA9PiBsYWJlbHMuZmluZCgoZWwpID0+IHRhcmdldFZhbHVlIDw9IGVsLnZhbHVlKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3Qgc3VydmV5ID0gKGRvY3VtZW50IGFzIGFueSkucXVlcnlTZWxlY3RvcignLnN1cnZleScpO1xuICBpZiAoc3VydmV5KSB7XG4gICAgLy8gU2V0IGxhYmVsIHRleHRcbiAgICBzdXJ2ZXkubGFiZWxzID0gbGFiZWxzLm1hcCgoZWwpID0+IGVsLnRleHQpO1xuXG4gICAgLy8gQWRqdXN0IHNsaWRlciB0cmFjay90aWNrIGNvbG9yIHdoZW4gdmFsdWUgY2hhbmdlc1xuICAgIGNvbnN0IGZpeFNsaWRlckNvbG9yT25DaGFuZ2UgPSAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHNsaWRlclZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBjb25zdCB0YXJnZXRMYWJlbFNldHRpbmdzID0gZ2V0Q2xvc2VzdExhYmVsU2V0dGluZ3Moc2xpZGVyVmFsdWUpO1xuICAgICAgc3VydmV5LmNvbG9yID0gdGFyZ2V0TGFiZWxTZXR0aW5ncz8uY29sb3I7XG4gICAgfTtcbiAgICBzdXJ2ZXkuY29sb3IgPSBnZXRDbG9zZXN0TGFiZWxTZXR0aW5ncyhzdXJ2ZXkudmFsdWUpPy5jb2xvcjtcbiAgICBzdXJ2ZXkub25FdmVudCgnaWRzLXNsaWRlci1kcmFnJywgc3VydmV5LCBmaXhTbGlkZXJDb2xvck9uQ2hhbmdlKTtcbiAgICBzdXJ2ZXkub25FdmVudCgnY2hhbmdlJywgc3VydmV5LCBmaXhTbGlkZXJDb2xvck9uQ2hhbmdlKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sU0FBUztBQUFBLEVBQ2I7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsRUFDVDtBQUNGO0FBRUEsTUFBTSwwQkFBMEIsQ0FBQyxnQkFBd0IsT0FBTyxLQUFLLENBQUMsT0FBTyxlQUFlLEdBQUcsS0FBSztBQUVwRyxTQUFTLGlCQUFpQixvQkFBb0IsTUFBTTtBQUNsRCxRQUFNLFNBQVUsU0FBaUIsY0FBYyxTQUFTO0FBQ3hELE1BQUksUUFBUTtBQUVWLFdBQU8sU0FBUyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtBQUcxQyxVQUFNLHlCQUF5QixDQUFDLE1BQW1CO0FBQ2pELFlBQU0sY0FBYyxFQUFFLE9BQU87QUFDN0IsWUFBTSxzQkFBc0Isd0JBQXdCLFdBQVc7QUFDL0QsYUFBTyxRQUFRLHFCQUFxQjtBQUFBLElBQ3RDO0FBQ0EsV0FBTyxRQUFRLHdCQUF3QixPQUFPLEtBQUssR0FBRztBQUN0RCxXQUFPLFFBQVEsbUJBQW1CLFFBQVEsc0JBQXNCO0FBQ2hFLFdBQU8sUUFBUSxVQUFVLFFBQVEsc0JBQXNCO0FBQUEsRUFDekQ7QUFDRixDQUFDOyIsIm5hbWVzIjpbXSwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaWRzLXNsaWRlci9kZW1vcy9leGFtcGxlLnRzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-slider/demos/example.ts\n");

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
/******/ 		__webpack_require__.h = () => ("5f77bc3ebf205637b850")
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
/******/ 			"ids-slider-example": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-slider/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;