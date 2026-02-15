import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../../components/Button";
import type { Product } from "../../components/ProductCard";
import { verifyToken } from "../../utils/verifyToken";
import { useState } from "react";
import type { Context } from "../../App";

export function ProductSection({ product }: { product: Product | null }) {
  const { addNewCartProduct } = useOutletContext<Context>();
  const [showProductAddedToCartMessage, setShowProductAddedToCartMessage] =
    useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center py-14">
      <div className="flex shadow-xl relative">
        {showProductAddedToCartMessage && (
          <h2 className="absolute right-4 text-green-400 font-bold top-4 text-lg">
            Ajouté
          </h2>
        )}
        <div className="w-2/5">
          <img
            className="object-center"
            src={product?.image_url}
            alt="Image du produit"
          />
        </div>
        <div className="w-3/5 h-full bg-gray-50 flex items-center">
          <div className="pl-6 py-5 ">
            <h2 className="text-xl text-blue-950 font-bold">{product?.name}</h2>
            <p className="font-bold mt-2">
              <span className="text-lg text-blue-950 font-bold">Code:</span>{" "}
              {product?.code}
            </p>

            <h3 className="my-4 text-xl font-bold">${product?.price}</h3>
            <p className="font-bold text-lg">
              <span className="font-bold text-blue-950 text-lg">Category:</span>{" "}
              {product?.category}
            </p>
            <Button
              className="bg-pink-500 mt-4 px-4 text-white py-1.5"
              content="Add to cart"
              onClick={async () => {
                const userInfos = await verifyToken(navigate, () => {});
                if (userInfos) {
                  addNewCartProduct(product);
                  setShowProductAddedToCartMessage(true);
                  setTimeout(() => {
                    setShowProductAddedToCartMessage(false);
                  }, 500);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
