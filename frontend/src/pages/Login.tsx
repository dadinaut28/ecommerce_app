import { useOutletContext } from "react-router-dom";
import { LoginHero } from "../sections/loginSections/LoginHero";
import { LoginSection } from "../sections/loginSections/LoginSection";
import type { Context } from "../App";

export function Login() {
  const { showAccountCreationSuccessMessage, showAskUserToConnectMessage } =
    useOutletContext<Context>();
  return (
    <div className="relative">
      {showAccountCreationSuccessMessage && (
        <div className="absolute py-4 px-4 border border-gray-500 bg-gray-300 right-4 top-5">
          <p className="font-bold text-blue-950">
            Votre compte a été créé avec succès !!
          </p>
        </div>
      )}
      {showAskUserToConnectMessage && (
        <div className="absolute py-4 px-4 border border-gray-500 bg-gray-300 right-4 top-5">
          <p className="font-bold text-blue-950">Connectez-vous d'abord !!</p>
        </div>
      )}
      <LoginHero />
      <LoginSection />
    </div>
  );
}
