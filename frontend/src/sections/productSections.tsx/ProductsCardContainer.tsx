import { ProductCard, type Product } from "../../components/ProductCard";

export function ProductCardsContainer({ products }: { products: Product[] }) {
  return (
    <div className="flex justify-center">
      <div className=" py-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
