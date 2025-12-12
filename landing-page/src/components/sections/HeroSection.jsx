import { motion, useScroll, useTransform } from "framer-motion";
import heroVideo from "../../assets/video/hero.mp4";

export default function HeroSection() {
    const { scrollY } = useScroll();

    // Parallax motion values
    const y = useTransform(scrollY, [0, 150], [0, -60]);
    const opacity = useTransform(scrollY, [0, 150], [1, 0.4]);
    const videoY = useTransform(scrollY, [0, 150], [0, -30]);


    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">

            {/* Background Video */}
            <motion.video
    src={heroVideo}
    autoPlay
    muted
    loop
    playsInline
    style={{ y: videoY }}
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
/>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Parallax Text Container */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center px-6"
            >
                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    className="text-white text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight tracking-tight"
                >
                    NEW DIMENSIONS IN SOUND
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-white/80 text-xl md:text-3xl mt-10 max-w-3xl mx-auto"
                >
                    Crafting sonic identities and experiences for modern brands.
                </motion.p>
            </motion.div>

        </section>
    );
}