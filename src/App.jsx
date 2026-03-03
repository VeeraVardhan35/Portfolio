import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1800,
          style: {
            border: "1px solid rgba(249,115,22,0.45)",
            background: "#111827",
            color: "#f9fafb",
            fontWeight: 600,
          },
        }}
      />
    </ThemeProvider>
  );
}
