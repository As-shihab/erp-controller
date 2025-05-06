import "./App.css";
import Router from "./router/Router";
import "@ui5/webcomponents-react";
import { GlobalContext } from "./Shared/context/GlobalContext";
import { useState } from "react";
import "@ui5/webcomponents-react/dist/Assets.js";
import { setTheme } from "@ui5/webcomponents-base";
import { ThemeProvider } from "@ui5/webcomponents-react";
const UserTheme = localStorage.getItem("UserTheme");
setTheme(UserTheme ?? "");

function App() {
  const [refreshTable, setRefrashTable] = useState(false);
  return (
    <div className="h-screen overflow-hidden relative">
      <GlobalContext.Provider value={{ refreshTable, setRefrashTable }}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
