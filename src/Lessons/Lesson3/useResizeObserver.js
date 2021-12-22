import { useState, useEffect, useRef } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.outerWidth);

  useResizeObserver(() => setWidth(window.outerWidth));

  return [width];
};

export const useResizeObserver = handler => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const observer = new ResizeObserver(handlerRef.current);

    observer.observe(document.getElementsByTagName("body")[0]);

    return () => {
      observer.unobserve(document.getElementsByTagName("body")[0]);
    };
  }, [handlerRef]);
};
