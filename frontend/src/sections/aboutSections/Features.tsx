import { FeatureCard } from "../../components/FeatureCard";
import { features } from "../../data/features";

export function Features() {
  return (
    <div className="my-20">
      <h2 className="text-3xl text-blue-950 font-bold text-center mt-5">
        Our features
      </h2>
      <div className="flex justify-center mt-11">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6">
          {features.map((feature) => {
            return <FeatureCard key={feature.id} feature={feature} />;
          })}
        </div>
      </div>
    </div>
  );
}
