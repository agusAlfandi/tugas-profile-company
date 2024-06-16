import ProductListData from "./products/productList/ProductListData";
import Testimoni from "./testimoni/Testimoni";

const Products = () => {
  return (
    <div className="m-auto max-w-5xl pt-28">
      <div className="flex h-10 items-center justify-around pb-28">
        <div className="w-96 border-b border-black" />
        <p className="text-4xl text-black">
          <span className="relative inline-block">
            <span className="absolute left-1 top-5 h-7 w-36 bg-green-200"></span>
            <span className="relative z-10 px-2 font-semibold"> Products</span>
          </span>
        </p>
        <div className="w-96 border-b border-black" />
      </div>
      <div>
        <p className="text-3xl">Produk & Layanan Kami:</p>
        <p className="pt-5 text-justify text-2xl">
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
