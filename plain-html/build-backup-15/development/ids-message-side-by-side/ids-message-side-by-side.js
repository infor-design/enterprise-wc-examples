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

/***/ "./src/components/ids-message/demos/side-by-side.ts":
/*!**********************************************************!*\
  !*** ./src/components/ids-message/demos/side-by-side.ts ***!
  \**********************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const triggerBtn = document.querySelector(\"#message-example-trigger\");\n  const message = document.querySelector(\"#message-example\");\n  if (!message) {\n    return;\n  }\n  message.target = triggerBtn;\n  message.triggerType = \"click\";\n  message.onButtonClick = (buttonEl) => {\n    const response = buttonEl.cancel ? \"cancelled\" : \"confirmed\";\n    console.info(`IdsMessage was ${response}`);\n    message.hide();\n  };\n  message.addEventListener(\"beforeshow\", () => {\n    triggerBtn.disabled = true;\n    return true;\n  });\n  message.addEventListener(\"show\", () => {\n    console.info('Modal event \"show\" triggered');\n    return true;\n  });\n  message.addEventListener(\"hide\", () => {\n    console.info('Modal event \"hide\" triggered');\n    triggerBtn.disabled = false;\n  });\n});\nconst setMessage = () => {\n  $(\"body\").message({\n    title: \"Lost connection\",\n    isError: true,\n    message: \"This application has experienced a system error due. Please restart the application in order to proceed.\",\n    buttons: [{\n      text: \"Restart Now\",\n      click() {\n        $(this).data(\"modal\").close();\n      },\n      isDefault: true\n    }]\n  });\n};\n$(\"#add-message\").on(\"click\", function addMessage() {\n  $(this).focus();\n  setMessage();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1tZXNzYWdlL2RlbW9zL3NpZGUtYnktc2lkZS50cz82MDAzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHRyaWdnZXJCdG46IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlLWV4YW1wbGUtdHJpZ2dlcicpO1xuICBjb25zdCBtZXNzYWdlOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZS1leGFtcGxlJyk7XG5cbiAgaWYgKCFtZXNzYWdlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gTGluayB0aGUgTWVzc2FnZSB0byBpdHMgdHJpZ2dlciBidXR0b25cbiAgbWVzc2FnZS50YXJnZXQgPSB0cmlnZ2VyQnRuO1xuICBtZXNzYWdlLnRyaWdnZXJUeXBlID0gJ2NsaWNrJztcblxuICAvLyBTZXR1cCB0aGUgcmVzcG9uc2UgY2FsbGJhY2tcbiAgbWVzc2FnZS5vbkJ1dHRvbkNsaWNrID0gKGJ1dHRvbkVsOiBhbnkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGJ1dHRvbkVsLmNhbmNlbCA/ICdjYW5jZWxsZWQnIDogJ2NvbmZpcm1lZCc7XG4gICAgY29uc29sZS5pbmZvKGBJZHNNZXNzYWdlIHdhcyAke3Jlc3BvbnNlfWApO1xuICAgIG1lc3NhZ2UuaGlkZSgpO1xuICB9O1xuXG4gIC8vIERpc2FibGUgdGhlIHRyaWdnZXIgYnV0dG9uIHdoZW4gc2hvd2luZyB0aGUgTW9kYWwuXG4gIG1lc3NhZ2UuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3Jlc2hvdycsICgpID0+IHtcbiAgICB0cmlnZ2VyQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB0aGUgbW9kYWwgaXMgc2hvd25cbiAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdzaG93JywgKCkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnTW9kYWwgZXZlbnQgXCJzaG93XCIgdHJpZ2dlcmVkJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIC8vIEFmdGVyIHRoZSBtb2RhbCBpcyBkb25lIGhpZGluZywgcmUtZW5hYmxlIGl0cyB0cmlnZ2VyIGJ1dHRvbi5cbiAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnTW9kYWwgZXZlbnQgXCJoaWRlXCIgdHJpZ2dlcmVkJyk7XG4gICAgdHJpZ2dlckJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcbn0pO1xuXG5jb25zdCBzZXRNZXNzYWdlID0gKCkgPT4ge1xuICAkKCdib2R5JykubWVzc2FnZSh7XG4gICAgdGl0bGU6ICdMb3N0IGNvbm5lY3Rpb24nLFxuICAgIGlzRXJyb3I6IHRydWUsXG4gICAgbWVzc2FnZTogJ1RoaXMgYXBwbGljYXRpb24gaGFzIGV4cGVyaWVuY2VkIGEgc3lzdGVtIGVycm9yIGR1ZS4gUGxlYXNlIHJlc3RhcnQgdGhlIGFwcGxpY2F0aW9uIGluIG9yZGVyIHRvIHByb2NlZWQuJyxcbiAgICBidXR0b25zOiBbe1xuICAgICAgdGV4dDogJ1Jlc3RhcnQgTm93JyxcbiAgICAgIGNsaWNrKCkge1xuICAgICAgICAkKHRoaXMpLmRhdGEoJ21vZGFsJykuY2xvc2UoKTtcbiAgICAgIH0sXG4gICAgICBpc0RlZmF1bHQ6IHRydWVcbiAgICB9XVxuICB9KTtcbn07XG5cbiQoJyNhZGQtbWVzc2FnZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIGFkZE1lc3NhZ2UodGhpczogYW55KSB7XG4gICQodGhpcykuZm9jdXMoKTtcbiAgc2V0TWVzc2FnZSgpO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELFFBQU0sYUFBa0IsU0FBUyxjQUFjLDBCQUEwQjtBQUN6RSxRQUFNLFVBQWUsU0FBUyxjQUFjLGtCQUFrQjtBQUU5RCxNQUFJLENBQUMsU0FBUztBQUNaO0FBQUEsRUFDRjtBQUdBLFVBQVEsU0FBUztBQUNqQixVQUFRLGNBQWM7QUFHdEIsVUFBUSxnQkFBZ0IsQ0FBQyxhQUFrQjtBQUN6QyxVQUFNLFdBQVcsU0FBUyxTQUFTLGNBQWM7QUFDakQsWUFBUSxLQUFLLGtCQUFrQixVQUFVO0FBQ3pDLFlBQVEsS0FBSztBQUFBLEVBQ2Y7QUFHQSxVQUFRLGlCQUFpQixjQUFjLE1BQU07QUFDM0MsZUFBVyxXQUFXO0FBQ3RCLFdBQU87QUFBQSxFQUNULENBQUM7QUFHRCxVQUFRLGlCQUFpQixRQUFRLE1BQU07QUFDckMsWUFBUSxLQUFLLDhCQUE4QjtBQUMzQyxXQUFPO0FBQUEsRUFDVCxDQUFDO0FBR0QsVUFBUSxpQkFBaUIsUUFBUSxNQUFNO0FBQ3JDLFlBQVEsS0FBSyw4QkFBOEI7QUFDM0MsZUFBVyxXQUFXO0FBQUEsRUFDeEIsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLGFBQWEsTUFBTTtBQUN2QixJQUFFLE1BQU0sRUFBRSxRQUFRO0FBQUEsSUFDaEIsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLElBQ1QsU0FBUyxDQUFDO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQ04sVUFBRSxJQUFJLEVBQUUsS0FBSyxPQUFPLEVBQUUsTUFBTTtBQUFBLE1BQzlCO0FBQUEsTUFDQSxXQUFXO0FBQUEsSUFDYixDQUFDO0FBQUEsRUFDSCxDQUFDO0FBQ0g7QUFFQSxFQUFFLGNBQWMsRUFBRSxHQUFHLFNBQVMsU0FBUyxhQUFzQjtBQUMzRCxJQUFFLElBQUksRUFBRSxNQUFNO0FBQ2QsYUFBVztBQUNiLENBQUM7IiwibmFtZXMiOltdLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbWVzc2FnZS9kZW1vcy9zaWRlLWJ5LXNpZGUudHMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-message/demos/side-by-side.ts\n");

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
/******/ 		__webpack_require__.h = () => ("8afaac54c72cc910bce7")
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
/******/ 			"ids-message-side-by-side": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-message/demos/side-by-side.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;