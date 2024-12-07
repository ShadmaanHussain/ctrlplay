import "./App.css";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";

import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
          Game Store coming soon...
        </h1>        
      </ThemeProvider>
    </>
  );
}

export default App;
