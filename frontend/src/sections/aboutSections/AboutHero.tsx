import { Link } from "react-router-dom";

export function AboutHero() {
  return (
    <div className="px-[10%] bg-gray-50 h-52">
      <div className="pt-8">
        <h2 className="text-blue-950 text-2xl font-bold mt-5">
          A propos de nous
        </h2>
        <div className="flex gap-2 mt-2 invisible lg:visible">
          <Link to="/">Accueil</Link>
          <Link to="/products">Produits</Link>
          <Link className="active-link" to="/about">
            A propos
          </Link>
        </div>
      </div>
    </div>
  );
}
