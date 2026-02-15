import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export function HomeHero() {
  const navigate = useNavigate();
  return (
    <div className="px-[10%] py-30 bg-gray-50">
      <div className="lg:w-1/2 ">
        <p className="text-pink-500 font-bold text-xl">
          Les meilleurs meubles pour votre maison...
        </p>
        <h2 className="text-3xl font-bold my-6 sm:my-4">
          New furniture Collection Trend in 2025
        </h2>
        <p className="text-gray-400 my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          temporibus nesciunt corporis provident, assumenda itaque.
        </p>
        <Button
          className="bg-pink-500 text-white px-5 py-2.5 mt-1.5"
          content="Voir les produits"
          onClick={() => {
            navigate("/products");
          }}
        />
      </div>
      <div></div>
    </div>
  );
}
