import React from "react";
import Navbar from "./Navbar";
import CardReward from "./CardReward";
import { useState } from "react";
import Footer from "./Footer";

function EliteReward() {
  var bgList = [
    { id: "1", bg: "https://picsum.photos/5523" },
    { id: "2", bg: "https://picsum.photos/2444" },
    { id: "3", bg: "https://picsum.photos/2322" },
    { id: "4", bg: "https://picsum.photos/3222" },
  ];

  const [bg, setBg] = useState((eBg) => "https://picsum.photos/920");

  function handleBack() {
    setBg((hBg) => "https://picsum.photos/1222");
  }
  function handleNext() {
    setBg((hBg) => "https://picsum.photos/1426");
  }

  return (
    <div style={{ backgroundImage: `url("${bg}")` }}>
      <div>
        <Navbar />
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          <button
            onClick={handleBack}
            className="mx-4 border border-black px-3 rounded-xl text-red-500 font-bold hover:text-white transition-all duration-200 hover:border-white"
          >
            Back
          </button>
          Ubah Background
          <button
            onClick={handleNext}
            className="mx-4 border border-black px-3 rounded-xl text-red-500 font-bold hover:text-white transition-all duration-200 hover:border-white"
          >
            {" "}
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CardReward number="1" name="ALDI" bg="https://picsum.photos/700" />
        <CardReward number="2" name="ANJAY" bg="https://picsum.photos/800" />
        <CardReward number="3" name="BISA" bg="https://picsum.photos/600" />
        <CardReward number="4" name="DICOBA" bg="https://picsum.photos/500" />
      </div>
      <Footer />
    </div>
  );
}

export default EliteReward;
