import * as React from "react";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import Navigation from "./Navigation";

function Login() {
  return (
    <div className="w-full h-full">
      <Navigation />
      <div>
        <LoginPage />
      </div>
      <div className="mt-7 border-t-2 absolute w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
