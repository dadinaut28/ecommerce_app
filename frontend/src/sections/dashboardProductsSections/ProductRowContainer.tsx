import { ProductRow } from "../../components/ProductRow";

export function ProductRowContainer({
  products,
  onUpdateProductFormInputMissing,
  reloadProducts,
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
