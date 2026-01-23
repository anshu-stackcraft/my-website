import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ username: "", password: "" });

  const submit = async () => {
    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        data
      );

      if (res.data.status === "success") {
        navigate("/"); // ✅ redirect works
      } else {
        alert("Invalid username or password");
      }

    } catch (error) {
      console.error(error);
      alert("Login Failed");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
      <div className="w-full max-w-sm bg-zinc-900 border border-orange-500/40 rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700"
          onChange={(e) =>
            setData({ ...data, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button
          onClick={submit}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold
            ${loading
              ? "bg-orange-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"}`}
        >
          {loading ? "Login..." : "Login"}
        </button>

        <p className="text-sm text-center text-zinc-400 mt-5">
          Don’t have an account?{" "}
          <Link to="/register" className="text-orange-500 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
