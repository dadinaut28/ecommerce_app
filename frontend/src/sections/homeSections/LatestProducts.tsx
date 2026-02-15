import { useEffect, useState } from "react";
import { LatestProductsCardContainer } from "../../components/LatestProductsCardsContainer";
import { getLatestProducts } from "../../queries";
// import { latestProducts } from "../../data/products";

export function LatestProducts() {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getLatestProducts();
      setLatestProducts(products);
    })();
  }, []);

  return (
    <div className="my-12">
      <h2 className="text-3xl text-blue-950 font-bold text-center">
        Nouveaux Produits
      </h2>
      <div className="flex justify-center mt-7">
        <LatestProductsCardContainer products={latestProducts} />
      </div>
    </div>
  );
}
