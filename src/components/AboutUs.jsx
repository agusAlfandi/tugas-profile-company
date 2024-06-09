import { useContext } from "react";
import Karyawan from "../karyawan/Karyawan";
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
    <div className="pt-28">
      <div className="flex items-center justify-around pb-28 h-10">
        <div className="border-b border-gray-400 w-96" />
        <p className="text-3xl text-green-500">About US</p>
        <div className="border-b border-gray-400 w-96" />
      </div>
      <p className="text-2xl leading-8 text-justify">
        Tech adalah Toko yang bergerak dibidang penjualan barang elektronik
        apapun yang berkaitan dengan komputer dan leptop, seperti VGA, Prosessor
        dan lain-lain. Kami dari anak muda yang ambisius yang ingin berbisnis
        mempuyai ide untuk mendirika toko TECH. ini dan berdiri sejak 2022
        sampai sekarang sudah mempunyai beberapa karyawan dan para pelanggan
        yang terus percaya akan kualitas kami.
      </p>
      <br />

      <div tabIndex={0} className="collapse bg-base-200">
        <div className="collapse-title text-xl font-medium">
          <p className="text-2xl">
            Beberapa karyawan kami yang sudah bekerja bersama kami:
          </p>
        </div>
        <div className="collapse-content">
          {user === null ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="grid md:grid-cols-4 place-items-center">
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
    </div>
  );
};

export default AboutUs;
