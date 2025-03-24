import { Link } from "react-router";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import useMediaQuery from "@/hooks/useMediaQuery";

function Navbar() {
  const { isMobileView } = useMediaQuery();

  return (
    <div className="py-4 px-8 border-b-gray-100 bg-background w-full">
      <div
        className="container w-full mx-auto flex items-center flex-grow"
      >
        {isMobileView && <MobileNavigation />}
        <div
          className={`text-2xl font-bold ${
            isMobileView ? "text-center mx-auto" : "mr-10"
          }`}
        >
          <Link to="/">
            CTRL<span className="text-red-600">PLAY</span>
          </Link>
        </div>
        {!isMobileView && <DesktopNavigation />}
      </div>
    </div>
  );
}

export default Navbar;
