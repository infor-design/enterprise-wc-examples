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

/***/ "./src/components/ids-splitter/demos/sandbox.ts":
/*!******************************************************!*\
  !*** ./src/components/ids-splitter/demos/sandbox.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_radio_ids_radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ids-radio/ids-radio */ \"./src/components/ids-radio/ids-radio.ts\");\n/* harmony import */ var _assets_css_ids_splitter_sandbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/css/ids-splitter/sandbox.css */ \"./src/assets/css/ids-splitter/sandbox.css\");\n\n\nconst cssLink = `<link href=\"${_assets_css_ids_splitter_sandbox_css__WEBPACK_IMPORTED_MODULE_1__}\" rel=\"stylesheet\">`;\ndocument.querySelector(\"head\").insertAdjacentHTML(\"afterbegin\", cssLink);\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n  const splitterDe = document.querySelector(\"#splitter-disable-enable\");\n  const btnDisableEnable = document.querySelector(\"#btn-splitter-disable-enable\");\n  let isDisabled = false;\n  const toggleDisableEnable = () => {\n    isDisabled = !isDisabled;\n    splitterDe.disabled = isDisabled;\n    btnDisableEnable.text = `${isDisabled ? \"Enable\" : \"Disable\"} Splitter`;\n  };\n  toggleDisableEnable();\n  btnDisableEnable?.addEventListener(\"click\", () => {\n    toggleDisableEnable();\n  });\n  const btnCollapseExpand = document.querySelector(\"#btn-splitter-collapse-expand\");\n  const splitterEvt = document.querySelector(\"#splitter-events\");\n  const radioBeforeCollapsed = document.querySelector(\"#radio-splitter-evt-beforecollapsed\");\n  const radioBeforeExpanded = document.querySelector(\"#radio-splitter-evt-beforeexpanded\");\n  const radioBeforeSizeChanged = document.querySelector(\"#radio-splitter-evt-beforesizechanged\");\n  if (splitterEvt && btnCollapseExpand) {\n    const show = (type, detail, veto) => {\n      const showVeto = typeof veto !== \"undefined\" ? `veto: ${veto}` : \"\";\n      console.info(type, detail, showVeto);\n    };\n    splitterEvt.addEventListener(\"beforecollapsed\", (e) => {\n      const veto = radioBeforeCollapsed.value;\n      show(\"beforecollapsed\", e.detail, veto);\n      e.detail.response(veto);\n    });\n    splitterEvt.addEventListener(\"collapsed\", (e) => {\n      show(\"collapsed\", e.detail);\n    });\n    splitterEvt.addEventListener(\"beforeexpanded\", (e) => {\n      const veto = radioBeforeExpanded.value;\n      show(\"beforeexpanded\", e.detail, veto);\n      e.detail.response(veto);\n    });\n    splitterEvt.addEventListener(\"expanded\", (e) => {\n      show(\"expanded\", e.detail);\n    });\n    splitterEvt.addEventListener(\"beforesizechanged\", (e) => {\n      const veto = radioBeforeSizeChanged.value;\n      show(\"beforesizechanged\", e.detail, veto);\n      e.detail.response(veto);\n    });\n    splitterEvt.addEventListener(\"sizechanged\", (e) => {\n      show(\"sizechanged\", e.detail);\n    });\n    let isCollapsed = false;\n    const toggleCollapseExpand = () => {\n      const veto = {\n        collapsed: radioBeforeCollapsed.value,\n        expanded: radioBeforeExpanded.value,\n        sizeChanged: radioBeforeSizeChanged.value,\n        toggled: false\n      };\n      const options = { startPane: \".splitter-evt-p1\", endPane: \".splitter-evt-p2\" };\n      if (isCollapsed) {\n        splitterEvt.expand(options);\n        veto.toggled = veto.expanded;\n      } else {\n        splitterEvt.collapse(options);\n        veto.toggled = veto.collapsed;\n      }\n      if (veto.toggled === \"true\" && veto.sizeChanged === \"true\") {\n        isCollapsed = !isCollapsed;\n      }\n      btnCollapseExpand.text = `${isCollapsed ? \"Expand\" : \"Collapse\"}`;\n    };\n    btnCollapseExpand.addEventListener(\"click\", () => {\n      toggleCollapseExpand();\n    });\n  }\n  const uniqueId1 = \"some-uniqueid-1\";\n  const uniqueId2 = \"some-uniqueid-2\";\n  const splitterSave1 = document.querySelector(\"#splitter-save1\");\n  const splitterSave2 = document.querySelector(\"#splitter-save2\");\n  const btnSaveClear = document.querySelector(\"#btn-splitter-save-clear\");\n  btnSaveClear.menuEl.addEventListener(\"selected\", (e) => {\n    const sel = e.detail.value;\n    if (sel === \"clear-saved-splitter-1\") {\n      splitterSave1.clearPosition(uniqueId1);\n    }\n    if (sel === \"clear-saved-splitter-2\") {\n      splitterSave2.clearPosition(uniqueId2);\n    }\n    if (sel === \"clear-saved-splitter-all\") {\n      const splitter = document.createElement(\"ids-splitter\");\n      splitter.clearPositionAll();\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtc3BsaXR0ZXIvZGVtb3Mvc2FuZGJveC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDTztBQUVTO0FBRWhCLE1BQU0sVUFBVSxlQUFlLGlFQUFHO0FBQ2pDLFNBQVMsY0FBYyxNQUFNLEVBQVUsbUJBQW1CLGNBQWMsT0FBTztBQUVoRixTQUFTLGlCQUFpQixvQkFBb0IsWUFBWTtBQUV4RCxRQUFNLGFBQWtCLFNBQVMsY0FBYywwQkFBMEI7QUFDekUsUUFBTSxtQkFBd0IsU0FBUyxjQUFjLDhCQUE4QjtBQUNuRixNQUFJLGFBQWE7QUFDakIsUUFBTSxzQkFBc0IsTUFBTTtBQUNoQyxpQkFBYSxDQUFDO0FBQ2QsZUFBVyxXQUFXO0FBQ3RCLHFCQUFpQixPQUFPLEdBQUcsYUFBYSxXQUFXO0FBQUEsRUFDckQ7QUFDQSxzQkFBb0I7QUFDcEIsb0JBQWtCLGlCQUFpQixTQUFTLE1BQU07QUFDaEQsd0JBQW9CO0FBQUEsRUFDdEIsQ0FBQztBQUdELFFBQU0sb0JBQXlCLFNBQVMsY0FBYywrQkFBK0I7QUFDckYsUUFBTSxjQUFtQixTQUFTLGNBQWMsa0JBQWtCO0FBQ2xFLFFBQU0sdUJBQTRCLFNBQVMsY0FBYyxxQ0FBcUM7QUFDOUYsUUFBTSxzQkFBMkIsU0FBUyxjQUFjLG9DQUFvQztBQUM1RixRQUFNLHlCQUE4QixTQUFTLGNBQWMsdUNBQXVDO0FBRWxHLE1BQUksZUFBZSxtQkFBbUI7QUFDcEMsVUFBTSxPQUFPLENBQUMsTUFBYyxRQUFnQixTQUFtQjtBQUM3RCxZQUFNLFdBQVcsT0FBTyxTQUFTLGNBQWMsU0FBUyxTQUFTO0FBQ2pFLGNBQVEsS0FBSyxNQUFNLFFBQVEsUUFBUTtBQUFBLElBQ3JDO0FBR0EsZ0JBQVksaUJBQWlCLG1CQUFtQixDQUFDLE1BQW1CO0FBQ2xFLFlBQU0sT0FBTyxxQkFBcUI7QUFDbEMsV0FBSyxtQkFBbUIsRUFBRSxRQUFRLElBQUk7QUFDdEMsUUFBRSxPQUFPLFNBQVMsSUFBSTtBQUFBLElBQ3hCLENBQUM7QUFHRCxnQkFBWSxpQkFBaUIsYUFBYSxDQUFDLE1BQW1CO0FBQzVELFdBQUssYUFBYSxFQUFFLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBR0QsZ0JBQVksaUJBQWlCLGtCQUFrQixDQUFDLE1BQW1CO0FBQ2pFLFlBQU0sT0FBTyxvQkFBb0I7QUFDakMsV0FBSyxrQkFBa0IsRUFBRSxRQUFRLElBQUk7QUFDckMsUUFBRSxPQUFPLFNBQVMsSUFBSTtBQUFBLElBQ3hCLENBQUM7QUFHRCxnQkFBWSxpQkFBaUIsWUFBWSxDQUFDLE1BQW1CO0FBQzNELFdBQUssWUFBWSxFQUFFLE1BQU07QUFBQSxJQUMzQixDQUFDO0FBR0QsZ0JBQVksaUJBQWlCLHFCQUFxQixDQUFDLE1BQW1CO0FBQ3BFLFlBQU0sT0FBTyx1QkFBdUI7QUFDcEMsV0FBSyxxQkFBcUIsRUFBRSxRQUFRLElBQUk7QUFDeEMsUUFBRSxPQUFPLFNBQVMsSUFBSTtBQUFBLElBQ3hCLENBQUM7QUFHRCxnQkFBWSxpQkFBaUIsZUFBZSxDQUFDLE1BQW1CO0FBQzlELFdBQUssZUFBZSxFQUFFLE1BQU07QUFBQSxJQUM5QixDQUFDO0FBR0QsUUFBSSxjQUFjO0FBQ2xCLFVBQU0sdUJBQXVCLE1BQU07QUFDakMsWUFBTSxPQUFZO0FBQUEsUUFDaEIsV0FBVyxxQkFBcUI7QUFBQSxRQUNoQyxVQUFVLG9CQUFvQjtBQUFBLFFBQzlCLGFBQWEsdUJBQXVCO0FBQUEsUUFDcEMsU0FBUztBQUFBLE1BQ1g7QUFDQSxZQUFNLFVBQVUsRUFBRSxXQUFXLG9CQUFvQixTQUFTLG1CQUFtQjtBQUM3RSxVQUFJLGFBQWE7QUFDZixvQkFBWSxPQUFPLE9BQU87QUFDMUIsYUFBSyxVQUFVLEtBQUs7QUFBQSxNQUN0QixPQUFPO0FBQ0wsb0JBQVksU0FBUyxPQUFPO0FBQzVCLGFBQUssVUFBVSxLQUFLO0FBQUEsTUFDdEI7QUFFQSxVQUFJLEtBQUssWUFBWSxVQUFVLEtBQUssZ0JBQWdCLFFBQVE7QUFDMUQsc0JBQWMsQ0FBQztBQUFBLE1BQ2pCO0FBQ0Esd0JBQWtCLE9BQU8sR0FBRyxjQUFjLFdBQVc7QUFBQSxJQUN2RDtBQUNBLHNCQUFrQixpQkFBaUIsU0FBUyxNQUFNO0FBQ2hELDJCQUFxQjtBQUFBLElBQ3ZCLENBQUM7QUFBQSxFQUNIO0FBU0EsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sWUFBWTtBQUVsQixRQUFNLGdCQUFxQixTQUFTLGNBQWMsaUJBQWlCO0FBQ25FLFFBQU0sZ0JBQXFCLFNBQVMsY0FBYyxpQkFBaUI7QUFDbkUsUUFBTSxlQUFvQixTQUFTLGNBQWMsMEJBQTBCO0FBQzNFLGVBQWEsT0FBTyxpQkFBaUIsWUFBWSxDQUFDLE1BQVc7QUFDM0QsVUFBTSxNQUFNLEVBQUUsT0FBTztBQUdyQixRQUFJLFFBQVEsMEJBQTBCO0FBQ3BDLG9CQUFjLGNBQWMsU0FBUztBQUFBLElBQ3ZDO0FBR0EsUUFBSSxRQUFRLDBCQUEwQjtBQUNwQyxvQkFBYyxjQUFjLFNBQVM7QUFBQSxJQUN2QztBQUdBLFFBQUksUUFBUSw0QkFBNEI7QUFDdEMsWUFBTSxXQUFnQixTQUFTLGNBQWMsY0FBYztBQUszRCxlQUFTLGlCQUFpQjtBQUFBLElBQzVCO0FBQUEsRUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLXNwbGl0dGVyL2RlbW9zL3NhbmRib3gudHM/ZDM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJZHNTcGxpdHRlciBTYW5kYm94XG5pbXBvcnQgJy4uLy4uL2lkcy1yYWRpby9pZHMtcmFkaW8nO1xuXG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9jc3MvaWRzLXNwbGl0dGVyL3NhbmRib3guY3NzJztcblxuY29uc3QgY3NzTGluayA9IGA8bGluayBocmVmPVwiJHtjc3N9XCIgcmVsPVwic3R5bGVzaGVldFwiPmA7XG4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpIGFzIGFueSkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgY3NzTGluayk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIC8vIERpc2FibGUgLyBFbmFibGVcbiAgY29uc3Qgc3BsaXR0ZXJEZTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwbGl0dGVyLWRpc2FibGUtZW5hYmxlJyk7XG4gIGNvbnN0IGJ0bkRpc2FibGVFbmFibGU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tc3BsaXR0ZXItZGlzYWJsZS1lbmFibGUnKTtcbiAgbGV0IGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgY29uc3QgdG9nZ2xlRGlzYWJsZUVuYWJsZSA9ICgpID0+IHtcbiAgICBpc0Rpc2FibGVkID0gIWlzRGlzYWJsZWQ7XG4gICAgc3BsaXR0ZXJEZS5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgYnRuRGlzYWJsZUVuYWJsZS50ZXh0ID0gYCR7aXNEaXNhYmxlZCA/ICdFbmFibGUnIDogJ0Rpc2FibGUnfSBTcGxpdHRlcmA7XG4gIH07XG4gIHRvZ2dsZURpc2FibGVFbmFibGUoKTtcbiAgYnRuRGlzYWJsZUVuYWJsZT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlRGlzYWJsZUVuYWJsZSgpO1xuICB9KTtcblxuICAvLyBFdmVudHNcbiAgY29uc3QgYnRuQ29sbGFwc2VFeHBhbmQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tc3BsaXR0ZXItY29sbGFwc2UtZXhwYW5kJyk7XG4gIGNvbnN0IHNwbGl0dGVyRXZ0OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BsaXR0ZXItZXZlbnRzJyk7XG4gIGNvbnN0IHJhZGlvQmVmb3JlQ29sbGFwc2VkOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFkaW8tc3BsaXR0ZXItZXZ0LWJlZm9yZWNvbGxhcHNlZCcpO1xuICBjb25zdCByYWRpb0JlZm9yZUV4cGFuZGVkOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFkaW8tc3BsaXR0ZXItZXZ0LWJlZm9yZWV4cGFuZGVkJyk7XG4gIGNvbnN0IHJhZGlvQmVmb3JlU2l6ZUNoYW5nZWQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYWRpby1zcGxpdHRlci1ldnQtYmVmb3Jlc2l6ZWNoYW5nZWQnKTtcblxuICBpZiAoc3BsaXR0ZXJFdnQgJiYgYnRuQ29sbGFwc2VFeHBhbmQpIHtcbiAgICBjb25zdCBzaG93ID0gKHR5cGU6IHN0cmluZywgZGV0YWlsOiBzdHJpbmcsIHZldG8/OiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCBzaG93VmV0byA9IHR5cGVvZiB2ZXRvICE9PSAndW5kZWZpbmVkJyA/IGB2ZXRvOiAke3ZldG99YCA6ICcnO1xuICAgICAgY29uc29sZS5pbmZvKHR5cGUsIGRldGFpbCwgc2hvd1ZldG8pO1xuICAgIH07XG5cbiAgICAvLyBldmVudDogYmVmb3JlIGNvbGxhcHNlZFxuICAgIHNwbGl0dGVyRXZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWNvbGxhcHNlZCcsIChlOiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgY29uc3QgdmV0byA9IHJhZGlvQmVmb3JlQ29sbGFwc2VkLnZhbHVlO1xuICAgICAgc2hvdygnYmVmb3JlY29sbGFwc2VkJywgZS5kZXRhaWwsIHZldG8pO1xuICAgICAgZS5kZXRhaWwucmVzcG9uc2UodmV0byk7XG4gICAgfSk7XG5cbiAgICAvLyBldmVudDogY29sbGFwc2VkXG4gICAgc3BsaXR0ZXJFdnQuYWRkRXZlbnRMaXN0ZW5lcignY29sbGFwc2VkJywgKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBzaG93KCdjb2xsYXBzZWQnLCBlLmRldGFpbCk7XG4gICAgfSk7XG5cbiAgICAvLyBldmVudDogYmVmb3JlIGV4cGFuZGVkXG4gICAgc3BsaXR0ZXJFdnQuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlZXhwYW5kZWQnLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHZldG8gPSByYWRpb0JlZm9yZUV4cGFuZGVkLnZhbHVlO1xuICAgICAgc2hvdygnYmVmb3JlZXhwYW5kZWQnLCBlLmRldGFpbCwgdmV0byk7XG4gICAgICBlLmRldGFpbC5yZXNwb25zZSh2ZXRvKTtcbiAgICB9KTtcblxuICAgIC8vIGV2ZW50OiBleHBhbmRlZFxuICAgIHNwbGl0dGVyRXZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2V4cGFuZGVkJywgKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBzaG93KCdleHBhbmRlZCcsIGUuZGV0YWlsKTtcbiAgICB9KTtcblxuICAgIC8vIGV2ZW50OiBiZWZvcmUgc2l6ZSBjaGFuZ2VkXG4gICAgc3BsaXR0ZXJFdnQuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3Jlc2l6ZWNoYW5nZWQnLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHZldG8gPSByYWRpb0JlZm9yZVNpemVDaGFuZ2VkLnZhbHVlO1xuICAgICAgc2hvdygnYmVmb3Jlc2l6ZWNoYW5nZWQnLCBlLmRldGFpbCwgdmV0byk7XG4gICAgICBlLmRldGFpbC5yZXNwb25zZSh2ZXRvKTtcbiAgICB9KTtcblxuICAgIC8vIGV2ZW50OiBzaXplIGNoYW5nZWRcbiAgICBzcGxpdHRlckV2dC5hZGRFdmVudExpc3RlbmVyKCdzaXplY2hhbmdlZCcsIChlOiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgc2hvdygnc2l6ZWNoYW5nZWQnLCBlLmRldGFpbCk7XG4gICAgfSk7XG5cbiAgICAvLyBUb2dnbGUgY29sbGFwc2UgZXhwYW5kXG4gICAgbGV0IGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgY29uc3QgdG9nZ2xlQ29sbGFwc2VFeHBhbmQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXRvOiBhbnkgPSB7XG4gICAgICAgIGNvbGxhcHNlZDogcmFkaW9CZWZvcmVDb2xsYXBzZWQudmFsdWUsXG4gICAgICAgIGV4cGFuZGVkOiByYWRpb0JlZm9yZUV4cGFuZGVkLnZhbHVlLFxuICAgICAgICBzaXplQ2hhbmdlZDogcmFkaW9CZWZvcmVTaXplQ2hhbmdlZC52YWx1ZSxcbiAgICAgICAgdG9nZ2xlZDogZmFsc2VcbiAgICAgIH07XG4gICAgICBjb25zdCBvcHRpb25zID0geyBzdGFydFBhbmU6ICcuc3BsaXR0ZXItZXZ0LXAxJywgZW5kUGFuZTogJy5zcGxpdHRlci1ldnQtcDInIH07XG4gICAgICBpZiAoaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgc3BsaXR0ZXJFdnQuZXhwYW5kKG9wdGlvbnMpO1xuICAgICAgICB2ZXRvLnRvZ2dsZWQgPSB2ZXRvLmV4cGFuZGVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BsaXR0ZXJFdnQuY29sbGFwc2Uob3B0aW9ucyk7XG4gICAgICAgIHZldG8udG9nZ2xlZCA9IHZldG8uY29sbGFwc2VkO1xuICAgICAgfVxuXG4gICAgICBpZiAodmV0by50b2dnbGVkID09PSAndHJ1ZScgJiYgdmV0by5zaXplQ2hhbmdlZCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGlzQ29sbGFwc2VkID0gIWlzQ29sbGFwc2VkO1xuICAgICAgfVxuICAgICAgYnRuQ29sbGFwc2VFeHBhbmQudGV4dCA9IGAke2lzQ29sbGFwc2VkID8gJ0V4cGFuZCcgOiAnQ29sbGFwc2UnfWA7XG4gICAgfTtcbiAgICBidG5Db2xsYXBzZUV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRvZ2dsZUNvbGxhcHNlRXhwYW5kKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKlxuICAgKiBTYXZlIHBvc2l0aW9uXG4gICAqIGFwcGx5IG9ubHkgd2hlbiBgc2F2ZS1wb3NpdGlvbmAgc2V0IHRvIHRydWVcbiAgICpcbiAgICogdW5pcXVlSWQ6IFVzZSB0byBjbGVhciB0aGUgc2F2ZWQgcG9zaXRpb24gZnJvbSBzdG9yYWdlXG4gICAqIGlmIG5vdCB3aWxsIHVzZSBpbnRlcm5hbCBhdXRvIGdlbmVyYXRlZCBpZFxuICAgKi9cbiAgY29uc3QgdW5pcXVlSWQxID0gJ3NvbWUtdW5pcXVlaWQtMSc7XG4gIGNvbnN0IHVuaXF1ZUlkMiA9ICdzb21lLXVuaXF1ZWlkLTInO1xuXG4gIGNvbnN0IHNwbGl0dGVyU2F2ZTE6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGxpdHRlci1zYXZlMScpO1xuICBjb25zdCBzcGxpdHRlclNhdmUyOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BsaXR0ZXItc2F2ZTInKTtcbiAgY29uc3QgYnRuU2F2ZUNsZWFyOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXNwbGl0dGVyLXNhdmUtY2xlYXInKTtcbiAgYnRuU2F2ZUNsZWFyLm1lbnVFbC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZCcsIChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBzZWwgPSBlLmRldGFpbC52YWx1ZTtcblxuICAgIC8vIENsZWFyIHBvc2l0aW9uIGZvciBzYXZlZCBTcGxpdHRlcigxKVxuICAgIGlmIChzZWwgPT09ICdjbGVhci1zYXZlZC1zcGxpdHRlci0xJykge1xuICAgICAgc3BsaXR0ZXJTYXZlMS5jbGVhclBvc2l0aW9uKHVuaXF1ZUlkMSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgcG9zaXRpb24gZm9yIHNhdmVkIFNwbGl0dGVyKDIpXG4gICAgaWYgKHNlbCA9PT0gJ2NsZWFyLXNhdmVkLXNwbGl0dGVyLTInKSB7XG4gICAgICBzcGxpdHRlclNhdmUyLmNsZWFyUG9zaXRpb24odW5pcXVlSWQyKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciBwb3NpdGlvbiBmb3IgYWxsIHNhdmVkIFNwbGl0dGVyc1xuICAgIGlmIChzZWwgPT09ICdjbGVhci1zYXZlZC1zcGxpdHRlci1hbGwnKSB7XG4gICAgICBjb25zdCBzcGxpdHRlcjogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWRzLXNwbGl0dGVyJyk7XG4gICAgICAvKipcbiAgICAgICAqIFRvIGNsZWFyIGFsbCBzYXZlZCBwb3NpdGlvbnMsXG4gICAgICAgKiBJdCBjYW4gcnVuIG9uIGFueSBJZHNTcGxpdHRlciBgY2xlYXJQb3NpdGlvbkFsbCgpYFxuICAgICAgICovXG4gICAgICBzcGxpdHRlci5jbGVhclBvc2l0aW9uQWxsKCk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-splitter/demos/sandbox.ts\n");

