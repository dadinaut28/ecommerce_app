import { Link } from "react-router-dom";

export function ProductHero() {
  return (
    <div className="h-52 bg-gray-50 px-[10%] pt-13">
      <div>
        <h2 className="text-blue-950 font-bold text-2xl">Nos produits</h2>
        <div className="flex gap-2 mt-2 invisible lg:visible">
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
          <Link className="active-link" to="/products">
            Nos produits
          </Link>
        </div>
      </div>
    </div>
  );
}
