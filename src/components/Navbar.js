import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const handleClickBurger = () => {
    setVisibleMenu(!visibleMenu);
  };
  return (
    <div Navbar className="navbar-container">
      <div className="navbar-left-side flex align-middle center">
        <div className="logo-place">
          <img
            className="logo"
            src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/logo/2020/09/01/7379dfd8-c9cc-4fb9-896f-6374a766cefc-1598927204969-fab786a46eee63c306f89837093520a4.png"
            alt=""
          />
        </div>
        <div
          className={`left-nav sm:flex items-center ${
            visibleMenu ? "flex" : "hidden"
          }`}
        >
          <a href="#" className="text-xs md:text-base text-red-500">
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
      </div>
      <div className="navbar-right-side hidden sm:flex">
        <a href="#" className="text-xs md:text-base">
          Elite Rewards
        </a>
        <a href="#" className="text-xs md:text-base">
          Cek Order
        </a>
        <a href="#" className="text-xs md:text-base">
          Login
        </a>
        <a
          href="#"
          className="bg-white drop-shadow-xl rounded-3xl text-blue-600 hover:text-blue-900 hover:border-2"
        >
          Daftar
        </a>
      </div>
      <div class="space-y-2 sm:hidden" onClick={handleClickBurger}>
        <div class="w-8 h-0.5 bg-gray-600"></div>
        <div class="w-8 h-0.5 bg-gray-600"></div>
        <div class="w-8 h-0.5 bg-gray-600"></div>
      </div>
    </div>
  );
};

export default Navbar;
