import { useEffect, useRef } from 'react';


type ReactUseRefType<T> = ReturnType<typeof useRef<T>>;

export function useEvent<T extends Element>(
  eventName: string,
  eventHandler: (evt: Event) => void,
  modalRef?: ReactUseRefType<T>
): ReactUseRefType<T> {

  const fallbackRef = useRef<T>();
  const ref = modalRef ?? fallbackRef;

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const idsElement = ref?.current;

    // Event handler to be used in attach and cleanup event listener
    const callback = (evt: Event) => eventHandler(evt);

    // Attach event listeners
    idsElement?.addEventListener(eventName, callback);

    return function cleanup() {
      // Clean event listeners on component unmount
      idsElement?.removeEventListener(eventName, callback);
    }
  }, [eventName, eventHandler, ref])

  return ref;
}

export default useEvent;