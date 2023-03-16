import React from 'react';
import IdsAbout from '../../components/ids-about/IdsAbout';
import IdsButton from '../../components/ids-button/IdsButton';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-text/ids-text';


const IdsAboutExample = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <IdsTitle>About Example</IdsTitle>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <IdsButton
            type="secondary"
            onClick={() => setModalOpen(!modalOpen)}
            disabled={modalOpen}
          >
            Show About Screen
          </IdsButton>
        </ids-layout-grid-cell>
      </ids-layout-grid>

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
