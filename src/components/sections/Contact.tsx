"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    { icon: MapPin, text: "123 Coffee Street, BC 12345" },
    { icon: Phone, text: "(555) 123-BREW" },
    { icon: Mail, text: "hello@brewcraft.com" },
    { icon: Clock, text: "Mon-Sun: 6:00 AM - 10:00 PM" },
  ]

  return (
    <section id="contact" className="py-20 bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-200">
          Get In Touch
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-amber-200">Visit Us</h3>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 text-amber-300" />
                  <span className="text-amber-100">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-amber-200">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col dark:text-black">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-amber-800 border-amber-700 text-amber-100 placeholder-amber-300 focus:border-amber-500 mb-4"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-amber-800 border-amber-700 text-amber-100 placeholder-amber-300 focus:border-amber-500 mb-4"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-amber-800 border-amber-700 text-amber-100 placeholder-amber-300 focus:border-amber-500 mb-6"
                required
              />
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;