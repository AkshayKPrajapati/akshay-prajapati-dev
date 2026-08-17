import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Careers from "./Careers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
    <Footer/>
    </>
  );
};

export default App;