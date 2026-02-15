import type { Feature } from "../data/features";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="w-48 h-60 shadow-lg pt-6 px-2">
      <img
        className="w-14 h-14 ml-[50%] -translate-x-[50%]"
        src={feature.logo.url}
        alt={feature.logo.alt}
      />
      <p className="text-blue-950 my-1.5 font-bold text-center">
        {feature.name}
      </p>
      <p className="text-gray-400 text-center mt-5">{feature.description}</p>
    </div>
  );
}
