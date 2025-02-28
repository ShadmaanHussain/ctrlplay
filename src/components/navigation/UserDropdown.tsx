import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "firebase/auth";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SignOut } from "@/lib/firebaseAuthUtils";
import { LogOut } from "lucide-react";
import { UserRound } from "lucide-react";

interface UserDropdownProps {
  user: User;
}

const cleanUrl = (url: string) => url.split("=")[0];

const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
  const isMobileView = useMediaQuery();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full sm:w-auto flex justify-center items-center">
        <Button className="w-full sm:w-auto py-6 sm:p-0 sm:m-0 sm:rounded-full sm:bg-secondary sm:hover:bg-secondary">
          <Avatar className="w-6 h-6 sm:w-10 sm:h-10">
            <AvatarImage
              src={user.photoURL ? cleanUrl(user.photoURL) : undefined}
              title={user.displayName ?? undefined}
            />
            <AvatarFallback className="bg-primary">
              <UserRound />
            </AvatarFallback>
          </Avatar>
          {isMobileView && (
            <h1
              className="ml-3 truncate max-w-[150px] sm:max-w-none"
              title={user.displayName ?? undefined}
            >
              Hi, {user.displayName}
            </h1>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="bg-foreground text-secondary flex items-center justify-center font-bold"
          onClick={SignOut}
        >
          <LogOut /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
