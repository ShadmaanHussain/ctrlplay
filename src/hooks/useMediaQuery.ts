import { MediaQueryContext } from "@/context/MediaQueryProvider";
import { useContext } from "react";

function useMediaQuery() {
  const isMobileView = useContext(MediaQueryContext);
  return isMobileView;
}

export default useMediaQuery;
