import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex justify-center pt-16">
      <div className="px-4 ">
        <p className="text-blue-950 text-center text-xl md:text-3xl font-bold">
          Une erreur s'est produite !!
        </p>
        <img
          className="w-2xs sm:w-xl md:w-2xl my-5 ml-[50%] -translate-x-[50%]"
          src=".././images/construction-site2.jpg"
          alt=""
        />
        <p className="text-lg text-center">
          Retournez à l'<Link to="/">accueil</Link>
        </p>
      </div>
    </div>
  );
}
