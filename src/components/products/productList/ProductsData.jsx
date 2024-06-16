import { Link } from "react-router-dom";

const ProductsData = ({ title, data, price }) => {
  return (
    <div className="w-4/5 pt-5 text-justify text-2xl">
      <h1 className="mb-3 text-3xl text-black">
        <span className="relative inline-block">
          <span className="absolute left-1 top-5 h-7 w-24 bg-green-200" />
          <span className="relative z-10 px-2 font-semibold"> {title} :</span>
        </span>
      </h1>
      <p>{data}</p>
      <p>{price}</p>
      {["Desktop PC", "Leptop", "Periferal", "Komponen PC"].includes(title) ? (
        <Link
          to={`/Card/${title}`}
          className="btn btn-info my-4 rounded-lg text-lg"
        >
          Check our product
        </Link>
      ) : null}
    </div>
  );
};

export default ProductsData;
