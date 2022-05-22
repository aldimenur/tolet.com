import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import { FaRegClipboard } from "react-icons/fa";

function Register() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center bg-orange-500 ">
      <div className="h-auto w-72 bg-green-900 shadow-xl rounded-xl flex justify-center items-center flex-col">
        <div className="tittle-registration h-32 bg-yellow-700 w-full rounded-t-xl flex items-center justify-center">
          TITTLE
        </div>
        <div className="h-40 w-full bg-blue-900 flex justify-center items-center">
          FORM
        </div>
        <div className="h-20 w-full bg-red-900 justify-center items-center flex rounded-b-xl">
          <nav className="flex">
            <FaRegClipboard />
            <Link to="/"> BACK BUTTON</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Register;
