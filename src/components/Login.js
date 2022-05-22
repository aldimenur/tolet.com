import * as React from "react";
import LoginPage from "./LoginPage";
import Navigation from "./Navigation";

function Login() {
  return (
    <div className="w-full h-full">
      <Navigation />
      <div>
        <LoginPage />
      </div>
    </div>
  );
}

export default Login;
