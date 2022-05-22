import { Link } from "react-router-dom";
import React, { Component } from "react";
import { FaLock } from "react-icons//fa";

const AccountLogin = () => {
  return (
    <div className="my-20 mx-8 border-2 border-gray-200 rounded-xl flex-col flex items-center justify-center">
      <div className="items-center border-b-2 border-b-gray-100 w-full justify-center flex h-10 text-green-600 font-bold">
        <FaLock className="mx-3"></FaLock>
        Account Login
      </div>
      <div className="border-b-2 border-b-gray-100 h-32 w-full flex-col flex items-center justify-center">
        <input
          type={"text"}
          className="border-2 w-3/4 h-10 rounded-md bg-gray-100 px-4  my-1"
          name="username"
        ></input>
        <input
          type={"password"}
          className="w-3/4 border-2 h-10 rounded-md bg-gray-100 px-4 my-1"
          name="password"
        ></input>
      </div>
      <div className="bg-green-500 text-white font-bold h-14 w-full justify-center flex middle items-center rounded-b-xl">
        <Link to="/LoginVerif">Log In</Link>
      </div>
    </div>
  );
};

export default AccountLogin;
