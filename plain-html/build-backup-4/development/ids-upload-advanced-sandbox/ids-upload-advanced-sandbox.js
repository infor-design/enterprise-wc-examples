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

/***/ "./src/components/ids-upload-advanced/demos/sandbox.ts":
/*!*************************************************************!*\
  !*** ./src/components/ids-upload-advanced/demos/sandbox.ts ***!
  \*************************************************************/
/***/ (() => {

eval("const useSend = 1;\nfunction randomInteger(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nfunction uploadFileDummy(formData, uiElem) {\n  const total = 100;\n  let loaded = 0;\n  const e = {\n    completeHandler: () => ({ loaded, total, target: { readyState: 4, status: 200 } }),\n    progressHandler: () => ({ loaded, total }),\n    abortHandler: () => null,\n    errorHandler: () => ({\n      loaded,\n      total,\n      target: {\n        readyState: 4,\n        status: 401,\n        statusText: \"<em>Error</em>: Some server issue!\"\n      }\n    })\n  };\n  const interval = setInterval(() => {\n    const randomInt = randomInteger(1, 100);\n    loaded++;\n    if (loaded >= 100) {\n      clearInterval(interval);\n      uiElem.completeHandler(e.completeHandler());\n    } else if (randomInt === loaded) {\n      clearInterval(interval);\n      uiElem.errorHandler(e.errorHandler());\n    } else {\n      uiElem.progressHandler(e.progressHandler());\n    }\n  }, 50);\n  uiElem?.addEventListener(\"abort\", () => {\n    clearInterval(interval);\n    uiElem.abortHandler(e.abortHandler());\n  });\n}\nfunction uploadFile(formData, uiElem) {\n  const xhr = new XMLHttpRequest();\n  xhr.upload.addEventListener(\"progress\", uiElem.progressHandler.bind(uiElem), false);\n  xhr.addEventListener(\"load\", uiElem.completeHandler.bind(uiElem), false);\n  xhr.addEventListener(\"error\", uiElem.errorHandler.bind(uiElem), false);\n  xhr.addEventListener(\"abort\", uiElem.abortHandler.bind(uiElem), false);\n  xhr.open(\"POST\", \"http://localhost:4300/upload\");\n  xhr.send(formData);\n  uiElem?.addEventListener(\"abort\", () => {\n    xhr.abort();\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const elemToBeSetAttrUrl = document.querySelectorAll(\"#upload-advanced-url ids-upload-advanced\");\n  const elemToBeUseCustomSend = document.querySelector(\"#upload-advanced-send\");\n  for (let i = 0, l = elemToBeSetAttrUrl.length; i < l; i++) {\n    elemToBeSetAttrUrl[i].url = \"http://localhost:4300/upload\";\n  }\n  if (elemToBeUseCustomSend) {\n    if (useSend === 1) {\n      elemToBeUseCustomSend.send = uploadFile;\n    } else if (useSend === 2) {\n      elemToBeUseCustomSend.send = uploadFileDummy;\n    }\n  }\n  const targetElem = document.querySelector(\"#elem-upload-advanced-events\");\n  targetElem?.addEventListener(\"filesdragenter\", (e) => {\n    console.info(\"Files enter in drag area\", e);\n  });\n  targetElem?.addEventListener(\"filesdrop\", (e) => {\n    console.info(\"Files drop in to drag area\", e);\n  });\n  targetElem?.addEventListener(\"beginupload\", (e) => {\n    console.info(\"File begin upload\", e);\n  });\n  targetElem?.addEventListener(\"abort\", (e) => {\n    console.info(\"File abort\", e);\n  });\n  targetElem?.addEventListener(\"error\", (e) => {\n    console.info(\"File error\", e);\n  });\n  targetElem?.addEventListener(\"complete\", (e) => {\n    console.info(\"File complete\", e);\n  });\n  targetElem?.addEventListener(\"closebuttonclick\", (e) => {\n    console.info(\"Clicked on close button\", e);\n  });\n  const errorBtn = document.querySelector(\"#upload-advanced-set-error-btn\");\n  const errorEl = document.querySelector(\"#upload-advanced-set-error\");\n  errorBtn?.addEventListener(\"click\", () => {\n    errorEl.setError({ message: \"Arbitrary error message\" });\n  });\n  const errorFilesBtn = document.querySelector(\"#upload-advanced-set-error-on-files-btn\");\n  const errorFilesEl = document.querySelector(\"#upload-advanced-set-error-on-files\");\n  errorFilesBtn?.addEventListener(\"click\", () => {\n    const fileNodes = errorFilesEl.all;\n    if (fileNodes.length) {\n      errorFilesEl.setError({ message: \"File arbitrary error message\", fileNodes });\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy11cGxvYWQtYWR2YW5jZWQvZGVtb3Mvc2FuZGJveC50cz8wZDY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogVXNlIG9uZSB0byB0ZXN0LCBmcm9tIGJlbG93IG1ldGhvZHNcbiAqICgxKSBgdXBsb2FkRmlsZSgpYCAtIFVzZSBkZW1vIGFwcCBzZXJ2ZXIgdG8gdXBsb2FkLCB3aWxsIHJlbW92ZSBhZnRlciBvbmUgbWludXRlXG4gKiAoMikgYHVwbG9hZEZpbGVEdW1teSgpYCAtIFVzZSBkdW1teSBsb2dpYyB0byBsb29wIGludGVydmFsLCBubyBmaWxlcyBzZW50IGFueXdoZXJlXG4gKiBFbHNlIHVzZSBjb21wb25lbnQncyBgc2VuZEJ5WEhSKClgIG1ldGhvZCwgcmVxdWlyZCB1cmwgYXR0cmlidXRlICh1cmw9XCJodHRwOi8vbG9jYWxob3N0OjQzMDAvdXBsb2FkXCIpLCB3aWxsIHJlbW92ZSBhZnRlciBvbmUgbWludXRlXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5jb25zdCB1c2VTZW5kID0gMTtcblxuLyoqXG4gKiBHZXQgcmFuZG9tIGludGVnZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gVGhlIGZpbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggVGhlIGZpbGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtudW1iZXJ9IENhbGN1dGF0ZWQgcmFuZG9tIGludGVnZXJcbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbi8qKlxuICogRHVtbXkgc2VuZCBtZXRob2QsIGZvciBkZW1vIHB1cnBvc2VzIG9ubHlcbiAqIFRoaXMgbWV0aG9kIHVzZSBkdW1teSBsb2dpYyB0byBsb29wIGludGVydmFsIGFuZFxuICogZG9lcyBOT1QgdXNlIGBmb3JtRGF0YWAgcGFyYW0gYW5kIG5vIGZpbGVzIGdldCB0byBzZW5kIGFueXdoZXJlXG4gKiBAcGFyYW0ge29iamVjdH0gZm9ybURhdGEgQ29udGFpbnMgdGhlIGZpbGUgZGF0YS5cbiAqIEBwYXJhbSB7b2JqZWN0fSB1aUVsZW0gVGhlIHVpIGVsZW1lbnRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIHVwbG9hZEZpbGVEdW1teShmb3JtRGF0YTogYW55LCB1aUVsZW06IGFueSkge1xuICBjb25zdCB0b3RhbCA9IDEwMDtcbiAgbGV0IGxvYWRlZCA9IDA7XG4gIGNvbnN0IGUgPSB7XG4gICAgY29tcGxldGVIYW5kbGVyOiAoKSA9PiAoeyBsb2FkZWQsIHRvdGFsLCB0YXJnZXQ6IHsgcmVhZHlTdGF0ZTogNCwgc3RhdHVzOiAyMDAgfSB9KSxcbiAgICBwcm9ncmVzc0hhbmRsZXI6ICgpID0+ICh7IGxvYWRlZCwgdG90YWwgfSksXG4gICAgYWJvcnRIYW5kbGVyOiAoKSA9PiBudWxsLFxuICAgIGVycm9ySGFuZGxlcjogKCkgPT4gKHtcbiAgICAgIGxvYWRlZCxcbiAgICAgIHRvdGFsLFxuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHJlYWR5U3RhdGU6IDQsXG4gICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICBzdGF0dXNUZXh0OiAnPGVtPkVycm9yPC9lbT46IFNvbWUgc2VydmVyIGlzc3VlISdcbiAgICAgIH1cbiAgICB9KSxcbiAgfTtcbiAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tSW50ID0gcmFuZG9tSW50ZWdlcigxLCAxMDApO1xuICAgIGxvYWRlZCsrO1xuICAgIGlmIChsb2FkZWQgPj0gMTAwKSB7XG4gICAgICAvLyBDb21wbGV0ZVxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB1aUVsZW0uY29tcGxldGVIYW5kbGVyKGUuY29tcGxldGVIYW5kbGVyKCkpO1xuICAgIH0gZWxzZSBpZiAocmFuZG9tSW50ID09PSBsb2FkZWQpIHtcbiAgICAgIC8vIEVycm9yXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIHVpRWxlbS5lcnJvckhhbmRsZXIoZS5lcnJvckhhbmRsZXIoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEluIHByb2Nlc3NcbiAgICAgIHVpRWxlbS5wcm9ncmVzc0hhbmRsZXIoZS5wcm9ncmVzc0hhbmRsZXIoKSk7XG4gICAgfVxuICB9LCA1MCk7XG4gIHVpRWxlbT8uYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgdWlFbGVtLmFib3J0SGFuZGxlcihlLmFib3J0SGFuZGxlcigpKTtcbiAgfSk7XG59XG5cbi8qKlxuICogU2VuZCBmaWxlcyB0byBEZW1vIEFwcCBzZXJ2ZXIsIGZpbGVzIHdpbGwgcmVtb3ZlIGFmdGVyIG9uZSBtaW51dGUuXG4gKiBJbiBDaHJvbWUgbmV0d29yayB0YWIsIHNpbXVsYXRlIGEgc2xvdyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvciB0ZXN0aW5nXG4gKiBAcGFyYW0ge29iamVjdH0gZm9ybURhdGEgQ29udGFpbnMgdGhlIGZpbGUgZGF0YS5cbiAqIEBwYXJhbSB7b2JqZWN0fSB1aUVsZW0gVGhlIHVpIGVsZW1lbnRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB1cGxvYWRGaWxlKGZvcm1EYXRhOiBhbnksIHVpRWxlbTogYW55KSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgdWlFbGVtLnByb2dyZXNzSGFuZGxlci5iaW5kKHVpRWxlbSksIGZhbHNlKTtcbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB1aUVsZW0uY29tcGxldGVIYW5kbGVyLmJpbmQodWlFbGVtKSwgZmFsc2UpO1xuICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB1aUVsZW0uZXJyb3JIYW5kbGVyLmJpbmQodWlFbGVtKSwgZmFsc2UpO1xuICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCB1aUVsZW0uYWJvcnRIYW5kbGVyLmJpbmQodWlFbGVtKSwgZmFsc2UpO1xuICB4aHIub3BlbignUE9TVCcsICdodHRwOi8vbG9jYWxob3N0OjQzMDAvdXBsb2FkJyk7XG4gIHhoci5zZW5kKGZvcm1EYXRhKTtcblxuICAvLyBGaWxlIGFib3J0XG4gIHVpRWxlbT8uYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgeGhyLmFib3J0KCk7XG4gIH0pO1xufVxuXG4vKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEFmdGVyIERPTSBMb2FkZWRcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGVsZW1Ub0JlU2V0QXR0clVybDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3VwbG9hZC1hZHZhbmNlZC11cmwgaWRzLXVwbG9hZC1hZHZhbmNlZCcpO1xuICBjb25zdCBlbGVtVG9CZVVzZUN1c3RvbVNlbmQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQtYWR2YW5jZWQtc2VuZCcpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbVRvQmVTZXRBdHRyVXJsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGVsZW1Ub0JlU2V0QXR0clVybFtpXS51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MzAwL3VwbG9hZCc7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBtZWh0b2RcbiAgICogKDEpIFVzZSBkZW1vIGFwcCBzZXJ2ZXIgdG8gdXBsb2FkLCB3aWxsIHJlbW92ZSBhZnRlciBvbmUgbWludXRlXG4gICAqICgyKSBPciBFbHNlLCBVc2UgZHVtbXkgbG9naWMgdG8gbG9vcCBpbnRlcnZhbCwgbm8gZmlsZXMgc2VudCBhbnl3aGVyZVxuICAgKiBFbHNlIHVzZSBjb21wb25lbnQncyBgc2VuZEJ5WEhSYCBtZXRob2QsIHJlcXVpcmQgdXJsIGF0dHJpYnV0ZSwgd2lsbCByZW1vdmUgYWZ0ZXIgb25lIG1pbnV0ZVxuICAgKi9cbiAgaWYgKGVsZW1Ub0JlVXNlQ3VzdG9tU2VuZCkge1xuICAgIGlmICh1c2VTZW5kID09PSAxKSB7XG4gICAgICBlbGVtVG9CZVVzZUN1c3RvbVNlbmQuc2VuZCA9IHVwbG9hZEZpbGU7XG4gICAgfSBlbHNlIGlmICh1c2VTZW5kID09PSAyKSB7XG4gICAgICBlbGVtVG9CZVVzZUN1c3RvbVNlbmQuc2VuZCA9IHVwbG9hZEZpbGVEdW1teTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBFdmVudHMgdGhhdCBtYXkgYmUgdHJpZ2dlcmVkXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4gIC8vIEVsZW1lbnQgdG8gdGFyZ2V0XG4gIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWxlbS11cGxvYWQtYWR2YW5jZWQtZXZlbnRzJyk7XG5cbiAgLy8gRmlsZXMgZW50ZXIgaW4gZHJhZyBhcmVhXG4gIHRhcmdldEVsZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbGVzZHJhZ2VudGVyJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmluZm8oJ0ZpbGVzIGVudGVyIGluIGRyYWcgYXJlYScsIGUpO1xuICB9KTtcblxuICAvLyBGaWxlcyBkcm9wIGluIHRvIGRyYWcgYXJlYVxuICB0YXJnZXRFbGVtPy5hZGRFdmVudExpc3RlbmVyKCdmaWxlc2Ryb3AnLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnRmlsZXMgZHJvcCBpbiB0byBkcmFnIGFyZWEnLCBlKTtcbiAgfSk7XG5cbiAgLy8gRmlsZSBiZWdpbiB1cGxvYWRcbiAgdGFyZ2V0RWxlbT8uYWRkRXZlbnRMaXN0ZW5lcignYmVnaW51cGxvYWQnLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnRmlsZSBiZWdpbiB1cGxvYWQnLCBlKTtcbiAgfSk7XG5cbiAgLy8gRmlsZSBhYm9ydFxuICB0YXJnZXRFbGVtPy5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIChlKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdGaWxlIGFib3J0JywgZSk7XG4gIH0pO1xuXG4gIC8vIEZpbGUgZXJyb3JcbiAgdGFyZ2V0RWxlbT8uYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnRmlsZSBlcnJvcicsIGUpO1xuICB9KTtcblxuICAvLyBGaWxlIGNvbXBsZXRlXG4gIHRhcmdldEVsZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmluZm8oJ0ZpbGUgY29tcGxldGUnLCBlKTtcbiAgfSk7XG5cbiAgLy8gQ2xpY2sgY2xvc2UgYnV0dG9uXG4gIHRhcmdldEVsZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlYnV0dG9uY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygnQ2xpY2tlZCBvbiBjbG9zZSBidXR0b24nLCBlKTtcbiAgfSk7XG5cbiAgLypcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogQXJiaXRyYXJ5IGVycm9yIG1lc3NhZ2VcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG4gIC8vIFNldCBhbiBhcmJpdHJhcnkgZXJyb3IgbWVzc2FnZVxuICBjb25zdCBlcnJvckJ0bjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZC1hZHZhbmNlZC1zZXQtZXJyb3ItYnRuJyk7XG4gIGNvbnN0IGVycm9yRWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQtYWR2YW5jZWQtc2V0LWVycm9yJyk7XG4gIGVycm9yQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlcnJvckVsLnNldEVycm9yKHsgbWVzc2FnZTogJ0FyYml0cmFyeSBlcnJvciBtZXNzYWdlJyB9KTtcbiAgfSk7XG5cbiAgLy8gU2V0IGFuIGFyYml0cmFyeSBlcnJvciBtZXNzYWdlIChvbiBlYWNoIGZpbGUpXG4gIGNvbnN0IGVycm9yRmlsZXNCdG46IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQtYWR2YW5jZWQtc2V0LWVycm9yLW9uLWZpbGVzLWJ0bicpO1xuICBjb25zdCBlcnJvckZpbGVzRWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQtYWR2YW5jZWQtc2V0LWVycm9yLW9uLWZpbGVzJyk7XG4gIGVycm9yRmlsZXNCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZpbGVOb2RlczogYW55W10gPSBlcnJvckZpbGVzRWwuYWxsO1xuICAgIGlmIChmaWxlTm9kZXMubGVuZ3RoKSB7XG4gICAgICBlcnJvckZpbGVzRWwuc2V0RXJyb3IoeyBtZXNzYWdlOiAnRmlsZSBhcmJpdHJhcnkgZXJyb3IgbWVzc2FnZScsIGZpbGVOb2RlcyB9KTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQVFBLE1BQU0sVUFBVTtBQVFoQixTQUFTLGNBQWMsS0FBYSxLQUFhO0FBQy9DLFNBQU8sS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLE1BQU0sTUFBTSxFQUFFLElBQUk7QUFDdkQ7QUFXQSxTQUFTLGdCQUFnQixVQUFlLFFBQWE7QUFDbkQsUUFBTSxRQUFRO0FBQ2QsTUFBSSxTQUFTO0FBQ2IsUUFBTSxJQUFJO0FBQUEsSUFDUixpQkFBaUIsT0FBTyxFQUFFLFFBQVEsT0FBTyxRQUFRLEVBQUUsWUFBWSxHQUFHLFFBQVEsSUFBSSxFQUFFO0FBQUEsSUFDaEYsaUJBQWlCLE9BQU8sRUFBRSxRQUFRLE1BQU07QUFBQSxJQUN4QyxjQUFjLE1BQU07QUFBQSxJQUNwQixjQUFjLE9BQU87QUFBQSxNQUNuQjtBQUFBLE1BQ0E7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFdBQVcsWUFBWSxNQUFNO0FBQ2pDLFVBQU0sWUFBWSxjQUFjLEdBQUcsR0FBRztBQUN0QztBQUNBLFFBQUksVUFBVSxLQUFLO0FBRWpCLG9CQUFjLFFBQVE7QUFDdEIsYUFBTyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQztBQUFBLElBQzVDLFdBQVcsY0FBYyxRQUFRO0FBRS9CLG9CQUFjLFFBQVE7QUFDdEIsYUFBTyxhQUFhLEVBQUUsYUFBYSxDQUFDO0FBQUEsSUFDdEMsT0FBTztBQUVMLGFBQU8sZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7QUFBQSxJQUM1QztBQUFBLEVBQ0YsR0FBRyxFQUFFO0FBQ0wsVUFBUSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3RDLGtCQUFjLFFBQVE7QUFDdEIsV0FBTyxhQUFhLEVBQUUsYUFBYSxDQUFDO0FBQUEsRUFDdEMsQ0FBQztBQUNIO0FBU0EsU0FBUyxXQUFXLFVBQWUsUUFBYTtBQUM5QyxRQUFNLE1BQU0sSUFBSSxlQUFlO0FBQy9CLE1BQUksT0FBTyxpQkFBaUIsWUFBWSxPQUFPLGdCQUFnQixLQUFLLE1BQU0sR0FBRyxLQUFLO0FBQ2xGLE1BQUksaUJBQWlCLFFBQVEsT0FBTyxnQkFBZ0IsS0FBSyxNQUFNLEdBQUcsS0FBSztBQUN2RSxNQUFJLGlCQUFpQixTQUFTLE9BQU8sYUFBYSxLQUFLLE1BQU0sR0FBRyxLQUFLO0FBQ3JFLE1BQUksaUJBQWlCLFNBQVMsT0FBTyxhQUFhLEtBQUssTUFBTSxHQUFHLEtBQUs7QUFDckUsTUFBSSxLQUFLLFFBQVEsOEJBQThCO0FBQy9DLE1BQUksS0FBSyxRQUFRO0FBR2pCLFVBQVEsaUJBQWlCLFNBQVMsTUFBTTtBQUN0QyxRQUFJLE1BQU07QUFBQSxFQUNaLENBQUM7QUFDSDtBQU9BLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELFFBQU0scUJBQTBCLFNBQVMsaUJBQWlCLDBDQUEwQztBQUNwRyxRQUFNLHdCQUE2QixTQUFTLGNBQWMsdUJBQXVCO0FBRWpGLFdBQVMsSUFBSSxHQUFHLElBQUksbUJBQW1CLFFBQVEsSUFBSSxHQUFHLEtBQUs7QUFDekQsdUJBQW1CLENBQUMsRUFBRSxNQUFNO0FBQUEsRUFDOUI7QUFRQSxNQUFJLHVCQUF1QjtBQUN6QixRQUFJLFlBQVksR0FBRztBQUNqQiw0QkFBc0IsT0FBTztBQUFBLElBQy9CLFdBQVcsWUFBWSxHQUFHO0FBQ3hCLDRCQUFzQixPQUFPO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBVUEsUUFBTSxhQUFhLFNBQVMsY0FBYyw4QkFBOEI7QUFHeEUsY0FBWSxpQkFBaUIsa0JBQWtCLENBQUMsTUFBTTtBQUNwRCxZQUFRLEtBQUssNEJBQTRCLENBQUM7QUFBQSxFQUM1QyxDQUFDO0FBR0QsY0FBWSxpQkFBaUIsYUFBYSxDQUFDLE1BQU07QUFDL0MsWUFBUSxLQUFLLDhCQUE4QixDQUFDO0FBQUEsRUFDOUMsQ0FBQztBQUdELGNBQVksaUJBQWlCLGVBQWUsQ0FBQyxNQUFNO0FBQ2pELFlBQVEsS0FBSyxxQkFBcUIsQ0FBQztBQUFBLEVBQ3JDLENBQUM7QUFHRCxjQUFZLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUMzQyxZQUFRLEtBQUssY0FBYyxDQUFDO0FBQUEsRUFDOUIsQ0FBQztBQUdELGNBQVksaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQzNDLFlBQVEsS0FBSyxjQUFjLENBQUM7QUFBQSxFQUM5QixDQUFDO0FBR0QsY0FBWSxpQkFBaUIsWUFBWSxDQUFDLE1BQU07QUFDOUMsWUFBUSxLQUFLLGlCQUFpQixDQUFDO0FBQUEsRUFDakMsQ0FBQztBQUdELGNBQVksaUJBQWlCLG9CQUFvQixDQUFDLE1BQU07QUFDdEQsWUFBUSxLQUFLLDJCQUEyQixDQUFDO0FBQUEsRUFDM0MsQ0FBQztBQVFELFFBQU0sV0FBZ0IsU0FBUyxjQUFjLGdDQUFnQztBQUM3RSxRQUFNLFVBQWUsU0FBUyxjQUFjLDRCQUE0QjtBQUN4RSxZQUFVLGlCQUFpQixTQUFTLE1BQU07QUFDeEMsWUFBUSxTQUFTLEVBQUUsU0FBUywwQkFBMEIsQ0FBQztBQUFBLEVBQ3pELENBQUM7QUFHRCxRQUFNLGdCQUFxQixTQUFTLGNBQWMseUNBQXlDO0FBQzNGLFFBQU0sZUFBb0IsU0FBUyxjQUFjLHFDQUFxQztBQUN0RixpQkFBZSxpQkFBaUIsU0FBUyxNQUFNO0FBQzdDLFVBQU0sWUFBbUIsYUFBYTtBQUN0QyxRQUFJLFVBQVUsUUFBUTtBQUNwQixtQkFBYSxTQUFTLEVBQUUsU0FBUyxnQ0FBZ0MsVUFBVSxDQUFDO0FBQUEsSUFDOUU7QUFBQSxFQUNGLENBQUM7QUFDSCxDQUFDOyIsIm5hbWVzIjpbXSwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaWRzLXVwbG9hZC1hZHZhbmNlZC9kZW1vcy9zYW5kYm94LnRzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-upload-advanced/demos/sandbox.ts\n");

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ids-upload-advanced-sandbox": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-upload-advanced/demos/sandbox.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;