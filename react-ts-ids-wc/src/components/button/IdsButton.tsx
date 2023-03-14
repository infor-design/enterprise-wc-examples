import React from 'react';
import type IdsButtonType from 'ids-enterprise-wc/components/ids-button/ids-button';
// import type { IdsButtonType, IdsButtonIconAlignment } from 'ids-enterprise-wc/components/ids-button/ids-button-common';

interface ButtonClickEvent extends MouseEvent {
  target: IdsButtonType;
}

interface IdsButtonProps {
  disabled?: boolean;
  icon?: string;
  iconAlign?: IdsButtonType['iconAlign'];
  type?: IdsButtonType['type'];
  onClick?: (evt: ButtonClickEvent) => void;
  children: any;
}

export const IdsButton: React.FC<IdsButtonProps> = (props) => {
  const buttonRef = React.useRef<IdsButtonType>();

  React.useEffect(() => {
    const buttonElement = buttonRef.current;
    if (buttonElement) {
      buttonElement.iconAlign = props.iconAlign;
    }
  }, [props]);

  return (
    <ids-button
      ref={buttonRef}
      disabled={!!props.disabled}
      icon={props.icon}
      type={props.type}
      onClick={(evt: ButtonClickEvent) => props.onClick?.(evt)}
    >
      {props.children}
    </ids-button>
  );
};

export default IdsButton;