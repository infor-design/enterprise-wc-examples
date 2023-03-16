import React from 'react';
import type IdsAboutType from 'ids-enterprise-wc/components/ids-about/ids-about';
import 'ids-enterprise-wc/components/ids-about/ids-about';
import 'ids-enterprise-wc/components/ids-icon/ids-icon';
import 'ids-enterprise-wc/components/ids-text/ids-text';

interface IdsAboutProps {
  appName?: string;
  name?: string;
  content?: string;
  icon?: string;
  version?: string; 
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: any;
}

export const IdsAbout: React.FC<IdsAboutProps> = (props) => {
  const aboutRef = React.useRef<IdsAboutType>();

  React.useEffect(() => {
    aboutRef.current?.addEventListener('aftershow', () => props.onOpen?.());
    aboutRef.current?.addEventListener('afterhide', () => props.onClose?.());

    if (props.open && !aboutRef.current?.visible) {
      aboutRef.current?.show?.();
    } else if (props.open && aboutRef.current?.visible) {
      aboutRef.current?.hide?.();
    }
  }, [props]);

  return (
    <ids-about
      ref={aboutRef}
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