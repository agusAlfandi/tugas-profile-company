import ProductsData from "./Products";

const ProductListData = () => {
  return (
    <div className="grid grid-cols-1 divide-y">
      <ProductsData
        title="Desktop PC"
        data="Koleksi desktop PC kami dilengkapi dengan spesifikasi
  terkini dari prosesor, memori, penyimpanan, dan kartu grafis. Cocok
  untuk penggunaan kantor, desain, atau gaming tergantung kebutuhan Anda."
        price="Harga mulai dari Rp 5.999.000"
      />
      <ProductsData
        title="Leptop"
        data="Kami menawarkan pilihan laptop dari merek-merek terkemuka, seperti Dell, Lenovo, HP, dan Acer. Tersedia dalam berbagai ukuran layar, konfigurasi prosesor, dan kapasitas penyimpanan."
        price="Harga mulai dari Rp 7.499.000"
      />
      <ProductsData
        title="Periferal"
        data="KLengkapi perangkat Anda dengan aksesoris dan periferal yang kami sediakan, termasuk monitor, keyboard, mouse, printer, scanner, dan webcam."
        price="Harga mulai dari Rp 199.000"
      />
      <ProductsData
        title="Komponen PC"
        data="Tersedia berbagai komponen PC termasuk motherboard, prosesor, kartu grafis, memori RAM, dan penyimpanan seperti SSD dan HDD untuk upgrade atau perakitan sendiri."
        price="Harga mulai dari Rp 499.000"
      />
      <ProductsData
        title="Layanan Perakitan"
        data="Kami menawarkan layanan perakitan desktop PC sesuai dengan kebutuhan Anda. Tim kami akan membantu Anda memilih spesifikasi yang tepat dan merakit komputer."
        price="Harga mulai dari Rp 300.000"
      />
      <ProductsData
        title="Garansi & Purna Jual"
        data="Semua produk kami didukung dengan garansi resmi dari produsen. Kami juga menyediakan layanan purna jual, termasuk servis dan perawatan perangkat Anda.

    Jelajahi selengkapnya produk dan layanan kami untuk menemukan solusi teknologi yang tepat bagi kebutuhan Anda. Hubungi kami jika Anda memerlukan informasi lebih lanjut."
      />
    </div>
  );
};

export default ProductListData;
