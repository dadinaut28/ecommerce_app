import { useState, type SyntheticEvent } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import {
  apiUrl,
  authenticateUser,
  LoginInputError,
  ServerError,
} from "../queries";
import { useNavigate } from "react-router-dom";

export function DashboardLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [
    showAuthenticationSuccessMessage,
    setShowAuthenticationSuccessMessage,
  ] = useState(false);

  const [showLoginIdentifierErrorMessage, setShowLoginIdentifierErrorMessage] =
    useState(false);

  const [showServerErrorMessage, setShowServerErrorMessage] = useState(false);
  const [showInputMissingMessage, setShowInputMissingMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (email && password) {
        setLoading(true);
        const token = await authenticateUser(email, password);

        const response = await fetch(`${apiUrl}/api/verify-token`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();
        const { userRole } = data.payload;

        if (userRole !== "admin") {
          return navigate("/");
        }

        setShowAuthenticationSuccessMessage(true);
        setTimeout(() => {
          setShowAuthenticationSuccessMessage(false);
        }, 2000);
        setLoading(false);
        setEmail("");
        setPassword("");

        localStorage.setItem("ecommerce_jwt_token", token);
      } else {
        setShowInputMissingMessage(true);
        setTimeout(() => {
          setShowInputMissingMessage(false);
        }, 2000);
      }
    } catch (err) {
      if (err instanceof LoginInputError) {
        setShowLoginIdentifierErrorMessage(true);
      } else if (err instanceof ServerError) {
        setShowServerErrorMessage(true);
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      {showAuthenticationSuccessMessage && (
        <div className="absolute py-4 px-6 border border-gray-500 bg-gray-300 right-5">
          <p className="font-bold text-lg text-blue-950">
            Authentification réussie !!
          </p>
        </div>
      )}
      {showInputMissingMessage && (
        <div className="absolute py-4 px-6 right-5 border bg-gray-300 border-gray-500">
          <p className="font-bold text-lg text-blue-950">
            Tous les champs sont obligatoires !
          </p>
        </div>
      )}
      <form
        onSubmit={handleFormSubmit}
        className="w-[320px] shadow-xl mt-24 flex flex-col px-3 py-4"
      >
        <h2 className="text-blue-950 text-xl font-bold text-center my-2">
          Login
        </h2>
        <Input
          value={email}
          className="pl-2 py-2 border border-gray-500"
          placeholder="Email"
          onChange={setEmail}
        />
        <Input
          type="password"
          value={password}
          className="pl-2 py-2 border border-gray-500 mt-6"
          placeholder="Password"
          onChange={setPassword}
        />
        {showLoginIdentifierErrorMessage && (
          <p className="text-red-500">
            Le mot de passe ou l'adresse email est incorrect !!
          </p>
        )}
        {showServerErrorMessage && (
          <p className="text-red-500">
            Une erreur s'est produite en interne. Réessayez plus tard !
          </p>
        )}
        <Button
          className="my-5 py-2 bg-pink-500 text-white font-bold"
          content={loading ? "Connexion..." : "Se connecter"}
          onClick={() => {}}
        />
      </form>
    </div>
  );
}
