import TeamsList from "../teams/TeamsList";
import { useEffect, useState } from "react";

const Skills = ["Leader teknisi", "Teknisi", "Manager", "Admin", "Supervisor"];

const Teams = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDataUser() {
      try {
        const res = await fetch("https://randomuser.me/api/?results=12");
        const response = await res.json();
        setData(response.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    getDataUser();
  }, []);

  return (
    <div className="pt-5">
      <div className="flex items-center justify-around pb-28 h-10">
        <div className="border-b border-gray-400 w-96" />
        <p className="text-3xl text-green-500">Teams</p>
        <div className="border-b border-gray-400 w-96" />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-4 mb-3 place-items-center">
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
