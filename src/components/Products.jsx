import ProductListData from "../products/ProductListData";
import Testimoni from "../testimoni/Testimoni";

const Products = () => {
  return (
    <div className="pt-28">
      <div className="flex items-center justify-around pb-28 h-10">
        <div className="border-b border-gray-400 w-96" />
        <p className="text-3xl text-green-500">Products</p>
        <div className="border-b border-gray-400 w-96" />
      </div>
      <div>
        <p className="text-2xl">Produk & Layanan Kami:</p>
        <p className="text-2xl pt-5 text-justify">
          Di Toko TECH, kami menyediakan berbagai perangkat keras komputer dan
          laptop berkualitas tinggi untuk memenuhi kebutuhan teknologi Anda.
          Jelajahi penawaran kami di bawah ini:
        </p>
        <ProductListData />
      </div>
      <Testimoni />
    </div>
  );
};

export default Products;
