import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyPro from "./modules/propertypro/PropertyPro";
import Home from "./home/Home";
import { ThemeProvider } from "@ui5/webcomponents-react";
import Header from "./components/Header";
import Deshboard from "./modules/propertypro/components/deshboard";
import Producttype from "./modules/propertypro/components/producttype";
function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/propertypro" element={<PropertyPro />}>
              <Route path="" index element={<Deshboard />} />
              <Route path="type" element={<Producttype />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
