import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-hyperlink/ids-hyperlink';


const IdsHyperlink = () => {
  return (
    <>
      <IdsTitle>Hyperlink Example</IdsTitle>

      <IdsGrid auto-fit>
        <ids-text font-size="12" type="h1">
          Hyperlink
        </ids-text>
      </IdsGrid>
      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-hyperlink href="http://www.example.com" target="_blank">
            Normal Link
          </ids-hyperlink>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid auto-fit>
        <ids-text font-size="12" type="h1">
          Hyperlink (disabled)
        </ids-text>
      </IdsGrid>
      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-hyperlink
            href="http://www.example.com"
            disabled="true"
            target="_blank"
          >
            Disabled Link
          </ids-hyperlink>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid auto-fit>
        <ids-text font-size="12" type="h1">
          Hyperlink with Multiple Text Elements
        </ids-text>
      </IdsGrid>
      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-hyperlink
            href="http://www.example.com"
            target="_blank"
            text-decoration="none"
          >
            <ids-text font-size="20" color="unset">
              Part One
            </ids-text>
            <ids-text font-size="14" color="unset">
              Part Two
            </ids-text>
          </ids-hyperlink>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsHyperlink;
