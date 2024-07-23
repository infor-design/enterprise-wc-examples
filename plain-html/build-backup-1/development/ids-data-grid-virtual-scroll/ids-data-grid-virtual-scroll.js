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

/***/ "./src/components/ids-data-grid/demos/virtual-scroll.ts":
/*!**************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/virtual-scroll.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n/* harmony import */ var _assets_data_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/products.json */ \"./src/assets/data/products.json\");\n\n\nconst dataGrid = document.querySelector(\"#data-grid-virtual-scroll\");\nconst url = _assets_data_products_json__WEBPACK_IMPORTED_MODULE_1__;\nconst columns = [];\ncolumns.push({\n  id: \"selectionCheckbox\",\n  name: \"selection\",\n  sortable: false,\n  resizable: false,\n  formatter: dataGrid.formatters.selectionCheckbox,\n  align: \"center\"\n});\ncolumns.push({\n  id: \"rowNumber\",\n  name: \"#\",\n  formatter: dataGrid.formatters.rowNumber,\n  sortable: false,\n  readonly: true,\n  width: 66\n});\ncolumns.push({\n  id: \"id\",\n  name: \"ID\",\n  field: \"id\",\n  formatter: dataGrid.formatters.text,\n  width: 80,\n  sortable: true\n});\ncolumns.push({\n  id: \"color\",\n  name: \"Color\",\n  field: \"color\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"inStock\",\n  name: \"In Stock\",\n  field: \"inStock\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"productId\",\n  name: \"Product Id\",\n  field: \"productId\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"productName\",\n  name: \"Product Name\",\n  field: \"productName\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"unitPrice\",\n  name: \"Unit Price\",\n  field: \"unitPrice\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ncolumns.push({\n  id: \"units\",\n  name: \"Units\",\n  field: \"units\",\n  formatter: dataGrid.formatters.text,\n  sortable: true\n});\ndataGrid.columns = columns;\nconst setData = async () => {\n  const res = await fetch(url);\n  const data = await res.json();\n  dataGrid.data = data;\n};\nsetData();\ndataGrid.addEventListener(\"selectionchanged\", (e) => {\n  console.info(`Selection Changed`, e.detail);\n});\ndataGrid.addEventListener(\"scrollstart\", async (e) => {\n  console.info(`Virtual Scroll reached start`, e.detail);\n});\ndataGrid.addEventListener(\"scrollend\", async (e) => {\n  console.info(`Virtual Scroll reached end`, e.detail);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL3ZpcnR1YWwtc2Nyb2xsLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNPO0FBRWtCO0FBR3pCLE1BQU0sV0FBVyxTQUFTLGNBQTJCLDJCQUEyQjtBQUdoRixNQUFNLE1BQVcsdURBQVk7QUFDN0IsTUFBTSxVQUErQixDQUFDO0FBR3RDLFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixPQUFPO0FBQ1QsQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixPQUFPO0FBQ1QsQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQ1osQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixVQUFVO0FBQ1osQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixVQUFVO0FBQ1osQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixVQUFVO0FBQ1osQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixVQUFVO0FBQ1osQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixVQUFVO0FBQ1osQ0FBQztBQUNELFFBQVEsS0FBSztBQUFBLEVBQ1gsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsV0FBVyxTQUFTLFdBQVc7QUFBQSxFQUMvQixVQUFVO0FBQ1osQ0FBQztBQUVELFNBQVMsVUFBVTtBQUVuQixNQUFNLFVBQVUsWUFBWTtBQUMxQixRQUFNLE1BQU0sTUFBTSxNQUFNLEdBQUc7QUFDM0IsUUFBTSxPQUFPLE1BQU0sSUFBSSxLQUFLO0FBQzVCLFdBQVMsT0FBTztBQUNsQjtBQUVBLFFBQVE7QUFFUixTQUFTLGlCQUFpQixvQkFBb0IsQ0FBQyxNQUFhO0FBQzFELFVBQVEsS0FBSyxxQkFBbUMsRUFBRyxNQUFNO0FBQzNELENBQUM7QUFFRCxTQUFTLGlCQUFpQixlQUFlLE9BQU8sTUFBYTtBQUMzRCxVQUFRLEtBQUssZ0NBQThDLEVBQUcsTUFBTTtBQUN0RSxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsYUFBYSxPQUFPLE1BQWE7QUFDekQsVUFBUSxLQUFLLDhCQUE0QyxFQUFHLE1BQU07QUFDcEUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWRhdGEtZ3JpZC9kZW1vcy92aXJ0dWFsLXNjcm9sbC50cz84ODE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIElkc0RhdGFHcmlkIGZyb20gJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0ICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCB0eXBlIHsgSWRzRGF0YUdyaWRDb2x1bW4gfSBmcm9tICcuLi9pZHMtZGF0YS1ncmlkLWNvbHVtbic7XG5pbXBvcnQgcHJvZHVjdHNKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL3Byb2R1Y3RzLmpzb24nO1xuXG4vLyBFeGFtcGxlIGZvciBwb3B1bGF0aW5nIHRoZSBEYXRhR3JpZFxuY29uc3QgZGF0YUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0RhdGFHcmlkPignI2RhdGEtZ3JpZC12aXJ0dWFsLXNjcm9sbCcpITtcblxuLy8gRG8gYW4gYWpheCByZXF1ZXN0XG5jb25zdCB1cmw6IGFueSA9IHByb2R1Y3RzSlNPTjtcbmNvbnN0IGNvbHVtbnM6IElkc0RhdGFHcmlkQ29sdW1uW10gPSBbXTtcblxuLy8gU2V0IHVwIGNvbHVtbnNcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnc2VsZWN0aW9uQ2hlY2tib3gnLFxuICBuYW1lOiAnc2VsZWN0aW9uJyxcbiAgc29ydGFibGU6IGZhbHNlLFxuICByZXNpemFibGU6IGZhbHNlLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuc2VsZWN0aW9uQ2hlY2tib3gsXG4gIGFsaWduOiAnY2VudGVyJ1xufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ3Jvd051bWJlcicsXG4gIG5hbWU6ICcjJyxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnJvd051bWJlcixcbiAgc29ydGFibGU6IGZhbHNlLFxuICByZWFkb25seTogdHJ1ZSxcbiAgd2lkdGg6IDY2XG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAnaWQnLFxuICBuYW1lOiAnSUQnLFxuICBmaWVsZDogJ2lkJyxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gIHdpZHRoOiA4MCxcbiAgc29ydGFibGU6IHRydWVcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdjb2xvcicsXG4gIG5hbWU6ICdDb2xvcicsXG4gIGZpZWxkOiAnY29sb3InLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgc29ydGFibGU6IHRydWVcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICdpblN0b2NrJyxcbiAgbmFtZTogJ0luIFN0b2NrJyxcbiAgZmllbGQ6ICdpblN0b2NrJyxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gIHNvcnRhYmxlOiB0cnVlXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAncHJvZHVjdElkJyxcbiAgbmFtZTogJ1Byb2R1Y3QgSWQnLFxuICBmaWVsZDogJ3Byb2R1Y3RJZCcsXG4gIGZvcm1hdHRlcjogZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0LFxuICBzb3J0YWJsZTogdHJ1ZVxufSk7XG5jb2x1bW5zLnB1c2goe1xuICBpZDogJ3Byb2R1Y3ROYW1lJyxcbiAgbmFtZTogJ1Byb2R1Y3QgTmFtZScsXG4gIGZpZWxkOiAncHJvZHVjdE5hbWUnLFxuICBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCxcbiAgc29ydGFibGU6IHRydWVcbn0pO1xuY29sdW1ucy5wdXNoKHtcbiAgaWQ6ICd1bml0UHJpY2UnLFxuICBuYW1lOiAnVW5pdCBQcmljZScsXG4gIGZpZWxkOiAndW5pdFByaWNlJyxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gIHNvcnRhYmxlOiB0cnVlXG59KTtcbmNvbHVtbnMucHVzaCh7XG4gIGlkOiAndW5pdHMnLFxuICBuYW1lOiAnVW5pdHMnLFxuICBmaWVsZDogJ3VuaXRzJyxcbiAgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHQsXG4gIHNvcnRhYmxlOiB0cnVlXG59KTtcblxuZGF0YUdyaWQuY29sdW1ucyA9IGNvbHVtbnM7XG5cbmNvbnN0IHNldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBkYXRhR3JpZC5kYXRhID0gZGF0YTtcbn07XG5cbnNldERhdGEoKTtcblxuZGF0YUdyaWQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlZCcsIChlOiBFdmVudCkgPT4ge1xuICBjb25zb2xlLmluZm8oYFNlbGVjdGlvbiBDaGFuZ2VkYCwgKDxDdXN0b21FdmVudD5lKS5kZXRhaWwpO1xufSk7XG5cbmRhdGFHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbHN0YXJ0JywgYXN5bmMgKGU6IEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhgVmlydHVhbCBTY3JvbGwgcmVhY2hlZCBzdGFydGAsICg8Q3VzdG9tRXZlbnQ+ZSkuZGV0YWlsKTtcbn0pO1xuXG5kYXRhR3JpZC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxlbmQnLCBhc3luYyAoZTogRXZlbnQpID0+IHtcbiAgY29uc29sZS5pbmZvKGBWaXJ0dWFsIFNjcm9sbCByZWFjaGVkIGVuZGAsICg8Q3VzdG9tRXZlbnQ+ZSkuZGV0YWlsKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/virtual-scroll.ts\n");

/***/ }),

/***/ "./src/assets/data/products.json":
/*!***************************************!*\
  !*** ./src/assets/data/products.json ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/products.json";

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
/******/ 		__webpack_require__.h = () => ("c372f59fb5be38f43bb9")
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
/******/ 			"ids-data-grid-virtual-scroll": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/virtual-scroll.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;