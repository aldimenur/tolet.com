import React from "react";
import "./PesanTiket.css";

const PesanTiket = () => {
  return (
    <div className="background hidden sm:flex">
      <div className="pesan-tiket-background">
        <div className="pesan-tiket-top-section">
          <div className="pesan-tiket-top-section-left-side">
            <p className="title-section">Hey, Namamu</p>
            <p className="sub-tittle-section">Mau Kemana?</p>
          </div>
          <div className="pesan-tiket-top-section-right-side">
            <a href="#">
              <img
                src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-plane-travel-wanicon-flat-wanicon.png"
                className="icon-pesan-tiket "
                alt="icon"
              ></img>
            </a>{" "}
            <a href="#">
              <img
                src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-plane-travel-wanicon-flat-wanicon.png"
                className="icon-pesan-tiket"
                alt="icon"
              ></img>
            </a>{" "}
            <a href="#">
              <img
                src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-plane-travel-wanicon-flat-wanicon.png"
                className="icon-pesan-tiket"
                alt="icon"
              ></img>
            </a>{" "}
            <a href="#">
              <img
                src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-plane-travel-wanicon-flat-wanicon.png"
                className="icon-pesan-tiket"
                alt="icon"
              ></img>
            </a>{" "}
            <a href="#">
              <img
                src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-plane-travel-wanicon-flat-wanicon.png"
                className="icon-pesan-tiket"
                alt="icon"
              ></img>
            </a>
          </div>
        </div>
        <div className="pesan-tiket-middle-section-top-align flex justify-between">
          <div className="pesan-tiket-middle-section p-5">
            <div className="pesan-tiket-middle-section-top">
              <img
                className="h-8 w-8 mx-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOyymyZCHoD6ZGv789EO8TMBLjlX77MTDrQ&usqp=CAU"
                alt="icon"
              ></img>
              <p className="font-bold text-lg">
                Cari harga tiket atau promo disini
              </p>
            </div>
          </div>
          <div className="pencarian-terakhir font-bold mx-10 my-auto text-blue-900">
            <a href="#">Pencarian Terakhir &gt;</a>
          </div>
        </div>
        <div className="pesan-tiket-bottom-section">
          <div className="pesan-tiket-middle-section-bottom flex m-3">
            <div className="radio-1 px-2 font-thin">
              <input type="radio" className="mx-4" id="1"></input>Sekali Jalan
            </div>
            <div className="radio-1 px-2 font-thin">
              <input type="radio" className="mx-4" id="1"></input>Pulang-Pergi
            </div>
          </div>
        </div>
        <div className="pesan-tiket-bottom-section-perjalanan flex border-t-2 border-b-2 justify-around align-middle">
          <a href="#">
            <div className="perjalanan-tiket border-r-2">Dari Kota</div>
          </a>
          <a href="#">
            <div className="perjalanan-tiket border-r-2">Ke Kota</div>
          </a>
          <a href="#">
            <div className="perjalanan-tiket border-r-2">Dari Kota</div>
          </a>
          <a href="#">
            <div className="perjalanan-tiket">Ke Kota</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PesanTiket;
