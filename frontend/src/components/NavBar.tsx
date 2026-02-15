import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";

export function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <nav className="flex items-center px-[10%] h-15 bg-white justify-between relative">
      <Button onClick={() => navigate("/")}>
        <h2 className="text-2xl font-bold text-blue-950">Boutique</h2>
      </Button>
      <div className="absolute z-30 -bottom-10 w-[80%] flex justify-center lg:static lg:w-fit">
        <ul className="flex gap-3 ">
          <Link className="hidden lg:inline-block" to="/">
            Accueil
          </Link>
          <Link to="/about">A propos</Link>
          <Link to="/products">Nos produits</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Panier</Link>
        </ul>
      </div>
      <div className="flex">
        <Input
          value={search}
          onChange={setSearch}
          className="border border-gray-500 h-8 w-30 md:w-50"
        />
        <Button className="bg-pink-500 text-white h-8 px-2">
          <img src=".././images/search-alt.svg" alt="Icone recherche" />
        </Button>
      </div>
    </nav>
  );
}
