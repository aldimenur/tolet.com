import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar-layer justify-between hidden sm:flex md:flex">
      <div className="top-bar-left-side">
        <div className="top-bar-align">
          <a href="#" className="top-bar-link">
            Daftarkan Properti Anda
          </a>
          <a href="#" className="top-bar-link">
            Daftarkan Aktivitas/Event Anda
          </a>
          <a href="#" className="top-bar-link">
            Promo
          </a>
          <a href="#" className="top-bar-link">
            Pusat Bantuan
          </a>
        </div>
      </div>
      <div className="top-bar-right-side">
        <button className="language-button"> ID </button>
      </div>
    </div>
  );
};

export default TopBar;
