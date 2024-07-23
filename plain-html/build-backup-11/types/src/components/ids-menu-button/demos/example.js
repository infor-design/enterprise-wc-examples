"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const menuBtnEl = document.querySelector('ids-menu-button');
    // Log to the console on `toggle`
    menuBtnEl.menuEl.addEventListener('show', () => {
        console.info(`Menu Button items were displayed`);
    });
    menuBtnEl.menuEl.addEventListener('hide', () => {
        console.info(`Menu Button items were hidden`);
    });
    const menuItemResponse = (e, msg) => {
        const target = e.detail.elem;
        if (target !== null) {
            const text = target.textContent.trim();
            console.info(`Menu Item "${text}" was ${msg}`, e.detail.elem);
        }
    };
    menuBtnEl.menuEl.addEventListener('selected', (e) => {
        menuItemResponse(e, 'selected');
    });
    menuBtnEl.menuEl.addEventListener('deselected', (e) => {
        menuItemResponse(e, 'deselected');
    });
});
//# sourceMappingURL=example.js.map