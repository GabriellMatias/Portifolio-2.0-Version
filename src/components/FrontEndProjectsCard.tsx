import { Repository } from '@/pages/projects'
import React, { useState, useEffect } from 'react'
import { FaGithub, FaRocket } from 'react-icons/fa'

export function FrontEndProjectsCard({
  description,
  html_url,
  readme,
  name,
  deployUrl,
}: Repository) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
    <div className="max-w-sm w-full rounded-lg shadow-lg overflow-hidden bg-[#1f1f1f] hover:shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${readme || '/noImage.jpg'})` }}
      >
        {isMounted && (
          <div
            className={`absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] text-white transition-opacity duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="text-center p-4">
              <p className="text-sm mb-4">{formattedDescription}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={html_url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaGithub size={24} />
                </a>
                {deployUrl && (
                  <a
                    href={deployUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    <FaRocket size={24} />
                  </a>
                )}
              </div>
              {!readme && <p className="text-xs mt-4">⚒️ Under Construction</p>}
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-sm text-gray-400 mb-4">{formattedDescription}</p>
        <footer className="flex justify-evenly">
          <a
            href={html_url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-transform ease-out flex items-center gap-2 "
          >
            See on GitHub <FaGithub />
          </a>
          {deployUrl && (
            <a
              href={deployUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-green-500 hover:text-green-400 flex items-center gap-2"
            >
              See Deploy <FaRocket />
            </a>
          )}
        </footer>
      </div>
    </div>
  )
}
