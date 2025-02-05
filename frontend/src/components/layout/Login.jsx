import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/"); // Redirect to the home page if already logged in
    }
  }, [navigate]);

  const changeEventHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setInput({ ...input, [name]: checked });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://localdial.onrender.com", 
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      // Check if the response contains success
      if (res.data?.success) {
        localStorage.setItem("token", res.data.token);
        if (input.rememberMe) {
          localStorage.setItem("rememberMe", true); // Store rememberMe flag
        }
        setInput({ email: "", password: "" }); // Reset form fields
        navigate("/"); // Redirect to the home page after successful login
      } else {
        setErrorMessage(res.data?.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      // Gracefully handle error when there's no response object
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again later."
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mt-3 mb-2">
            Login to Your Account
          </h2>

          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              {errorMessage}
            </div>
          )}

          <form onSubmit={submitHandler} className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-md font-bold"
              >
                Email
              </label>
              <input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-md font-bold"
              >
                Password
              </label>
              <input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-6 flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={input.rememberMe}
                  onChange={changeEventHandler}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-sm text-pink-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:bg-pink-700 hover:scale-102"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-pink-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
