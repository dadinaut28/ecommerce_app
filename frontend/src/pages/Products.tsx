import { useEffect, useState } from "react";
import { ProductHero } from "../sections/productSections.tsx/ProductHero";
import { ProductCardsContainer } from "../sections/productSections.tsx/ProductsCardContainer";
import { getProducts } from "../queries";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);
  return (
    <div>
      <ProductHero />
      <ProductCardsContainer products={products} />
    </div>
  );
}
