import React from 'react';
import type IdsAboutType from 'ids-enterprise-wc/components/ids-about/ids-about';
import 'ids-enterprise-wc/components/ids-about/ids-about';

interface IdsAboutProps {
  name?: string; 
  version?: string; 
  children?: any;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
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
      {props.children}
    </ids-about>
  );
};

export default IdsAbout;