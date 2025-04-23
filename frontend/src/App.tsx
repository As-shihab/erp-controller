import "./App.css";
import Router from "./router/Router";
import "@ui5/webcomponents-react";
import { GlobalContext } from "./Shared/context/GlobalContext";
import { useState } from "react";
import "@ui5/webcomponents-react/dist/Assets.js";
import { setTheme } from "@ui5/webcomponents-base";
import { ThemeProvider } from "@ui5/webcomponents-react";
setTheme("sap_horizon_dark");
function App() {
  const [refreshTable, setRefrashTable] = useState(false);
  return (
    <GlobalContext.Provider value={{ refreshTable, setRefrashTable }}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
