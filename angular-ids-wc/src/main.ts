import './polyfills';

// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import IDS Components Used in the App
import 'ids-enterprise-wc/components/ids-tag/ids-tag.js';
import 'ids-enterprise-wc/components/ids-text/ids-text.js';
import 'ids-enterprise-wc/components/ids-icon/ids-icon.js';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid.js';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));