import React, { useMemo } from "react";
import AccountLogin from "./AccountLogin";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

const LoginPage = () => {
  return (
    <div>
      <div className="slide-show bg-slate-300 h-full my-5">
        <ImageSlider slides={SliderData} />
      </div>
      <AccountLogin />
    </div>
  );
};

export default LoginPage;
