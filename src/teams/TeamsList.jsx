const TeamsList = ({ pic, name, skill, kontak }) => {
  return (
    <div className="border card card-body card-bordered h-full w-72 hover:bg-green-500 duration-300 hover:text-black">
      <div className="flex justify-center">
        <img
          src={pic}
          alt="Teams"
          width={170}
          height={120}
          className="rounded-lg"
        />
      </div>
      <div className="text-lg h-auto overflow-x-auto">
        <p>{name}</p>
        <p>{skill}</p>
        <p className="mb-4">{kontak}</p>
      </div>
    </div>
  );
};

export default TeamsList;
