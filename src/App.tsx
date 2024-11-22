import "./App.css";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import { ModeToggle } from "./components/dark-mode/mode-toggle";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Taxing Laughter: The Joke Tax Chronicles
        </h1>
        <Button>Click Me</Button>
        <ModeToggle />
      </ThemeProvider>
    </>
  );
}

export default App;
