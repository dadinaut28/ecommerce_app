import { AboutHero } from "../sections/aboutSections/AboutHero";
import { AboutSecondSection } from "../sections/aboutSections/AboutSecondSection";
import { Features } from "../sections/aboutSections/Features";
import { Testimonials } from "../sections/aboutSections/Testimonials";

export function About() {
  return (
    <div>
      <div>
        <AboutHero />
        <AboutSecondSection />
        <Features />
        <Testimonials />
      </div>
    </div>
  );
}
