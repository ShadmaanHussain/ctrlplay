import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

function CommonNavigation() {
  return (
    <NavigationMenu className="mx-auto mt-8 sm:mx-0 sm:mt-0">
      <NavigationMenuList  className="flex-col gap-6 sm:flex-row sm:gap-0">
        <NavigationMenuItem>
          <Link to="/discover">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Discover
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/browse">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Browse
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/news">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default CommonNavigation;
