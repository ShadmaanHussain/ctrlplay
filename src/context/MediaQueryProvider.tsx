import { throttle } from "lodash";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export const MediaQueryContext = createContext<boolean | undefined>(undefined);

interface MediaQueryProviderProps {
  children: ReactNode;
  threshold: number;
}

const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({
  children,
  threshold,
}) => {
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth < threshold
  );

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsMobileView(window.innerWidth < threshold);
    }, 200);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return (
    <MediaQueryContext.Provider value={isMobileView}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export default MediaQueryProvider;
