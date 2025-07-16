"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

const DrinkCard = ({ drink }: { drink: any }) => {
  return (
    <motion.div variants={{ initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 } }}>
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
  )
}

export default DrinkCard;