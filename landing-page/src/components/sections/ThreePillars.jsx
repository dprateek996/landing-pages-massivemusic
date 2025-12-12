import { motion, useScroll, useTransform } from "framer-motion";

const pillars = [
  {
    title: "Creativity",
    description:
      "Original music, sound design, and sonic exploration crafted for modern brands.",
  },
  {
    title: "Infrastructure",
    description:
      "A global network of producers, composers, and engineers working seamlessly.",
  },
  {
    title: "Impact",
    description:
      "Sonic identities and strategies that create emotional connection and recognition.",
  },
];

const easing = [0.16, 1, 0.3, 1];

export default function ThreePillars() {

  const { scrollY } = useScroll();
  const exitY = useTransform(scrollY, [0, 200], [0, -12]);
  const exitOpacity = useTransform(scrollY, [0, 180], [1, 0.92]);

  return (
    <motion.section 
     style={{ opacity: exitOpacity, y: exitY }}
    className="py-28 bg-white"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easing }}
          className="text-4xl md:text-6xl font-extrabold text-zinc-900 text-center mb-20 tracking-tight"
        >
          Our Approach
        </motion.h2>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: easing,
                delay: index * 0.15,
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="text-center p-4 rounded-xl transition-all"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-zinc-800 mb-4 tracking-tight">
                {pillar.title}
              </h3>

              <p className="text-zinc-600 leading-relaxed text-lg">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}