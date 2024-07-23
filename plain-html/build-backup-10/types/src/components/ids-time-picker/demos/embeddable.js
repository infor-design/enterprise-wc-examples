import '../../ids-text/ids-text';
import '../ids-time-picker-popup';
document.addEventListener('DOMContentLoaded', () => {
    const picker = document.querySelector('ids-time-picker-popup');
    const outputEl = document.querySelector('#current-time');
    picker.onEvent('timeselected', picker, (e) => {
        console.info(e.detail.value);
        outputEl.textContent = e.detail.value;
    });
});
//# sourceMappingURL=embeddable.js.map