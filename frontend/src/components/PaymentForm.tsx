import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";


export function PaymentForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <form className="flex flex-col px-5 gap-7 md:w-2/3">
      <p className="text-2xl text-blue-950">Contact</p>
      <Input
        placeholder="Numéro de téléphone"
        className="border-b border-gray-400"
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      <p className="text-2xl text-blue-950 mt-5">Adresse de livraison</p>
      <Input className="border-b border-gray-400" placeholder="Ville" />
      <Input className="border-b border-gray-400" placeholder="Adresse" />
      <Input
        className="border-b border-gray-400"
        placeholder="Numéro d'appartement ou de chambre"
      />
      <Button
        className="w-42 bg-pink-500 text-white py-2 px-3.5 mt-2.5"
        content="Valider le paiement"
      />
    </form>
  );
}
