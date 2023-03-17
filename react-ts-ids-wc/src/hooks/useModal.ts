import React, { useRef } from 'react';
import useEvent from './useEvent';

type ReactUseRefType = ReturnType<typeof useRef<any>>;

export interface IdsModalProps {
  open?: boolean;
  onOpen?: (e: any) => void;
  onClose?: (e: any) => void;
}

export function useModal(props: IdsModalProps, modalRef?: ReactUseRefType): ReactUseRefType {
  const fallbackRef = useRef<any>();
  const ref = modalRef ?? fallbackRef;

  useEvent('aftershow', (e: any) => props.onOpen?.(e), ref);
  useEvent('afterhide', (e: any) => props.onClose?.(e), ref);

  React.useEffect(() => {
    const idsElement = ref?.current;

    if (props.open && !idsElement?.visible) {
      idsElement?.show?.();
    } else if (props.open && idsElement?.visible) {
      idsElement?.hide?.();
    }
  }, [props, ref]);

  return ref;
}

export default useModal;