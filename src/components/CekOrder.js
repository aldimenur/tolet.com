import React from "react";
import CekOrderList from "./CekOrderList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";

function CekOrder() {
  useEffect(() => {
    document.title = "Halaman Cek Order";
  }, []);

  return (
    <>
      <Navbar />
      <CekOrderList />
      <Footer />
    </>
  );
}

export default CekOrder;
