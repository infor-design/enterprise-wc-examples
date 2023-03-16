import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import 'ids-enterprise-wc/components/ids-text/ids-text';


const IdsText = () => {
  return (
    <>
      <IdsGrid auto>
        <ids-text font-size="12">Labels / Typography</ids-text>
      </IdsGrid>
      <IdsGrid auto>
        <IdsGridCell>
          <ids-text font-size="72">Size 72</ids-text>
          <ids-text font-size="60">Size 60</ids-text>
          <ids-text font-size="48">Size 48</ids-text>
          <ids-text font-size="40">Size 40</ids-text>
          <ids-text font-size="32">Size 32 (xl)</ids-text>
          <ids-text font-size="28">Size 28</ids-text>
          <ids-text font-size="24">Size 24 (lg)</ids-text>
          <ids-text font-size="20">Size 20</ids-text>
          <ids-text font-size="16">Size 16 (base)</ids-text>
          <ids-text font-size="14">Size 14 (sm)</ids-text>
          <ids-text font-size="12">Size 12 (xs)</ids-text>
          <ids-text font-size="10">Size 10</ids-text>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsText;
