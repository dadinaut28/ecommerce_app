import type { Offer } from "../data/offers";

interface OfferCardProps {
  offer: Offer;
}

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <div className="w-48 h-52 shadow-lg pt-20 px-2">
      <h3 className="text-center text-blue-950 font-bold mb-1.5">
        {offer.name}
      </h3>
      <p className="text-center text-gray-500">{offer.description}</p>
    </div>
  );
}
