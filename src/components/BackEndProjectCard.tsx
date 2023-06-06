import { Repository } from '@/pages/projects'
import React from 'react'
import Image from 'next/image'

import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export function BackEndProjectsCard({
  description,
  html_url,
  id,
  readme,
  name,
  deployUrl,
}: Repository) {
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
      <Link
        href={html_url}
        className="h-auto flex-1 w-[60vw] text-white hover:text-orange-500 transition-all duration-1000 hover:scale-105 flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-bold  ">{name}</h1>
        <p className="font-semibold text-sm">{formattedDescription}</p>
        <div className="mt-4 mb-2 flex gap-4">
          <FaGithub size={32} className=" text-white" />
          <Image
            alt="logo photos"
            width={50}
            height={50}
            className="rounded"
            src={readme || '/noImage.jpg'}
          />
        </div>
        <div className="bg-white w-full h-[0.5px]"></div>
      </Link>
    </>
  )
}
