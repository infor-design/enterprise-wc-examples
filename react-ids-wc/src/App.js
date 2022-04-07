import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home';
import IdsAbout from './examples/ids-about';
import IdsAccordion from './examples/ids-accordion';
import IdsAlert from './examples/ids-alert';
import IdsBadge from './examples/ids-badge';
import IdsBlockgrid from './examples/ids-block-grid';
import IdsBreadcrumb from './examples/ids-breadcrumb';
import IdsButton from './examples/ids-button';
import IdsCard from './examples/ids-card';
import IdsCheckbox from './examples/ids-checkbox';
import IdsColor from './examples/ids-color';
import IdsColorPicker from './examples/ids-color-picker';
import IdsCounts from './examples/ids-counts';
import IdsDataGrid from './examples/ids-data-grid';
import IdsDraggable from './examples/ids-draggable';
import IdsExpandableArea from './examples/ids-expandable-area';
import IdsFieldset from './examples/ids-fieldset';
import IdsHeader from './examples/ids-header';
import IdsHyperlink from './examples/ids-hyperlink';
import IdsIcon from './examples/ids-icon';
import IdsInput from './examples/ids-input';
import IdsLayoutGrid from './examples/ids-layout-grid';
import IdsListView from './examples/ids-list-view';
import IdsLoadingIndicator from './examples/ids-loading-indicator';
import IdsMask from './examples/ids-mask';
import IdsMenu from './examples/ids-menu';
import IdsMenuButton from './examples/ids-menu-button';
import IdsMessage from './examples/ids-message';
import IdsModal from './examples/ids-modal';
import IdsNotificationBanner from './examples/ids-notification-banner';
import IdsPager from './examples/ids-pager';
import IdsPopup from './examples/ids-popup';
import IdsPopupMenu from './examples/ids-popup-menu';
import IdsProgressBar from './examples/ids-progress-bar';
import IdsProgressChart from './examples/ids-progress-chart';
import IdsRadio from './examples/ids-radio';
import IdsRating from './examples/ids-rating';
import IdsScrollView from './examples/ids-scroll-view';
import IdsSkipLink from './examples/ids-skip-link';
import IdsSlider from './examples/ids-slider';
import IdsSpinbox from './examples/ids-spinbox';
import IdsStepChart from './examples/ids-step-chart';
import IdsSummaryField from './examples/ids-summary-field';
import IdsSwipeAction from './examples/ids-swipe-action';
import IdsSwitch from './examples/ids-switch';
import IdsTabs from './examples/ids-tabs';
import IdsTag from './examples/ids-tag';
import IdsText from './examples/ids-text';
import IdsTextarea from './examples/ids-textarea';
import IdsThemeSwitcher from './examples/ids-theme-switcher';
import IdsToast from './examples/ids-toast';
import IdsToggleButton from './examples/ids-toggle-button';
import IdsToolbar from './examples/ids-toolbar';
import IdsTooltip from './examples/ids-tooltip';
import IdsTree from './examples/ids-tree';
import IdsTriggerField from './examples/ids-trigger-field';
import IdsUpload from './examples/ids-upload';
import IdsUploadAdvanced from './examples/ids-upload-advanced';
import IdsVirtualScroll from './examples/ids-virtual-scroll';
import IdsWizard from './examples/ids-wizard';

import './index.css';

