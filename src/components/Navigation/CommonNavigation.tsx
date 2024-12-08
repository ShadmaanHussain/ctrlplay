import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router";
import { DISCOVER_PATH, BROWSE_PATH, NEWS_PATH } from "@/utils/pathConstants";

function CommonNavigation() {
  const location = useLocation();

  const isActive = (path : string) => {console.log(location.pathname === path); return location.pathname === path};

  return (
    <NavigationMenu className="mx-auto mt-8 sm:mx-0 sm:mt-0">
      <NavigationMenuList  className="flex-col gap-6 sm:flex-row sm:gap-0">
        <NavigationMenuItem>
          <Link to={DISCOVER_PATH}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive(DISCOVER_PATH) ? "bg-accent" : ""}`}>
              Discover
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={BROWSE_PATH}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive(BROWSE_PATH) ? "bg-accent" : ""}`}>
              Browse
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={NEWS_PATH}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive(NEWS_PATH) ? "bg-accent" : ""}`}>
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default CommonNavigation;
