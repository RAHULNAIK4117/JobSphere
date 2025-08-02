import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      toast.error("Please enter username and password");
      return;
    }

    try {
      const response = await API.post(
        `${import.meta.env.VITE_API_BASE_URL}/admin/login`,
        { username, password }
      );

      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      navigate("/admin");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fadeIn scale-100 transition-all">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8 tracking-wide">JOB SPHINX PANEL</h2>
        <p className=" font-extrabold text-white text-center tracking-wide">Hi,Rahul</p>

        {/* Username */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block py-2.5 px-4 w-full text-sm text-white bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" "
          />
          <label htmlFor="username" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-2 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-6">
            Username
          </label>
        </div>

        {/* Password */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block py-2.5 px-4 w-full text-sm text-white bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer pr-10"
            placeholder=" "
          />
          <label htmlFor="password" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-2 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute top-3 right-3 text-white cursor-pointer"
          >
            {showPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </span>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          🔐 Login
        </button>
      </div>
    </div>
  );
};

export default Login;
