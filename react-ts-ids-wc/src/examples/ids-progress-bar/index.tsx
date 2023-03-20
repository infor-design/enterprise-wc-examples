import React, { useRef, useState } from 'react';
import useEvent from '../../hooks/useEvent';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsProgressBarType from 'ids-enterprise-wc/components/ids-progress-bar/ids-progress-bar';
import type IdsToggleButtonType from 'ids-enterprise-wc/components/ids-toggle-button/ids-toggle-button';
import 'ids-enterprise-wc/components/ids-toggle-button/ids-toggle-button';
import 'ids-enterprise-wc/components/ids-progress-bar/ids-progress-bar';


const IdsProgressBar = () => {
  const progressRef = useRef<IdsProgressBarType>();
  const setValueRef = useRef<IdsToggleButtonType>();
  const setDisableRef = useRef<IdsToggleButtonType>();
  const setLabelRef = useRef<IdsToggleButtonType>();
  const [origValue, setOrigValue] = useState('');

  // Event handler to be used in attach and cleanup event listener
  // Update and reset value
  const handleUpdateVal = (e: any) => {
    const element = progressRef.current as IdsProgressBarType;

    // Get original value
    if (!origValue) setOrigValue(element?.value ?? '');

    if (element?.disabled) {
      return;
    }

    e?.target?.toggle?.();
    const max = '100';
    if (element) element.value = element.value === max ? origValue : max;
  };

  // Toggle disable/enable
  const handleDisabled = (e: any) => {
    const element = progressRef.current as IdsProgressBarType;
    e?.target?.toggle?.();
    element.disabled = !element.disabled;
  };

  // Toggle label audible
  const handleLabel = (e: any) => {
    const element = progressRef.current as IdsProgressBarType;
    if (element?.disabled) {
      return;
    }
    e?.target?.toggle?.();
    element.labelAudible = !element.labelAudible;
  };

  useEvent('click', handleUpdateVal, setValueRef);
  useEvent('click', handleDisabled, setDisableRef);
  useEvent('click', handleLabel, setLabelRef);

  return (
    <>
      <IdsTitle>Ids Progress Bar Example</IdsTitle>

      <IdsGrid cols="3" gap="md">
        <IdsGridCell>
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
        </IdsGridCell>

        <IdsGridCell>
          <ids-progress-bar
            label="Progress Bar (max:1, value: 0.7)"
            max="1"
            value="0.7"
          ></ids-progress-bar>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsProgressBar;
