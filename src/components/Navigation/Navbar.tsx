import useMediaQuery from "@/hooks/useMediaQuery";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";

function Navbar() {
  const isMobileView = useMediaQuery(600);

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
          CTRL<span className="text-red-600">PLAY</span>
        </div>
        {!isMobileView && <DesktopNavigation />}
        <div className={!isMobileView ? 'ml-auto' : ''}>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
