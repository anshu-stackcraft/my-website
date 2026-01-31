import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Nav from "./components/Nav";
import GetInTouch from "./components/GetInTouch";
import DesignSection from "./components/DesignSection";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";
import Logout from "./accounts/Logout";
import Login from "./accounts/Login";
import Register from "./accounts/Register";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getintuch" element={<GetInTouch />} />
        <Route path="/design" element={<DesignSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
