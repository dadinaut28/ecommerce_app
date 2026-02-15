import { useState, type SyntheticEvent } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser, LoginInputError, ServerError } from "../queries";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginIdentifierErrorMessage, setShowLoginIdentifierErrorMessage] =
    useState(false);
  const [showServerErrorMessage, setShowServerErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (showLoginIdentifierErrorMessage) {
      setShowLoginIdentifierErrorMessage(false);
    } else if (showServerErrorMessage) {
      setShowServerErrorMessage(false);
    }
    setLoading(true);

    try {
      if (email && password) {
        const token = await authenticateUser(email, password);
        console.log(token);
        localStorage.setItem("ecommerce_jwt_token", token);
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (err) {
      if (err instanceof LoginInputError) {
        setShowLoginIdentifierErrorMessage(true);
      } else if (err instanceof ServerError) {
        setShowServerErrorMessage(true);
      }
    }
    setLoading(false);
  };
  return (
    <form
      onSubmit={handleLoginFormSubmit}
      className="shadow-lg flex flex-col w-[320px] px-4.5 py-8"
    >
      <h2 className="text-blue-950 text-2xl text-center mb-5 font-bold">
        Se connecter
      </h2>
      <Input
        className="border border-gray-300 py-2 pl-1.5 mb-2"
        placeholder="Email Address"
        value={email}
        onChange={setEmail}
      />
      <Input
        type="password"
        className="border border-gray-300 pl-1.5 mb-2 mt-5 py-2"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />
      {showLoginIdentifierErrorMessage && (
        <p className="text-md text-red-500 font-bold">
          Le mot de passe ou l'adresse email est incorrect !!
        </p>
      )}
      {showServerErrorMessage && (
        <p className="text-md text-red-500 font-bold">
          Une erreur s'est produite en interne. Veuillez réessayer plus tard.
        </p>
      )}
      <Button
        className="bg-pink-500 text-white py-1.5 mt-5 font-bold"
        content={loading ? "Connexion" : "Connectez-vous"}
        onClick={() => {}}
      />
      <p className="mt-4">
        Pas encore de compte ? <Link to="/register">Inscrivez-vous</Link>
      </p>
    </form>
  );
}
