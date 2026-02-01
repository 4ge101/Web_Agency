import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/Global.css";
import Navbar from "./components/Navbar";
import BlobCursor from "./components/BlobCursor";

import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Work from "./pages/Work";
// import About from "./pages/About";
import Contact from "./pages/Contact";
// import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      {/* <BlobCursor/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/work" element={<Work />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/faq" element={<FAQ />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
