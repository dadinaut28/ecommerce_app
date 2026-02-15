import { Link } from "react-router-dom";

export function ProductsDetailsHero({
  productId,
}: {
  productId: string | undefined;
}) {
  return (
    <div className="h-52 bg-gray-50 px-[10%] pt-15">
      <div>
        <h2 className="font-bold text-xl text-blue-950">Détails du produit</h2>
        <div className="flex gap-2 mt-2 invisible lg:visible">
          <Link to="/">Accueil</Link>
          <Link to="/products">Produits</Link>
          <Link className="active-link" to={`/products/${productId}`}>
            Détails
          </Link>
        </div>
      </div>
    </div>
  );
}
