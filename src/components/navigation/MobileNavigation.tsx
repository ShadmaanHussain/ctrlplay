import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import DesktopNavigation from "./DesktopNavigation";

function MobileNavigation() {
  return (
    <Sheet key={"left"}>
      <SheetTrigger>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col sm:flex-row" side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-2xl">Menu</SheetTitle>
        </SheetHeader>
        <DesktopNavigation />
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
