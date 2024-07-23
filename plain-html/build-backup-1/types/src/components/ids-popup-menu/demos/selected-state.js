import '../ids-popup-menu';
import '../../ids-menu/ids-menu';
import '../../ids-popup/ids-popup';
document.addEventListener('DOMContentLoaded', () => {
    const popupmenuEl = document.querySelector('ids-popup-menu');
    const popupEl = popupmenuEl.popup;
    // Preconfigure the Popup
    popupEl.align = 'top, left';
    // Log to the console on `deselected` (selected events are covered by index.ts)
    popupmenuEl.addEventListener('deselected', (e) => {
        console.info(`Item "${e.detail.elem.text}" was deselected`);
    });
});
//# sourceMappingURL=selected-state.js.map