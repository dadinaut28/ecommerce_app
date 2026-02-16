import { useEffect, useState } from "react";
import { LatestProductsCardContainer } from "../../components/LatestProductsCardsContainer";
import { getLatestProducts } from "../../queries";

export function LatestProducts() {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getLatestProducts();
      setLatestProducts(products);
    })();
  }, []);
  return (
    <div className="px-[10%]">
      <h2 className="text-blue-950 text-3xl font-bold text-center mb-8">
        Nouveaux produits
      </h2>
      <div className="flex justify-center px-[10%]">
        <LatestProductsCardContainer products={latestProducts} />
      </div>
    </div>
  );
}
