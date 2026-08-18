import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound/>} />
      <Route path ="/careers" element={<Careers/>}/>
    </Routes>
    <Footer branch="v1.0.3"/>
    </>
  );
};

export default App;