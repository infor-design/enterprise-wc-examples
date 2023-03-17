import React, { useRef } from 'react';

type ReactUseRefType = ReturnType<typeof useRef<any>>;

export interface IdsModalProps {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function useModal(props: IdsModalProps, modalRef?: ReactUseRefType) {
  const fallbackRef = useRef<any>();

  const onOpen = React.useCallback(() => props.onOpen?.(), [props]);
  const onClose = React.useCallback(() => props.onClose?.(), [props]);

  const ref = modalRef ?? fallbackRef;
  const idsElement = ref?.current;

  React.useEffect(() => {
    idsElement?.addEventListener('aftershow', onOpen);
    idsElement?.addEventListener('afterhide', onClose);

    return function cleanup() {
      idsElement?.removeEventListener('aftershow', onOpen);
      idsElement?.removeEventListener('afterhide', onClose);
    }
  }, [onClose, onOpen, idsElement]);

  const toggleModal = React.useCallback(() => {
    if (props.open && !idsElement?.visible) {
      idsElement?.show?.();
    } else if (props.open && idsElement?.visible) {
      idsElement?.hide?.();
    }
  }, [props, idsElement]);

  React.useEffect(toggleModal, [toggleModal]);

  return [ref, toggleModal];
}

export default useModal;