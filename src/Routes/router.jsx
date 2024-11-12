import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Events from "../Pages/Events";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppRouter;
