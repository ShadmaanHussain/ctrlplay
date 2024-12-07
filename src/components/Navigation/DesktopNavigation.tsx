import { ModeToggle } from "@/components/dark-mode/mode-toggle";

function DesktopNavigation() {
  return (
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
  )
}

export default DesktopNavigation