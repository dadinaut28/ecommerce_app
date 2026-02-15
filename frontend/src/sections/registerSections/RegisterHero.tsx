import { Link } from "react-router-dom";

export function RegisterHero() {
  return (
    <div className="h-52 bg-gray-50 pt-12 px-[10%]">
      <h2 className="text-blue-950 text-bold text-2xl font-bold">S'inscrire</h2>
      <div className="flex gap-2 invisible lg:visible">
        <Link to="/">Accueil</Link>
        <Link to="/login">Se connecter</Link>
        <Link className="active-link" to="/register">
          S'inscrire
        </Link>
      </div>
    </div>
  );
}
