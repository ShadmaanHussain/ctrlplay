import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import CommonNavigation from "./CommonNavigation";

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
          <SheetTitle className="text-2xl">Menu</SheetTitle>
        </SheetHeader>
        <CommonNavigation />
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
