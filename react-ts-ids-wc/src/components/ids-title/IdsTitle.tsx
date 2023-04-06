import React from 'react';
import IdsGrid, { IdsGridCell } from '../ids-grid/IdsGrid';
import type IdsTextType from 'ids-enterprise-wc/components/ids-text/ids-text';
import 'ids-enterprise-wc/components/ids-text/ids-text';


interface IdsTitleProps {
  fontSize?: IdsTextType['fontSize'];
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: any;
}

export const IdsTitle: React.FC<IdsTitleProps> = (props) => {
  return (
    <IdsGrid auto>
      <IdsGridCell>
        <ids-text
          font-size={props.fontSize ?? 12}
          type={props.type ?? 'h1'}
        >
          {props.children}
        </ids-text>
      </IdsGridCell>
    </IdsGrid>
  );
}

export default IdsTitle;