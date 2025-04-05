import React, { useState } from "react";
import { Image } from "../components/index.js";

function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-4xl shadow-md">
        <Image path="/general/logo.png" alt="" className="w-[36px] h-[36px]" />
        <h1 className="font-normal">
          {isRegister ? "Create your Account" : "Login to your Account"}
        </h1>
        {isRegister ? (
          <form action="" key="register" className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                required
                name="username"
                id="username"
                className="p-4 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="displayName" className="text-sm">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                required
                name="displayName"
                id="displayName"
                className="p-4 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
                className="p-4 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
                className="p-4 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e50829] p-4 border-none rounded-2xl text-white cursor-pointer font-bold"
            >
              Register
            </button>
            <p
              onClick={() => {
                setIsRegister(false);
              }}
              className="text-sm text-center cursor-pointer"
            >
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        ) : (
          <form action="" key="login" className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
                className="p-4 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
                className="p-4 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e50829] p-4 border-none rounded-2xl text-white cursor-pointer font-bold"
            >
              Login
            </button>
            <p
              onClick={() => {
                setIsRegister(true);
              }}
              className="text-sm text-center cursor-pointer"
            >
              Don't have an account? <b>Register</b>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
