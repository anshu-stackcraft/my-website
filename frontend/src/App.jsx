import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/HomePage";
import Nav from "./components/Nav";
import GetInTouch from "./components/GetInTouch";
import DesignSection from "./components/DesignSection";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
import Footer from "./components/Footer";
import Logout from "./accounts/Logout";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
// import HireMe from "./pages/HireMe";
// import Resume from "./pages/Resume";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AuthProvider>   {/* 🔐 IMPORTANT */}
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getintuch" element={<GetInTouch />} />
        <Route path="/design" element={<DesignSection />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/resume" element={<Resume />} /> */}
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
