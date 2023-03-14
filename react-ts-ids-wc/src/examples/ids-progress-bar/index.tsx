import React, { useRef, useEffect } from 'react';
import type IdsProgressBarType from 'ids-enterprise-wc/components/ids-progress-bar/ids-progress-bar';
import type IdsToggleButtonType from 'ids-enterprise-wc/components/ids-toggle-button/ids-toggle-button';
import 'ids-enterprise-wc/components/ids-progress-bar/ids-progress-bar';


const IdsProgressBar = () => {
  const progressRef = useRef<IdsProgressBarType>();
  const setValueRef = useRef<IdsToggleButtonType>();
  const setDisableRef = useRef<IdsToggleButtonType>();
  const setLabelRef = useRef<IdsToggleButtonType>();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const btnUpdateVal = setValueRef.current;
    const btnDisable = setDisableRef.current;
    const btnSetLabel = setLabelRef.current;
    const element = progressRef.current as IdsProgressBarType;

    // Get original value
    const orgValue = element?.value;

    // Event handler to be used in attach and cleanup event listener
    // Update and reset value
    const handleUpdateVal = (e: any) => {
      if (element?.disabled) {
        return;
      }
      e?.target?.toggle?.();
      const max = '100';
      if (element) element.value = element.value === max ? orgValue : max;
    };

    // Toggle disable/enable
    const handleDisabled = (e: any) => {
      e?.target?.toggle?.();
      element.disabled = !element.disabled;
    };

    // Toggle label audible
    const handleLabel = (e: any) => {
      if (element.disabled) {
        return;
      }
      e?.target?.toggle?.();
      element.labelAudible = !element.labelAudible;
    };

    // Attach event listeners
    btnUpdateVal?.addEventListener('click', handleUpdateVal);
    btnDisable?.addEventListener('click', handleDisabled);
    btnSetLabel?.addEventListener('click', handleLabel);

    // Cleanup event listener on React component unmount
    return function cleanup() {
      btnUpdateVal?.removeEventListener('click', handleUpdateVal);
      btnDisable?.removeEventListener('click', handleDisabled);
      btnSetLabel?.removeEventListener('click', handleLabel);
    }
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Progress Bar
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-progress-bar
            ref={progressRef}
            label="Percent complete"
            value="10"
          ></ids-progress-bar>

          <ids-toggle-button
            ref={setValueRef}
            icon-off="rocket"
            icon-on="rocket"
            text-off="Update Value"
            text-on="Reset Value"
          >
            <span></span>
          </ids-toggle-button>

          <ids-toggle-button
            ref={setDisableRef}
            icon-off="unlink"
            icon-on="unlink"
            text-off="Disable"
            text-on="Enable"
          >
            <span></span>
          </ids-toggle-button>

          <ids-toggle-button
            ref={setLabelRef}
            icon-off="settings"
            icon-on="settings"
            text-off="Audible label"
            text-on="Inaudible label"
          >
            <span></span>
          </ids-toggle-button>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-progress-bar
            label="Progress Bar (max:1, value: 0.7)"
            max="1"
            value="0.7"
          ></ids-progress-bar>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsProgressBar;
