import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Homepage";
import Login from "./components/Login";
import GetInTouch from "./components/GetInTouch";
import DesignSection from "./components/DesignSection";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getintuch" element={<GetInTouch />} />
        <Route path="/design" element={<DesignSection />} />

      </Routes>
    </>
  );
}

export default App;
