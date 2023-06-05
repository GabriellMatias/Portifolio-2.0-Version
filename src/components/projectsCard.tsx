import { Repository } from '@/pages/projects'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export function ProjectsCards({
  description,
  html_url,
  id,
  readme,
  name,
}: Repository) {
  const [isOpen, setIsOpen] = useState(false)
  const formattedDescription = description.replace(/\[[A-Za-z\s-]+\]/gi, '')

  return (
    <>
      <div className="h-[14rem] w-[27em] gap-10 flex flex-col justify-center items-center">
        <motion.div
          layout
          data-isOpen={isOpen}
          initial={{ borderRadius: 8 }}
          className={`bg-white h-56 w-72 flex ${
            isOpen
              ? 'items-start justify-start overflow-hidden'
              : 'justify-center items-center'
          }`}
          onHoverStart={() => setIsOpen(true)}
          onHoverEnd={() => setIsOpen(false)}
        >
          <motion.img
            src={readme}
            alt=""
            className={`object-cover h-56 w-72 rounded`}
            initial={{ display: 'block' }}
            animate={{ display: 'block' }}
            transition={{ duration: 5 }}
          />
          <motion.div
            layout
            className={`h-56 w-72 ${
              isOpen
                ? 'relative right-72 text-white bg-black flex justify-center items-center flex-col rounded'
                : 'hidden'
            }`}
            initial={{ y: '100%', width: '288px' }}
            animate={{
              y: isOpen ? '0%' : '100%',
              display: !isOpen ? 'none' : 'block',
              width: isOpen ? '288px' : '0px',
            }}
            transition={{ duration: 2.2 }}
          >
            <h1 className="text-black w-72">{name}</h1>
            <span>{formattedDescription}</span>

            <Link
              href={html_url || '/'}
              className="cursor-pointer transition-all duration-1000 hover:scale-110 hover:text-green-500"
            >
              <FaGithub size={36} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
