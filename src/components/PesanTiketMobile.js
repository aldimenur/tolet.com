import React from "react";

function PesanTiketMobile() {
  return (
    <div className="flex align-middle justify-center">
      <div className="bg-slate-600 w-80 h-max rounded-lg">
        <div className="row-atas border-2 h-1/3 rounded-lg flex justify-center">
          <span className="m-4 text-lg font-bold text-white">
            Pesan Tiket Disini
          </span>
        </div>
        <div className="row-tengah border-2 h-1/3 rounded-lg">
          <div className="h-52"></div>
        </div>
        <div className="row-bawah border-2 h-1/3 rounded-lg flex">
          <div className="h-52 w-full flex">
            <div className="coloumn w-1/3 border-2 h-full rounded-lg"></div>
            <div className="coloumn w-1/3 border-2 h-full rounded-lg"></div>
            <div className="coloumn w-1/3 border-2 h-full rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PesanTiketMobile;
