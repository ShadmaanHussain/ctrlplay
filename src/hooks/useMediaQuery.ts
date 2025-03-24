import { MediaQueryContext } from "@/context/MediaQueryProvider";
import { useContext } from "react";

function useMediaQuery() {
  const mediaQuery = useContext(MediaQueryContext);
  if(!mediaQuery) {
    throw new Error("useMediaQuery must be used within a MediaQueryProvider");
  }
  return mediaQuery;
}

export default useMediaQuery;
