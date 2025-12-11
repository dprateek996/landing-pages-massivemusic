import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-zinc-100" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-8"
        >
          Let’s make your brand sound unforgettable.
        </motion.h2>

        {/* Button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block px-10 py-4 text-lg font-semibold bg-black text-white rounded-full hover:bg-zinc-800 transition-colors"
        >
          Contact Us
        </motion.a>

      </div>
    </section>
  );
}