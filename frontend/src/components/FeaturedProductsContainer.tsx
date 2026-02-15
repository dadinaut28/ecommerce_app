import { ProductCard, type Product } from "./ProductCard";

interface FeaturedProductsContainerProps {
  products: Product[];
}

export function FeaturedProductsContainer({
  products,
}: FeaturedProductsContainerProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-7 my-10">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
