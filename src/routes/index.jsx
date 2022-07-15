import { Route, Routes as Router } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Portfolio } from "../pages/Portfolio";
import { Technologies } from "../pages/Technologies";

export const Routes = () => (
  <Router>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/portfolio" element={<Portfolio />} />
    <Route exact path="/technologies" element={<Technologies />} />
  </Router>
);
