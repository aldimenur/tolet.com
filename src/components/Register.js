import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Register() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      <div className="h-auto w-72 shadow-xl rounded-xl flex justify-center items-center flex-col border bg-white">
        <div className="text-gray-700 tittle-registration font-bold h-10 border-b pb-3 mt-3 mb-3 w-full rounded-t-xl flex items-center justify-center">
          BUAT AKUN
        </div>
        <div className="h-fit w-full flex flex-col justify-center items-center">
          <input
            type={"text"}
            className="w-3/4 px-2 my-1 rounded-2xl h-8 border"
            placeholder="Nama"
          ></input>
          <input
            type={"email"}
            className="w-3/4 px-2 my-1 rounded-2xl h-8 border"
            placeholder="Email"
          ></input>
          <input
            type={"password"}
            className="w-3/4 px-2 my-1 rounded-2xl h-8 border"
            placeholder="Password"
          ></input>
        </div>
        <div className="h-20 w-full justify-center items-center flex rounded-b-xl">
          <button className="hover:bg-white hover:border-blue-500 hover:text-blue-600 ease-in-out duration-500 font-bold border py-3 px-5 rounded-full text-gray-700 text-sm">
            <Link to="/">Lanjutkan</Link>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full mt-7 border-t-2">
        <Footer />
      </div>
    </div>
  );
}

export default Register;
