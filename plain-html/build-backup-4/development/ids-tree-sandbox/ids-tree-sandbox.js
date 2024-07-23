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

/***/ "./src/components/ids-tree/demos/sandbox.ts":
/*!**************************************************!*\
  !*** ./src/components/ids-tree/demos/sandbox.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_radio_ids_radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ids-radio/ids-radio */ \"./src/components/ids-radio/ids-radio.ts\");\n/* harmony import */ var _assets_data_tree_basic_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/tree-basic.json */ \"./src/assets/data/tree-basic.json\");\n/* harmony import */ var _assets_data_tree_badges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/tree-badges.json */ \"./src/assets/data/tree-badges.json\");\n\n\n\nconst getData = async function getData2(callback, url = _assets_data_tree_basic_json__WEBPACK_IMPORTED_MODULE_1__) {\n  if (typeof callback === \"function\") {\n    const res = await fetch(url);\n    const data = await res.json();\n    callback(data);\n  }\n};\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n  const treeDs = document.querySelector(\"#tree-datasource\");\n  if (treeDs) {\n    await getData((data) => {\n      treeDs.data = data;\n    });\n  }\n  const treeTt = document.querySelector(\"#tree-toggle-target\");\n  if (treeTt) {\n    treeTt.useToggleTarget = true;\n    await getData((data) => {\n      treeTt.data = data;\n    });\n  }\n  const treeTtNoIr = document.querySelector(\"#tree-toggle-target-no-rotation\");\n  if (treeTtNoIr) {\n    treeTtNoIr.toggleIconRotate = false;\n    treeTtNoIr.useToggleTarget = true;\n    await getData((data) => {\n      treeTtNoIr.data = data;\n    });\n  }\n  const treeCi = document.querySelector(\"#tree-custom-icons\");\n  if (treeCi) {\n    treeCi.useToggleTarget = true;\n    treeCi.collapseIcon = \"user-folder-closed\";\n    treeCi.expandIcon = \"user-folder-open\";\n    treeCi.toggleCollapseIcon = \"chevron-right\";\n    treeCi.toggleExpandIcon = \"chevron-down\";\n    treeCi.icon = \"tree-doc\";\n    await getData((data) => {\n      treeCi.data = data;\n    });\n  }\n  const treeBg = document.querySelector(\"#tree-badges\");\n  if (treeBg) {\n    const url = _assets_data_tree_badges_json__WEBPACK_IMPORTED_MODULE_2__;\n    await getData((data) => {\n      treeBg.data = data;\n    }, url);\n  }\n  const treeEc = document.querySelector(\"#tree-expand-or-collapse\");\n  const btnExpandCollapse = document.querySelector(\"#btn-tree-expandcollapse\");\n  if (treeEc) {\n    await getData((data) => {\n      treeEc.data = data;\n    });\n  }\n  btnExpandCollapse?.addEventListener(\"click\", () => {\n    const action = document.querySelector(\"#radio-tree-expandcollapse\").value;\n    const id = \"#public-folders\";\n    if (action === \"expand\")\n      treeEc?.expand(id);\n    if (action === \"collapse\")\n      treeEc?.collapse(id);\n    if (action === \"expand-all\")\n      treeEc?.expandAll();\n    if (action === \"collapse-all\")\n      treeEc?.collapseAll();\n  });\n  const treeDe = document.querySelector(\"#tree-disable-enable\");\n  const btnDisableEnable = document.querySelector(\"#btn-tree-disable-enable\");\n  const optDe = {\n    disabled: false,\n    setDisableEnable: () => {\n      optDe.disabled = !optDe.disabled;\n      treeDe.disabled = optDe.disabled;\n      btnDisableEnable.text = `${optDe.disabled ? \"Enable\" : \"Disable\"} Tree`;\n    }\n  };\n  if (treeDe) {\n    await getData((data) => {\n      treeDe.data = data;\n      optDe.setDisableEnable();\n    });\n  }\n  btnDisableEnable?.addEventListener(\"click\", () => {\n    optDe.setDisableEnable();\n  });\n  const treeSl = document.querySelector(\"#tree-selection\");\n  const btnToggleSelection = document.querySelector(\"#btn-tree-toggle-selection\");\n  if (treeSl) {\n    await getData((data) => {\n      treeSl.data = data;\n    });\n  }\n  btnToggleSelection?.addEventListener(\"click\", () => {\n    const id = \"#public-folders\";\n    const isSelected = treeSl?.isSelected(id);\n    if (isSelected) {\n      treeSl?.unselect(id);\n    } else {\n      treeSl?.select(id);\n    }\n  });\n  const treeEv = document.querySelector(\"#tree-events\");\n  if (treeEv) {\n    const show = (type, detail) => console.info(type, detail);\n    await getData((data) => {\n      treeEv.data = data;\n    });\n    treeEv.useToggleTarget = true;\n    treeEv.addEventListener(\"beforeselected\", (e) => {\n      show(\"beforeselected\", e.detail);\n    });\n    treeEv.addEventListener(\"selected\", (e) => {\n      show(\"selected\", e.detail);\n    });\n    treeEv.addEventListener(\"beforecollapsed\", (e) => {\n      show(\"beforecollapsed\", e.detail);\n    });\n    treeEv.addEventListener(\"collapsed\", (e) => {\n      show(\"collapsed\", e.detail);\n    });\n    treeEv.addEventListener(\"beforeexpanded\", (e) => {\n      show(\"beforeexpanded\", e.detail);\n    });\n    treeEv.addEventListener(\"expanded\", (e) => {\n      show(\"expanded\", e.detail);\n    });\n  }\n  const treeCs = document.querySelector(\"#tree-characters-and-symbols\");\n  if (treeCs) {\n    const data = [{\n      id: \"cs-1\",\n      text: '<online onload=\"alert()\">'\n    }, {\n      id: \"cs-2\",\n      text: `< > & \"\n        &#33; &#34; &#35; &#36; &#37; &#38; &#39;\n        &#40; &#41; &#42; &#43; &#44; &#45; &#46; &#47;\n        &#161;, &#162;, &#163;, &#164;, &#165;, &#166;, &#167;, &#169;`\n    }];\n    treeCs.data = data;\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtdHJlZS9kZW1vcy9zYW5kYm94LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDTztBQUNtQjtBQUNDO0FBRzNCLE1BQU0sVUFBVSxlQUFlQSxTQUFRLFVBQWUsTUFBVyx5REFBYSxFQUFFO0FBQzlFLE1BQUksT0FBTyxhQUFhLFlBQVk7QUFDbEMsVUFBTSxNQUFNLE1BQU0sTUFBTSxHQUFHO0FBQzNCLFVBQU0sT0FBTyxNQUFNLElBQUksS0FBSztBQUM1QixhQUFTLElBQUk7QUFBQSxFQUNmO0FBQ0Y7QUFFQSxTQUFTLGlCQUFpQixvQkFBb0IsWUFBWTtBQUV4RCxRQUFNLFNBQWMsU0FBUyxjQUFjLGtCQUFrQjtBQUM3RCxNQUFJLFFBQVE7QUFDVixVQUFNLFFBQVEsQ0FBQyxTQUFjO0FBQzNCLGFBQU8sT0FBTztBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBR0EsUUFBTSxTQUFjLFNBQVMsY0FBYyxxQkFBcUI7QUFDaEUsTUFBSSxRQUFRO0FBQ1YsV0FBTyxrQkFBa0I7QUFDekIsVUFBTSxRQUFRLENBQUMsU0FBYztBQUMzQixhQUFPLE9BQU87QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUdBLFFBQU0sYUFBa0IsU0FBUyxjQUFjLGlDQUFpQztBQUNoRixNQUFJLFlBQVk7QUFDZCxlQUFXLG1CQUFtQjtBQUM5QixlQUFXLGtCQUFrQjtBQUM3QixVQUFNLFFBQVEsQ0FBQyxTQUFjO0FBQzNCLGlCQUFXLE9BQU87QUFBQSxJQUNwQixDQUFDO0FBQUEsRUFDSDtBQUdBLFFBQU0sU0FBYyxTQUFTLGNBQWMsb0JBQW9CO0FBQy9ELE1BQUksUUFBUTtBQUNWLFdBQU8sa0JBQWtCO0FBQ3pCLFdBQU8sZUFBZTtBQUN0QixXQUFPLGFBQWE7QUFDcEIsV0FBTyxxQkFBcUI7QUFDNUIsV0FBTyxtQkFBbUI7QUFDMUIsV0FBTyxPQUFPO0FBRWQsVUFBTSxRQUFRLENBQUMsU0FBYztBQUMzQixhQUFPLE9BQU87QUFBQSxJQUNoQixD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QUM7QUFDRCxXQUFPLGlCQUFpQixZQUFZLENBQUMsTUFBVztBQUM5QyxXQUFLLFlBQVksRUFBRSxNQUFNO0FBQUEsSUFDM0IsQ0FBQztBQUFBLEVBQ0g7QUFHQSxRQUFNLFNBQWMsU0FBUyxjQUFjLDhCQUE4QjtBQUN6RSxNQUFJLFFBQVE7QUFDVixVQUFNLE9BQU8sQ0FBQztBQUFBLE1BQ1osSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLElBQ1IsR0FBRztBQUFBLE1BQ0QsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSVIsQ0FBQztBQUVELFdBQU8sT0FBTztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLXRyZWUvZGVtb3Mvc2FuZGJveC50cz84YmE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN1cHBvcnRpbmcgY29tcG9uZW50c1xuaW1wb3J0ICcuLi8uLi9pZHMtcmFkaW8vaWRzLXJhZGlvJztcbmltcG9ydCB0cmVlQmFzaWNKU09OIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9kYXRhL3RyZWUtYmFzaWMuanNvbic7XG5pbXBvcnQgdHJlZUJhZGdlc0pTT04gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2RhdGEvdHJlZS1iYWRnZXMuanNvbic7XG5cbi8vIEdldCBzb21lIHNhbXBsZSBkYXRhXG5jb25zdCBnZXREYXRhID0gYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjYWxsYmFjazogYW55LCB1cmw6IGFueSA9IHRyZWVCYXNpY0pTT04pIHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY2FsbGJhY2soZGF0YSk7XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIC8vIERhdGFTb3VyY2VcbiAgY29uc3QgdHJlZURzOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlZS1kYXRhc291cmNlJyk7XG4gIGlmICh0cmVlRHMpIHtcbiAgICBhd2FpdCBnZXREYXRhKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRyZWVEcy5kYXRhID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBUYXJnZXRcbiAgY29uc3QgdHJlZVR0OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlZS10b2dnbGUtdGFyZ2V0Jyk7XG4gIGlmICh0cmVlVHQpIHtcbiAgICB0cmVlVHQudXNlVG9nZ2xlVGFyZ2V0ID0gdHJ1ZTtcbiAgICBhd2FpdCBnZXREYXRhKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRyZWVUdC5kYXRhID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBUYXJnZXQgKE5vIEljb24gUm90YXRpb24pXG4gIGNvbnN0IHRyZWVUdE5vSXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVlLXRvZ2dsZS10YXJnZXQtbm8tcm90YXRpb24nKTtcbiAgaWYgKHRyZWVUdE5vSXIpIHtcbiAgICB0cmVlVHROb0lyLnRvZ2dsZUljb25Sb3RhdGUgPSBmYWxzZTtcbiAgICB0cmVlVHROb0lyLnVzZVRvZ2dsZVRhcmdldCA9IHRydWU7XG4gICAgYXdhaXQgZ2V0RGF0YSgoZGF0YTogYW55KSA9PiB7XG4gICAgICB0cmVlVHROb0lyLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ3VzdG9tIEljb25zXG4gIGNvbnN0IHRyZWVDaTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyZWUtY3VzdG9tLWljb25zJyk7XG4gIGlmICh0cmVlQ2kpIHtcbiAgICB0cmVlQ2kudXNlVG9nZ2xlVGFyZ2V0ID0gdHJ1ZTtcbiAgICB0cmVlQ2kuY29sbGFwc2VJY29uID0gJ3VzZXItZm9sZGVyLWNsb3NlZCc7XG4gICAgdHJlZUNpLmV4cGFuZEljb24gPSAndXNlci1mb2xkZXItb3Blbic7XG4gICAgdHJlZUNpLnRvZ2dsZUNvbGxhcHNlSWNvbiA9ICdjaGV2cm9uLXJpZ2h0JztcbiAgICB0cmVlQ2kudG9nZ2xlRXhwYW5kSWNvbiA9ICdjaGV2cm9uLWRvd24nO1xuICAgIHRyZWVDaS5pY29uID0gJ3RyZWUtZG9jJztcblxuICAgIGF3YWl0IGdldERhdGEoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdHJlZUNpLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQmFkZ2VzIGFuZCBwcmUgc2VsZWN0ZWQgbm9kZSAoc2VsZWN0ZWQgYnkgZGF0YSlcbiAgY29uc3QgdHJlZUJnOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlZS1iYWRnZXMnKTtcbiAgaWYgKHRyZWVCZykge1xuICAgIGNvbnN0IHVybCA9IHRyZWVCYWRnZXNKU09OO1xuICAgIGF3YWl0IGdldERhdGEoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdHJlZUJnLmRhdGEgPSBkYXRhO1xuICAgIH0sIHVybCk7XG4gIH1cblxuICAvLyBFeHBhbmQgb3IgQ29sbGFwc2VcbiAgY29uc3QgdHJlZUVjOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlZS1leHBhbmQtb3ItY29sbGFwc2UnKTtcbiAgY29uc3QgYnRuRXhwYW5kQ29sbGFwc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXRyZWUtZXhwYW5kY29sbGFwc2UnKTtcbiAgaWYgKHRyZWVFYykge1xuICAgIGF3YWl0IGdldERhdGEoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdHJlZUVjLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG4gIGJ0bkV4cGFuZENvbGxhcHNlPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBhY3Rpb24gPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhZGlvLXRyZWUtZXhwYW5kY29sbGFwc2UnKSBhcyBhbnkpLnZhbHVlO1xuICAgIGNvbnN0IGlkID0gJyNwdWJsaWMtZm9sZGVycyc7IC8vIHRhcmdldCBub2RlIGlkXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2V4cGFuZCcpIHRyZWVFYz8uZXhwYW5kKGlkKTtcbiAgICBpZiAoYWN0aW9uID09PSAnY29sbGFwc2UnKSB0cmVlRWM/LmNvbGxhcHNlKGlkKTtcbiAgICBpZiAoYWN0aW9uID09PSAnZXhwYW5kLWFsbCcpIHRyZWVFYz8uZXhwYW5kQWxsKCk7XG4gICAgaWYgKGFjdGlvbiA9PT0gJ2NvbGxhcHNlLWFsbCcpIHRyZWVFYz8uY29sbGFwc2VBbGwoKTtcbiAgfSk7XG5cbiAgLy8gRGlzYWJsZSAvIEVuYWJsZVxuICBjb25zdCB0cmVlRGU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVlLWRpc2FibGUtZW5hYmxlJyk7XG4gIGNvbnN0IGJ0bkRpc2FibGVFbmFibGU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tdHJlZS1kaXNhYmxlLWVuYWJsZScpO1xuICBjb25zdCBvcHREZSA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2V0RGlzYWJsZUVuYWJsZTogKCkgPT4ge1xuICAgICAgb3B0RGUuZGlzYWJsZWQgPSAhb3B0RGUuZGlzYWJsZWQ7XG4gICAgICB0cmVlRGUuZGlzYWJsZWQgPSBvcHREZS5kaXNhYmxlZDtcbiAgICAgIGJ0bkRpc2FibGVFbmFibGUudGV4dCA9IGAke29wdERlLmRpc2FibGVkID8gJ0VuYWJsZScgOiAnRGlzYWJsZSd9IFRyZWVgO1xuICAgIH1cbiAgfTtcbiAgaWYgKHRyZWVEZSkge1xuICAgIGF3YWl0IGdldERhdGEoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdHJlZURlLmRhdGEgPSBkYXRhO1xuICAgICAgb3B0RGUuc2V0RGlzYWJsZUVuYWJsZSgpO1xuICAgIH0pO1xuICB9XG4gIGJ0bkRpc2FibGVFbmFibGU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wdERlLnNldERpc2FibGVFbmFibGUoKTtcbiAgfSk7XG5cbiAgLy8gU2VsZWN0aW9uXG4gIGNvbnN0IHRyZWVTbDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyZWUtc2VsZWN0aW9uJyk7XG4gIGNvbnN0IGJ0blRvZ2dsZVNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tdHJlZS10b2dnbGUtc2VsZWN0aW9uJyk7XG4gIGlmICh0cmVlU2wpIHtcbiAgICBhd2FpdCBnZXREYXRhKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRyZWVTbC5kYXRhID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuICBidG5Ub2dnbGVTZWxlY3Rpb24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gJyNwdWJsaWMtZm9sZGVycyc7IC8vIHRhcmdldCBub2RlIGlkXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHRyZWVTbD8uaXNTZWxlY3RlZChpZCk7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIHRyZWVTbD8udW5zZWxlY3QoaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlU2w/LnNlbGVjdChpZCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBFdmVudHNcbiAgY29uc3QgdHJlZUV2OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlZS1ldmVudHMnKTtcbiAgaWYgKHRyZWVFdikge1xuICAgIGNvbnN0IHNob3cgPSAodHlwZTogYW55LCBkZXRhaWw6IGFueSkgPT4gKGNvbnNvbGUuaW5mbyh0eXBlLCBkZXRhaWwpKTtcbiAgICBhd2FpdCBnZXREYXRhKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRyZWVFdi5kYXRhID0gZGF0YTtcbiAgICB9KTtcbiAgICB0cmVlRXYudXNlVG9nZ2xlVGFyZ2V0ID0gdHJ1ZTtcbiAgICB0cmVlRXYuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3Jlc2VsZWN0ZWQnLCAoZTogYW55KSA9PiB7XG4gICAgICBzaG93KCdiZWZvcmVzZWxlY3RlZCcsIGUuZGV0YWlsKTtcbiAgICAgIC8vIGUuZGV0YWlsLnJlc3BvbnNlKGZhbHNlKTsgLy8gdmV0b1xuICAgIH0pO1xuICAgIHRyZWVFdi5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZCcsIChlOiBhbnkpID0+IHtcbiAgICAgIHNob3coJ3NlbGVjdGVkJywgZS5kZXRhaWwpO1xuICAgIH0pO1xuICAgIHRyZWVFdi5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVjb2xsYXBzZWQnLCAoZTogYW55KSA9PiB7XG4gICAgICBzaG93KCdiZWZvcmVjb2xsYXBzZWQnLCBlLmRldGFpbCk7XG4gICAgICAvLyBlLmRldGFpbC5yZXNwb25zZShmYWxzZSk7IC8vIHZldG9cbiAgICB9KTtcbiAgICB0cmVlRXYuYWRkRXZlbnRMaXN0ZW5lcignY29sbGFwc2VkJywgKGU6IGFueSkgPT4ge1xuICAgICAgc2hvdygnY29sbGFwc2VkJywgZS5kZXRhaWwpO1xuICAgIH0pO1xuICAgIHRyZWVFdi5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVleHBhbmRlZCcsIChlOiBhbnkpID0+IHtcbiAgICAgIHNob3coJ2JlZm9yZWV4cGFuZGVkJywgZS5kZXRhaWwpO1xuICAgICAgLy8gZS5kZXRhaWwucmVzcG9uc2UoZmFsc2UpOyAvLyB2ZXRvXG4gICAgfSk7XG4gICAgdHJlZUV2LmFkZEV2ZW50TGlzdGVuZXIoJ2V4cGFuZGVkJywgKGU6IGFueSkgPT4ge1xuICAgICAgc2hvdygnZXhwYW5kZWQnLCBlLmRldGFpbCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBDaGFyYWN0ZXJzIGFuZCBTeW1ib2xzXG4gIGNvbnN0IHRyZWVDczogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyZWUtY2hhcmFjdGVycy1hbmQtc3ltYm9scycpO1xuICBpZiAodHJlZUNzKSB7XG4gICAgY29uc3QgZGF0YSA9IFt7XG4gICAgICBpZDogJ2NzLTEnLFxuICAgICAgdGV4dDogJzxvbmxpbmUgb25sb2FkPVwiYWxlcnQoKVwiPidcbiAgICB9LCB7XG4gICAgICBpZDogJ2NzLTInLFxuICAgICAgdGV4dDogYDwgPiAmIFwiXG4gICAgICAgICYjMzM7ICYjMzQ7ICYjMzU7ICYjMzY7ICYjMzc7ICYjMzg7ICYjMzk7XG4gICAgICAgICYjNDA7ICYjNDE7ICYjNDI7ICYjNDM7ICYjNDQ7ICYjNDU7ICYjNDY7ICYjNDc7XG4gICAgICAgICYjMTYxOywgJiMxNjI7LCAmIzE2MzssICYjMTY0OywgJiMxNjU7LCAmIzE2NjssICYjMTY3OywgJiMxNjk7YFxuICAgIH1dO1xuXG4gICAgdHJlZUNzLmRhdGEgPSBkYXRhO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJnZXREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-tree/demos/sandbox.ts\n");

