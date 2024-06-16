import AboutUs from "./AboutUs";
import Products from "./Products";
import Teams from "./Teams";
import { Logo } from "../assets/page";

const Main = () => {
  return (
    <div className="flex w-full flex-col px-10 pt-5">
      {/* Banner */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <img
            src={Logo}
            alt="Banner"
            height={500}
            width={700}
            className="rounded-lg"
            loading="eager"
          />
        </div>

        <div className="flex flex-1 items-center px-5 pt-5">
          <p className="text-justify text-3xl leading-normal">
            <span className="relative inline-block">
              <span className="absolute left-1 top-5 h-7 w-28 bg-green-200"></span>
              <span className="relative z-10 px-2 text-5xl font-bold">
                TECH.
              </span>
            </span>
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
