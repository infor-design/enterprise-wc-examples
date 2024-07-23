import '../../ids-text/ids-text';
import '../../ids-header/ids-header';
import '../ids-tabs';
import '../ids-tab';
import '../ids-tab-content';
import '../ids-tabs-context';
import '../ids-tab-divider';
import '../../ids-toolbar/ids-toolbar';
document.addEventListener('DOMContentLoaded', () => {
    const tabElements = [...document.querySelectorAll('ids-tabs')];
    tabElements.forEach((el) => el.addEventListener('change', (e) => {
        console.info(`ids-tabs.on('change') =>`, e.target.value);
    }));
});
//# sourceMappingURL=header-tabs.js.map