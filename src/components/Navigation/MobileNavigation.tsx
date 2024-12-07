import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Button } from "@/components/ui/button";
  import { Menu } from "lucide-react";
  import { ModeToggle } from "@/components/dark-mode/mode-toggle";

function MobileNavigation() {
  return (
    <Sheet key={"left"}>
      <SheetTrigger>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col items-center w-full">
          <li className="mr-5">
            <a href="#">Discover</a>
          </li>
          <li className="mr-5">
            <a href="#">Browse</a>
          </li>
          <li className="mr-5">
            <a href="#">News</a>
          </li>
          <li className="ml-auto">
            <ModeToggle />
          </li>
        </ul>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
