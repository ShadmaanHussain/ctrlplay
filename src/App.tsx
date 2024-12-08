import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router";
import { DISCOVER_PATH, BROWSE_PATH, NEWS_PATH } from "./utils/pathConstants";

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
            path={DISCOVER_PATH}
            element={
              <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
                Discover games that are to your liking here...
              </h1>
            }
          />
          <Route
            path={BROWSE_PATH}
            element={
              <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
                Browse from a variety of games...
              </h1>
            }
          />
          <Route
            path={NEWS_PATH}
            element={
              <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
                Know everything that's going on in the gaming community...
              </h1>
            }
          />
          <Route
            path="*"
            element={
              <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
                I think you're in the wrong place pal. Check the URL
              </h1>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
