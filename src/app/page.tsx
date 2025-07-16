import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import FeaturedDrinks from "@/components/sections/FeaturedDrinks"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedDrinks />
      <Contact />
      <Footer />
    </>
  )
}
