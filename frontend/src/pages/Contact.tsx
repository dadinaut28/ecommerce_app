import { ContactHero } from "../sections/contactSections/ContactHero";
import { ContactSecondSection } from "../sections/contactSections/ContactSecondSection";
import { FormSection } from "../sections/contactSections/FormSection";

export function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactSecondSection />
      <FormSection />
    </div>
  );
}
