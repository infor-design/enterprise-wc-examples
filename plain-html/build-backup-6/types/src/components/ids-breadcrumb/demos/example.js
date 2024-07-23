"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const breadcrumb = document.querySelector('ids-breadcrumb');
    breadcrumb.onBreadcrumbActivate = (targetEl, previousEl) => {
        console.info(`New Breadcrumb: "${targetEl.textContent}"\nPrevious Breadcrumb: "${previousEl.textContent}"`);
    };
});
//# sourceMappingURL=example.js.map