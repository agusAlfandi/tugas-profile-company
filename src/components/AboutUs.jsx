import { useContext } from "react";
import Karyawan from "./karyawan/Karyawan";
import { MyContext } from "../useContext/context";
const Skills = [
  "Sudah berkecumpung dalam bisnis teknologi menanagement sebuah perusahaan atau startup",
  "Sudah lama menjadi Leader teknisi",
  "Menjadi Asisten teknisi",
  "Front Office",
  "Teknisi leptop dan komputer",
];

const AboutUs = () => {
  const { user } = useContext(MyContext);

  return (
    <div className="m-auto flex max-w-5xl flex-col pt-28">
      <div className="flex h-10 items-center justify-around pb-28">
        <div className="w-96 border-b border-black" />
        <p className="text-4xl text-black">
          <span className="relative inline-block">
            <span className="absolute left-1 top-5 h-7 w-36 bg-green-200"></span>
            <span className="relative z-10 px-2 font-semibold">About Us</span>
          </span>
        </p>
        <div className="w-96 border-b border-black" />
      </div>
      <p className="text-justify text-2xl leading-8">
        Tech adalah Toko yang bergerak dibidang penjualan barang elektronik
        apapun yang berkaitan dengan komputer dan leptop, seperti VGA, Prosessor
        dan lain-lain. Kami dari anak muda yang ambisius yang ingin berbisnis
        mempunyai ide untuk mendirikan toko TECH. ini dan berdiri sejak 2022
        sampai sekarang sudah mempunyai beberapa karyawan dan para pelanggan
        yang terus percaya akan kualitas kami.
      </p>
      <br />

      <div tabIndex={0} className="collapse rounded-lg bg-base-content">
        <div className="collapse-title text-xl font-medium">
          <p className="text-2xl text-white">
            Beberapa karyawan kami yang sudah bekerja bersama kami:
          </p>
        </div>
        <div className="collapse-content">
          {user === null ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="grid place-items-center gap-12 text-white md:grid-cols-2 lg:grid-cols-3">
              {user?.map((item, id) => (
                <Karyawan
                  key={id}
                  pic={item.picture.large}
                  name={item.name.title + " " + item.name.first}
                  skill={Skills[Math.floor(Math.random() * Skills.length)]}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="pt-5">
        <p className="text-justify text-2xl">
          Suasana lingkungan kerja sangat kondusif dan setiap seminggu sekali
          kami mengadakan kajian pada jum&#39;at pagi bagi beragama islam, lalu
          sebulan sekali liburan
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
