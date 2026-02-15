import { Link } from "react-router-dom";

export function LoginHero() {
  return (
    <div className="pt-12 px-[10%] bg-gray-50 h-52">
      <div className="">
        <h2 className="text-blue-950 font-bold text-2xl">Mon compte</h2>
        <div className="flex gap-4 mt-1.5 invisible lg:visible">
          <Link to="/">Accueil</Link>
          <Link to="/register">S'inscrire</Link>
          <Link className="login-link" to="/login">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
