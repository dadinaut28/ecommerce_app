import { ProductCard, type Product } from "./ProductCard";

interface LatestProductsCardContainerProps {
  products: Product[];
}

export function LatestProductsCardContainer({
  products,
}: LatestProductsCardContainerProps) {
  return (
    <div className="grid gap-4 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
