import React, { useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");
        localStorage.setItem("token", data.token); // Store JWT for future use
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/gaming-wallpaper.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "#1A1A1A", // Overlay for a darker effect
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          className="mt-6 text-center text-3xl font-extrabold text-neon-green"
          style={{
            textShadow: "0 0 10px #0F0, 0 0 20px #0F0",
          }}
        >
          Log in to your account
        </h2>
        {errorMessage && (
          <p className="mt-2 text-center text-sm text-red-600">{errorMessage}</p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className="bg-black bg-opacity-80 py-8 px-4 shadow-neon-green sm:rounded-lg sm:px-10"
          style={{
            boxShadow: "0 0 15px #0F0",
          }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neon-blue"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-neon-green rounded-md bg-gray-800 text-white focus:ring-neon-blue focus:border-neon-blue"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neon-blue"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-neon-green rounded-md bg-gray-800 text-white focus:ring-neon-blue focus:border-neon-blue"
                placeholder="Enter your password"
              />
            </div>

            <div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-gray-300">
            Don't have an account?{" "}
            <span
              className="text-neon-blue cursor-pointer"
              style={{
                textShadow: "0 0 5px #00F",
              }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
