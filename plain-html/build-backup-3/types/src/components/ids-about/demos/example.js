"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const triggerBtn = document.querySelector('#about-example-trigger');
    const about = document.querySelector('#about-example');
    if (!triggerBtn || !about) {
        return;
    }
    // Link the About to its trigger button
    about.target = triggerBtn;
    about.triggerType = 'click';
    // Disable the trigger button when showing the Modal.
    about.addEventListener('beforeshow', () => {
        triggerBtn.disabled = true;
        return true;
    });
    // After the modal is done hiding, re-enable its trigger button.
    about.addEventListener('hide', () => {
        triggerBtn.disabled = false;
    });
});
//# sourceMappingURL=example.js.map