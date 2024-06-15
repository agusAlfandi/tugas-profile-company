import { Link } from "react-router-dom";

const ProductsData = ({ title, data, price }) => {
  return (
    <div className="w-4/5 pt-5 text-justify text-2xl">
      <h1 className="mb-3 text-3xl text-green-500">{title} :</h1>
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
