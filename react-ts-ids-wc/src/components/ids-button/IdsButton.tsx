import React from 'react';
import type IdsButtonType from 'ids-enterprise-wc/components/ids-button/ids-button';

export interface IdsButtonClickEvent extends MouseEvent {
  target: IdsButtonType;
}

export interface IdsButtonProps {
  disabled?: boolean;
  id?: string;
  icon?: string;
  role?: string;
  iconAlign?: IdsButtonType['iconAlign'];
  appearance?: IdsButtonType['appearance'];
  onClick?: (evt: IdsButtonClickEvent) => void;
  children: any;
  noPadding?: boolean;
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
      role={props.role ?? 'button'}
      id={props.id}
      disabled={props.disabled}
      no-padding={props.noPadding}
      icon={props.icon}
      appearance={props.appearance}
      onClick={(evt: IdsButtonClickEvent) => props.onClick?.(evt)}
    >
      {props.children}
    </ids-button>
  );
};

export default IdsButton;