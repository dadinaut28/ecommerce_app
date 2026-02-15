import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function FormSection() {
  return (
    <div className="px-[10%] flex mb-20">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-blue-950">Ecrivez-nous</h2>
        <p className="text-gray-500 mt-2.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          architecto voluptatem libero vitae, ut molestias.
        </p>
        <form className="mt-4.5">
          <div className="flex gap-2.5 w-full">
            <Input
              className="border border-gray-400 pl-2 w-1/2 py-1.5"
              placeholder="Votre nom"
            />
            <Input
              className="border border-gray-400 pl-2 w-1/2"
              placeholder="Email"
            />
          </div>
          <Input
            placeholder="Objet"
            className="pl-2 mt-4 w-full border border-gray-400 py-1.5"
          />
          <Input
            placeholder="Entrez votre message..."
            className="pl-2 mt-6 h-28 w-full border border-gray-400"
          />
          <Button
            className="mt-4 bg-pink-500 text-white px-4 py-1.5"
            onClick={() => {}}
            content="Envoyer"
          />
        </form>
      </div>
      <div className="w-1/2 hidden md:block">
        <img src="../../images/JEMA-GER.jpg" alt="Illustration de personnes" />
      </div>
    </div>
  );
}
