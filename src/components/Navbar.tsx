import { ModeToggle } from "@/components/dark-mode/mode-toggle";

function Navbar() {
  return (
    <nav className="py-4 px-8 border-b-gray-100 bg-background">
      <div className="container mx-auto flex items-center">
        <div className="text-2xl font-bold mr-10">
          CTRL<span className="text-red-600">PLAY</span>
        </div>
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
      </div>
    </nav>
  );
}

export default Navbar;
