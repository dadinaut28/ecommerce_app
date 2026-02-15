import { useOutletContext } from "react-router-dom";
import type { Context } from "../../App";

export function CartHero() {
  const { calculateCartProductsTotalPrice } = useOutletContext<Context>();
  return (
    <div className="h-52 bg-gray-50 px-[10%] pt-16">
      <div>
        <h2 className="text-blue-950 font-bold text-2xl">Mon panier</h2>
        <p className="text-blue-950 font-bold text-xl mt-2">
          Prix total:{" "}
          <span className="text-gray-400">
            ${calculateCartProductsTotalPrice()}
          </span>
        </p>
      </div>
    </div>
  );
}
