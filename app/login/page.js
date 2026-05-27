"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import "../../styles/login.css";

export default function LoginPage() {

  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  /* =========================
     HANDLE LOGIN
  ========================= */

  const handleLogin = (e) => {

    e.preventDefault();

    console.log("Login Submitted");

    router.push("/home");

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>GetMeTask</h1>

        <p>
          AI Powered Placement Preparation Platform
        </p>

        <form
          id="loginForm"
          onSubmit={handleLogin}
        >

          <div className="input-group">

            <i className="fa-solid fa-envelope"></i>

            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              required
            />

          </div>

          <div className="input-group">

            <i className="fa-solid fa-lock"></i>

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              id="password"
              placeholder="Password"
              required
            />

            <i
              className={`fa-solid ${
                showPassword
                  ? "fa-eye-slash"
                  : "fa-eye"
              } togglePassword`}
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            ></i>

          </div>

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  );

}