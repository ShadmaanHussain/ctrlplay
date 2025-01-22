import { throttle } from "lodash";
import { useEffect, useState } from "react";

function useMediaQuery(threshold: number = 640) {
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth < threshold
  );

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsMobileView(window.innerWidth < threshold);
    }, 200);
    window.addEventListener("resize", handleResize);
  }, [threshold]);

  return isMobileView;
}

export default useMediaQuery;
