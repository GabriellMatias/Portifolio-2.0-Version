import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex flex-1 rounded-b-xl tablet:px-18 mobile:px-4 justify-between py-8 px-28 font-semibold bg-[#1b1438]">
      <div className="flex items-center gap-4">
        <Image
          alt="profile photo"
          width={50}
          height={50}
          className="rounded-xl tablet:hidden mobile:hidden"
          src={'https://github.com/gabriellmatias.png'}
        />

        <a
          href="/"
          className="text-2xl mobile:text-lg minMobile:text-sm transition-colors duration-300 font-extrabold text-white hover:text-blue-200"
        >
          Console.log("GabriellMatias")
        </a>
      </div>
      <div
        className={`list-none text-xl flex flex-col gap-4 items-center mobile:${
          isMenuOpen ? 'block px-16' : 'hidden'
        } tablet:${
          isMenuOpen
            ? 'block absolute right-1 z-10 top-[87px] bg-[#1b1438] px-24 rounded-xl py-[68px] minMobile:px-8 minMobile:mt-[-1rem]'
            : 'hidden'
        }`}
      >
        <ul
          className={`list-none text-xl mt-3 flex gap-4 items-center mobile:flex-col tablet:flex-col tablet:gap-12 mobile:gap-12`}
        >
          <li>
            {' '}
            <Link href="/" className="link">
              Home
            </Link>{' '}
          </li>

          <li>
            {' '}
            <Link href="/aboutMe" className="link">
              About - Me{' '}
            </Link>
          </li>

          <li>
            {' '}
            <Link href="/technologiesPage" className="link">
              Technologies
            </Link>{' '}
          </li>

          <li>
            {' '}
            <Link href="/projects" className="link">
              Projects
            </Link>{' '}
          </li>

          <li>
            {' '}
            <Link href="/contact" className="link">
              Contact
            </Link>{' '}
          </li>
        </ul>
      </div>
      <button
        className="hidden mobile:block tablet:block"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-2 transition-all">
          <span
            className={`block w-8 h-0.5 bg-white animate-pulse ${
              isMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white animate-pulse ${
              isMenuOpen ? 'hidden' : ''
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white animate-pulse ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </div>
      </button>
    </header>
  )
}
