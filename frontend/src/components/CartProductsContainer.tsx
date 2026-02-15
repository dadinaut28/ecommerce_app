import { useOutletContext } from "react-router-dom";
import { CartProductCard } from "./CartProductCard";
import type { CartProduct, Context } from "../App";

export function CartProductsContainer({
  onCartProductDeletion,
}: {
  onCartProductDeletion: (id: number) => void;
}) {
  const { cartProducts } = useOutletContext<Context>();
  return (
    <div>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cartProducts.map((cartProduct: CartProduct) => {
          return (
            <CartProductCard
              key={cartProduct.id}
              onCartProductDeletion={onCartProductDeletion}
              cartProduct={cartProduct}
            />
          );
        })}
      </div>
    </div>
  );
}
