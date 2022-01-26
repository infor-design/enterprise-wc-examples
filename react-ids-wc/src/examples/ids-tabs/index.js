import React, { useRef, useEffect, useState } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-tabs/ids-tabs';

const IdsTabs = () => {
  const tabsRef = useRef();
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const tabs = tabsRef.current;

    // Initially add active tab to the state to show tab content on page load
    setActiveTab(tabs.value);

    // Event handler to be used in attach and cleanup event listener
    // Add active tab to the state to show tab content on tabs change
    const handleChange = () => setActiveTab(tabs.value);

    // Attach event listener
    tabs.addEventListener('change', handleChange);

    // Cleanup event listener on React component unmount
    return () => tabs.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Tabs
        </ids-text>
      </ids-layout-grid>
      <ids-tabs-context>
        <ids-tabs ref={tabsRef}>
          <ids-tab value="contracts">Contracts</ids-tab>
          <ids-tab value="opportunities">Opportunities</ids-tab>
          <ids-tab value="attachments">Attachments</ids-tab>
          <ids-tab value="notes">Notes</ids-tab>
        </ids-tabs>
        <div className="ids-tabs-content">
          <ids-tab-content active={activeTab === 'contracts'}>
            <ids-text font-size="18">
              I think there’s a world market for about 5 computers. (Thomas J.
              Watson, Chairman of the Board, IBM, circa 1948)
            </ids-text>
          </ids-tab-content>
          <ids-tab-content active={activeTab === 'opportunities'}>
            <div className="tab-content">
              <ids-text font-size="18">
                Everything that can be invented has been invented. (Charles H.
                Duell, Commissioner, U.S. Office of Patents, 1899)
              </ids-text>
            </div>
          </ids-tab-content>
          <ids-tab-content active={activeTab === 'attachments'}>
            <ids-text font-size="18">
              It’s ridiculous to live 100 years and only be able to remember 30
              million bytes. You know, less than a compact disc. The human
              condition is really becoming more obsolete every minute. (Marvin
              Minsky)
            </ids-text>
          </ids-tab-content>
          <ids-tab-content active={activeTab === 'notes'}>
            <ids-text font-size="18">
              If debugging is the process of removing bugs, then programming
              must be the process of putting them in. (Edsger W. Dijkstra)
            </ids-text>
          </ids-tab-content>
        </div>
      </ids-tabs-context>
    </>
  );
};

export default IdsTabs;
