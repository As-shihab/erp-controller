import "./App.css";
import Router from "./router/Router";
import "@ui5/webcomponents-react";
import { GlobalContext } from "./Shared/context/GlobalContext";
import { useState } from "react";

function App() {
  const [refreshTable, setRefrashTable] = useState(false);
  return (
    <GlobalContext.Provider value={{ refreshTable, setRefrashTable }}>
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
