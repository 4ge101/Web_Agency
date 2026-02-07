import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/Global.css";
import Navbar from "./components/Navbar";
import BlobCursor from "./components/BlobCursor";

import Home from "./pages/Home";
import AboutTeam from "./pages/AboutTeam";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BlobCursor/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutteam" element={<AboutTeam />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
