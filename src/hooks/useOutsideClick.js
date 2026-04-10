import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef();

  // Closing the modal when clicked outside
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", handleClick, listenCapture);

    return () =>
      document.removeEventListener("click", handleClick, listenCapture);
  }, [handler, listenCapture]);

  return ref;
}
