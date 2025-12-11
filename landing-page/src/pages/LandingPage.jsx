import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ThreePillars from "../components/sections/ThreePillars";
import ImageGridGallery from "../components/sections/ImageGridGallery";
import FeaturedCases from "../components/sections/FeaturedCases";
import ServicesSection from "../components/sections/ServicesSection";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

export default function LandingPage() {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <ThreePillars />
            <ImageGridGallery />
            <FeaturedCases />
            <ServicesSection />
            <CTASection />
            <Footer />
        </div>
    );
}

