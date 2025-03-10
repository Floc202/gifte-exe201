import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate
import useAuth from "../hooks/useAuth"; // Import hook useAuth

const SignUpLogInForm = () => {
  const [isActive, setIsActive] = useState(false); // Trạng thái hiển thị form
  const { login } = useAuth(); // Sử dụng hook useAuth
  const navigate = useNavigate(); // Sử dụng useNavigate

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const loginSuccess = login(username, password); // Gọi hàm login từ useAuth
    if (loginSuccess) {
      navigate("/"); // Chuyển hướng về trang chính nếu đăng nhập thành công
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    alert(`Registered with: ${username}, ${email}, ${password}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-100">
      <div
        className={`relative w-[850px] h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden m-5 ${
          isActive ? "active" : ""
        }`}
      >
        {/* Login Form */}
        <div className="absolute right-0 w-1/2 h-full bg-white flex items-center justify-center text-center p-10 transition-all duration-700 ease-in-out delay-300 z-10">
          <form className="w-full" onSubmit={handleLogin}>
            <h1 className="text-4xl font-bold mb-2">Login</h1>
            <div className="relative my-6">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full px-5 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 font-medium placeholder-gray-500"
              />
              <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="relative my-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-5 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 font-medium placeholder-gray-500"
              />
              <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="my-4">
              <a href="#" className="text-sm text-gray-700 hover:text-blue-500">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 rounded-lg text-white font-semibold shadow-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
            <p className="my-4 text-sm text-gray-600">
              or login with social platforms
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="p-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <FcGoogle className="text-2xl" />
              </a>
              <a
                href="#"
                className="p-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <FaFacebook className="text-2xl text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="#"
                className="p-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
              </a>
            </div>
          </form>
        </div>

        {/* Registration Form */}
        <div className="absolute right-0 w-1/2 h-full bg-white flex items-center justify-center text-center p-10 transition-all duration-700 ease-in-out delay-300 z-0">
          <form className="w-full" onSubmit={handleRegister}>
            <h1 className="text-4xl font-bold mb-2">Registration</h1>
            <div className="relative my-6">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full px-5 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 font-medium placeholder-gray-500"
              />
              <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="relative my-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-5 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 font-medium placeholder-gray-500"
              />
              <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <div className="relative my-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-5 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-700 font-medium placeholder-gray-500"
              />
              <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 rounded-lg text-white font-semibold shadow-md hover:bg-blue-600 transition-colors"
            >
              Register
            </button>
            <p className="my-4 text-sm text-gray-600">
              or register with social platforms
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="p-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <FcGoogle className="text-2xl" />
              </a>
              <a
                href="#"
                className="p-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <FaFacebook className="text-2xl text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="#"
                className="p-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
              </a>
            </div>
          </form>
        </div>

        {/* Toggle Panels */}
        <div className="absolute w-full h-full">
          <div className="absolute w-[300%] h-full bg-blue-500 rounded-full left-[-250%] transition-all duration-1000 ease-in-out z-0"></div>
          <div className="absolute w-1/2 h-full flex flex-col justify-center items-center text-white z-10 transition-all duration-700 ease-in-out delay-300">
            <h1 className="text-4xl font-bold">Hello, Welcome!</h1>
            <p className="my-4">Don't have an account?</p>
            <button
              onClick={toggleForm}
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-blue-500 transition-colors"
            >
              Register
            </button>
          </div>
          <div className="absolute w-1/2 h-full flex flex-col justify-center items-center text-white z-10 transition-all duration-700 ease-in-out delay-300 right-[-50%]">
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="my-4">Already have an account?</p>
            <button
              onClick={toggleForm}
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-blue-500 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogInForm;
