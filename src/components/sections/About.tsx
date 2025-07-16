"use client"

import { motion } from "framer-motion"
import { Coffee, Star, Clock } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-200" variants={fadeInUp}>
            Our Story
          </motion.h2>
          <motion.p className="text-lg md:text-xl mb-8 leading-relaxed" variants={fadeInUp}>
            Founded in 2015, BrewCraft began as a small neighborhood coffee shop with a big dream: to serve the
            perfect cup of coffee while building a community of coffee lovers. Our master roasters carefully select
            beans from sustainable farms around the world, ensuring every sip tells a story of quality and
            craftsmanship.
          </motion.p>
          <motion.div className="grid md:grid-cols-3 gap-8 mt-12" variants={staggerContainer}>
            {[{ icon: Coffee, title: "Premium Beans", desc: "Sourced from the finest coffee farms globally" },
              { icon: Star, title: "Expert Roasting", desc: "Roasted to perfection by our master craftsmen" },
              { icon: Clock, title: "Fresh Daily", desc: "Brewed fresh every day for optimal flavor" }].map((item, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp} whileHover={{ y: -10 }}>
                <item.icon className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-amber-200">{item.title}</h3>
                <p className="text-amber-100">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;