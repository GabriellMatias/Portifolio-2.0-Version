import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SiTypescript } from 'react-icons/si'

interface TechnologiesCardProps {
  title: string
  description: string
  // icon: React.ComponentType
}

export function TechnologiesCard({
  description,
  title,
}: // icon,
TechnologiesCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 8 }}
      className={`bg-white w-32 h-32 flex  ${
        isOpen
          ? 'h-56 w-72 items-start justify-start  overflow-hidden'
          : 'justify-center items-center'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        layout
        className={`w-10 h-10 bg-blue-500 rounded ${isOpen ? 'ml-2 mt-2' : ''}`}
      >
        <SiTypescript />
        ICONE VAI AQUI
        <div
          className={`w-60 h-fit flex flex-col gap-4 justify-center items-center  ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-center">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
