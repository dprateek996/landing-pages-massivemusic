import { motion } from "framer-motion";

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

export default function ThreePillars() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-zinc-900 text-center mb-16"
        >
          Our Approach
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-zinc-800 mb-4">
                {pillar.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}