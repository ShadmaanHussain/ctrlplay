import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router";
import { HOME_PATH, BROWSE_PATH, NEWS_PATH } from "@/utils/pathConstants";

function CommonNavigation() {
  const location = useLocation();

  const isActive = (path : string) => location.pathname === path;

  return (
    <NavigationMenu className="mx-auto mt-8 sm:mx-0 sm:mt-0">
      <NavigationMenuList  className="flex-col gap-6 sm:flex-row sm:gap-0">
        <NavigationMenuItem>
          <Link to={HOME_PATH}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive(HOME_PATH) ? "bg-accent" : ""}`}>
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
