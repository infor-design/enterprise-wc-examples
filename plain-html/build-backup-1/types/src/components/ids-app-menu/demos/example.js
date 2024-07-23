import '../../ids-header/ids-header';
import avatarPlaceholder from '../../../assets/images/avatar-placeholder.jpg';
const avatarImg = window.document.getElementById('avatar');
avatarImg.src = avatarPlaceholder;
document.addEventListener('DOMContentLoaded', () => {
    const appMenuDrawer = document.querySelector('#app-menu');
    const appMenuTriggerBtn = document.querySelector('#app-menu-trigger');
    appMenuDrawer.target = appMenuTriggerBtn;
    appMenuDrawer.addEventListener('selected', (e) => {
        console.info(`Header "${e.target.textContent.trim()}" was selected.`);
    });
});
//# sourceMappingURL=example.js.map