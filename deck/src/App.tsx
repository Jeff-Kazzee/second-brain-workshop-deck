import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deck from "@/deck/Deck";
import DesignKitDemo from "./pages/_design";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/_design" element={<DesignKitDemo />} />
          <Route path="/" element={<Deck />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
