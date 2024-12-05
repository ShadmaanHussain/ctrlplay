import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

function Navbar() {
  const isMobileView = useMediaQuery(600);

  const MobileMenu = (
    <Sheet key={"left"}>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sidebar</Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">Sample</div>
          <div className="grid grid-cols-4 items-center gap-4">Division</div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );

  const desktopMenu = (
    <ul className="flex items-center w-full">
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
  );

  return (
    <>
      <nav className="py-4 px-8 border-b-gray-100 bg-background">
        <div className="container mx-auto flex items-center">
          <div className="text-2xl font-bold mr-10">
            CTRL<span className="text-red-600">PLAY</span>
          </div>
          {isMobileView ? MobileMenu : desktopMenu}
        </div>
      </nav>

      <div className="grid grid-cols-2 gap-2">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline">{side}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  Sample
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  Division
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </>
  );
}

export default Navbar;
