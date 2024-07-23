"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const btnEl = document.querySelector('#menu-button');
    const btnSpanEl = btnEl.querySelector('span');
    const menuEl = document.querySelector('#my-menu');
    menuEl.addEventListener('selected', (e) => {
        const target = e.detail.elem;
        if (target !== null) {
            const text = target.textContent.trim();
            btnSpanEl.innerHTML = text;
            console.info('Menu Item Selected', e.detail.elem);
        }
    });
});
//# sourceMappingURL=display-selected.js.map