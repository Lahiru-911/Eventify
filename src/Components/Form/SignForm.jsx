import React from "react";

const SignForm = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/about/a1.webp')" }}
    >
      <div className="text-center bg-white p-8 rounded-3xl shadow-xl w-full sm:w-96 max-w-md border border-cyan-500">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome Back{" "}
          <span className="text-green-500">
            event<span className="text-blue-500">plus</span>
          </span>
        </h1>
        <p className="text-gray-500 mb-6 text-lg">Your Events Partner</p>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Sign In</h2>
        <form>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none bg-gray-100 text-gray-800 transition-all duration-300"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none bg-gray-100 text-gray-800 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox text-cyan-500 border-gray-300 focus:ring focus:ring-cyan-500 focus:outline-none mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-cyan-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-cyan-600 focus:outline-none transition-all duration-300 transform hover:scale-105"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-400">
          Don’t have an account?{" "}
          <a href="/registerForm" className="text-cyan-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignForm;
