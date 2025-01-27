import React from "react";

const SignForm = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      <div className="text-center bg-gray-800 text-white p-8 rounded-xl shadow-lg w-96 border border-cyan-500">
        <h1 className="text-3xl font-bold mb-2">
          WELLCOME BACK{" "}
          <span className="text-green-500">
            event<span className="text-blue-500">plus</span>
          </span>
        </h1>
        <p className="text-gray-400 mb-6">Your Events Partner</p>
        <h2 className="text-xl font-semibold mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none bg-gray-900 text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none bg-gray-900 text-white"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="form-checkbox text-cyan-500 border-gray-300 focus:ring focus:ring-cyan-500 focus:outline-none mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-cyan-500 hover:underline">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 rounded-lg text-lg hover:bg-cyan-600 transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          Don’t have an account?{" "}
          <a href="/registerForm" className="text-cyan-500 hover:underline">
            Signup
          </a>{" "}
          here.
        </p>
      </div>
    </div>
  );
};

export default SignForm;
