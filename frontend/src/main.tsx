import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import "@ui5/webcomponents/dist/Assets.js";
import { ThemeProvider } from "@ui5/webcomponents-react";
createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
