import React from "react";

function CardReward(prope) {
  return (
    <>
      <div
        className="border w-72 h-40 my-2 bg-cover rounded-md drop-shadow-md"
        style={{ backgroundImage: `url("${prope.bg}")` }}
      >
        <div className="text-center m-4">
          <span className="text-white border p-2 bg-slate-800">
            nomor {prope.number} nama {prope.name}
          </span>
        </div>
      </div>
    </>
  );
}

export default CardReward;
