import { motion } from "framer-motion";
import heroVideo from "../../assets/video/hero.mp4";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background Video */}
            <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 text-center px-6"
            >
                <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                    NEW DIMENSIONS IN SOUND
                </h1>

                <p className="text-white/80 text-lg md:text-2xl mt-6">
                    Crafting sonic identities and experiences for modern brands.
                </p>
            </motion.div>
        </section>
    );
}

