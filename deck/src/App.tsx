import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import Deck from "@/deck/Deck";
import RecutDeck from "@/deck/RecutDeck";
import { getRecutVariant } from "@/deck/recut-data";
import DesignKitDemo from "./pages/_design";
import RecutPicker from "./pages/recuts";
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
          <Route path="/recuts" element={<RecutPicker />} />
          <Route path="/:variantSlug" element={<RecutVariantRoute />} />
          <Route path="/" element={<Deck />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function RecutVariantRoute() {
  const { variantSlug } = useParams();
  const variant = variantSlug ? getRecutVariant(variantSlug) : undefined;

  if (!variant) {
    return <Navigate to="/recuts" replace />;
  }

  return <RecutDeck variant={variant} />;
}
