"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const menuBtnEl = document.querySelector('ids-menu-button');
    const toggleDisabledCheck = document.querySelector('#toggle-disabled-menubutton');
    toggleDisabledCheck.addEventListener('change', (e) => {
        menuBtnEl.disabled = e.target.checked;
    });
    const forceMenuCheck = document.querySelector('#force-menu-show');
    const defaultOnOutsideClick = menuBtnEl.menuEl.onOutsideClick;
    forceMenuCheck.addEventListener('change', (e) => {
        const checked = e.target.checked;
        menuBtnEl.menuEl.keepOpen = checked;
        if (checked) {
            menuBtnEl.menuEl.show();
            menuBtnEl.menuEl.onOutsideClick = () => { };
        }
        else {
            menuBtnEl.menuEl.onOutsideClick = defaultOnOutsideClick;
        }
    });
});
//# sourceMappingURL=disabled.js.map