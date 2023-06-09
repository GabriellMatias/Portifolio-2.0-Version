import React, { ElementType, useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

interface TechnologiesCardProps {
  title: string
  description: string
  icon?: ElementType
}

export function TechnologiesCard({
  description,
  title,
  icon: Icon,
}: TechnologiesCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const notifyClose = () =>
    toast.success('To close the modal CLICK on it!', {
      toastId: 1,
    })

  return (
    <div className="h-[14rem] w-[27em] gap-10 flex transition-all duration-1000 hover:scale-105 flex-col justify-center items-center mobile:w-full">
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 8 }}
        className={`bg-white w-32 h-32 flex  ${
          isOpen
            ? 'h-56 w-72 items-start justify-start  overflow-hidden'
            : 'justify-center items-center'
        }`}
        onHoverEnd={notifyClose}
        onHoverStart={() => setIsOpen(true)}
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          layout
          className={`w-10 h-10 bg-blue-500 rounded ${
            isOpen ? 'ml-2 mt-2' : ''
          }`}
        >
          {Icon && <Icon className="h-10 w-10 rounded text-gray-800" />}
          <div
            className={`w-60 h-fit flex flex-col  ml-4 transition-all duration-1000 gap-4 justify-center items-center  ${
              isOpen ? '' : 'hidden'
            }`}
          >
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="text-center">{description}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
