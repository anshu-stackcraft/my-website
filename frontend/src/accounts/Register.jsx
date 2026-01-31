import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submit = async () => {
    setError("");

    if (
      !data.username ||
      !data.email ||
      !data.password ||
      !data.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await register(data);

      // ✅ register success → login page
      if (res) {
        navigate("/login");
      }
    } catch (err) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black px-4 via-zinc-900 to-black">
      <div className="w-full max-w-sm bg-zinc-900 border border-orange-500/40 rounded-2xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Register
        </h2>

        <input
          placeholder="Username"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-2 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700"
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
        />

        {error && (
          <p className="text-red-500 text-xs mb-2 text-center">{error}</p>
        )}

        <button
          onClick={submit}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold
            ${
              loading
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-sm text-zinc-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
