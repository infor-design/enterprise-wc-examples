import React, { useRef, useState, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-loading-indicator/ids-loading-indicator';
import 'ids-enterprise-wc/components/ids-spinbox/ids-spinbox';
import 'ids-enterprise-wc/components/ids-checkbox/ids-checkbox';

const IdsLoadingIndicator = () => {
  const circularSpinboxRef = useRef();
  const linearSpinboxRef = useRef();
  const circularCheckboxRef = useRef();
  const linearCheckboxRef = useRef();
  const initialCircularProgress = 30;
  const initialLinearProgress = 20;
  const [circularProgress, setCircularProgress] = useState(initialCircularProgress);
  const [linearProgress, setLinearProgress] = useState(initialLinearProgress);
  const [circularPercentageVisible, setCircularPercentageVisible] = useState(false);
  const [linearPercentageVisible, setLinearPercentageVisible] = useState(false);

  useEffect(() => {
    const circularSpinbox = circularSpinboxRef.current;
    const linearSpinbox = linearSpinboxRef.current;
    const circularCheckbox = circularCheckboxRef.current;
    const linearCheckbox = linearCheckboxRef.current;

    const handleCircular = e => {
      setCircularProgress(e.target.value);
    };

    const handleLinear = e => {
      setLinearProgress(e.target.value);
    };

    const handleCircularCheckbox = e => {
      setCircularPercentageVisible(e.detail.checked);
    };

    const handleLinearCheckbox = e => {
      setLinearPercentageVisible(e.detail.checked);
    };

    circularSpinbox.addEventListener('change', handleCircular);
    linearSpinbox.addEventListener('change', handleLinear);
    circularCheckbox.addEventListener('change', handleCircularCheckbox);
    linearCheckbox.addEventListener('change', handleLinearCheckbox);

    return () => {
      circularSpinbox.removeEventListener('change', handleCircular);
      linearSpinbox.removeEventListener('change', handleLinear);
      circularCheckbox.removeEventListener('change', handleCircularCheckbox);
      linearCheckbox.removeEventListener('change', handleLinearCheckbox);
    };
  }, []);

  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          Circular Loading Indicator
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid gap="md" cols="4">
        <ids-layout-grid-cell justify="center">
          <ids-loading-indicator></ids-loading-indicator>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell justify="center">
          <ids-layout-grid gap="md" auto="true">
            <ids-layout-grid-cell justify="center">
              <ids-loading-indicator
                percentage-visible={circularPercentageVisible}
                progress={circularProgress}
              ></ids-loading-indicator>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell justify="center">
              <ids-spinbox
                ref={circularSpinboxRef}
                min="0"
                max="100"
                step="5"
                value={initialCircularProgress}
                label="Progress Value"
              ></ids-spinbox>
              <ids-checkbox ref={circularCheckboxRef} label="Percentage Visible"></ids-checkbox>
            </ids-layout-grid-cell>
          </ids-layout-grid>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          Linear Loading Indicator
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid gap="md" cols="4">
        <ids-layout-grid-cell>
          <ids-loading-indicator linear></ids-loading-indicator>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-layout-grid gap="md" auto="true" cols="1" no-margins="true">
            <ids-layout-grid-cell>
              <ids-loading-indicator
                percentage-visible={linearPercentageVisible}
                progress={linearProgress}
                linear="true"
              ></ids-loading-indicator>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell justify="center">
              <ids-spinbox
                ref={linearSpinboxRef}
                min="0"
                max="100"
                step="5"
                value={initialLinearProgress}
                label="Progress Value"
              ></ids-spinbox>
              <ids-checkbox ref={linearCheckboxRef} label="Percentage Visible"></ids-checkbox>
            </ids-layout-grid-cell>
          </ids-layout-grid>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsLoadingIndicator;