/***/ }),

/***/ "./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts":
/*!***********************************************************************!*\
  !*** ./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_color_variant_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-xss-utils/ids-xss-utils */ \"./src/utils/ids-xss-utils/ids-xss-utils.ts\");\n\n\nconst IdsColorVariantMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n    if (!this.state) {\n      this.state = {};\n    }\n    this.state.colorVariant = null;\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    if (this.colorVariant)\n      this.#refreshColorVariant(null, this.colorVariant);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT\n    ];\n  }\n  /**\n   * @returns {Array<string>} List of available color variants for this component\n   */\n  colorVariants = [];\n  /**\n   * @returns {string|null} the name of the color variant currently applied\n   */\n  get colorVariant() {\n    return this.state?.colorVariant;\n  }\n  /**\n   * @param {string | null} val the name of the color variant to be applied\n   */\n  set colorVariant(val) {\n    let safeValue = null;\n    if (typeof val === \"string\") {\n      safeValue = (0,_utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__.stripHTML)(val);\n    }\n    const currentValue = this.state.colorVariant;\n    if (safeValue && currentValue !== safeValue) {\n      if (this.colorVariants.includes(safeValue)) {\n        this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT, `${safeValue}`);\n      } else {\n        this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT);\n        safeValue = null;\n      }\n      this.state.colorVariant = safeValue;\n      this.#refreshColorVariant(currentValue, safeValue);\n    }\n  }\n  /**\n   * Refreshes the component's color variant state, driven by\n   * a CSS class on the WebComponent's `container` element\n   * @param {string} oldVariantName the variant name to \"remove\" from the style\n   * @param {string} newVariantName the variant name to \"add\" to the style\n   * @returns {void}\n   */\n  #refreshColorVariant(oldVariantName, newVariantName) {\n    if (!this.container) {\n      return;\n    }\n    const cl = this.container?.classList;\n    if (oldVariantName)\n      cl?.remove(`color-variant-${oldVariantName}`);\n    if (newVariantName)\n      cl?.add(`color-variant-${newVariantName}`);\n    if (typeof this.onColorVariantRefresh === \"function\") {\n      this.onColorVariantRefresh(newVariantName);\n    }\n  }\n};\nvar ids_color_variant_mixin_default = IdsColorVariantMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVEO0FBa0IxQixNQUFNLHVCQUF1QixDQUF3QixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUM5RixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFFYixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsV0FBSyxRQUFRLENBQUM7QUFBQSxJQUNoQjtBQUNBLFNBQUssTUFBTSxlQUFlO0FBQUEsRUFDNUI7QUFBQSxFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLEtBQUs7QUFBYyxXQUFLLHFCQUFxQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQzFFO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLDBFQUF3QjtBQUFiLElBQ2I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxnQkFBK0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2hDLElBQUksZUFBZTtBQUNqQixXQUFPLEtBQUssT0FBTztBQUFBLEVBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLGFBQWEsS0FBb0I7QUFDbkMsUUFBSSxZQUFpQjtBQUNyQixRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLGtCQUFZLDZFQUFTLENBQUMsR0FBRztBQUFBLElBQzNCO0FBRUEsVUFBTSxlQUFlLEtBQUssTUFBTTtBQUNoQyxRQUFJLGFBQWEsaUJBQWlCLFdBQVc7QUFDM0MsVUFBSSxLQUFLLGNBQWMsU0FBUyxTQUFTLEdBQUc7QUFDMUMsYUFBSyxhQUFhLDBFQUF3QixFQUFFLEdBQUcsV0FBVztBQUFBLE1BQzVELE9BQU87QUFDTCxhQUFLLGdCQUFnQiwwRUFBd0I7QUFDN0Msb0JBQVk7QUFBQSxNQUNkO0FBRUEsV0FBSyxNQUFNLGVBQWU7QUFDMUIsV0FBSyxxQkFBcUIsY0FBYyxTQUFTO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNBLHFCQUFxQixnQkFBZ0MsZ0JBQXNDO0FBQ3pGLFFBQUksQ0FBQyxLQUFLLFdBQVc7QUFDbkI7QUFBQSxJQUNGO0FBRUEsVUFBTSxLQUFLLEtBQUssV0FBVztBQUUzQixRQUFJO0FBQWdCLFVBQUksT0FBTyxpQkFBaUIsZ0JBQWdCO0FBQ2hFLFFBQUk7QUFBZ0IsVUFBSSxJQUFJLGlCQUFpQixnQkFBZ0I7QUFHN0QsUUFBSSxPQUFPLEtBQUssMEJBQTBCLFlBQVk7QUFDcEQsV0FBSyxzQkFBc0IsY0FBYztBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtY29sb3ItdmFyaWFudC1taXhpbi9pZHMtY29sb3ItdmFyaWFudC1taXhpbi50cz9hZWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHJpcEhUTUwgfSBmcm9tICcuLi8uLi91dGlscy9pZHMteHNzLXV0aWxzL2lkcy14c3MtdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yVmFyaWFudEhhbmRsZXIge1xuICAvLyBhcyBpbnN0YW5jZSBmdW5jdGlvblxuICBvbkNvbG9yVmFyaWFudFJlZnJlc2g/KHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKTogdm9pZDtcbiAgLy8gYXMgaW5zdGFuY2UgcHJvcGVydHlcbiAgb25Db2xvclZhcmlhbnRSZWZyZXNoPzogKHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB2b2lkO1xufVxuXG50eXBlIENvbnN0cmFpbnRzID0gSWRzQ29uc3RydWN0b3I8Q29sb3JWYXJpYW50SGFuZGxlcj47XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgY29udGFpbmVyIGVsZW1lbnQgb2YgYW4gSURTIENvbXBvbmVudCB3aXRoIGEgY2xhc3NcbiAqIHJlc2VydmVkIGZvciBmbGlwcGluZyB0aGUgZm9yZWdyb3VuZCBjb2xvciAodGV4dCBjb2xvciwgaWNvbiBmaWxsLCBldGMpIHRvIGFuIGFsdGVybmF0ZSxcbiAqIGNvbnRyYXN0aW5nIGNvbG9yLiAgVGhpcyBhbGxvd3MgZWFzeSBpbnRlZ3JhdGlvbiB3aXRoIGFsdGVybmF0ZSBsYXlvdXRzLCBoZWFkZXJzLCBhcHAgbWVudSwgZXRjLlxuICogQHBhcmFtIHthbnl9IHN1cGVyY2xhc3MgQWNjZXB0cyBhIHN1cGVyY2xhc3MgYW5kIGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3MgZnJvbSBpdFxuICogQHJldHVybnMge2FueX0gVGhlIGV4dGVuZGVkIG9iamVjdFxuICovXG5jb25zdCBJZHNDb2xvclZhcmlhbnRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RyYWludHM+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQgPSBudWxsO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5jb2xvclZhcmlhbnQpIHRoaXMuI3JlZnJlc2hDb2xvclZhcmlhbnQobnVsbCwgdGhpcy5jb2xvclZhcmlhbnQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi4oc3VwZXJjbGFzcyBhcyBhbnkpLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlRcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fSBMaXN0IG9mIGF2YWlsYWJsZSBjb2xvciB2YXJpYW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICovXG4gIGNvbG9yVmFyaWFudHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSB0aGUgbmFtZSBvZiB0aGUgY29sb3IgdmFyaWFudCBjdXJyZW50bHkgYXBwbGllZFxuICAgKi9cbiAgZ2V0IGNvbG9yVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZT8uY29sb3JWYXJpYW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gdmFsIHRoZSBuYW1lIG9mIHRoZSBjb2xvciB2YXJpYW50IHRvIGJlIGFwcGxpZWRcbiAgICovXG4gIHNldCBjb2xvclZhcmlhbnQodmFsOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbGV0IHNhZmVWYWx1ZTogYW55ID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNhZmVWYWx1ZSA9IHN0cmlwSFRNTCh2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGUuY29sb3JWYXJpYW50O1xuICAgIGlmIChzYWZlVmFsdWUgJiYgY3VycmVudFZhbHVlICE9PSBzYWZlVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yVmFyaWFudHMuaW5jbHVkZXMoc2FmZVZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlQsIGAke3NhZmVWYWx1ZX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVCk7XG4gICAgICAgIHNhZmVWYWx1ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuY29sb3JWYXJpYW50ID0gc2FmZVZhbHVlO1xuICAgICAgdGhpcy4jcmVmcmVzaENvbG9yVmFyaWFudChjdXJyZW50VmFsdWUsIHNhZmVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgY29tcG9uZW50J3MgY29sb3IgdmFyaWFudCBzdGF0ZSwgZHJpdmVuIGJ5XG4gICAqIGEgQ1NTIGNsYXNzIG9uIHRoZSBXZWJDb21wb25lbnQncyBgY29udGFpbmVyYCBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRWYXJpYW50TmFtZSB0aGUgdmFyaWFudCBuYW1lIHRvIFwicmVtb3ZlXCIgZnJvbSB0aGUgc3R5bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1ZhcmlhbnROYW1lIHRoZSB2YXJpYW50IG5hbWUgdG8gXCJhZGRcIiB0byB0aGUgc3R5bGVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICAjcmVmcmVzaENvbG9yVmFyaWFudChvbGRWYXJpYW50TmFtZT86IHN0cmluZyB8IG51bGwsIG5ld1ZhcmlhbnROYW1lPzogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbCA9IHRoaXMuY29udGFpbmVyPy5jbGFzc0xpc3Q7XG5cbiAgICBpZiAob2xkVmFyaWFudE5hbWUpIGNsPy5yZW1vdmUoYGNvbG9yLXZhcmlhbnQtJHtvbGRWYXJpYW50TmFtZX1gKTtcbiAgICBpZiAobmV3VmFyaWFudE5hbWUpIGNsPy5hZGQoYGNvbG9yLXZhcmlhbnQtJHtuZXdWYXJpYW50TmFtZX1gKTtcblxuICAgIC8vIEZpcmUgb3B0aW9uYWwgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIHRoaXMub25Db2xvclZhcmlhbnRSZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQ29sb3JWYXJpYW50UmVmcmVzaChuZXdWYXJpYW50TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNDb2xvclZhcmlhbnRNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts\n");

/***/ }),

/***/ "./src/assets/css/ids-splitter/sandbox.css":
/*!*************************************************!*\
  !*** ./src/assets/css/ids-splitter/sandbox.css ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/css/ids-splitter/sandbox.css";

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
/******/ 			"ids-splitter-sandbox": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-radio_ids-radio-group_scss-src_components_ids-radio_ids-radio_scss","src_components_ids-radio_ids-radio_ts"], () => (__webpack_require__("./src/components/ids-splitter/demos/sandbox.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;