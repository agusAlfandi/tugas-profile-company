import Karyawan from "../karyawan/Karyawan";

const AboutUs = () => {
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
          <div className="grid md:grid-cols-3 place-items-center">
            <Karyawan
              nama="Bp. Supeno S.Kom"
              pengalaman="Sudah berkecumpung dalam bisnis teknologi memanagement sebuah
          perusahaan atau startup"
            />
            <Karyawan
              nama="Andika Wahyu"
              pengalaman="Sudah lama menjadi Leader teknisi"
            />
            <Karyawan
              nama="Dika Rahwanto"
              pengalaman="Menjadi Asisten teknisi"
            />
            <Karyawan nama="Yusuf" pengalaman="Teknisi leptop dan komputer" />
            <Karyawan
              nama="Gemilang"
              pengalaman="Teknisi leptop dan komputer"
            />
            <Karyawan nama="Dono" pengalaman="Teknisi leptop dan komputer" />
            <Karyawan nama="Milea" pengalaman="Front Office" />
            <Karyawan nama="Dilan" pengalaman="Front Office" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
