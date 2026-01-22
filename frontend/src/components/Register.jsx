import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const submit = async () => {
        try {
            const res = await axios.post(
                "http://127.0.0.1:8000/api/register/",
                data
            );
            alert("Registration Successful");
        } catch (error) {
            alert("Registration Failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
            <div className="w-full max-w-sm bg-zinc-900 border border-orange-500/40 rounded-2xl shadow-xl p-8">

                <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Register
                </h2>

                {/* Username */}
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                    }
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 px-4 py-3 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />

                {/* Button */}
                <button
                    onClick={submit}
                    className="w-full py-3 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-600 active:scale-95 transition-all duration-200"
                >
                    Register
                </button>

                {/* Footer */}
                <p className="text-sm text-center text-zinc-400 mt-5">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-500 cursor-pointer hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
