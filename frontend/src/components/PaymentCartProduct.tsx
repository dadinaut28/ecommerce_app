import type { CartProduct } from "../App";

export function PaymentCartProduct({
  cartProduct,
}: {
  cartProduct: CartProduct;
}) {
  return (
    <div className="flex w-65 items-center gap-16 border-b border-gray-400 pb-3">
      <div className="flex gap-4 items-center">
        <img
          className="w-18"
          src={cartProduct.image_url}
          alt="Image de produit"
        />
        <div>
          <h3 className="font-bold">{cartProduct.name}</h3>
          <p className="text-gray-500">{cartProduct.code}</p>
        </div>
      </div>
      <h2 className="text-blue-950 font-bold text-lg">${cartProduct.price}</h2>
    </div>
  );
}
