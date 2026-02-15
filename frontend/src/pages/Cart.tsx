import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../components/Button";
import { CartProductsContainer } from "../components/CartProductsContainer";
import { CartHero } from "../sections/cartSections/CartHero";
import { useEffect, useState } from "react";
import { verifyToken } from "../utils/verifyToken";
import type { Context } from "../App";

export function Cart() {
  const [
    showCartProductDeleteConfirmationMessage,
    setShowCartProductDeleteConfirmationMessage,
  ] = useState(false);
  const [productToDeleteId, setProductToDeleteId] = useState(0);
  const {
    cartProducts,
    onUnconnectedUserTryingProtectedAction,
    onCartProductDeletionConfirmed,
  } = useOutletContext<Context>();
  const navigate = useNavigate();

  useEffect(() => {
    verifyToken(navigate, onUnconnectedUserTryingProtectedAction);
  });

  const onCartProductDeletion = (productId: number) => {
    setShowCartProductDeleteConfirmationMessage(true);
    setProductToDeleteId(productId);
  };

  return (
    <div>
      {showCartProductDeleteConfirmationMessage && (
        <div className="absolute bg-gray-300 border border-gray-500 top-20 right-5 p-3">
          <p className="text-blue-950 font-bold">
            Voulez vous vraiment supprimer ce produit du panier ?
          </p>
          <div className="mt-4 flex gap-4">
            <Button
              onClick={() => {
                onCartProductDeletionConfirmed(productToDeleteId);
                setShowCartProductDeleteConfirmationMessage(false);
              }}
              content="Oui"
              className="bg-amber-200 px-1"
            />
            <Button
              onClick={() => {
                setShowCartProductDeleteConfirmationMessage(false);
              }}
              content="Non"
              className="bg-amber-200 px-1"
            />
          </div>
        </div>
      )}
      <CartHero />
      <div className="flex justify-center py-8 px-[10%]">
        <div className="">
          {cartProducts.length > 0 ? (
            <CartProductsContainer
              onCartProductDeletion={onCartProductDeletion}
            />
          ) : (
            <p className="text-blue-950 font-bold">
              Vous n'avez pas encore de produit dans votre panier !!
            </p>
          )}

          {cartProducts.length > 0 && (
            <Button
              content="Valider mon panier"
              onClick={() => {
                navigate("/payment");
              }}
              className="bg-pink-500 text-white px-5 py-2 mt-8"
            />
          )}
        </div>
      </div>
    </div>
  );
}
