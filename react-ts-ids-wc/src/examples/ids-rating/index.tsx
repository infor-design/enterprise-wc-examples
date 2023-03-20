import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-rating/ids-rating';


const IdsRating = () => {
  return (
    <>
      <IdsTitle>Rating Example</IdsTitle>

      <IdsGrid auto>
        <ids-text font-size="12" type="h1">
          Rating (4/5 stars)
        </ids-text>
      </IdsGrid>

      <IdsGrid auto>
        <IdsGridCell>
          <ids-rating value="4"></ids-rating>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid auto>
        <ids-text font-size="12" type="h2">
          Rating (3.5/5 Stars)
        </ids-text>
      </IdsGrid>

      <IdsGrid auto>
        <IdsGridCell>
          <ids-rating value="3.5" readonly="true"></ids-rating>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsRating;
