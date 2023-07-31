import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-card/ids-card';

const IdsCard = () => {
  return (
    <>
      <IdsTitle>Cards Example</IdsTitle>

      <IdsGrid cols="1" gap="md" padding-x="md">
        <IdsGridCell>
          <ids-card>
            <div slot="card-header">
              <ids-text font-size="20" type="h2" overflow="ellipsis" tooltip="true">
                Card Title One
              </ids-text>
            </div>
            <div slot="card-content"></div>
            <div slot="card-footer">
              <ids-text font-size="20" type="h2" overflow="ellipsis" tooltip="true">
                Card footer One
              </ids-text>
            </div>
          </ids-card>
        </IdsGridCell>
        <IdsGridCell>
          <ids-card actionable="true">
            <div slot="card-content">
              <ids-text font-size="16" type="p">
                Actionable Button Card
              </ids-text>
            </div>
          </ids-card>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsCard;