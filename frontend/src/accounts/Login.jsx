import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const submit = async () => {
    setError("");

    if (!data.username || !data.password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await login(data);

      // ✅ token mila = login success
      if (res.token) {
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black px-4 via-zinc-900 to-black">
      <div className="w-full max-w-sm bg-zinc-900 border border-orange-500/40 rounded-2xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username or Email"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700"
          onChange={(e) =>
            setData({ ...data, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <button
          onClick={submit}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition-all
            ${
              loading
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 active:scale-95"
            }`}
        >
          {loading ? "Logging in..." : "Login"}
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
