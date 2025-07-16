"use client"

import { motion } from "framer-motion"
import { Coffee } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.div className="flex items-center justify-center space-x-2 mb-4" whileHover={{ scale: 1.05 }}>
          <Coffee className="h-6 w-6" />
          <span className="text-xl font-bold">BrewCraft</span>
        </motion.div>
        <p className="text-amber-300">
          &copy; {new Date().getFullYear()} Ashmin Kumar Khadka @ BrewCraft Coffee Shop. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;