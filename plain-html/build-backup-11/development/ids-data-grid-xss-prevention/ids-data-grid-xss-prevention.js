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

/***/ "./src/components/ids-data-grid/demos/xss-prevention.ts":
/*!**************************************************************!*\
  !*** ./src/components/ids-data-grid/demos/xss-prevention.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\n\nconst dataGrid = document.querySelector(\"#data-grid-1\");\nif (dataGrid) {\n  (async function init() {\n    const data = [];\n    const columns = [];\n    data.push({ id: 2, productId: 2241202, productName: \"Different Compressor\", activity: \"<script>alert()<\\/script>\", quantity: 2, price: 210.991, status: \"\", orderDate: new Date(2016, 2, 15, 0, 30, 36), portable: false, action: \"oh\", description: \"The kit has an air blow gun that can be used for cleaning\" });\n    data.push({ id: 3, productId: 2342203, productName: \"Portable Compressor\", activity: \"&lt;script&gt;alert()&lt;script&gt;\", portable: true, quantity: 1, price: 120.992, status: null, orderDate: new Date(2014, 6, 3), action: \"ac\" });\n    data.push({ id: 4, productId: 2445204, productName: \"Another Compressor\", activity: \"&lt;svg/onload=alert(1)&gt;\", portable: true, quantity: 3, price: null, status: \"OK\", orderDate: new Date(2015, 3, 3), action: \"ac\", description: \"Compressor comes with with air tool kit\" });\n    data.push({ id: 5, productId: 2542205, productName: \"De Wallt Compressor\", activity: \"Inspect and Repair\", portable: false, quantity: 4, price: 210.99, status: \"OK\", orderDate: new Date(2015, 5, 5), action: \"oh\" });\n    data.push({ id: 6, productId: 2642205, productName: \"Air Compressors\", activity: \"Inspect and Repair\", portable: false, quantity: 41, price: 120.99, status: \"OK\", orderDate: new Date(2014, 6, 9), action: \"oh\" });\n    data.push({ id: 7, productId: 2642206, productName: \"Some Compressor\", activity: \"inspect and Repair\", portable: true, quantity: 41, price: 123.99, status: \"OK\", orderDate: new Date(2014, 6, 9), action: \"oh\" });\n    data.push({ id: 8, productId: 2642207, productName: \"Img Compressor\", activity: \"script<img onerror='alert(0)'>\", portable: true, quantity: 12, price: 12.99, status: \"OK\", orderDate: new Date(2014, 6, 9), action: \"oh\" });\n    data.push({ id: 2, productId: 2142201, productName: \"Compressor\", activity: \"<svg/onload=alert(1)>\", quantity: 1, price: 210.99, status: \"OK\", orderDate: new Date(2016, 2, 15, 12, 30, 36), portable: false, action: \"ac\" });\n    columns.push({ id: \"selectionCheckbox\", sortable: false, resizable: false, formatter: dataGrid.formatters.selectionCheckbox, align: \"center\" });\n    columns.push({ id: \"productName\", name: \"<Product Name>/>\", sortable: false, field: \"productName\", formatter: dataGrid.formatters.text });\n    columns.push({ id: \"test1\", name: \"<script>alert(3)<\\/script>\", field: \"activity\", formatter: dataGrid.formatters.hyperlink });\n    columns.push({ id: \"test2\", name: \"<script>alert(4)<\\/script>\", field: \"activity\" });\n    columns.push({ id: \"test3\", name: '<img onerror=alert(\"kocicka\")>test', field: \"quantity\", align: \"right\" });\n    dataGrid.columns = columns;\n    dataGrid.data = data;\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL3hzcy1wcmV2ZW50aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBRU87QUFJUCxNQUFNLFdBQVcsU0FBUyxjQUEyQixjQUFjO0FBRW5FLElBQUksVUFBVTtBQUNaLEdBQUMsZUFBZSxPQUFPO0FBQ3JCLFVBQU0sT0FBWSxDQUFDO0FBQ25CLFVBQU0sVUFBK0IsQ0FBQztBQUV0QyxTQUFLLEtBQUssRUFBRSxJQUFJLEdBQUcsV0FBVyxTQUFTLGFBQWEsd0JBQXdCLFVBQVUsNkJBQTRCLFVBQVUsR0FBRyxPQUFPLFNBQVMsUUFBUSxJQUFJLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLEdBQUcsVUFBVSxPQUFPLFFBQVEsTUFBTSxhQUFhLDREQUE0RCxDQUFDO0FBQ2pULFNBQUssS0FBSyxFQUFFLElBQUksR0FBRyxXQUFXLFNBQVMsYUFBYSx1QkFBdUIsVUFBVSx1Q0FBdUMsVUFBVSxNQUFNLFVBQVUsR0FBRyxPQUFPLFNBQVMsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDdE8sU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLHNCQUFzQixVQUFVLCtCQUErQixVQUFVLE1BQU0sVUFBVSxHQUFHLE9BQU8sTUFBTSxRQUFRLE1BQU0sV0FBVyxJQUFJLEtBQUssTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLE1BQU0sYUFBYSwwQ0FBMEMsQ0FBQztBQUNsUixTQUFLLEtBQUssRUFBRSxJQUFJLEdBQUcsV0FBVyxTQUFTLGFBQWEsdUJBQXVCLFVBQVUsc0JBQXNCLFVBQVUsT0FBTyxVQUFVLEdBQUcsT0FBTyxRQUFRLFFBQVEsTUFBTSxXQUFXLElBQUksS0FBSyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsS0FBSyxDQUFDO0FBQ3JOLFNBQUssS0FBSyxFQUFFLElBQUksR0FBRyxXQUFXLFNBQVMsYUFBYSxtQkFBbUIsVUFBVSxzQkFBc0IsVUFBVSxPQUFPLFVBQVUsSUFBSSxPQUFPLFFBQVEsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUM7QUFDbE4sU0FBSyxLQUFLLEVBQUUsSUFBSSxHQUFHLFdBQVcsU0FBUyxhQUFhLG1CQUFtQixVQUFVLHNCQUFzQixVQUFVLE1BQU0sVUFBVSxJQUFJLE9BQU8sUUFBUSxRQUFRLE1BQU0sV0FBVyxJQUFJLEtBQUssTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLEtBQUssQ0FBQztBQUNqTixTQUFLLEtBQUssRUFBRSxJQUFJLEdBQUcsV0FBVyxTQUFTLGFBQWEsa0JBQWtCLFVBQVUsa0NBQW9DLFVBQVUsTUFBTSxVQUFVLElBQUksT0FBTyxPQUFPLFFBQVEsTUFBTSxXQUFXLElBQUksS0FBSyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsS0FBSyxDQUFDO0FBQzdOLFNBQUssS0FBSyxFQUFFLElBQUksR0FBRyxXQUFXLFNBQVMsYUFBYSxjQUFjLFVBQVUseUJBQXlCLFVBQVUsR0FBRyxPQUFPLFFBQVEsUUFBUSxNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsVUFBVSxPQUFPLFFBQVEsS0FBSyxDQUFDO0FBRTVOLFlBQVEsS0FBSyxFQUFFLElBQUkscUJBQXFCLFVBQVUsT0FBTyxXQUFXLE9BQU8sV0FBVyxTQUFTLFdBQVcsbUJBQW1CLE9BQU8sU0FBUyxDQUFDO0FBQzlJLFlBQVEsS0FBSyxFQUFFLElBQUksZUFBZSxNQUFNLG9CQUFvQixVQUFVLE9BQU8sT0FBTyxlQUFlLFdBQVcsU0FBUyxXQUFXLEtBQUssQ0FBQztBQUN4SSxZQUFRLEtBQUssRUFBRSxJQUFJLFNBQVMsTUFBTSw4QkFBNkIsT0FBTyxZQUFZLFdBQVcsU0FBUyxXQUFXLFVBQVUsQ0FBQztBQUM1SCxZQUFRLEtBQUssRUFBRSxJQUFJLFNBQVMsTUFBTSw4QkFBNkIsT0FBTyxXQUFXLENBQUM7QUFDbEYsWUFBUSxLQUFLLEVBQUUsSUFBSSxTQUFTLE1BQU0sc0NBQXNDLE9BQU8sWUFBWSxPQUFPLFFBQVEsQ0FBQztBQUUzRyxhQUFTLFVBQVU7QUFDbkIsYUFBUyxPQUFPO0FBQUEsRUFDbEIsR0FBRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1ncmlkL2RlbW9zL3hzcy1wcmV2ZW50aW9uLnRzPzNhNzciXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbmltcG9ydCB0eXBlIElkc0RhdGFHcmlkIGZyb20gJy4uL2lkcy1kYXRhLWdyaWQnO1xuaW1wb3J0ICcuLi9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCB0eXBlIHsgSWRzRGF0YUdyaWRDb2x1bW4gfSBmcm9tICcuLi9pZHMtZGF0YS1ncmlkLWNvbHVtbic7XG5cbi8vIEV4YW1wbGUgZm9yIHBvcHVsYXRpbmcgdGhlIERhdGFHcmlkXG5jb25zdCBkYXRhR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SWRzRGF0YUdyaWQ+KCcjZGF0YS1ncmlkLTEnKSE7XG5cbmlmIChkYXRhR3JpZCkge1xuICAoYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSBbXTtcbiAgICBjb25zdCBjb2x1bW5zOiBJZHNEYXRhR3JpZENvbHVtbltdID0gW107XG5cbiAgICBkYXRhLnB1c2goeyBpZDogMiwgcHJvZHVjdElkOiAyMjQxMjAyLCBwcm9kdWN0TmFtZTogJ0RpZmZlcmVudCBDb21wcmVzc29yJywgYWN0aXZpdHk6ICc8c2NyaXB0PmFsZXJ0KCk8L3NjcmlwdD4nLCBxdWFudGl0eTogMiwgcHJpY2U6IDIxMC45OTEsIHN0YXR1czogJycsIG9yZGVyRGF0ZTogbmV3IERhdGUoMjAxNiwgMiwgMTUsIDAsIDMwLCAzNiksIHBvcnRhYmxlOiBmYWxzZSwgYWN0aW9uOiAnb2gnLCBkZXNjcmlwdGlvbjogJ1RoZSBraXQgaGFzIGFuIGFpciBibG93IGd1biB0aGF0IGNhbiBiZSB1c2VkIGZvciBjbGVhbmluZycgfSk7XG4gICAgZGF0YS5wdXNoKHsgaWQ6IDMsIHByb2R1Y3RJZDogMjM0MjIwMywgcHJvZHVjdE5hbWU6ICdQb3J0YWJsZSBDb21wcmVzc29yJywgYWN0aXZpdHk6ICcmbHQ7c2NyaXB0Jmd0O2FsZXJ0KCkmbHQ7c2NyaXB0Jmd0OycsIHBvcnRhYmxlOiB0cnVlLCBxdWFudGl0eTogMSwgcHJpY2U6IDEyMC45OTIsIHN0YXR1czogbnVsbCwgb3JkZXJEYXRlOiBuZXcgRGF0ZSgyMDE0LCA2LCAzKSwgYWN0aW9uOiAnYWMnIH0pO1xuICAgIGRhdGEucHVzaCh7IGlkOiA0LCBwcm9kdWN0SWQ6IDI0NDUyMDQsIHByb2R1Y3ROYW1lOiAnQW5vdGhlciBDb21wcmVzc29yJywgYWN0aXZpdHk6ICcmbHQ7c3ZnL29ubG9hZD1hbGVydCgxKSZndDsnLCBwb3J0YWJsZTogdHJ1ZSwgcXVhbnRpdHk6IDMsIHByaWNlOiBudWxsLCBzdGF0dXM6ICdPSycsIG9yZGVyRGF0ZTogbmV3IERhdGUoMjAxNSwgMywgMyksIGFjdGlvbjogJ2FjJywgZGVzY3JpcHRpb246ICdDb21wcmVzc29yIGNvbWVzIHdpdGggd2l0aCBhaXIgdG9vbCBraXQnIH0pO1xuICAgIGRhdGEucHVzaCh7IGlkOiA1LCBwcm9kdWN0SWQ6IDI1NDIyMDUsIHByb2R1Y3ROYW1lOiAnRGUgV2FsbHQgQ29tcHJlc3NvcicsIGFjdGl2aXR5OiAnSW5zcGVjdCBhbmQgUmVwYWlyJywgcG9ydGFibGU6IGZhbHNlLCBxdWFudGl0eTogNCwgcHJpY2U6IDIxMC45OSwgc3RhdHVzOiAnT0snLCBvcmRlckRhdGU6IG5ldyBEYXRlKDIwMTUsIDUsIDUpLCBhY3Rpb246ICdvaCcgfSk7XG4gICAgZGF0YS5wdXNoKHsgaWQ6IDYsIHByb2R1Y3RJZDogMjY0MjIwNSwgcHJvZHVjdE5hbWU6ICdBaXIgQ29tcHJlc3NvcnMnLCBhY3Rpdml0eTogJ0luc3BlY3QgYW5kIFJlcGFpcicsIHBvcnRhYmxlOiBmYWxzZSwgcXVhbnRpdHk6IDQxLCBwcmljZTogMTIwLjk5LCBzdGF0dXM6ICdPSycsIG9yZGVyRGF0ZTogbmV3IERhdGUoMjAxNCwgNiwgOSksIGFjdGlvbjogJ29oJyB9KTtcbiAgICBkYXRhLnB1c2goeyBpZDogNywgcHJvZHVjdElkOiAyNjQyMjA2LCBwcm9kdWN0TmFtZTogJ1NvbWUgQ29tcHJlc3NvcicsIGFjdGl2aXR5OiAnaW5zcGVjdCBhbmQgUmVwYWlyJywgcG9ydGFibGU6IHRydWUsIHF1YW50aXR5OiA0MSwgcHJpY2U6IDEyMy45OSwgc3RhdHVzOiAnT0snLCBvcmRlckRhdGU6IG5ldyBEYXRlKDIwMTQsIDYsIDkpLCBhY3Rpb246ICdvaCcgfSk7XG4gICAgZGF0YS5wdXNoKHsgaWQ6IDgsIHByb2R1Y3RJZDogMjY0MjIwNywgcHJvZHVjdE5hbWU6ICdJbWcgQ29tcHJlc3NvcicsIGFjdGl2aXR5OiAnc2NyaXB0PGltZyBvbmVycm9yPVxcJ2FsZXJ0KDApXFwnPicsIHBvcnRhYmxlOiB0cnVlLCBxdWFudGl0eTogMTIsIHByaWNlOiAxMi45OSwgc3RhdHVzOiAnT0snLCBvcmRlckRhdGU6IG5ldyBEYXRlKDIwMTQsIDYsIDkpLCBhY3Rpb246ICdvaCcgfSk7XG4gICAgZGF0YS5wdXNoKHsgaWQ6IDIsIHByb2R1Y3RJZDogMjE0MjIwMSwgcHJvZHVjdE5hbWU6ICdDb21wcmVzc29yJywgYWN0aXZpdHk6ICc8c3ZnL29ubG9hZD1hbGVydCgxKT4nLCBxdWFudGl0eTogMSwgcHJpY2U6IDIxMC45OSwgc3RhdHVzOiAnT0snLCBvcmRlckRhdGU6IG5ldyBEYXRlKDIwMTYsIDIsIDE1LCAxMiwgMzAsIDM2KSwgcG9ydGFibGU6IGZhbHNlLCBhY3Rpb246ICdhYycgfSk7XG5cbiAgICBjb2x1bW5zLnB1c2goeyBpZDogJ3NlbGVjdGlvbkNoZWNrYm94Jywgc29ydGFibGU6IGZhbHNlLCByZXNpemFibGU6IGZhbHNlLCBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMuc2VsZWN0aW9uQ2hlY2tib3gsIGFsaWduOiAnY2VudGVyJyB9KTtcbiAgICBjb2x1bW5zLnB1c2goeyBpZDogJ3Byb2R1Y3ROYW1lJywgbmFtZTogJzxQcm9kdWN0IE5hbWU+Lz4nLCBzb3J0YWJsZTogZmFsc2UsIGZpZWxkOiAncHJvZHVjdE5hbWUnLCBmb3JtYXR0ZXI6IGRhdGFHcmlkLmZvcm1hdHRlcnMudGV4dCB9KTtcbiAgICBjb2x1bW5zLnB1c2goeyBpZDogJ3Rlc3QxJywgbmFtZTogJzxzY3JpcHQ+YWxlcnQoMyk8L3NjcmlwdD4nLCBmaWVsZDogJ2FjdGl2aXR5JywgZm9ybWF0dGVyOiBkYXRhR3JpZC5mb3JtYXR0ZXJzLmh5cGVybGluayB9KTtcbiAgICBjb2x1bW5zLnB1c2goeyBpZDogJ3Rlc3QyJywgbmFtZTogJzxzY3JpcHQ+YWxlcnQoNCk8L3NjcmlwdD4nLCBmaWVsZDogJ2FjdGl2aXR5JyB9KTtcbiAgICBjb2x1bW5zLnB1c2goeyBpZDogJ3Rlc3QzJywgbmFtZTogJzxpbWcgb25lcnJvcj1hbGVydChcImtvY2lja2FcIik+dGVzdCcsIGZpZWxkOiAncXVhbnRpdHknLCBhbGlnbjogJ3JpZ2h0JyB9KTtcblxuICAgIGRhdGFHcmlkLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIGRhdGFHcmlkLmRhdGEgPSBkYXRhO1xuICB9KCkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-data-grid/demos/xss-prevention.ts\n");

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
/******/ 			"ids-data-grid-xss-prevention": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-data-grid/demos/xss-prevention.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;