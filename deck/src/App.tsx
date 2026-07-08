import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deck from "@/deck/Deck";
import DesignKitDemo from "./pages/_design";
import { ThemeProvider } from "@/components/theme-provider";

// Derive basename from the current path so the deck works on GitHub Pages
// (served from /<repo-name>/) and on the Zo Site (served from /).
const basename = window.location.pathname.replace(/\/[^/]*$/, "") || "/";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/_design" element={<DesignKitDemo />} />
          <Route path="/" element={<Deck />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
