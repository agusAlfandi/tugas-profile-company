const Karyawan = ({ pic, name, skill }) => {
  return (
    <div className="card card-body card-bordered h-96 w-72 rounded-lg text-center duration-300 hover:scale-105 hover:bg-green-500 hover:text-black">
      <div className="flex justify-center">
        <img
          src={pic}
          alt="Karyawan"
          width={170}
          height={120}
          className="rounded-lg"
        />
      </div>
      <div className="h-auto gap-3 overflow-x-auto text-lg">
        <p className="mb-4">{name}</p>
        <p>{skill}</p>
      </div>
    </div>
  );
};

export default Karyawan;
