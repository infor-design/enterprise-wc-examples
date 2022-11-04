import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home';
const IdsAbout = lazy(() => import('./examples/ids-about'));
const IdsAccordion = lazy(() => import('./examples/ids-accordion'));
const IdsAlert = lazy(() => import('./examples/ids-alert'));
const IdsActionSheet = lazy(() => import('./examples/ids-action-sheet'));
const IdsAppMenu = lazy(() => import('./examples/ids-app-menu'));
const IdsActionPanel = lazy(() => import('./examples/ids-action-panel'));
const IdsBadge = lazy(() => import('./examples/ids-badge'));
const IdsBlockgrid = lazy(() => import('./examples/ids-block-grid'));
const IdsBreadcrumb = lazy(() => import('./examples/ids-breadcrumb'));
const IdsButton = lazy(() => import('./examples/ids-button'));
const IdsCard = lazy(() => import('./examples/ids-card'));
const IdsCheckbox = lazy(() => import('./examples/ids-checkbox'));
const IdsCheckboxGroup = lazy(() => import('./examples/ids-checkbox-group'));
const IdsColor = lazy(() => import('./examples/ids-color'));
const IdsColorPicker = lazy(() => import('./examples/ids-color-picker'));
const IdsCounts = lazy(() => import('./examples/ids-counts'));
const IdsDataGrid = lazy(() => import('./examples/ids-data-grid'));
const IdsDataLabel = lazy(() => import('./examples/ids-data-label'));
const IdsDatePicker = lazy(() => import('./examples/ids-date-picker'));
const IdsDraggable = lazy(() => import('./examples/ids-draggable'));
const IdsDropdown = lazy(() => import('./examples/ids-dropdown'));
const IdsEditor = lazy(() => import('./examples/ids-editor'));
const IdsExpandableArea = lazy(() => import('./examples/ids-expandable-area'));
const IdsEmptyMessage = lazy(() => import('./examples/ids-empty-message'));
const IdsErrorPage = lazy(() => import('./examples/ids-error-page'));
const IdsFieldset = lazy(() => import('./examples/ids-fieldset'));
const IdsForm = lazy(() => import('./examples/ids-form'));
const IdsHeader = lazy(() => import('./examples/ids-header'));
const IdsHyperlink = lazy(() => import('./examples/ids-hyperlink'));
const IdsIcon = lazy(() => import('./examples/ids-icon'));
const IdsInput = lazy(() => import('./examples/ids-input'));
const IdsLayoutGrid = lazy(() => import('./examples/ids-layout-grid'));
const IdsListView = lazy(() => import('./examples/ids-list-view'));
const IdsLoadingIndicator = lazy(() =>
  import('./examples/ids-loading-indicator')
);
const IdsLookup = lazy(() => import('./examples/ids-lookup'));
const IdsListBuilder = lazy(() => import('./examples/ids-list-builder'));
const IdsMask = lazy(() => import('./examples/ids-mask'));
const IdsMenu = lazy(() => import('./examples/ids-menu'));
const IdsMenuButton = lazy(() => import('./examples/ids-menu-button'));
const IdsMessage = lazy(() => import('./examples/ids-message'));
const IdsMultiselect = lazy(() => import('./examples/ids-multiselect'));
const IdsModal = lazy(() => import('./examples/ids-modal'));
const IdsNotificationBanner = lazy(() =>
  import('./examples/ids-notification-banner')
);
const IdsPager = lazy(() => import('./examples/ids-pager'));
const IdsPopup = lazy(() => import('./examples/ids-popup'));
const IdsPopupMenu = lazy(() => import('./examples/ids-popup-menu'));
const IdsProgressBar = lazy(() => import('./examples/ids-progress-bar'));
const IdsProgressChart = lazy(() => import('./examples/ids-progress-chart'));
const IdsRadio = lazy(() => import('./examples/ids-radio'));
const IdsRating = lazy(() => import('./examples/ids-rating'));
const IdsScrollView = lazy(() => import('./examples/ids-scroll-view'));
const IdsSkipLink = lazy(() => import('./examples/ids-skip-link'));
const IdsSearchField = lazy(() => import('./examples/ids-search-field'));
const IdsSlider = lazy(() => import('./examples/ids-slider'));
const IdsSpinbox = lazy(() => import('./examples/ids-spinbox'));
const IdsStepChart = lazy(() => import('./examples/ids-step-chart'));
const IdsSwapList = lazy(() => import('./examples/ids-swaplist'));
const IdsSwipeAction = lazy(() => import('./examples/ids-swipe-action'));
const IdsSwitch = lazy(() => import('./examples/ids-switch'));
const IdsTabs = lazy(() => import('./examples/ids-tabs'));
const IdsTag = lazy(() => import('./examples/ids-tag'));
const IdsText = lazy(() => import('./examples/ids-text'));
const IdsTextarea = lazy(() => import('./examples/ids-textarea'));
const IdsThemeSwitcher = lazy(() => import('./examples/ids-theme-switcher'));
const IdsToast = lazy(() => import('./examples/ids-toast'));
const IdsToggleButton = lazy(() => import('./examples/ids-toggle-button'));
const IdsToolbar = lazy(() => import('./examples/ids-toolbar'));
const IdsTooltip = lazy(() => import('./examples/ids-tooltip'));
const IdsTree = lazy(() => import('./examples/ids-tree'));
const IdsTimePicker = lazy(() => import('./examples/ids-time-picker'));
const IdsTriggerField = lazy(() => import('./examples/ids-trigger-field'));
const IdsUpload = lazy(() => import('./examples/ids-upload'));
const IdsUploadAdvanced = lazy(() => import('./examples/ids-upload-advanced'));
const IdsVirtualScroll = lazy(() => import('./examples/ids-virtual-scroll'));
const IdsWizard = lazy(() => import('./examples/ids-wizard'));

