import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router";

function CommonNavigation() {
  const location = useLocation();
  console.log(location);

  const isActive = (path : string) => location.pathname === path;

  return (
    <NavigationMenu className="mx-auto mt-8 sm:mx-0 sm:mt-0">
      <NavigationMenuList  className="flex-col gap-6 sm:flex-row sm:gap-0">
        <NavigationMenuItem>
          <Link to="/discover">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive("/discover") ? "bg-accent" : ""}`}>
              Discover
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/browse">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive("/browse") ? "bg-accent" : ""}`}>
              Browse
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/news">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive("/news") ? "bg-accent" : ""}`}>
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default CommonNavigation;
