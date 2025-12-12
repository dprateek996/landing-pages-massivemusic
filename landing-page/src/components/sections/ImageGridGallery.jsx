import { motion } from "framer-motion";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

export default function ImageGridGallery() {
    const easing = [0.16, 1, 0.3, 1];

    return (
        <section className="py-24 bg-white" id="work">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 1, ease: easing }}
                    className="text-4xl md:text-5xl font-extrabold text-zinc-900 text-center mb-16"
                >
                    Featured Work
                </motion.h2>

                {/* Asymmetric Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">

                    {/* Tile 1 — Large 2x2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 1, ease: easing, delay: 0 * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 overflow-hidden rounded-xl shadow-sm"
                    >
                        <img src={img1} className="w-full h-full object-cover" alt="Project 1" />
                    </motion.div>

                    {/* Tile 2 — Small */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 1, ease: easing, delay: 1 * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="rounded-xl overflow-hidden shadow-sm"
                    >
                        <img src={img2} className="w-full h-full object-cover" alt="Project 2" />
                    </motion.div>

                    {/* Tile 3 — Tall */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 1, ease: easing, delay: 2 * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="rounded-xl overflow-hidden row-span-2 shadow-sm"
                    >
                        <img src={img3} className="w-full h-full object-cover" alt="Project 3" />
                    </motion.div>

                    {/* Tile 4 — Small */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 1, ease: easing, delay: 3 * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="rounded-xl overflow-hidden shadow-sm"
                    >
                        <img src={img4} className="w-full h-full object-cover" alt="Project 4" />
                    </motion.div>

                    {/* Tile 5 — Wide */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 1, ease: easing, delay: 4 * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="rounded-xl overflow-hidden col-span-1 sm:col-span-2 shadow-sm"
                    >
                        <img src={img5} className="w-full h-full object-cover" alt="Project 5" />
                    </motion.div>

                    {/* Tile 6 — Small */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 1, ease: easing, delay: 5 * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="rounded-xl overflow-hidden shadow-sm"
                    >
                        <img src={img6} className="w-full h-full object-cover" alt="Project 6" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}