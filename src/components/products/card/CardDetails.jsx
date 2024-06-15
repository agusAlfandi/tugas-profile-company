import { Link } from "react-router-dom";

export function CardDetails({ items }) {
  const { id } = items;
  return (
    <div className="container p-4">
      <Link to={`/Card-Details-Products/${id}`}>
        <div className="card card-body card-bordered h-80 rounded-lg border-gray-700 text-center duration-300 hover:scale-105 hover:bg-green-500 hover:shadow-2xl">
          <div className="flex justify-center">
            <img
              src={items.pic}
              alt="Image Product"
              className="h-52 w-64 rounded-xl"
            />
          </div>
          <p>{items.Subtitle}</p>
        </div>
      </Link>
    </div>
  );
}
