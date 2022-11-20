import Login from "./App/Pages/Login";
import Contact from "./App/Pages/Contact";
import AboutUs from "./App/Pages/AboutUs";
import Jobs from "./App/Pages/Jobs";
import Home from "./App/Pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function Server() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Server;
