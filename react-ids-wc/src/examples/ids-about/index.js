import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
// import 'ids-enterprise-wc/components/ids-about';
// import 'ids-enterprise-wc/components/ids-text';
// import 'ids-enterprise-wc/components/ids-button';
// import 'ids-enterprise-wc/components/ids-icon';

const IdsAbout = () => {
  const aboutRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    // Link the About to its trigger button
    aboutRef.current.target = triggerRef.current;
    aboutRef.current.trigger = 'click';
  }, []);

  return (
    <>
      <ids-about
        ref={aboutRef}
        product-name="Controls Example Application"
        product-version="Version No. XX"
      >
        <ids-icon slot="icon" icon="logo-trademark" size="largex3"></ids-icon>
        <ids-text slot="appName" type="h1" font-size="24" font-weight="bold">
          IDS Enterprise
        </ids-text>
        <ids-text slot="content" type="p">
          Fashionable components for fashionable applications.
        </ids-text>
      </ids-about>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            About
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-button type="secondary">Show About Screen</ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAbout;
