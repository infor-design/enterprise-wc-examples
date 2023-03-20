import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-wizard/ids-wizard';


const IdsWizard = () => {
  return (
    <>
      <IdsTitle>Wizard Example</IdsTitle>

      <IdsGrid cols="4">
        <IdsGridCell id="ex-ids-wizard-parent-clickable" colSpan="2">
          <ids-wizard step-number="3">
            <ids-wizard-step>Step One</ids-wizard-step>
            <ids-wizard-step>Step Two</ids-wizard-step>
            <ids-wizard-step>Step Three</ids-wizard-step>
            <ids-wizard-step>Step Four</ids-wizard-step>
          </ids-wizard>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsWizard;
