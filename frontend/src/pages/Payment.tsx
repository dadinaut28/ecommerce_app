import { useOutletContext } from "react-router-dom";
import { PaymentForm } from "../components/PaymentForm";
import { PaymentCartProduct } from "../components/PaymentCartProduct";
import type { CartProduct, Context } from "../App";

export function Payment() {
  // const [totalPrice, setTotalPrice] = useState(0)

  const { cartProducts } = useOutletContext<Context>();

  const totalPrice = cartProducts.reduce(
    (acc: number, product: CartProduct) => {
      return acc + product.price * product.quantity;
    },
    0,
  );

  return (
    <div className="flex flex-col gap-10 pt-25 md:flex-row ">
      <PaymentForm />
      <div className="pl-5 md:w-1/3">
        {cartProducts.map((cartProduct: CartProduct) => {
          return (
            <PaymentCartProduct
              key={cartProduct.id}
              cartProduct={cartProduct}
            />
          );
        })}
        <p className="mt-4 text-xl">
          <span className="text-blue-950 font-bold">Total:</span> ${totalPrice}
        </p>
      </div>
    </div>
  );
}
