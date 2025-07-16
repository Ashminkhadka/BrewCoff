"use client"

import { motion } from "framer-motion"
import DrinkCard from "../DrinkCard"

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

const featuredDrinks = [
  {
    name: "Signature Espresso",
    description: "Rich, bold espresso with notes of chocolate and caramel",
    price: "$4.50",
    image: "/assets/signature.jpg",
  },
  {
    name: "Vanilla Latte",
    description: "Smooth espresso with steamed milk and vanilla syrup",
    price: "$5.25",
    image: "/assets/vanillaLatte.jpg",
  },
  {
    name: "Cold Brew Special",
    description: "Slow-steeped cold brew with a hint of cinnamon",
    price: "$4.75",
    image: "/assets/brewSpecial.jpg",
  },
  {
    name: "Mocha Delight",
    description: "Perfect blend of espresso, chocolate, and whipped cream",
    price: "$5.50",
    image: "/assets/mochaDelight.jpg",
  },
]

const FeaturedDrinks = () => {
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-900" variants={fadeInUp}>
            Featured Drinks
          </motion.h2>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer}>
            {featuredDrinks.map((drink, index) => (
              <DrinkCard key={index} drink={drink} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedDrinks;