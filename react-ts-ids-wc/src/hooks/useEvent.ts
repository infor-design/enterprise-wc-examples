import { useCallback, useEffect, useRef } from 'react';


type ReactUseRefType = ReturnType<typeof useRef<any>>;

export function useEvent<T extends Event | CustomEvent>(
  eventName: string,
  eventHandler: (event: T) => void,
  modalRef?: ReactUseRefType
): ReactUseRefType {
  const fallbackRef = useRef<any>();
  const ref = modalRef ?? fallbackRef;

  // Event handler to be used in attach and cleanup event listener
  const callback = useCallback((evt: Event) => eventHandler(evt as T), [eventHandler])

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const idsElement = ref?.current;

    // Attach event listeners
    idsElement?.addEventListener(eventName, callback);

    return function cleanup() {
      // Clean event listeners on component unmount
      idsElement?.removeEventListener(eventName, callback);
    }
  }, [eventName, callback, ref])

  return ref;
}

export default useEvent;