import { Link } from "react-router-dom";
import React, { Component } from "react";
import { FaLock } from "react-icons//fa";
import { useState } from "react";

const AccountLogin = () => {
  const [username, setUsername] = useState("");

  function handleSetUsername(e) {
    setUsername(e.target.value);
  }

  console.log("ini username nya " + username);

  const [password, setPassword] = useState("");

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  console.log("ini passwordnya " + password);

  return (
    <div className="my-20 mx-8 border-2 border-gray-200 rounded-xl flex-col flex items-center justify-center sm:w-96 sm:mx-auto">
      <div className="items-center border-b-2 border-b-gray-100 w-full justify-center flex h-10 text-green-600 font-bold">
        <FaLock className="mx-3"></FaLock>
        Account Login
      </div>
      <div className="border-b-2 border-b-gray-100 h-32 w-full flex-col flex items-center justify-center">
        <input
          type={"text"}
          className="border-2 w-3/4 h-10 rounded-md bg-gray-100 px-4  my-1"
          name="username"
          placeholder="Username"
          onChange={handleSetUsername}
        ></input>
        <input
          type={"password"}
          className="w-3/4 border-2 h-10 rounded-md bg-gray-100 px-4 my-1"
          name="password"
          placeholder="Password"
          onChange={handlePassword}
        ></input>
      </div>
      <div className="bg-green-500 text-white font-bold h-14 w-full justify-center flex middle items-center rounded-b-xl">
        <Link to="/LoginVerif">Log In</Link>
      </div>
    </div>
  );
};

export default AccountLogin;
