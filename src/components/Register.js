import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BannerCovid from "./BannerCovid";
import TopBar from "./TopBar";
import { useState } from "react";
import IsiRegister from "./IsiRegister";

function Register() {
  return (
    <div
      className="mt-32 py-20 w-full h-full bg-cover"
      style={{
        backgroundImage: `url("https://picsum.photos/900")`,
      }}
    >
      {/* NAVBAR DISINI */}
      <div className="absolute top-0 w-full drop-shadow-xl z-10">
        <BannerCovid />
        <TopBar />
        <Navbar />
      </div>
      <IsiRegister />
      {/* FOOTER DISINI */}
      <div className="absolute w-full mt-7 border-t-2">
        <Footer />
      </div>
    </div>
  );
}

export default Register;
