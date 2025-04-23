import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Http } from "./Http/Http.ts";
import Login from "./Auth/Login/Login.tsx";

const isAuthenticated = new Http().IsAuthenticate();

if (isAuthenticated) {
  createRoot(document.getElementById("root")!).render(<App />);
} else {
  createRoot(document.getElementById("root")!).render(<Login />);
}