/***/ }),

/***/ "./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts":
/*!***********************************************************************!*\
  !*** ./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_color_variant_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-xss-utils/ids-xss-utils */ \"./src/utils/ids-xss-utils/ids-xss-utils.ts\");\n\n\nconst IdsColorVariantMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n    if (!this.state) {\n      this.state = {};\n    }\n    this.state.colorVariant = null;\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    if (this.colorVariant)\n      this.#refreshColorVariant(null, this.colorVariant);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT\n    ];\n  }\n  /**\n   * @returns {Array<string>} List of available color variants for this component\n   */\n  colorVariants = [];\n  /**\n   * @returns {string|null} the name of the color variant currently applied\n   */\n  get colorVariant() {\n    return this.state?.colorVariant;\n  }\n  /**\n   * @param {string | null} val the name of the color variant to be applied\n   */\n  set colorVariant(val) {\n    let safeValue = null;\n    if (typeof val === \"string\") {\n      safeValue = (0,_utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__.stripHTML)(val);\n    }\n    const currentValue = this.state.colorVariant;\n    if (safeValue && currentValue !== safeValue) {\n      if (this.colorVariants.includes(safeValue)) {\n        this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT, `${safeValue}`);\n      } else {\n        this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT);\n        safeValue = null;\n      }\n      this.state.colorVariant = safeValue;\n      this.#refreshColorVariant(currentValue, safeValue);\n    }\n  }\n  /**\n   * Refreshes the component's color variant state, driven by\n   * a CSS class on the WebComponent's `container` element\n   * @param {string} oldVariantName the variant name to \"remove\" from the style\n   * @param {string} newVariantName the variant name to \"add\" to the style\n   * @returns {void}\n   */\n  #refreshColorVariant(oldVariantName, newVariantName) {\n    if (!this.container) {\n      return;\n    }\n    const cl = this.container?.classList;\n    if (oldVariantName)\n      cl?.remove(`color-variant-${oldVariantName}`);\n    if (newVariantName)\n      cl?.add(`color-variant-${newVariantName}`);\n    if (typeof this.onColorVariantRefresh === \"function\") {\n      this.onColorVariantRefresh(newVariantName);\n    }\n  }\n};\nvar ids_color_variant_mixin_default = IdsColorVariantMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVEO0FBa0IxQixNQUFNLHVCQUF1QixDQUF3QixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUM5RixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFFYixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsV0FBSyxRQUFRLENBQUM7QUFBQSxJQUNoQjtBQUNBLFNBQUssTUFBTSxlQUFlO0FBQUEsRUFDNUI7QUFBQSxFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLEtBQUs7QUFBYyxXQUFLLHFCQUFxQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQzFFO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLDBFQUF3QjtBQUFiLElBQ2I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxnQkFBK0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2hDLElBQUksZUFBZTtBQUNqQixXQUFPLEtBQUssT0FBTztBQUFBLEVBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLGFBQWEsS0FBb0I7QUFDbkMsUUFBSSxZQUFpQjtBQUNyQixRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLGtCQUFZLDZFQUFTLENBQUMsR0FBRztBQUFBLElBQzNCO0FBRUEsVUFBTSxlQUFlLEtBQUssTUFBTTtBQUNoQyxRQUFJLGFBQWEsaUJBQWlCLFdBQVc7QUFDM0MsVUFBSSxLQUFLLGNBQWMsU0FBUyxTQUFTLEdBQUc7QUFDMUMsYUFBSyxhQUFhLDBFQUF3QixFQUFFLEdBQUcsV0FBVztBQUFBLE1BQzVELE9BQU87QUFDTCxhQUFLLGdCQUFnQiwwRUFBd0I7QUFDN0Msb0JBQVk7QUFBQSxNQUNkO0FBRUEsV0FBSyxNQUFNLGVBQWU7QUFDMUIsV0FBSyxxQkFBcUIsY0FBYyxTQUFTO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNBLHFCQUFxQixnQkFBZ0MsZ0JBQXNDO0FBQ3pGLFFBQUksQ0FBQyxLQUFLLFdBQVc7QUFDbkI7QUFBQSxJQUNGO0FBRUEsVUFBTSxLQUFLLEtBQUssV0FBVztBQUUzQixRQUFJO0FBQWdCLFVBQUksT0FBTyxpQkFBaUIsZ0JBQWdCO0FBQ2hFLFFBQUk7QUFBZ0IsVUFBSSxJQUFJLGlCQUFpQixnQkFBZ0I7QUFHN0QsUUFBSSxPQUFPLEtBQUssMEJBQTBCLFlBQVk7QUFDcEQsV0FBSyxzQkFBc0IsY0FBYztBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtY29sb3ItdmFyaWFudC1taXhpbi9pZHMtY29sb3ItdmFyaWFudC1taXhpbi50cz9hZWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHJpcEhUTUwgfSBmcm9tICcuLi8uLi91dGlscy9pZHMteHNzLXV0aWxzL2lkcy14c3MtdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yVmFyaWFudEhhbmRsZXIge1xuICAvLyBhcyBpbnN0YW5jZSBmdW5jdGlvblxuICBvbkNvbG9yVmFyaWFudFJlZnJlc2g/KHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKTogdm9pZDtcbiAgLy8gYXMgaW5zdGFuY2UgcHJvcGVydHlcbiAgb25Db2xvclZhcmlhbnRSZWZyZXNoPzogKHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB2b2lkO1xufVxuXG50eXBlIENvbnN0cmFpbnRzID0gSWRzQ29uc3RydWN0b3I8Q29sb3JWYXJpYW50SGFuZGxlcj47XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgY29udGFpbmVyIGVsZW1lbnQgb2YgYW4gSURTIENvbXBvbmVudCB3aXRoIGEgY2xhc3NcbiAqIHJlc2VydmVkIGZvciBmbGlwcGluZyB0aGUgZm9yZWdyb3VuZCBjb2xvciAodGV4dCBjb2xvciwgaWNvbiBmaWxsLCBldGMpIHRvIGFuIGFsdGVybmF0ZSxcbiAqIGNvbnRyYXN0aW5nIGNvbG9yLiAgVGhpcyBhbGxvd3MgZWFzeSBpbnRlZ3JhdGlvbiB3aXRoIGFsdGVybmF0ZSBsYXlvdXRzLCBoZWFkZXJzLCBhcHAgbWVudSwgZXRjLlxuICogQHBhcmFtIHthbnl9IHN1cGVyY2xhc3MgQWNjZXB0cyBhIHN1cGVyY2xhc3MgYW5kIGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3MgZnJvbSBpdFxuICogQHJldHVybnMge2FueX0gVGhlIGV4dGVuZGVkIG9iamVjdFxuICovXG5jb25zdCBJZHNDb2xvclZhcmlhbnRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RyYWludHM+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQgPSBudWxsO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5jb2xvclZhcmlhbnQpIHRoaXMuI3JlZnJlc2hDb2xvclZhcmlhbnQobnVsbCwgdGhpcy5jb2xvclZhcmlhbnQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi4oc3VwZXJjbGFzcyBhcyBhbnkpLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlRcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fSBMaXN0IG9mIGF2YWlsYWJsZSBjb2xvciB2YXJpYW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICovXG4gIGNvbG9yVmFyaWFudHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSB0aGUgbmFtZSBvZiB0aGUgY29sb3IgdmFyaWFudCBjdXJyZW50bHkgYXBwbGllZFxuICAgKi9cbiAgZ2V0IGNvbG9yVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZT8uY29sb3JWYXJpYW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gdmFsIHRoZSBuYW1lIG9mIHRoZSBjb2xvciB2YXJpYW50IHRvIGJlIGFwcGxpZWRcbiAgICovXG4gIHNldCBjb2xvclZhcmlhbnQodmFsOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbGV0IHNhZmVWYWx1ZTogYW55ID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNhZmVWYWx1ZSA9IHN0cmlwSFRNTCh2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGUuY29sb3JWYXJpYW50O1xuICAgIGlmIChzYWZlVmFsdWUgJiYgY3VycmVudFZhbHVlICE9PSBzYWZlVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yVmFyaWFudHMuaW5jbHVkZXMoc2FmZVZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlQsIGAke3NhZmVWYWx1ZX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVCk7XG4gICAgICAgIHNhZmVWYWx1ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuY29sb3JWYXJpYW50ID0gc2FmZVZhbHVlO1xuICAgICAgdGhpcy4jcmVmcmVzaENvbG9yVmFyaWFudChjdXJyZW50VmFsdWUsIHNhZmVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgY29tcG9uZW50J3MgY29sb3IgdmFyaWFudCBzdGF0ZSwgZHJpdmVuIGJ5XG4gICAqIGEgQ1NTIGNsYXNzIG9uIHRoZSBXZWJDb21wb25lbnQncyBgY29udGFpbmVyYCBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRWYXJpYW50TmFtZSB0aGUgdmFyaWFudCBuYW1lIHRvIFwicmVtb3ZlXCIgZnJvbSB0aGUgc3R5bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1ZhcmlhbnROYW1lIHRoZSB2YXJpYW50IG5hbWUgdG8gXCJhZGRcIiB0byB0aGUgc3R5bGVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICAjcmVmcmVzaENvbG9yVmFyaWFudChvbGRWYXJpYW50TmFtZT86IHN0cmluZyB8IG51bGwsIG5ld1ZhcmlhbnROYW1lPzogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbCA9IHRoaXMuY29udGFpbmVyPy5jbGFzc0xpc3Q7XG5cbiAgICBpZiAob2xkVmFyaWFudE5hbWUpIGNsPy5yZW1vdmUoYGNvbG9yLXZhcmlhbnQtJHtvbGRWYXJpYW50TmFtZX1gKTtcbiAgICBpZiAobmV3VmFyaWFudE5hbWUpIGNsPy5hZGQoYGNvbG9yLXZhcmlhbnQtJHtuZXdWYXJpYW50TmFtZX1gKTtcblxuICAgIC8vIEZpcmUgb3B0aW9uYWwgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIHRoaXMub25Db2xvclZhcmlhbnRSZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQ29sb3JWYXJpYW50UmVmcmVzaChuZXdWYXJpYW50TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNDb2xvclZhcmlhbnRNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts\n");

/***/ }),

/***/ "./src/assets/data/tree-badges.json":
/*!******************************************!*\
  !*** ./src/assets/data/tree-badges.json ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/tree-badges.json";

/***/ }),

/***/ "./src/assets/data/tree-basic.json":
/*!*****************************************!*\
  !*** ./src/assets/data/tree-basic.json ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/tree-basic.json";

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
/******/ 			"ids-tree-sandbox": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-radio_ids-radio-group_scss-src_components_ids-radio_ids-radio_scss","src_components_ids-radio_ids-radio_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-radio_ids-radio-group_scss-src_components_ids-radio_ids-radio_scss","src_components_ids-radio_ids-radio_ts"], () => (__webpack_require__("./src/components/ids-tree/demos/sandbox.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;