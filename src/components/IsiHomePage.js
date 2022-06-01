import IsiCard from "./Card";
import Footer from "./Footer";
import Navigation from "./Navigation";
import PesanTiket from "./PesanTiket";
import PesanTiketMobile from "./PesanTiketMobile";
import { useEffect } from "react";

const IsiHomePage = () => {
  useEffect(() => {
    return () => {
      document.title = "Tiket.com Halaman Utama";
    };
  }, []);
  return (
    <div className="bg-gray-700 w-full">
      <Navigation />
      <div className="">
        <IsiCard />
        <PesanTiket />
        <PesanTiketMobile />
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </div>
  );
};

export default IsiHomePage;
