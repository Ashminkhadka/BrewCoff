"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, MapPin, Phone, Mail, Clock, Star } from "lucide-react"
import Image from "next/image"

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

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export default function CoffeeShopLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    setFormData({ name: "", email: "", message: "" })
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

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
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
        </div>
      </motion.nav>

      {/* Hero Section */}
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
            Crafted with
            <span className="text-amber-300"> Passion</span>
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

      {/* About Section */}
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
              {[
                { icon: Coffee, title: "Premium Beans", desc: "Sourced from the finest coffee farms globally" },
                { icon: Star, title: "Expert Roasting", desc: "Roasted to perfection by our master craftsmen" },
                { icon: Clock, title: "Fresh Daily", desc: "Brewed fresh every day for optimal flavor" },
              ].map((item, index) => (
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

      {/* Featured Drinks Menu */}
      <section id="menu" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-900" variants={fadeInUp}>
              Featured Drinks
            </motion.h2>
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer}>
              {featuredDrinks.map((drink, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white border-amber-200 shadow-lg overflow-hidden h-full">
                    <motion.div {...scaleOnHover}>
                      <div className="relative h-48 overflow-hidden">
                        <Image src={drink.image || "/placeholder.svg"} alt={drink.name} fill className="object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-amber-900">{drink.name}</h3>
                        <p className="text-amber-700 mb-4 text-sm">{drink.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-amber-800">{drink.price}</span>
                          <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                            Order Now
                          </Button>
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-900 text-amber-50">
        <div className="container mx-auto px-4">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-200" variants={fadeInUp}>
              Get In Touch
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-6 text-amber-200">Visit Us</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: "123 Coffee Street, BC 12345" },
                    { icon: Phone, text: "(555) 123-BREW" },
                    { icon: Mail, text: "hello@brewcraft.com" },
                    { icon: Clock, text: "Mon-Sun: 6:00 AM - 10:00 PM" },
                  ].map((item, index) => (
                    <motion.div key={index} className="flex items-center space-x-3" whileHover={{ x: 10 }}>
                      <item.icon className="h-5 w-5 text-amber-300" />
                      <span className="text-amber-100">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-6 text-amber-200">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="mt-10 flex flex-col dark:text-black">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                        // className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"

                      className="bg-amber-800 border-amber-700 text-amber-100 placeholder-amber-300 focus:border-amber-500"
                      required
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-amber-800 border-amber-700 text-amber-100 placeholder-amber-300 focus:border-amber-500"
                      required
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-amber-800 border-amber-700 text-amber-100 placeholder-amber-300 focus:border-amber-500"
                      required
                    />
                  </motion.div>
                  <motion.div {...scaleOnHover}>
                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 font-semibold"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}