"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Coffee, MapPin, Phone, Mail, Clock, Star, X, Menu as MenuIcon } from "lucide-react"

// const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

export default function Navbar () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
      <motion.nav
        className="fixed top-0 w-full bg-amber-900/95 backdrop-blur-sm z-50 border-b border-amber-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <Coffee className="h-8 w-8 text-amber-200" />
            <span className="text-2xl font-bold text-amber-100">BrewCraft</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Menu", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-amber-200 hover:text-amber-100 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-amber-200 hover:text-amber-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden bg-amber-900 border-t border-amber-800"
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-4 py-4 space-y-4">
            {["Home", "About", "Menu", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-amber-200 hover:text-amber-100 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
  )
}
