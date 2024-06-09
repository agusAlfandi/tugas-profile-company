const Karyawan = ({ pic, name, skill }) => {
  return (
    <div className="border card card-body card-bordered h-full w-72 hover:bg-green-500 duration-300 hover:text-black">
      <div className="flex justify-center">
        <img src={pic} width={170} height={120} className="rounded-lg" />
      </div>
      <div className="text-lg h-auto overflow-x-auto gap-3">
        <p className="mb-4">{name}</p>
        <p>{skill}</p>
      </div>
    </div>
  );
};

export default Karyawan;
