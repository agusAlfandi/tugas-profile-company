const TeamsList = ({ pic, name, skill, kontak }) => {
  return (
    <div className="card card-body card-bordered h-full w-72 rounded-lg border border-gray-700 text-center duration-300 hover:scale-105 hover:bg-green-500 hover:text-black hover:shadow-2xl">
      <div className="flex justify-center">
        <img
          src={pic}
          alt="Teams"
          width={170}
          height={120}
          className="rounded-lg"
        />
      </div>
      <div className="h-auto overflow-x-auto text-lg">
        <p>{name}</p>
        <p>{skill}</p>
        <p className="mb-4">{kontak}</p>
      </div>
    </div>
  );
};

export default TeamsList;
