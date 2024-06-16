import TeamsList from "./teams/TeamsList";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../useContext/context";
const Skills = ["Leader teknisi", "Teknisi", "Manager", "Admin", "Supervisor"];

const Teams = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(MyContext);

  useEffect(() => {
    async function getDataUser() {
      try {
        const res = await fetch("https://randomuser.me/api/?results=12");
        const response = await res.json();
        setData(response.results);
        setUser(response.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    getDataUser();
  }, [setUser]);

  return (
    <div className="m-auto max-w-5xl pt-5">
      <div className="flex h-10 items-center justify-around pb-28">
        <div className="w-96 border-b border-black" />
        <p className="text-3xl text-black">
          <span className="relative inline-block">
            <span className="absolute left-1 top-5 h-7 w-20 bg-green-200"></span>
            <span className="relative z-10 px-2 font-semibold">Teams</span>
          </span>
        </p>
        <div className="w-96 border-b border-black" />
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="mb-3 grid place-items-center gap-12 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, id) => (
            <TeamsList
              key={id}
              pic={item.picture.large}
              name={item.name.title + " " + item.name.first}
              skill={Skills[Math.floor(Math.random() * Skills.length)]}
              kontak={item.email}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;
