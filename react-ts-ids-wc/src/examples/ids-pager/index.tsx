import React, { useRef } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';

import type IdsPagerType from 'ids-enterprise-wc/components/ids-pager/ids-pager';
import 'ids-enterprise-wc/components/ids-pager/ids-pager';

const IdsPager = () => {
  const pagerRef = useRef<IdsPagerType>();

  return (
    <>
      <IdsTitle>Ids Pager Example</IdsTitle>

      <IdsGrid cols="3" gap="md">
        <IdsGridCell>
          <ids-pager
            ref={pagerRef}
            page-size="20"
            page-number="10"
            total="200"
          >
            <ids-pager-button first></ids-pager-button>
            <ids-pager-button previous></ids-pager-button>
            <ids-pager-input></ids-pager-input>
            <ids-pager-button next></ids-pager-button>
            <ids-pager-button last></ids-pager-button>
          </ids-pager>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid cols="3" gap="lg">
        <IdsGridCell>
          <ids-button
            appearance="secondary"
            // Changing 'disabled' attribute
            onClick={() => {
              pagerRef.current?.setAttribute('disabled', String(!pagerRef.current.disabled))
            }}
          >
            <span>Disable</span>
          </ids-button>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsPager;
