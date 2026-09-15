import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Predict from "../pages/Predict";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;