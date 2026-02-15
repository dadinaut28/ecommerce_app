import { useState } from "react";
import type { CartProduct, Context } from "../App";
import { Button } from "./Button";
import { useOutletContext } from "react-router-dom";

export function CartProductCard({
  cartProduct,
  onCartProductDeletion,
}: {
  cartProduct: CartProduct;
  onCartProductDeletion: (id: number) => void;
}) {
  const [productQuantity, setProductQuantity] = useState(cartProduct.quantity);
  const { increaseCartProductQuantity, decreaseCartProductQuantity } =
    useOutletContext<Context>();
  const [isCardHovered, setIsCardHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsCardHovered(true);
      }}
      onMouseLeave={() => {
        setIsCardHovered(false);
      }}
      className="shadow-lg pb-4 w-56 relative"
    >
      {isCardHovered && (
        <Button
          onClick={() => {
            onCartProductDeletion(cartProduct.id);
          }}
          className="absolute top-3 left-3"
        >
          <img src=".././images/trash.png" alt="Icone trash" />
        </Button>
      )}
      <img
        className="h-50 w-full object-center"
        src={cartProduct.image_url}
        alt="Image d'un produit"
      />
      <p className="text-center font-bold text-blue-950 text-lg my-2.5">
        {cartProduct.name}
      </p>
      <p className="text-blue-950 font-bold text-center text-lg">
        ${cartProduct.price}
      </p>
      <div className="flex justify-center gap-2.5 items-center mt-2.5">
        <Button
          className="bg-gray-400 w-8 h-8 rounded-full"
          onClick={() => {
            decreaseCartProductQuantity(cartProduct.id);
            setProductQuantity(
              cartProduct.quantity > 0
                ? cartProduct.quantity - 1
                : cartProduct.quantity,
            );
          }}
          content="-"
        />
        <span>{productQuantity}</span>
        <Button
          className="bg-gray-400 w-8 h-8 rounded-full"
          onClick={() => {
            increaseCartProductQuantity(cartProduct.id);
            setProductQuantity(cartProduct.quantity + 1);
          }}
          content="+"
        />
      </div>
    </div>
  );
}
