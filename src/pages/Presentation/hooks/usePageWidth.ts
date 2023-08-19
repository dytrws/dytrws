import { useEffect, useState } from "react";

export const usePageWidth = (ratio: number = 0) => {
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      const maxWidth = (window.innerHeight + 100) * ratio;

      if (maxWidth && window.innerWidth > maxWidth) {
        setPageWidth(maxWidth);
      } else {
        setPageWidth(window.innerWidth);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ratio]);

  return pageWidth;
};
