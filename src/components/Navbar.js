import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const handleClickBurger = () => {
    setVisibleMenu(!visibleMenu);
  };
  return (
    <div className={`navbar-container ${visibleMenu ? "block" : "flex"} z-20`}>
      <div className="navbar-left-side flex align-middle center">
        <div className={`"logo-place" ${visibleMenu ? "mx-auto" : "mx-0"}`}>
          <Link to={"/"}>
            <img
              className="logo"
              src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/logo/2020/09/01/7379dfd8-c9cc-4fb9-896f-6374a766cefc-1598927204969-fab786a46eee63c306f89837093520a4.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className={`left-nav sm:flex items-center hidden`}>
        <a href="#" className="text-xs md:text-base">
          Tiket Pesawat
        </a>
        <a href="#" className="text-xs md:text-base">
          Hotel
        </a>
        <a href="#" className="text-xs md:text-base">
          To Do{" "}
        </a>
        <a href="#" className="text-xs md:text-base">
          Tiket Kereta Api
        </a>
        <a href="#" className="text-xs md:text-base">
          Sewa Mobil
        </a>
        <a href="#" className="text-xs md:text-base">
          Event
        </a>
      </div>
      <div className="navbar-right-side hidden sm:flex">
        <a href="#" className="text-xs md:text-base">
          Elite Rewards
        </a>
        <a href="#" className="text-xs md:text-base">
          Cek Order
        </a>
        <div className="text-xs md:text-base">
          <Link to="/login">Login</Link>
        </div>
        <div className="bg-white drop-shadow-xl rounded-3xl text-blue-600 hover:text-blue-900">
          <Link to={"/register"}>Daftar</Link>
        </div>
      </div>
      <div
        className={`burger-menu space-y-2 sm:hidden ${
          visibleMenu ? "hidden" : "mx-0"
        }`}
        onClick={handleClickBurger}
      >
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </div>
      {/* visibleMenu bentuknya boolean true atau false untuk useState  */}
      <div
        className={`${visibleMenu ? "grid justify-items-center" : "hidden"}`}
      >
        <a href="#" className="text:xl md:text-base my-2">
          Tiket Pesawat
        </a>
        <a href="#" className="text:xl md:text-base my-2">
          Hotel
        </a>
        <a href="#" className="text:xl md:text-base my-2">
          To Do{" "}
        </a>
        <a href="#" className="text:xl md:text-base my-2">
          Tiket Kereta Api
        </a>
        <a href="#" className="text:xl md:text-base my-2">
          Sewa Mobil
        </a>
        <a href="#" className="text:xl md:text-base my-2">
          Event
        </a>
        <a href="#" className="text:xl md:text-base my-2">
          Elite Rewards
        </a>
        <a href="#" className="text:xl md:text-base my-2">
          Cek Order
        </a>
        <div className="text:xl md:text-base my-2">
          <Link to="/login">Login</Link>
        </div>
        <div className="text:xl md:text-base my-2">
          <Link to={"/register"}>Daftar</Link>
        </div>
        <div
          className={`h-7 w-5 ${visibleMenu ? "block" : "hidden"} `}
          onClick={handleClickBurger}
        >
          <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
