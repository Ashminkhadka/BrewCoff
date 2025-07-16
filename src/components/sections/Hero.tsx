"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/60 z-10" />
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Coffee shop interior"
        fill
        className="object-cover"
        priority
      />
      <motion.div
        className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafted with <span className="text-amber-300">Passion</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-amber-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Experience the perfect blend of tradition and innovation in every cup
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            {...scaleOnHover}
          >
            Explore Our Menu
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero;