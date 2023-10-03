import React, { useRef } from 'react';

import 'ids-enterprise-wc/components/ids-about/ids-about';

const IdsAbout = () => {
  const aboutRef = useRef();

  return (
    <>
      <ids-about
        ref={aboutRef}
        product-name="Controls Example Application"
        product-version="Version No. XX"
      >
        <ids-icon slot="icon" icon="logo" viewbox="0 0 35 34" size="xxl"></ids-icon>
        <ids-text slot="appName" type="h1" font-size="24" font-weight="bold">
          IDS Enterprise
        </ids-text>
        <ids-text slot="content" type="p">
          Fashionable components for fashionable applications.
        </ids-text>
      </ids-about>

      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            About
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell>
          <ids-button
            appearance="secondary"
            // Trigger ids-about visibility with React onClick synthetic event
            onClick={() => aboutRef.current?.show()}
            disabled={aboutRef.current?.visible}
          >
            Show About Screen
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAbout;
