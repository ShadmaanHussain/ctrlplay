import "./App.css";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";

import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
                Game Store coming soon...
              </h1>
            }
          />
          <Route
            path="discover"
            element={
              <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
                Discover games that are to your liking here...
              </h1>
            }
          />
          <Route
            path="browse"
            element={
              <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
                Browse from a variety of games...
              </h1>
            }
          />
          <Route
            path="news"
            element={
              <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
                Know everything that's going on in the gaming community...
              </h1>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
