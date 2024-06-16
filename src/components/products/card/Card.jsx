import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataCard } from "../../../dataCardDetails/cardDetails";
import { CardDetails } from "./CardDetails";

export default function Card() {
  const { title } = useParams();
  const [card, setCard] = useState([]);

  useEffect(() => {
    const card = dataCard.filter((card) => card.title === title);
    setCard(card);
  }, [title]);

  return (
    <div className="m-auto flex max-w-5xl flex-col">
      <h1 className="flex justify-center py-4 text-2xl text-black">
        <span className="relative inline-block">
          <span className="absolute left-1 top-4 h-7 w-24 bg-green-200"></span>
          <span className="relative z-10 px-2 font-semibold">{title}</span>
        </span>
      </h1>
      <div className="max-w- grid grid-rows-1 md:grid-cols-3">
        {card.map((items) => {
          return <CardDetails key={items.id} items={items} />;
        })}
      </div>
    </div>
  );
}
