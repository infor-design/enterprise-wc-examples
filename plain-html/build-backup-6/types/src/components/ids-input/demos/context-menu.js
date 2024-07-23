// Supporting components
import '../../ids-popup-menu/ids-popup-menu';
import '../../ids-popup/ids-popup';
// Standard menu configuration
document.addEventListener('DOMContentLoaded', () => {
    const popupmenuEl = document.querySelector('#popupmenu');
    popupmenuEl.popup.align = 'left, top';
    popupmenuEl.addEventListener('selected', (e) => {
        console.info(`Item "${e.detail.elem.text}" was selected`);
    });
});
//# sourceMappingURL=context-menu.js.map