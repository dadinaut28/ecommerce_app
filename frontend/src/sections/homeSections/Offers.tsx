import { OfferCard } from "../../components/OfferCard";
import { offers } from "../../data/offers";

export function Offers() {
  return (
    <div className="mt-32">
      <h2 className="text-center text-blue-950 text-3xl font-bold">
        Nos offres
      </h2>
      <div className="flex justify-center mt-7">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 md:grid-cols-4">
          {offers.map((offer) => {
            return <OfferCard key={offer.id} offer={offer} />;
          })}
        </div>
      </div>
    </div>
  );
}
