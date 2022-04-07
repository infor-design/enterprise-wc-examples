import React, { useRef, useEffect } from 'react';

const IdsAbout = ({ wcLoaded }) => {
  const aboutRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    if (wcLoaded) {
      // Adding ref current element to variable to be able cleanup event listeners on unmount
      const about = aboutRef.current;
      const triggerBtn = triggerRef.current;

      // Link the About to its trigger button
      about.target = triggerBtn;
      about.trigger = 'click';

      // Event handler to be used in attach and cleanup event listener
      const handleBeforeShow = () => {
        triggerBtn.disabled = true;
        return true;
      };

      const handleHide = () => {
        triggerBtn.disabled = false;
      };

      // Attach event listener
      about.addEventListener('beforeshow', handleBeforeShow);
      about.addEventListener('hide', handleHide);

      // Cleanup event listener on React component unmount
      return () => [
        about.removeEventListener('beforeshow', handleBeforeShow),
        about.removeEventListener('hide', handleHide)
      ];
    }
  }, [wcLoaded]);

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
          <ids-button ref={triggerRef} type="secondary">
            Show About Screen
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAbout;
