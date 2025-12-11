import { motion } from "framer-motion";

export default function FeaturedCases() {
  const cases = [
    {
      img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Spotify Brand Campaign",
      description: "A sonic identity project with global reach.",
    },
    {
      img: "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Nike Rhythm Experience",
      description: "Sound design for movement and performance.",
    },
    {
      img: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Apple Sound Branding",
      description: "Minimalist sound system for product launches.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="cases">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 text-center mb-16">
          Featured Cases
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-sm bg-white border"
            >
              <img src={item.img} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}