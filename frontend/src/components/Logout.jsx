import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.post("http://127.0.0.1:8000/api/logout/");

        localStorage.clear();
        sessionStorage.clear();

        navigate("/login");
      } catch (error) {
        console.error("Logout error:", error);
        navigate("/login");
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
      <h2 className="text-xl text-orange-500 font-semibold">
        Logging you out...
      </h2>
    </div>
  );
}

export default Logout;
