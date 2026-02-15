import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export function AboutSecondSection() {
  const navigate = useNavigate();
  return (
    <div className="my-18 flex flex-col px-[10%] gap-6 md:flex-row">
      <div className="h-60 md:w-1/2">
        <img
          className="w-full h-full"
          src="../../images/two-persons.jpg"
          alt=""
        />
      </div>
      <div className="py-2 md:w-1/2">
        <h2 className="text-2xl text-blue-950 font-bold">
          Découvrez notre histoire
        </h2>
        <p className="my-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          doloribus dolor aspernatur quam accusamus necessitatibus temporibus.
        </p>
        <Button
          content="Contactez nous"
          onClick={() => {
            navigate("/contact");
          }}
          className="mt-8 bg-pink-600 px-5 py-1.5 text-white"
        />
      </div>
    </div>
  );
}
