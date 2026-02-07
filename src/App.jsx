import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/Global.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutTeam from "./pages/AboutTeam";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
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
