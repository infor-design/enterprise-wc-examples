import React from 'react';
import 'ids-enterprise-wc/components/ids-layout-flex/ids-layout-flex';
import 'ids-enterprise-wc/components/ids-layout-flex/ids-layout-flex-item';
// import type IdsLayoutFlex from 'ids-enterprise-wc/components/ids-layout-flex/ids-layout-flex';
// import type IdsLayoutFlexItem from  'ids-enterprise-wc/components/ids-layout-flex/ids-layout-flex-item';


interface IdsFlexProps {
  id?: string;
  children?: any;
  gap?: React.CSSProperties['gap'];
  grow?: React.CSSProperties['flexGrow'];
  display?: 'flex' | 'inline-flex';
  direction?: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  alignContent?: React.CSSProperties['alignContent'];
  alignItems?: React.CSSProperties['alignItems'];
  wrap?: React.CSSProperties['flexWrap'];
}

interface IdsFlexItemProps {
  id?: string;
  children?: any;
  alignSelf?: React.CSSProperties['alignSelf'];
  grow?: React.CSSProperties['flexGrow'];
  shrink?: React.CSSProperties['flexShrink'];
}

export const IdsFlex: React.FC<IdsFlexProps> = (props) => {
  return (
    <ids-layout-flex
      id={props.id}
      gap={props.gap}
      grow={props.grow}
      display={props.display ?? 'flex'}
      direction={props.direction}
      justify-content={props.justify}
      alignContent={props.alignContent}
      alignItems={props.alignItems}
      wrap={props.wrap}
    >
      {props.children}
    </ids-layout-flex>
  );
};

export const IdsFlexItem: React.FC<IdsFlexItemProps> = (props) => {
  return (
    <ids-layout-flex-item
      id={props.id}
      alignSelf={props.alignSelf}
      grow={props.grow}
      shrink={props.shrink}
    >
      {props.children}
    </ids-layout-flex-item>
  );
};

export default IdsFlex;