import  { JSX } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "../Pages/Error/NotFound";
import HomeLayout from "../Layout/HomeLaout/HomeLayout";
import PropertyPro from "../Module/PropertyPro/PropertyPro";
import Overview from "../Module/PropertyPro/Overview/Overview";
import LocationTyps from "../Module/PropertyPro/LocationTypes/LocationTyps";
import Header from "../Shared/Components/Header/Header";
export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/propertypro" element={<PropertyPro />}>
          <Route path="" index element={<Overview />} />
          <Route path="location-types" element={<LocationTyps />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
