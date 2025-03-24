import { throttle } from "lodash";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface MediaQueryContextProps {
  isMobileView: boolean;
  isTabletView: boolean;
}

export const MediaQueryContext = createContext<MediaQueryContextProps | undefined>(undefined);

interface MediaQueryProviderProps {
  children: ReactNode;
  threshold: number;
}

const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({
  children,
  threshold,
}) => {
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth < 640
  );

  const [isTabletView, setIsTabletView] = useState<boolean>(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsMobileView(window.innerWidth < 640);
      setIsTabletView(window.innerWidth < 768);
    }, 200);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return (
    <MediaQueryContext.Provider value={{isMobileView, isTabletView}}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export default MediaQueryProvider;
