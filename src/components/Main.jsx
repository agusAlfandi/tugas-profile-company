import Banner from "../assets/Logo.jpeg";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Teams from "./Teams";

const Main = () => {
  return (
    <div className="flex flex-col w-full px-5 p-10">
      {/* Banner */}
      <div className="flex md:flex-row flex-col">
        <div className="flex-1">
          <img src={Banner} alt="Banner" className="rounded-lg" />
        </div>

        <div className="flex-1 flex items-center px-5 pt-5">
          <p className="text-3xl leading-normal text-justify">
            <span className="text-5xl text-green-500 font-bold">TECH.</span>
            adalah sebuah Toko komputer yang bertujuan memberikan pelayanan
            terbaik dan barang terbaik sesuai keinginan pelanggan dengan garansi
            100% internasional.
          </p>
        </div>
      </div>
      {/* Banner */}

      {/* About us */}
      <div id="aboutUs">
        <AboutUs />
        <div className="pt-5">
          <p className="text-2xl text-justify">
            Suasana lingkungan kerja sangat kondusif dan setiap seminggu sekali
            kami mengadakan kajian pada jum&#39;at pagi bagi beragama islam,
            lalu sebulan sekali liburan
          </p>
        </div>
      </div>
      {/* About us */}

      {/* Products */}
      <div id="products">
        <Products />
      </div>
      {/* Products */}

      {/* Teams */}
      <div id="teams">
        <Teams />
      </div>
      {/* Teams */}
    </div>
  );
};

export default Main;
