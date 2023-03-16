import React from 'react';
import type IdsTextType from 'ids-enterprise-wc/components/ids-text/ids-text';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell';
import 'ids-enterprise-wc/components/ids-text/ids-text';


interface IdsTitleProps {
  fontSize?: IdsTextType['fontSize'];
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: any;
}

export const IdsTitle: React.FC<IdsTitleProps> = (props) => {
  return (
    <ids-layout-grid auto="true">
      <ids-layout-grid-cell>
        <ids-text
          font-size={props.fontSize ?? 20}
          type={props.type ?? 'h1'}
        >
          <strong>{props.children}</strong>
        </ids-text>
      </ids-layout-grid-cell>
    </ids-layout-grid>
  );
}

export default IdsTitle;