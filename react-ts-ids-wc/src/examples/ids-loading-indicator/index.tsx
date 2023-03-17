import { useRef, useState, useEffect } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsSpinboxType from 'ids-enterprise-wc/components/ids-spinbox/ids-spinbox';
import type IdsCheckboxType from 'ids-enterprise-wc/components/ids-checkbox/ids-checkbox';
import 'ids-enterprise-wc/components/ids-loading-indicator/ids-loading-indicator';
import 'ids-enterprise-wc/components/ids-spinbox/ids-spinbox';
import 'ids-enterprise-wc/components/ids-checkbox/ids-checkbox';

const IdsLoadingIndicator = () => {
  const circularSpinboxRef = useRef<IdsSpinboxType>();
  const linearSpinboxRef = useRef<IdsSpinboxType>();
  const circularCheckboxRef = useRef<IdsSpinboxType>();
  const linearCheckboxRef = useRef<IdsCheckboxType>();
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

    const handleCircular = (e: any) => {
      setCircularProgress(e?.target?.value);
    };

    const handleLinear = (e: any) => {
      setLinearProgress(e?.target?.value);
    };

    const handleCircularCheckbox = (e: any) => {
      setCircularPercentageVisible(e?.detail?.checked);
    };

    const handleLinearCheckbox = (e: any) => {
      setLinearPercentageVisible(e.detail.checked);
    };

    circularSpinbox?.addEventListener('change', handleCircular);
    linearSpinbox?.addEventListener('change', handleLinear);
    circularCheckbox?.addEventListener('change', handleCircularCheckbox);
    linearCheckbox?.addEventListener('change', handleLinearCheckbox);

    return () => {
      circularSpinbox?.removeEventListener('change', handleCircular);
      linearSpinbox?.removeEventListener('change', handleLinear);
      circularCheckbox?.removeEventListener('change', handleCircularCheckbox);
      linearCheckbox?.removeEventListener('change', handleLinearCheckbox);
    };
  }, []);

  return (
    <>
      <IdsTitle>Loading Indicator Example</IdsTitle>

      <IdsGrid auto>
        <ids-text font-size="12" type="h1">
          Circular Loading Indicator
        </ids-text>
      </IdsGrid>
      <IdsGrid gap="md" cols="4">
        <IdsGridCell justify="center">
          <ids-loading-indicator></ids-loading-indicator>
        </IdsGridCell>
        <IdsGridCell justify="center">
          <IdsGrid gap="md" auto>
            <IdsGridCell justify="center">
              <ids-loading-indicator
                percentage-visible={circularPercentageVisible}
                progress={circularProgress}
              ></ids-loading-indicator>
            </IdsGridCell>
            <IdsGridCell justify="center">
              <ids-spinbox
                ref={circularSpinboxRef}
                min="0"
                max="100"
                step="5"
                value={initialCircularProgress}
                label="Progress Value"
              ></ids-spinbox>
              <ids-checkbox ref={circularCheckboxRef} label="Percentage Visible"></ids-checkbox>
            </IdsGridCell>
          </IdsGrid>
        </IdsGridCell>
      </IdsGrid>
      <IdsGrid auto>
        <ids-text font-size="12" type="h1">
          Linear Loading Indicator
        </ids-text>
      </IdsGrid>
      <IdsGrid gap="md" cols="4">
        <IdsGridCell>
          <ids-loading-indicator linear></ids-loading-indicator>
        </IdsGridCell>
        <IdsGridCell>
          <IdsGrid cols="1" gap="md" auto noMargins>
            <IdsGridCell>
              <ids-loading-indicator
                percentage-visible={linearPercentageVisible}
                progress={linearProgress}
                linear="true"
              ></ids-loading-indicator>
            </IdsGridCell>
            <IdsGridCell justify="center">
              <ids-spinbox
                ref={linearSpinboxRef}
                min="0"
                max="100"
                step="5"
                value={initialLinearProgress}
                label="Progress Value"
              ></ids-spinbox>
              <ids-checkbox ref={linearCheckboxRef} label="Percentage Visible"></ids-checkbox>
            </IdsGridCell>
          </IdsGrid>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsLoadingIndicator;
