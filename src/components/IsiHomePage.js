import IsiCard from "./Card";
import Navigation from "./Navigation";
import PesanTiket from "./PesanTiket";
import PesanTiketMobile from "./PesanTiketMobile";

const IsiHomePage = () => {
  return (
    <div className="bg-gray-700 w-full">
      <Navigation />
      <div>
        <IsiCard />
        <PesanTiketMobile />
        <PesanTiket />
      </div>
    </div>
  );
};

export default IsiHomePage;
