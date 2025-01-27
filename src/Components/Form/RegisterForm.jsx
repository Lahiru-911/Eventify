import React from "react";

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold">WELLCOME TO <span className="text-green-500">Eventi<span className="text-blue-500">fy</span></span></h1>
        <p className="text-gray-600">Your Events Partner</p>
        <h2 className="mt-4 text-xl font-semibold">Create Account</h2>
        <div className="mt-6 bg-gray-800 text-white p-8 rounded-xl shadow-lg w-96 border border-cyan-500">
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none bg-gray-900 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none bg-gray-900 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none bg-gray-900 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-cyan-500 focus:outline-none bg-gray-900 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 rounded-lg text-lg hover:bg-cyan-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
