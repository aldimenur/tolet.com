import React from "react";
import Navbar from "./Navbar";
import CardReward from "./CardReward";
import { useState } from "react";
import Footer from "./Footer";

function EliteReward() {
  var bgList = [
    { id: 1, url: "https://picsum.photos/1423" },
    { id: 2, url: "https://picsum.photos/1444" },
    { id: 3, url: "https://picsum.photos/1322" },
    { id: 4, url: "https://picsum.photos/1222" },
  ];

  const [selectedBg, setSelectedBg] = useState(bgList[3]);

  function handleBack() {
    if (selectedBg.id > 1) {
      console.log(selectedBg.id);
      setSelectedBg(bgList.find((bg) => bg.id === selectedBg.id - 1));
    } else {
      alert("BACKGROUND HABIS GOBLOG!");
    }
  }

  function handleNext() {
    if (selectedBg.id < 4) {
      console.log(selectedBg.id);
      setSelectedBg(bgList.find((bg) => bg.id === selectedBg.id + 1));
    } else {
      alert("BACKGROUND HABIS GOBLOG!");
    }
  }

  console.log(selectedBg);

  return (
    <div style={{ backgroundImage: `url("${selectedBg.url}")` }}>
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
        <CardReward number="5" name="GAK" bg="https://picsum.photos/550" />
      </div>
      <Footer />
    </div>
  );
}

export default EliteReward;
