import React, { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css';

const IdsAboutExample = lazy(() => import('./examples/ids-about'));
const IdsAccordionExample = lazy(() => import('./examples/ids-accordion'));
const IdsActionPanelExample = lazy(() => import('./examples/ids-action-panel'));
const IdsActionSheetExample = lazy(() => import('./examples/ids-action-sheet'));
const IdsAlertExample = lazy(() => import('./examples/ids-alert'));
const IdsAppMenuExample = lazy(() => import('./examples/ids-app-menu'));
const IdsAreaChartExample = lazy(() => import('./examples/ids-area-chart'));
const IdsAxisChartExample = lazy(() => import('./examples/ids-axis-chart'));
const IdsBadgeExample = lazy(() => import('./examples/ids-badge'));
const IdsBarChartExample = lazy(() => import('./examples/ids-bar-chart'));
const IdsBlockGridExample = lazy(() => import('./examples/ids-block-grid'));
const IdsBreadcrumbExample = lazy(() => import('./examples/ids-breadcrumb'));
const IdsButtonExample = lazy(() => import('./examples/ids-button'));
const IdsCalendarExample = lazy(() => import('./examples/ids-calendar'));
const IdsCardExample = lazy(() => import('./examples/ids-card'));
const IdsCheckboxGroupExample = lazy(() => import('./examples/ids-checkbox-group'));
const IdsCheckboxExample = lazy(() => import('./examples/ids-checkbox'));
const IdsColorPickerExample = lazy(() => import('./examples/ids-color-picker'));
const IdsColorExample = lazy(() => import('./examples/ids-color'));
const IdsCountsExample = lazy(() => import('./examples/ids-counts'));
const IdsDataGridExample = lazy(() => import('./examples/ids-data-grid'));
const IdsDataLabelExample = lazy(() => import('./examples/ids-data-label'));
const IdsDatePickerExample = lazy(() => import('./examples/ids-date-picker'));
const IdsDraggableExample = lazy(() => import('./examples/ids-draggable'));
const IdsDropdownExample = lazy(() => import('./examples/ids-dropdown'));
const IdsEditorExample = lazy(() => import('./examples/ids-editor'));
const IdsEmptyMessageExample = lazy(() => import('./examples/ids-empty-message'));
const IdsErrorPageExample = lazy(() => import('./examples/ids-error-page'));
const IdsExpandableAreaExample = lazy(() => import('./examples/ids-expandable-area'));
const IdsFieldsetExample = lazy(() => import('./examples/ids-fieldset'));
const IdsFormExample = lazy(() => import('./examples/ids-form'));
const IdsHeaderExample = lazy(() => import('./examples/ids-header'));
const IdsHiddenExample = lazy(() => import('./examples/ids-hidden'));
const IdsHierarchyExample = lazy(() => import('./examples/ids-hierarchy'));
const IdsHomePageExample = lazy(() => import('./examples/ids-home-page'));
const IdsHyperlinkExample = lazy(() => import('./examples/ids-hyperlink'));
const IdsIconExample = lazy(() => import('./examples/ids-icon'));
const IdsImageExample = lazy(() => import('./examples/ids-image'));
const IdsInputExample = lazy(() => import('./examples/ids-input'));
const IdsLayoutFlexExample = lazy(() => import('./examples/ids-layout-flex'));
const IdsLayoutGridExample = lazy(() => import('./examples/ids-layout-grid'));
const IdsLineChartExample = lazy(() => import('./examples/ids-line-chart'));
const IdsListBoxExample = lazy(() => import('./examples/ids-list-box'));
const IdsListBuilderExample = lazy(() => import('./examples/ids-list-builder'));
const IdsListViewExample = lazy(() => import('./examples/ids-list-view'));
const IdsLoadingIndicatorExample = lazy(() => import('./examples/ids-loading-indicator'));
const IdsLocaleExample = lazy(() => import('./examples/ids-locale'));
const IdsLookupExample = lazy(() => import('./examples/ids-lookup'));
const IdsMaskExample = lazy(() => import('./examples/ids-mask'));
const IdsMastheadExample = lazy(() => import('./examples/ids-masthead'));
const IdsMenuButtonExample = lazy(() => import('./examples/ids-menu-button'));
const IdsMenuExample = lazy(() => import('./examples/ids-menu'));
const IdsMessageExample = lazy(() => import('./examples/ids-message'));
const IdsModalExample = lazy(() => import('./examples/ids-modal'));
const IdsMonthViewExample = lazy(() => import('./examples/ids-month-view'));
const IdsMultiselectExample = lazy(() => import('./examples/ids-multiselect'));
const IdsNotificationBannerExample = lazy(() => import('./examples/ids-notification-banner'));
const IdsPagerExample = lazy(() => import('./examples/ids-pager'));
const IdsPieChartExample = lazy(() => import('./examples/ids-pie-chart'));
const IdsPopupMenuExample = lazy(() => import('./examples/ids-popup-menu'));
const IdsPopupExample = lazy(() => import('./examples/ids-popup'));
const IdsProcessIndicatorExample = lazy(() => import('./examples/ids-process-indicator'));
const IdsProgressBarExample = lazy(() => import('./examples/ids-progress-bar'));
const IdsProgressChartExample = lazy(() => import('./examples/ids-progress-chart'));
const IdsRadioExample = lazy(() => import('./examples/ids-radio'));
const IdsRatingExample = lazy(() => import('./examples/ids-rating'));
const IdsScrollViewExample = lazy(() => import('./examples/ids-scroll-view'));
const IdsSearchFieldExample = lazy(() => import('./examples/ids-search-field'));
const IdsSeparatorExample = lazy(() => import('./examples/ids-separator'));
const IdsSkipLinkExample = lazy(() => import('./examples/ids-skip-link'));
const IdsSliderExample = lazy(() => import('./examples/ids-slider'));
const IdsSpinboxExample = lazy(() => import('./examples/ids-spinbox'));
const IdsSplitterExample = lazy(() => import('./examples/ids-splitter'));
const IdsStepChartExample = lazy(() => import('./examples/ids-step-chart'));
const IdsSwaplistExample = lazy(() => import('./examples/ids-swaplist'));
const IdsSwappableExample = lazy(() => import('./examples/ids-swappable'));
const IdsSwipeActionExample = lazy(() => import('./examples/ids-swipe-action'));
const IdsSwitchExample = lazy(() => import('./examples/ids-switch'));
const IdsTabsExample = lazy(() => import('./examples/ids-tabs'));
const IdsTagExample = lazy(() => import('./examples/ids-tag'));
const IdsTextExample = lazy(() => import('./examples/ids-text'));
const IdsTextareaExample = lazy(() => import('./examples/ids-textarea'));
const IdsThemeSwitcherExample = lazy(() => import('./examples/ids-theme-switcher'));
const IdsTimePickerExample = lazy(() => import('./examples/ids-time-picker'));
const IdsToastExample = lazy(() => import('./examples/ids-toast'));
const IdsToggleButtonExample = lazy(() => import('./examples/ids-toggle-button'));
const IdsToolbarExample = lazy(() => import('./examples/ids-toolbar'));
const IdsTooltipExample = lazy(() => import('./examples/ids-tooltip'));
const IdsTreeExample = lazy(() => import('./examples/ids-tree'));
const IdsTreemapExample = lazy(() => import('./examples/ids-treemap'));
const IdsTriggerFieldExample = lazy(() => import('./examples/ids-trigger-field'));
const IdsUploadAdvancedExample = lazy(() => import('./examples/ids-upload-advanced'));
const IdsUploadExample = lazy(() => import('./examples/ids-upload'));
const IdsVirtualScrollExample = lazy(() => import('./examples/ids-virtual-scroll'));
const IdsWeekViewExample = lazy(() => import('./examples/ids-week-view'));
const IdsWizardExample = lazy(() => import('./examples/ids-wizard'));


function App() {
  return (
    <Routes>
      <Route element={
        <Layout>
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </Layout>
      }>
        <Route path="/" element={<IdsButtonExample />} />
        <Route path="/ids-about" element={<IdsAboutExample />} />
        <Route path="/ids-accordion" element={<IdsAccordionExample />} />
        <Route path="/ids-action-panel" element={<IdsActionPanelExample />} />
        <Route path="/ids-action-sheet" element={<IdsActionSheetExample />} />
        <Route path="/ids-alert" element={<IdsAlertExample />} />
        <Route path="/ids-app-menu" element={<IdsAppMenuExample />} />
        <Route path="/ids-area-chart" element={<IdsAreaChartExample />} />
        <Route path="/ids-axis-chart" element={<IdsAxisChartExample />} />
        <Route path="/ids-badge" element={<IdsBadgeExample />} />
        <Route path="/ids-bar-chart" element={<IdsBarChartExample />} />
        <Route path="/ids-block-grid" element={<IdsBlockGridExample />} />
        <Route path="/ids-breadcrumb" element={<IdsBreadcrumbExample />} />
        <Route path="/ids-button" element={<IdsButtonExample />} />
        <Route path="/ids-calendar" element={<IdsCalendarExample />} />
        <Route path="/ids-card" element={<IdsCardExample />} />
        <Route path="/ids-checkbox-group" element={<IdsCheckboxGroupExample />} />
        <Route path="/ids-checkbox" element={<IdsCheckboxExample />} />
        <Route path="/ids-color-picker" element={<IdsColorPickerExample />} />
        <Route path="/ids-color" element={<IdsColorExample />} />
        <Route path="/ids-counts" element={<IdsCountsExample />} />
        <Route path="/ids-data-grid" element={<IdsDataGridExample />} />
        <Route path="/ids-data-label" element={<IdsDataLabelExample />} />
        <Route path="/ids-date-picker" element={<IdsDatePickerExample />} />
        <Route path="/ids-draggable" element={<IdsDraggableExample />} />
        <Route path="/ids-dropdown" element={<IdsDropdownExample />} />
        <Route path="/ids-editor" element={<IdsEditorExample />} />
        <Route path="/ids-empty-message" element={<IdsEmptyMessageExample />} />
        <Route path="/ids-error-page" element={<IdsErrorPageExample />} />
        <Route path="/ids-expandable-area" element={<IdsExpandableAreaExample />} />
        <Route path="/ids-fieldset" element={<IdsFieldsetExample />} />
        <Route path="/ids-form" element={<IdsFormExample />} />
        <Route path="/ids-header" element={<IdsHeaderExample />} />
        <Route path="/ids-hidden" element={<IdsHiddenExample />} />
        <Route path="/ids-hierarchy" element={<IdsHierarchyExample />} />
        <Route path="/ids-home-page" element={<IdsHomePageExample />} />
        <Route path="/ids-hyperlink" element={<IdsHyperlinkExample />} />
        <Route path="/ids-icon" element={<IdsIconExample />} />
        <Route path="/ids-image" element={<IdsImageExample />} />
        <Route path="/ids-input" element={<IdsInputExample />} />
        <Route path="/ids-layout-flex" element={<IdsLayoutFlexExample />} />
        <Route path="/ids-layout-grid" element={<IdsLayoutGridExample />} />
        <Route path="/ids-line-chart" element={<IdsLineChartExample />} />
        <Route path="/ids-list-box" element={<IdsListBoxExample />} />
        <Route path="/ids-list-builder" element={<IdsListBuilderExample />} />
        <Route path="/ids-list-view" element={<IdsListViewExample />} />
        <Route path="/ids-loading-indicator" element={<IdsLoadingIndicatorExample />} />
        <Route path="/ids-locale" element={<IdsLocaleExample />} />
        <Route path="/ids-lookup" element={<IdsLookupExample />} />
        <Route path="/ids-mask" element={<IdsMaskExample />} />
        <Route path="/ids-masthead" element={<IdsMastheadExample />} />
        <Route path="/ids-menu-button" element={<IdsMenuButtonExample />} />
        <Route path="/ids-menu" element={<IdsMenuExample />} />
        <Route path="/ids-message" element={<IdsMessageExample />} />
        <Route path="/ids-modal" element={<IdsModalExample />} />
        <Route path="/ids-month-view" element={<IdsMonthViewExample />} />
        <Route path="/ids-multiselect" element={<IdsMultiselectExample />} />
        <Route path="/ids-notification-banner" element={<IdsNotificationBannerExample />} />
        <Route path="/ids-pager" element={<IdsPagerExample />} />
        <Route path="/ids-pie-chart" element={<IdsPieChartExample />} />
        <Route path="/ids-popup-menu" element={<IdsPopupMenuExample />} />
        <Route path="/ids-popup" element={<IdsPopupExample />} />
        <Route path="/ids-process-indicator" element={<IdsProcessIndicatorExample />} />
        <Route path="/ids-progress-bar" element={<IdsProgressBarExample />} />
        <Route path="/ids-progress-chart" element={<IdsProgressChartExample />} />
        <Route path="/ids-radio" element={<IdsRadioExample />} />
        <Route path="/ids-rating" element={<IdsRatingExample />} />
        <Route path="/ids-scroll-view" element={<IdsScrollViewExample />} />
        <Route path="/ids-search-field" element={<IdsSearchFieldExample />} />
        <Route path="/ids-separator" element={<IdsSeparatorExample />} />
        <Route path="/ids-skip-link" element={<IdsSkipLinkExample />} />
        <Route path="/ids-slider" element={<IdsSliderExample />} />
        <Route path="/ids-spinbox" element={<IdsSpinboxExample />} />
        <Route path="/ids-splitter" element={<IdsSplitterExample />} />
        <Route path="/ids-step-chart" element={<IdsStepChartExample />} />
        <Route path="/ids-swaplist" element={<IdsSwaplistExample />} />
        <Route path="/ids-swappable" element={<IdsSwappableExample />} />
        <Route path="/ids-swipe-action" element={<IdsSwipeActionExample />} />
        <Route path="/ids-switch" element={<IdsSwitchExample />} />
        <Route path="/ids-tabs" element={<IdsTabsExample />} />
        <Route path="/ids-tag" element={<IdsTagExample />} />
        <Route path="/ids-text" element={<IdsTextExample />} />
        <Route path="/ids-textarea" element={<IdsTextareaExample />} />
        <Route path="/ids-theme-switcher" element={<IdsThemeSwitcherExample />} />
        <Route path="/ids-time-picker" element={<IdsTimePickerExample />} />
        <Route path="/ids-toast" element={<IdsToastExample />} />
        <Route path="/ids-toggle-button" element={<IdsToggleButtonExample />} />
        <Route path="/ids-toolbar" element={<IdsToolbarExample />} />
        <Route path="/ids-tooltip" element={<IdsTooltipExample />} />
        <Route path="/ids-tree" element={<IdsTreeExample />} />
        <Route path="/ids-treemap" element={<IdsTreemapExample />} />
        <Route path="/ids-trigger-field" element={<IdsTriggerFieldExample />} />
        <Route path="/ids-upload-advanced" element={<IdsUploadAdvancedExample />} />
        <Route path="/ids-upload" element={<IdsUploadExample />} />
        <Route path="/ids-virtual-scroll" element={<IdsVirtualScrollExample />} />
        <Route path="/ids-week-view" element={<IdsWeekViewExample />} />
        <Route path="/ids-wizard" element={<IdsWizardExample />} />
      </Route>
    </Routes>
  );
}

export default App;
