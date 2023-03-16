import React from 'react';
import IdsAbout from '../../components/ids-about/IdsAbout';
import IdsButton from '../../components/ids-button/IdsButton';

import 'ids-enterprise-wc/components/ids-icon/ids-icon';
import 'ids-enterprise-wc/components/ids-text/ids-text';

const IdsAboutExample = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <IdsAbout
        name="Controls Example Application"
        version="Version No. XX"
        open={modalOpen}
        onOpen={() => setModalOpen(true)}
        onClose={() => setModalOpen(false)}
      >
        <ids-icon slot="icon" icon="logo" viewbox="0 0 35 34" size="xxl"></ids-icon>
        <ids-text slot="appName" type="h1" font-size="24" font-weight="bold">
          IDS Enterprise
        </ids-text>
        <ids-text slot="content" type="p">
          Fashionable components for fashionable applications.
        </ids-text>
      </IdsAbout>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            About
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

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
    </>
  );
};

export default IdsAboutExample;
