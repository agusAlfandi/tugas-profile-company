const ProductsData = ({ title, data, price }) => {
  return (
    <div className="pt-5 text-2xl text-justify w-4/5">
      <p className="text-2xl text-green-500">{title} :</p>
      <p>{data}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductsData;
