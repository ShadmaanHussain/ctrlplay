import useMediaQuery from "@/hooks/useMediaQuery";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { Link } from "react-router";
import MobileNavigation from "./MobileNavigation";
import CommonNavigation from "./CommonNavigation";

function Navbar() {
  const isMobileView = useMediaQuery(640);
  
  return (
    <div className="py-4 px-8 border-b-gray-100 bg-background">
      <div
        className={`container mx-auto flex items-center ${
          isMobileView ? "justify-between" : ""
        }`}
      >
        {isMobileView && <MobileNavigation />}
        <div
          className={`text-2xl font-bold ${
            isMobileView ? "text-center" : "mr-10"
          }`}
        >
          <Link to="/">
            CTRL<span className="text-red-600">PLAY</span>
          </Link>
        </div>
        {!isMobileView && <CommonNavigation />}
        <div className={!isMobileView ? "ml-auto" : ""}>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
