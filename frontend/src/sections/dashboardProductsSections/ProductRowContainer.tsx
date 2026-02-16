import type { Product } from "../../components/ProductCard";
import { ProductRow } from "../../components/ProductRow";

export function ProductRowContainer({
  products,
  onUpdateProductFormInputMissing,
  reloadProducts,
}: {
  products: Product[];
  onUpdateProductFormInputMissing: () => void;
  reloadProducts: () => void;
}) {
  return (
    <div className="">
      {products.map((product) => {
        return (
          <ProductRow
            reloadProducts={reloadProducts}
            onUpdateProductFormInputMissing={onUpdateProductFormInputMissing}
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
}
