import { HomeHero } from "../sections/homeSections/HomeHero";
import { FeaturedProducts } from "../sections/homeSections/FeaturedProducts";
import { Offers } from "../sections/homeSections/Offers";
import { Button } from "../components/Button";
import { LatestProducts } from "../sections/homeSections/LatestProducts";

export function Home() {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <LatestProducts />
      <Offers />

      <div className="px-[10%] mt-15 flex flex-col gap-6 py-10 lg:flex-row">
        <div className="lg:w-1/2 h-70">
          <img
            className=" h-full object-center"
            src=".././images/best-seller.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-xl font-bold text-blue-950 mb-2">
            Unique features of latest and trending products
          </h2>
          <ul>
            <li className="text-gray-500 my-1.5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              rem doloribus.
            </li>
            <li className="text-gray-500 my-1.5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              rem doloribus.
            </li>
          </ul>
          <div className="mt-5">
            <Button
              content="Add to cart"
              className="bg-pink-500 px-8 py-1.5 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
