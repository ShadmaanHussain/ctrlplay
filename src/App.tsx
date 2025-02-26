import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import Navbar from "./components/navigation/Navbar";
import { AuthProvider } from "./context/AuthProvider";
import AppRoutes from "@/AppRoutes";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <QueryClientProvider client={queryClient}>
              <Navbar />
              <AppRoutes />
            </QueryClientProvider>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
