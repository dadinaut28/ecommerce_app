import { useEffect, useState } from "react";
import { FeaturedProductsContainer } from "../../components/FeaturedProductsContainer";

import { getProducts } from "../../queries";

export function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getProducts(4);
      setProducts(products);
    })();
  }, []);

  return (
    <div className="my-14">
      <h2 className="font-bold text-3xl text-center text-blue-950">
        Produits populaires
      </h2>
      <div className="flex justify-center">
        <FeaturedProductsContainer products={products} />
      </div>
    </div>
  );
}
