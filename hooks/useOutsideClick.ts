import { useEffect, useRef, RefObject } from 'react';

export function useOutsideClick(
  handler: () => void,
  listenCapturing: boolean = true,
): { ref: RefObject<HTMLElement> } {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent): void {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    document.addEventListener('click', handleClick, listenCapturing);

    return () => {
      document.removeEventListener('click', handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return { ref };
}
