import { Route, Routes } from "react-router";
import BrowsePage from "@/pages/BrowsePage";
import { BROWSE_PATH, NEWS_PATH } from "./constants/PathConstants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
            Game Store coming soon...
          </h1>
        }
      />
      <Route path={BROWSE_PATH} element={<BrowsePage />} />
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
  );
};

export default AppRoutes;
