import React from 'react';
import IdsAbout from '../../components/ids-about/IdsAbout';
import IdsButton from '../../components/ids-button/IdsButton';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-text/ids-text';


const IdsAboutExample = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <IdsTitle>About Example</IdsTitle>

      <IdsGrid auto>
        <IdsGridCell>
          <IdsButton
            type="secondary"
            onClick={() => setModalOpen(!modalOpen)}
            disabled={modalOpen}
          >
            Show About Screen
          </IdsButton>
        </IdsGridCell>
      </IdsGrid>

      <IdsAbout
        appName="IDS Enterprise"
        name="Controls Example Application"
        content="Fashionable components for fashionable applications."
        icon="logo"
        version="Version No. XX"
        open={modalOpen}
        onOpen={() => setModalOpen(true)}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default IdsAboutExample;
