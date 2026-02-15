import { useState, type SyntheticEvent } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { registerNewUser } from "../queries";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { RegisterHero } from "../sections/registerSections/RegisterHero";
import type { Context } from "../App";

export function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onAccountCreationSuccess } = useOutletContext<Context>();

  const [loading, setLoading] = useState(false);
  const [showInvalidInputBox, setShowInvalidInputBox] = useState(false);

  const navigate = useNavigate();

  const handleRegisterFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (firstname && lastname && email && password) {
      setLoading(true);
      await registerNewUser(firstname, lastname, email, password);
      setLoading(false);

      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");

      onAccountCreationSuccess();
      navigate("/login");
    } else {
      setShowInvalidInputBox(true);
      setTimeout(() => {
        setShowInvalidInputBox(false);
      }, 1000);
    }
  };

  return (
    <div className="relative">
      <RegisterHero />
      <div className="flex justify-center">
        <div className="mt-20 mb-8 shadow-xl w-[320px] py-3 px-4 flex flex-col">
          <div
            className={`w-70 bg-gray-300 h-15 pt-4 px-1.5 absolute top-3 right-3 border border-gray-600 ${showInvalidInputBox ? "visible" : "invisible"}`}
          >
            <p className="text-blue-950 font-bold">
              Tous les champs sont obligatoires.
            </p>
          </div>
          <h2 className="font-bold text-2xl text-blue-950 text-center">
            Register
          </h2>
          <form onSubmit={handleRegisterFormSubmit} className="mt-3">
            <Input
              value={lastname}
              onChange={setLastname}
              className="pl-2 py-1.5 border border-gray-500 w-full mb-5"
              placeholder="Nom"
            />
            <Input
              value={firstname}
              onChange={setFirstname}
              className="pl-2 py-1.5 border border-gray-500 w-full mb-5"
              placeholder="Prénom"
            />
            <Input
              value={email}
              onChange={setEmail}
              className="pl-2 py-1.5 border border-gray-500 w-full mb-5"
              placeholder="Email"
            />
            <Input
              value={password}
              onChange={setPassword}
              type="password"
              className="pl-2 py-1.5 border border-gray-500 w-full mb-5"
              placeholder="Password"
            />
            <p className="text-sm mb-4">
              Vous avez déja un compte? <Link to="/login">Connectez-vous</Link>
            </p>
            <Button
              className="bg-pink-500 w-full text-white py-1.5 font-bold"
              content={loading ? "Registering..." : "Register"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
