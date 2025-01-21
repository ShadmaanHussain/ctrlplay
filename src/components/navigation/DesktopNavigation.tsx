import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router";
import { HOME_PATH, BROWSE_PATH, NEWS_PATH } from "@/constants/pathConstants";
import { SignUpWithGoogle, SignOut } from "@/lib/firebaseAuthUtils";
import { Button } from "../ui/button";
import { ModeToggle } from "../dark-mode/mode-toggle";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

const DesktopNavigation = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { user, loading } = authContext;
  console.log(user);
  console.log(loading);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-100 flex flex-col sm:flex-row justify-between flex-grow gap-6 sm:gap-0">
      <NavigationMenu className="mx-auto sm:mx-0 sm:mt-0 flex-grow">
        <NavigationMenuList className="flex-col gap-6 sm:flex-row sm:gap-0">
          <NavigationMenuItem>
            <Link to={HOME_PATH}>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${
                  isActive(HOME_PATH) ? "bg-accent" : ""
                }`}
              >
                Discover
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to={BROWSE_PATH}>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${
                  isActive(BROWSE_PATH) ? "bg-accent" : ""
                }`}
              >
                Browse
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to={NEWS_PATH}>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${
                  isActive(NEWS_PATH) ? "bg-accent" : ""
                }`}
              >
                News
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center flex-grow sm:mt-0 flex-col-reverse sm:flex-row sm:justify-end gap-6">
        {user ? (
          <Button className="w-full sm:w-auto" onClick={SignOut}>Sign Out</Button>
        ) : (
          <Button className="w-full sm:w-auto" onClick={SignUpWithGoogle}>Sign In</Button>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default DesktopNavigation;
