import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./header"; // Correct for default export
import Footer from "./footer"; // Ensure the import path is correct

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "", // Add confirmPassword to the state for validation
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (input.password !== input.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Prepare form data
    const formData = {
      fullName: input.fullName,
      email: input.email,
      password: input.password,
      phoneNumber: input.phoneNumber,
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register", // Ensure the URL is correct
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        alert(res.data.message); // Alert for successful signup
        navigate("/login"); // Redirect to login page
      }
    } catch (error) {
      console.error("Error during registration:", error.response?.data);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mt-3 mb-2">
            Create Your Account
          </h2>
          <form className="mt-6" onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-md font-bold"
              >
                Name
              </label>
              <input
                type="text"
                value={input.fullName}
                name="fullName"
                onChange={changeEventHandler}
                className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your name"
                required
              />
            </div>
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
                placeholder="Create a password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 text-md font-bold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword" // Use controlled component for confirmPassword
                value={input.confirmPassword} // Bind the state
                onChange={changeEventHandler}
                className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone-number"
                className="block text-gray-700 text-md font-bold"
              >
                Phone Number
              </label>
              <input
                type="tel" // Use 'tel' for phone numbers
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:bg-pink-700 hover:scale-102"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-pink-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
