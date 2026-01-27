import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Homepage";
import Login from "./components/Login";
import GetInTouch from "./components/GetInTouch";
import DesignSection from "./components/DesignSection";
import Register from "./components/Register";
import Projects from "./components/Projects";
import Logout from "./components/Logout";
import About from "./components/About";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getintuch" element={<GetInTouch />} />
        <Route path="/design" element={<DesignSection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />

      </Routes>
       <Footer />
    </>
  );
}

export default App;
