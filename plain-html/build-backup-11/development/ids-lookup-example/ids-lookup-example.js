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

/***/ "./src/components/ids-lookup/demos/example.ts":
/*!****************************************************!*\
  !*** ./src/components/ids-lookup/demos/example.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-lookup */ \"./src/components/ids-lookup/ids-lookup.ts\");\n/* harmony import */ var _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/books.json */ \"./src/assets/data/books.json\");\n\n\nconst lookup = document.querySelector(\"#lookup-1\");\nconst container = document.querySelector(\"ids-container\");\nconst autocompleteLookup = document.querySelector(\"#lookup-6\");\nconst autocomplete = autocompleteLookup?.shadowRoot?.querySelector(\"ids-trigger-field\");\n(async function init() {\n  await container.setLocale(\"en-US\");\n  const url = _assets_data_books_json__WEBPACK_IMPORTED_MODULE_1__;\n  const columns = [];\n  columns.push({\n    id: \"selectionCheckbox\",\n    name: \"selection\",\n    sortable: false,\n    resizable: false,\n    formatter: lookup.dataGrid.formatters.selectionCheckbox,\n    align: \"center\"\n  });\n  columns.push({\n    id: \"rowNumber\",\n    name: \"#\",\n    formatter: lookup.dataGrid.formatters.rowNumber,\n    sortable: false,\n    readonly: true,\n    width: 65\n  });\n  columns.push({\n    id: \"description\",\n    name: \"Description\",\n    field: \"description\",\n    sortable: true,\n    formatter: lookup.dataGrid.formatters.text\n  });\n  columns.push({\n    id: \"ledger\",\n    name: \"Ledger\",\n    field: \"ledger\",\n    formatter: lookup.dataGrid.formatters.text\n  });\n  columns.push({\n    id: \"price\",\n    name: \"Price\",\n    field: \"price\",\n    formatter: lookup.dataGrid.formatters.decimal,\n    formatOptions: { locale: \"en-US\" }\n    // Data Values are in en-US\n  });\n  columns.push({\n    id: \"bookCurrency\",\n    name: \"Currency\",\n    field: \"bookCurrency\",\n    formatter: lookup.dataGrid.formatters.text\n  });\n  lookup.columns = columns;\n  autocompleteLookup.columns = columns;\n  const addEventListeners = () => {\n    lookup.addEventListener(\"change\", () => {\n      console.info(`Value Changed`, lookup.dataGrid.selectedRows, lookup.value);\n    });\n    lookup.addEventListener(\"rowselected\", (e) => {\n      console.info(`Row Selected`, e.detail);\n    });\n    lookup.addEventListener(\"rowdeselected\", (e) => {\n      console.info(`Row DeSelected`, e.detail);\n    });\n    lookup.addEventListener(\"selectionchanged\", (e) => {\n      console.info(`Selection Changed`, e.detail);\n    });\n  };\n  lookup.dataGridSettings = {\n    rowSelection: \"multiple\"\n  };\n  autocompleteLookup.dataGridSettings = {\n    rowSelection: \"multiple\"\n  };\n  const setData = async () => {\n    const res = await fetch(url);\n    const data = await res.json();\n    lookup.data = data;\n    autocomplete.data = data;\n    autocompleteLookup.data = data;\n  };\n  setData();\n  addEventListeners();\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbG9va3VwL2RlbW9zL2V4YW1wbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ087QUFFZTtBQUd0QixNQUFNLFNBQXdCLFNBQVMsY0FBYyxXQUFXO0FBQ2hFLE1BQU0sWUFBMkIsU0FBUyxjQUFjLGVBQWU7QUFDdkUsTUFBTSxxQkFBb0MsU0FBUyxjQUFjLFdBQVc7QUFDNUUsTUFBTSxlQUE4QixvQkFBb0IsWUFBWSxjQUFjLG1CQUFtQjtBQUFBLENBRXBHLGVBQWUsT0FBTztBQUVyQixRQUFNLFVBQVUsVUFBVSxPQUFPO0FBR2pDLFFBQU0sTUFBVyxvREFBUztBQUMxQixRQUFNLFVBQVUsQ0FBQztBQUdqQixVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLFdBQVcsT0FBTyxTQUFTLFdBQVc7QUFBQSxJQUN0QyxPQUFPO0FBQUEsRUFDVCxDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixXQUFXLE9BQU8sU0FBUyxXQUFXO0FBQUEsSUFDdEMsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLEVBQ1QsQ0FBQztBQUNELFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsV0FBVyxPQUFPLFNBQVMsV0FBVztBQUFBLEVBQ3hDLENBQUM7QUFDRCxVQUFRLEtBQUs7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFdBQVcsT0FBTyxTQUFTLFdBQVc7QUFBQSxFQUN4QyxDQUFDO0FBQ0QsVUFBUSxLQUFLO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxXQUFXLE9BQU8sU0FBUyxXQUFXO0FBQUEsSUFDdEMsZUFBZSxFQUFFLFFBQVEsUUFBUTtBQUFBO0FBQUEsRUFDbkMsQ0FBQztBQUNELFVBQVEsS0FBSztBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsV0FBVyxPQUFPLFNBQVMsV0FBVztBQUFBLEVBQ3hDLENBQUM7QUFFRCxTQUFPLFVBQVU7QUFDakIscUJBQW1CLFVBQVU7QUFFN0IsUUFBTSxvQkFBb0IsTUFBTTtBQUM5QixXQUFPLGlCQUFpQixVQUFVLE1BQU07QUFDdEMsY0FBUSxLQUFLLGlCQUFpQixPQUFPLFNBQVMsY0FBYyxPQUFPLEtBQUs7QUFBQSxJQUMxRSxDQUFDO0FBRUQsV0FBTyxpQkFBaUIsZUFBZSxDQUFDLE1BQW1CO0FBQ3pELGNBQVEsS0FBSyxnQkFBZ0IsRUFBRSxNQUFNO0FBQUEsSUFDdkMsQ0FBQztBQUVELFdBQU8saUJBQWlCLGlCQUFpQixDQUFDLE1BQW1CO0FBQzNELGNBQVEsS0FBSyxrQkFBa0IsRUFBRSxNQUFNO0FBQUEsSUFDekMsQ0FBQztBQUVELFdBQU8saUJBQWlCLG9CQUFvQixDQUFDLE1BQW1CO0FBQzlELGNBQVEsS0FBSyxxQkFBcUIsRUFBRSxNQUFNO0FBQUEsSUFDNUMsQ0FBQztBQUFBLEVBQ0g7QUFFQSxTQUFPLG1CQUFtQjtBQUFBLElBQ3hCLGNBQWM7QUFBQSxFQUNoQjtBQUVBLHFCQUFtQixtQkFBbUI7QUFBQSxJQUNwQyxjQUFjO0FBQUEsRUFDaEI7QUFFQSxRQUFNLFVBQVUsWUFBWTtBQUMxQixVQUFNLE1BQU0sTUFBTSxNQUFNLEdBQUc7QUFDM0IsVUFBTSxPQUFPLE1BQU0sSUFBSSxLQUFLO0FBRTVCLFdBQU8sT0FBTztBQUNkLGlCQUFhLE9BQU87QUFDcEIsdUJBQW1CLE9BQU87QUFBQSxFQUM1QjtBQUVBLFVBQVE7QUFDUixvQkFBa0I7QUFDcEIsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWxvb2t1cC9kZW1vcy9leGFtcGxlLnRzPzA0OGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3VwcG9ydGluZyBjb21wb25lbnRzXG5pbXBvcnQgJy4uL2lkcy1sb29rdXAnO1xuXG5pbXBvcnQgYm9va3NKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL2Jvb2tzLmpzb24nO1xuXG4vLyBFeGFtcGxlIGZvciBwb3B1bGF0aW5nIHRoZSBEYXRhR3JpZFxuY29uc3QgbG9va3VwOiBFbGVtZW50IHwgYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvb2t1cC0xJyk7XG5jb25zdCBjb250YWluZXI6IEVsZW1lbnQgfCBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZHMtY29udGFpbmVyJyk7XG5jb25zdCBhdXRvY29tcGxldGVMb29rdXA6IEVsZW1lbnQgfCBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9va3VwLTYnKTtcbmNvbnN0IGF1dG9jb21wbGV0ZTogRWxlbWVudCB8IGFueSA9IGF1dG9jb21wbGV0ZUxvb2t1cD8uc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignaWRzLXRyaWdnZXItZmllbGQnKTtcblxuKGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vIFNldCBhIExvY2FsZSBhbmQgd2FpdCBmb3IgaXQgdG8gbG9hZFxuICBhd2FpdCBjb250YWluZXIuc2V0TG9jYWxlKCdlbi1VUycpO1xuXG4gIC8vIERvIGFuIGFqYXggcmVxdWVzdFxuICBjb25zdCB1cmw6IGFueSA9IGJvb2tzSlNPTjtcbiAgY29uc3QgY29sdW1ucyA9IFtdO1xuXG4gIC8vIFNldCB1cCBjb2x1bW5zXG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdzZWxlY3Rpb25DaGVja2JveCcsXG4gICAgbmFtZTogJ3NlbGVjdGlvbicsXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgZm9ybWF0dGVyOiBsb29rdXAuZGF0YUdyaWQuZm9ybWF0dGVycy5zZWxlY3Rpb25DaGVja2JveCxcbiAgICBhbGlnbjogJ2NlbnRlcidcbiAgfSk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgaWQ6ICdyb3dOdW1iZXInLFxuICAgIG5hbWU6ICcjJyxcbiAgICBmb3JtYXR0ZXI6IGxvb2t1cC5kYXRhR3JpZC5mb3JtYXR0ZXJzLnJvd051bWJlcixcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgcmVhZG9ubHk6IHRydWUsXG4gICAgd2lkdGg6IDY1XG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgIG5hbWU6ICdEZXNjcmlwdGlvbicsXG4gICAgZmllbGQ6ICdkZXNjcmlwdGlvbicsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgZm9ybWF0dGVyOiBsb29rdXAuZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnbGVkZ2VyJyxcbiAgICBuYW1lOiAnTGVkZ2VyJyxcbiAgICBmaWVsZDogJ2xlZGdlcicsXG4gICAgZm9ybWF0dGVyOiBsb29rdXAuZGF0YUdyaWQuZm9ybWF0dGVycy50ZXh0XG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAncHJpY2UnLFxuICAgIG5hbWU6ICdQcmljZScsXG4gICAgZmllbGQ6ICdwcmljZScsXG4gICAgZm9ybWF0dGVyOiBsb29rdXAuZGF0YUdyaWQuZm9ybWF0dGVycy5kZWNpbWFsLFxuICAgIGZvcm1hdE9wdGlvbnM6IHsgbG9jYWxlOiAnZW4tVVMnIH0gLy8gRGF0YSBWYWx1ZXMgYXJlIGluIGVuLVVTXG4gIH0pO1xuICBjb2x1bW5zLnB1c2goe1xuICAgIGlkOiAnYm9va0N1cnJlbmN5JyxcbiAgICBuYW1lOiAnQ3VycmVuY3knLFxuICAgIGZpZWxkOiAnYm9va0N1cnJlbmN5JyxcbiAgICBmb3JtYXR0ZXI6IGxvb2t1cC5kYXRhR3JpZC5mb3JtYXR0ZXJzLnRleHRcbiAgfSk7XG5cbiAgbG9va3VwLmNvbHVtbnMgPSBjb2x1bW5zO1xuICBhdXRvY29tcGxldGVMb29rdXAuY29sdW1ucyA9IGNvbHVtbnM7XG5cbiAgY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgbG9va3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgVmFsdWUgQ2hhbmdlZGAsIGxvb2t1cC5kYXRhR3JpZC5zZWxlY3RlZFJvd3MsIGxvb2t1cC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBsb29rdXAuYWRkRXZlbnRMaXN0ZW5lcigncm93c2VsZWN0ZWQnLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUm93IFNlbGVjdGVkYCwgZS5kZXRhaWwpO1xuICAgIH0pO1xuXG4gICAgbG9va3VwLmFkZEV2ZW50TGlzdGVuZXIoJ3Jvd2Rlc2VsZWN0ZWQnLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUm93IERlU2VsZWN0ZWRgLCBlLmRldGFpbCk7XG4gICAgfSk7XG5cbiAgICBsb29rdXAuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlZCcsIChlOiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgY29uc29sZS5pbmZvKGBTZWxlY3Rpb24gQ2hhbmdlZGAsIGUuZGV0YWlsKTtcbiAgICB9KTtcbiAgfTtcblxuICBsb29rdXAuZGF0YUdyaWRTZXR0aW5ncyA9IHtcbiAgICByb3dTZWxlY3Rpb246ICdtdWx0aXBsZSdcbiAgfTtcblxuICBhdXRvY29tcGxldGVMb29rdXAuZGF0YUdyaWRTZXR0aW5ncyA9IHtcbiAgICByb3dTZWxlY3Rpb246ICdtdWx0aXBsZSdcbiAgfTtcblxuICBjb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBsb29rdXAuZGF0YSA9IGRhdGE7XG4gICAgYXV0b2NvbXBsZXRlLmRhdGEgPSBkYXRhO1xuICAgIGF1dG9jb21wbGV0ZUxvb2t1cC5kYXRhID0gZGF0YTtcbiAgfTtcblxuICBzZXREYXRhKCk7XG4gIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-lookup/demos/example.ts\n");

/***/ }),

/***/ "./src/assets/data/books.json":
/*!************************************!*\
  !*** ./src/assets/data/books.json ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/books.json";

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
/******/ 			"ids-lookup-example": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts","src_components_ids-modal_ids-modal_ts","src_components_ids-lookup_ids-lookup_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts","src_components_ids-modal_ids-modal_ts","src_components_ids-lookup_ids-lookup_ts"], () => (__webpack_require__("./src/components/ids-lookup/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;