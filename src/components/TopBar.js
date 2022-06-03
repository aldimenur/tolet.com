import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar-layer justify-between hidden sm:flex md:flex">
      <div className="top-bar-left-side">
        <div className="top-bar-align">
          <span href="#" className="top-bar-link">
            Daftarkan Properti Anda
          </span>
          <span href="#" className="top-bar-link">
            Daftarkan Aktivitas/Event Anda
          </span>
          <span href="#" className="top-bar-link">
            Promo
          </span>
          <span href="#" className="top-bar-link">
            Pusat Bantuan
          </span>
        </div>
      </div>
      <div className="top-bar-right-side">
        <button className="language-button"> ID </button>
      </div>
    </div>
  );
};

export default TopBar;
