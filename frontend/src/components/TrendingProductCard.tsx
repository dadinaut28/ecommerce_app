import type { Product } from "./ProductCard";

interface TrendingProductCardProps {
  product: Product;
}

export function TrendingProductCard({ product }: TrendingProductCardProps) {
  return (
    <div className="w-52 h-60 shadow-lg">
      <div className="w-3/4">
        <img src={product.image_url} alt="Image d'un produit" />
      </div>
      <div className="w-1/4">
        <p className="text-center">{product.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
