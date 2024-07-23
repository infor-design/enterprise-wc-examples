"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Add an event listener to test clickable links
    document.querySelectorAll('ids-toggle-button').forEach((idsButton) => {
        idsButton.addEventListener('click', (e) => {
            e.target.toggle();
        });
    });
});
//# sourceMappingURL=example.js.map