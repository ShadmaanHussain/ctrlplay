import useMediaQuery from "@/hooks/useMediaQuery";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

function Navbar() {
  const isMobileView = useMediaQuery(600);

  return (
    <nav className="py-4 px-8 border-b-gray-100 bg-background">
      <div
        className={`container mx-auto flex items-center ${
          isMobileView ? "justify-between" : ""
        }`}
      >
        <div
          className={`text-2xl font-bold mr-10 ${
            isMobileView ? "text-center" : ""
          }`}
        >
          CTRL<span className="text-red-600">PLAY</span>
        </div>
        {isMobileView ? <MobileNavigation /> : <DesktopNavigation />}
      </div>
    </nav>
  );
}

export default Navbar;
