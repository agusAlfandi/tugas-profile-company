const Karyawan = ({ nama, pengalaman }) => {
  return (
    <div className="card card-body card-bordered border-green-300 w-96 my-10 h-80 hover:bg-green-300 duration-300 hover:text-slate-700">
      <div className="text-2xl text- mb-5">
        <p className="pb-5">
          <span className="text-green-500">Nama:</span> <br /> {nama}
        </p>
        <p>
          <span className="text-green-500">Pengalaman:</span>
          <br />
          {pengalaman}
        </p>
      </div>
    </div>
  );
};

export default Karyawan;
