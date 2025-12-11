import { motion } from "framer-motion";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

const images = [img1, img2, img3, img4, img5, img6];

export default function ImageGridGallery() {
  return (
    <section className="py-24 bg-white" id="work">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-zinc-900 text-center mb-16"
        >
          Featured Work
        </motion.h2>

        {/* Asymmetric Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">

          {/* Large 2x2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 overflow-hidden rounded-xl"
          >
            <img src={images[0]} className="w-full h-full object-cover" alt="Gallery Item 1" />
          </motion.div>

          {/* Small */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden row-span-1"
          >
            <img src={images[1]} className="w-full h-full object-cover" alt="Gallery Item 2" />
          </motion.div>

          {/* Tall 2 rows */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden row-span-2"
          >
            <img src={images[2]} className="w-full h-full object-cover" alt="Gallery Item 3" />
          </motion.div>

          {/* Small */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden row-span-1"
          >
            <img src={images[3]} className="w-full h-full object-cover" alt="Gallery Item 4" />
          </motion.div>

          {/* Wide 2 columns */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden col-span-1 sm:col-span-2 row-span-1"
          >
            <img src={images[4]} className="w-full h-full object-cover" alt="Gallery Item 5" />
          </motion.div>

          {/* Small */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden row-span-1"
          >
            <img src={images[5]} className="w-full h-full object-cover" alt="Gallery Item 6" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}