// home page events
import '../ids-home-page';
document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.querySelector('#home-page-event-resized');
    homePage?.addEventListener('resized', (e) => {
        console.info('resized: ', e.detail);
    });
});
//# sourceMappingURL=events.js.map