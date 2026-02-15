import { useState } from "react";
import { Button } from "./Button";
import { useNavigate, useOutletContext } from "react-router-dom";
import { verifyToken } from "../utils/verifyToken";
import type { Context } from "../App";

interface ProductCardProps {
  product: Product;
}

export interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  image_url: string;
  description: string;
  stocked: boolean;
  category: string;
}

export function ProductCard({ product }: ProductCardProps) {
  const [cardIsHovered, setCardIsHovered] = useState(false);
  const [showProductAddedToCartMessage, setShowProductAddedToCartMessage] =
    useState(false);
  const navigate = useNavigate();

  const { onUnconnectedUserTryingProtectedAction, addNewCartProduct } =
    useOutletContext<Context>();

  const buttonRowClass = cardIsHovered
    ? "flex gap-3 absolute top-2.5 left-3 visible"
    : "flex gap-3 absolute top-1.5 left-1.5 invisible";

  return (
    <div
      onMouseEnter={() => {
        setCardIsHovered(true);
      }}
      onMouseLeave={() => {
        setCardIsHovered(false);
      }}
      className="w-56 h-72 shadow-lg relative"
    >
      <div className=" h-2/3 relative  overflow-hidden">
        {showProductAddedToCartMessage && (
          <p className="absolute text-green-600 font-bold text-xl right-2 top-2.5">
            Ajouté
          </p>
        )}
        <div className={buttonRowClass}>
          <Button
            className=""
            onClick={async () => {
              // Add new product to the cart only if user is connected
              const connectedUserInfos = await verifyToken(
                navigate,
                onUnconnectedUserTryingProtectedAction,
              );
              if (connectedUserInfos) {
                addNewCartProduct(product);
                setShowProductAddedToCartMessage(true);
                setTimeout(() => {
                  setShowProductAddedToCartMessage(false);
                }, 500);
              }
            }}
          >
            <img
              className="w-6"
              src=".././images/cart_icon.webp"
              alt="Cart Icon"
            />
          </Button>
          <Button className="" onClick={() => {}}>
            <img
              className="w-6"
              src=".././images/love_heart_icon.webp"
              alt="Cart Icon"
            />
          </Button>
        </div>
        <img
          className="w-full h-full  object-center"
          src={product.image_url}
          alt="Image d'un produit"
        />
        {cardIsHovered && (
          <Button
            className="absolute bottom-1 text-white bg-green-500 left-1/2 px-4 py-1.5 -translate-x-1/2"
            content="Détails"
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          />
        )}
      </div>
      <div className="h-1/3 bg-gray-100 pt-2">
        <h3 className="text-center text-lg font-bold text-pink-500 mt-1">
          {product.name}
        </h3>
        <p className="text-center text-blue-900 font-bold">{product.code}</p>
        <p className="text-center text-blue-900 font-bold">${product.price}</p>
      </div>
    </div>
  );
}
