"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const errorPage = document.querySelector('ids-error-page');
    errorPage.popup.animated = false;
    errorPage.addEventListener('action-button', () => {
        errorPage.popup.animated = true;
        errorPage.visible = false;
    });
    errorPage.addEventListener('beforehide', (evt) => {
        evt.detail.response(false);
    });
});
//# sourceMappingURL=example.js.map