import './index.css';

import 'ids-enterprise-wc/components/ids-container/ids-container';
import 'ids-enterprise-wc/components/ids-theme-switcher/ids-theme-switcher';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell';
import 'ids-enterprise-wc/components/ids-hyperlink/ids-hyperlink';
import 'ids-enterprise-wc/components/ids-card/ids-card';
import 'ids-enterprise-wc/components/ids-block-grid/ids-block-grid';

const App = () => {
  return (
    <ids-container hidden locale="en-US">
      <ids-theme-switcher mode="light" version="new"></ids-theme-switcher>
      <Router>
        <Suspense fallback="">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<IdsAbout />} path="/ids-about" />
            <Route element={<IdsAccordion />} path="/ids-accordion" />
            <Route element={<IdsAlert />} path="/ids-alert" />
            <Route element={<IdsActionSheet />} path="/ids-action-sheet" />
            <Route element={<IdsAppMenu />} path="/ids-app-menu" />
            <Route element={<IdsActionPanel />} path="/ids-action-panel" />
            <Route element={<IdsBadge />} path="/ids-badge" />
            <Route element={<IdsBlockgrid />} path="/ids-block-grid" />
            <Route element={<IdsBreadcrumb />} path="/ids-breadcrumb" />
            <Route element={<IdsButton />} path="/ids-button" />
            <Route element={<IdsCard />} path="/ids-card" />
            <Route element={<IdsCheckbox />} path="/ids-checkbox" />
            <Route element={<IdsCheckboxGroup />} path="/ids-checkbox-group" />
            <Route element={<IdsColor />} path="/ids-color" />
            <Route element={<IdsColorPicker />} path="/ids-color-picker" />
            <Route element={<IdsCounts />} path="/ids-counts" />
            <Route element={<IdsDataGrid />} path="/ids-data-grid" />
            <Route element={<IdsDataLabel />} path="/ids-data-label" />
            <Route element={<IdsDatePicker />} path="/ids-date-picker" />
            <Route element={<IdsDraggable />} path="/ids-draggable" />
            <Route element={<IdsDropdown />} path="/ids-dropdown" />
            <Route element={<IdsEditor />} path="/ids-editor" />
            <Route
              element={<IdsExpandableArea />}
              path="/ids-expandable-area"
            />
            <Route element={<IdsEmptyMessage />} path="/ids-empty-message" />
            <Route element={<IdsErrorPage />} path="/ids-error-page" />
            <Route element={<IdsFieldset />} path="/ids-fieldset" />
            <Route element={<IdsForm />} path="/ids-form" />
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
            <Route element={<IdsLookup />} path="/ids-lookup" />
            <Route element={<IdsListBuilder />} path="/ids-list-builder" />
            <Route element={<IdsMask />} path="/ids-mask" />
            <Route element={<IdsMenu />} path="/ids-menu" />
            <Route element={<IdsMenuButton />} path="/ids-menu-button" />
            <Route element={<IdsMessage />} path="/ids-message" />
            <Route element={<IdsModal />} path="/ids-modal" />
            <Route element={<IdsMultiselect />} path="/ids-multiselect" />
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
            <Route element={<IdsSearchField />} path="/ids-search-field" />
            <Route element={<IdsSkipLink />} path="/ids-skip-link" />
            <Route element={<IdsSlider />} path="/ids-slider" />
            <Route element={<IdsSpinbox />} path="/ids-spinbox" />
            <Route element={<IdsStepChart />} path="/ids-step-chart" />
            <Route element={<IdsSwapList />} path="/ids-swaplist" />
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
            <Route element={<IdsTimePicker />} path="/ids-time-picker" />
            <Route element={<IdsTree />} path="/ids-tree" />
            <Route element={<IdsTriggerField />} path="/ids-trigger-field" />
            <Route element={<IdsUpload />} path="/ids-upload" />
            <Route
              element={<IdsUploadAdvanced />}
              path="/ids-upload-advanced"
            />
            <Route element={<IdsVirtualScroll />} path="/ids-virtual-scroll" />
            <Route element={<IdsWizard />} path="/ids-wizard" />
          </Routes>
        </Suspense>
      </Router>
    </ids-container>
  );
};

export default App;
