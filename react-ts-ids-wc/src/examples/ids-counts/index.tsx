import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-counts/ids-counts';


const IdsCounts = () => {
  return (
    <>
      <IdsTitle>Counts Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-counts color="base" href="#">
            <ids-text count-value>7</ids-text>
            <ids-text count-text>
              Active <br /> Opportunities
            </ids-text>
          </ids-counts>
        </IdsGridCell>
        <IdsGridCell>
          <ids-counts color="base" href="#">
            <ids-text count-text>
              Open <br /> Incidents
            </ids-text>
            <ids-text count-value>2</ids-text>
          </ids-counts>
        </IdsGridCell>
        <IdsGridCell>
          <ids-counts color="base" href="#">
            <ids-text count-text>
              Escalated <br /> Incidents
            </ids-text>
            <ids-text count-value>4</ids-text>
          </ids-counts>
        </IdsGridCell>
        <IdsGridCell>
          <ids-counts color="base" href="#">
            <ids-text count-value>7</ids-text>
            <ids-text count-text>
              Open <br /> Projects
            </ids-text>
          </ids-counts>
        </IdsGridCell>
        <IdsGridCell>
          <ids-counts color="base" href="#">
            <ids-text count-value>7</ids-text>
            <ids-text count-text>
              Active <br /> Contacts
            </ids-text>
          </ids-counts>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsCounts;
