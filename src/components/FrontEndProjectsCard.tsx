import { Repository } from '@/pages/projects'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { FaGithub, FaRocket } from 'react-icons/fa'
import Link from 'next/link'

export function FrontEndProjectsCard({
  description,
  html_url,
  id,
  readme,
  name,
  deployUrl,
}: Repository) {
  const [isOpen, setIsOpen] = useState(false)

  function trimDescription(texto: string) {
    const palavras = texto.trim().split(' ')

    const primeirasPalavras = palavras.slice(0, 10)
    const temMaisPalavras = palavras.length > 10

    let resultado = primeirasPalavras.join(' ')
    if (temMaisPalavras) {
      resultado += '...'
    }

    return resultado
  }

  const formattedDescription = trimDescription(
    description.replace(/\[[A-Za-z\s-]+\]/gi, ''),
  )

  return (
    <>
      <div className="h-[14rem] w-[27em] gap-10  flex flex-col justify-center items-center mobile:w-full">
        <motion.div
          layout
          data-isOpen={isOpen}
          initial={{ borderRadius: 8 }}
          className={`bg-white h-56 w-72 flex rounded ${
            isOpen
              ? 'items-start justify-start rounded overflow-hidden'
              : 'justify-center items-center'
          }`}
          onHoverStart={() => setIsOpen(true)}
          onHoverEnd={() => setIsOpen(false)}
          onTouchStart={() => setIsOpen(true)}
          onTouchEnd={() => setIsOpen(false)}
        >
          <motion.img
            src={readme || '/noImage.jpg'}
            alt="repositories photos"
            className={`object-cover h-56 w-72 rounded bg-gray-700`}
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            layout
            className={`h-64 w-80 ${
              isOpen
                ? 'relative right-72 text-white bg-gray-900 text-center px-4 py-8 flex justify-center items-center flex-col rounded'
                : 'hidden'
            }`}
            initial={{ y: '100%', width: '290px' }}
            animate={{
              y: isOpen ? '0%' : '100%',
              display: !isOpen ? 'none' : 'block',
            }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="w-64 text-lg font-bold">{name}</h1>
            <span className="text-sm">{formattedDescription}</span>
            <footer className="flex items-center justify-center gap-6">
              <Link
                target="_blank"
                href={html_url || '#'}
                className="cursor-pointer flex
              mt-4
              items-center justify-center transition-all duration-1000 hover:scale-110 hover:text-green-500"
              >
                <FaGithub size={36} />
              </Link>
              {deployUrl && (
                <Link
                  target="_blank"
                  href={deployUrl || '#'}
                  className="cursor-pointer flex
              mt-4
              items-center justify-center transition-all duration-1000 hover:scale-110 hover:text-blue-500"
                >
                  <FaRocket size={32} />
                </Link>
              )}
            </footer>

            {!readme ? (
              <span className="text-sm mt-2 block">⚒️ under construction</span>
            ) : (
              ''
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