const App = () => {
  const [wcLoaded, setwcLoaded] = useState(false);

  // Split wc components to another chunk file
  import('ids-enterprise-wc/enterprise-wc').then(() =>
    setwcLoaded(true)
  );

  return (
    <ids-container>
      <ids-theme-switcher mode="light" version="new"></ids-theme-switcher>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<IdsAbout wcLoaded={wcLoaded} />} path="/ids-about" />
          <Route element={<IdsAccordion wcLoaded={wcLoaded} />} path="/ids-accordion" />
          <Route element={<IdsAlert />} path="/ids-alert" />
          <Route element={<IdsBadge />} path="/ids-badge" />
          <Route element={<IdsBlockgrid />} path="/ids-block-grid" />
          <Route element={<IdsBreadcrumb />} path="/ids-breadcrumb" />
          <Route element={<IdsButton />} path="/ids-button" />
          <Route element={<IdsCard />} path="/ids-card" />
          <Route element={<IdsCheckbox />} path="/ids-checkbox" />
          <Route element={<IdsColor />} path="/ids-color" />
          <Route element={<IdsColorPicker />} path="/ids-color-picker" />
          <Route element={<IdsCounts />} path="/ids-counts" />
          <Route element={<IdsDataGrid />} path="/ids-data-grid" />
          <Route element={<IdsDraggable />} path="/ids-draggable" />
          <Route element={<IdsExpandableArea />} path="/ids-expandable-area" />
          <Route element={<IdsFieldset />} path="/ids-fieldset" />
          <Route element={<IdsHeader />} path="/ids-header" />
          <Route element={<IdsHyperlink />} path="/ids-hyperlink" />
          <Route element={<IdsIcon />} path="/ids-icon" />
          <Route element={<IdsInput />} path="/ids-input" />
          <Route element={<IdsLayoutGrid />} path="/ids-layout-grid" />
          <Route element={<IdsListView />} path="/ids-list-view" />
          <Route
            element={<IdsLoadingIndicator />}
            path="/ids-loading-indicator"
          />
          <Route element={<IdsMask />} path="/ids-mask" />
          <Route element={<IdsMenu />} path="/ids-menu" />
          <Route element={<IdsMenuButton />} path="/ids-menu-button" />
          <Route element={<IdsMessage />} path="/ids-message" />
          <Route element={<IdsModal />} path="/ids-modal" />
          <Route
            element={<IdsNotificationBanner />}
            path="/ids-notification-banner"
          />
          <Route element={<IdsPager />} path="/ids-pager" />
          <Route element={<IdsPopup />} path="/ids-popup" />
          <Route element={<IdsPopupMenu />} path="/ids-popup-menu" />
          <Route element={<IdsProgressBar />} path="/ids-progress-bar" />
          <Route element={<IdsProgressChart />} path="/ids-progress-chart" />
          <Route element={<IdsRadio />} path="/ids-radio" />
          <Route element={<IdsRating />} path="/ids-rating" />
          <Route element={<IdsScrollView />} path="/ids-scroll-view" />
          <Route element={<IdsSkipLink />} path="/ids-skip-link" />
          <Route element={<IdsSlider />} path="/ids-slider" />
          <Route element={<IdsSpinbox />} path="/ids-spinbox" />
          <Route element={<IdsStepChart />} path="/ids-step-chart" />
          <Route element={<IdsSummaryField />} path="/ids-summary-field" />
          <Route element={<IdsSwipeAction />} path="/ids-swipe-action" />
          <Route element={<IdsSwitch />} path="/ids-switch" />
          <Route element={<IdsTabs />} path="/ids-tabs" />
          <Route element={<IdsTag />} path="/ids-tag" />
          <Route element={<IdsText />} path="/ids-text" />
          <Route element={<IdsTextarea />} path="/ids-textarea" />
          <Route element={<IdsThemeSwitcher />} path="/ids-theme-switcher" />
          <Route element={<IdsToast />} path="/ids-toast" />
          <Route element={<IdsToggleButton />} path="/ids-toggle-button" />
          <Route element={<IdsToolbar />} path="/ids-toolbar" />
          <Route element={<IdsTooltip />} path="/ids-tooltip" />
          <Route element={<IdsTree />} path="/ids-tree" />
          <Route element={<IdsTriggerField />} path="/ids-trigger-field" />
          <Route element={<IdsUpload />} path="/ids-upload" />
          <Route element={<IdsUploadAdvanced />} path="/ids-upload-advanced" />
          <Route element={<IdsVirtualScroll />} path="/ids-virtual-scroll" />
          <Route element={<IdsWizard />} path="/ids-wizard" />
        </Routes>
      </Router>
    </ids-container>
  );
};

export default App;
