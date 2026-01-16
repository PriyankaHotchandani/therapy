import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import TestimonialSection from "../sections/TestimonialSection";
import PricingSection from "../sections/PricingSection";
import ContactSection from "../sections/ContactSection";
import PhilosophySection from "../sections/PhilosophySection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <PhilosophySection />
            <TestimonialSection />
            <PricingSection />
            <ContactSection />
        </>
    );
}