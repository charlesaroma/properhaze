import React from "react";
import { motion } from "framer-motion";


const OurStory = () => {
  return (
    <section className="py-16 bg-[var(--color-black-canvas)]">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-2xl mx-auto text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: "easeOut" }}>
          {/* Our Story Section */}
          <motion.div className="mb-10" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: "easeOut" }}>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-link)] mb-6 text-center">
              Our Story
            </h2>
            <p className="text-[var(--color-cream-canvas)] text-xs sm:text-sm leading-relaxed text-justify">
              Properhaze was created to establish a true celebrity platform in
              the social media industry, where everyone and anyone can have a
              celebrity moment. Anyone can shine on Properhaze, regardless of
              fame, as long as they bring delight to others. When you bring joy
              to others they'll celebrate you in return. By celebrating such
              individuals, we can build a happier world.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
