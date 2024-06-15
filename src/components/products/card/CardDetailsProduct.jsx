import { useParams } from "react-router-dom";
import { dataCard } from "../../../dataCardDetails/cardDetails";
import { useEffect, useState } from "react";

export default function CardDetailsProduct() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const card = dataCard.find((card) => card.id == id);
    setCard(card);
  }, [id]);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-h-auto card card-body card-bordered m-4 max-w-5xl bg-base-300">
        <div className="flex justify-center p-7 text-2xl text-green-500">
          <h1>Detail Products</h1>
        </div>
        <div className="m-4 flex max-w-5xl flex-col rounded-lg border border-gray-700 p-7 sm:h-auto sm:flex-col lg:flex-row">
          <div className="flex items-center">
            <img
              src={card?.pic}
              alt="Products"
              className="h-60 w-56 rounded-lg"
            />
          </div>
          <div className="flex max-w-2xl flex-col items-start justify-center gap-4 p-7 text-justify">
            <h1>{card?.Subtitle}</h1>
            <p>
              Description: <br />
              {card?.desc}
            </p>
            <p>
              Price: <br />
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(card?.price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
