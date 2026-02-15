import { Link } from "react-router-dom";

export function ContactHero() {
  return (
    <div className="bg-gray-50 h-52 px-[10%]">
      <div className="pt-12">
        <h2 className="text-blue-950 font-bold text-2xl">Contactez nous</h2>
        <div className="flex gap-2 mt-2 invisible lg:visible">
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
          <Link className="contact-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
