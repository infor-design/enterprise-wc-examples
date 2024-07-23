"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const tabElements = [...document.querySelectorAll('ids-tabs')];
    tabElements.forEach((el) => el.addEventListener('change', (e) => {
        console.info(`ids-tabs.on('change') =>`, e.target?.value);
    }));
});
//# sourceMappingURL=example.js.map