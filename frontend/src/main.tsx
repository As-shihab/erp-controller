import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import "@ui5/webcomponents/dist/Assets.js";
createRoot(document.getElementById("root")!).render(

    <App />

);
