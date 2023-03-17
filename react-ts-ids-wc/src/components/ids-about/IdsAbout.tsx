import React from 'react';
import { useModal, IdsModalProps } from '../../hooks/useModal';
import 'ids-enterprise-wc/components/ids-about/ids-about';
import 'ids-enterprise-wc/components/ids-icon/ids-icon';
import 'ids-enterprise-wc/components/ids-text/ids-text';

interface IdsAboutProps extends IdsModalProps {
  appName?: string;
  name?: string;
  content?: string;
  icon?: string;
  version?: string;
  children?: any;
}

export const IdsAbout: React.FC<IdsAboutProps> = (props) => {
  const [modalRef, toggleModal] = useModal(props);

  return (
    <ids-about
      ref={modalRef}
      product-name={props.name}
      product-version={props.version}
    >
      {props.icon && (
        <ids-icon slot="icon" icon={props.icon} viewbox="0 0 35 34" size="xxl"></ids-icon>
      )}

      {props.appName && (
        <ids-text slot="appName" type="h1" font-size="24" font-weight="bold">
          {props.appName}
        </ids-text>
      )}

      {props.content && (
        <ids-text slot="content" type="p">
          {props.content}
        </ids-text>
      )}

      {props.children}
    </ids-about>
  );
};

export default IdsAbout;