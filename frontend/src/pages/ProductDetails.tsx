import { useParams } from "react-router-dom";
import { ProductsDetailsHero } from "../sections/productDetailsSections/ProductDetailsHero";
import { useEffect, useState } from "react";
import { getProduct } from "../queries";
import { ProductSection } from "../sections/productDetailsSections/ProductSection";
import type { Product } from "../components/ProductCard";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      const product = await getProduct(id);
      console.log(product);
      setProduct(product);
    })();
  }, [id]);

  return (
    <div>
      <ProductsDetailsHero productId={id} />
      <ProductSection product={product} />
      <div className="px-[10%] py-5">
        <h2 className="text-2xl text-blue-950 font-bold mb-2.5">Description</h2>
        <p>{product?.description}</p>
      </div>
    </div>
  );
}
