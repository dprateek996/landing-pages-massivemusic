import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    "Sonic Branding",
    "Music Production",
    "Sound Design",
    "Voice & AI Voice",
    "Licensing & Supervision",
    "Sonic Identity Strategy",
    "Audio UX & UI",
    "Podcast & Audio Content",
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-zinc-900 text-center mb-16"
        >
          Services
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-zinc-800">
                {service}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}