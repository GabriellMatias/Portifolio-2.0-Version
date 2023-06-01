import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex flex-1 rounded-b-xl justify-between py-8 px-28 font-semibold bg-[#1b1438]">
      <div className="flex items-center gap-4">
        <Image
          alt="profile photo"
          width={50}
          height={50}
          className="rounded-xl"
          src={'https://github.com/gabriellmatias.png'}
        />
        <a
          href="/"
          className="text-2xl transition-colors duration-300 font-extrabold text-white hover:text-blue-200"
        >
          Console.log("GabriellMatias")
        </a>
      </div>

      <ul className="list-none text-xl flex gap-4 items-center">
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
          <Link href="" className="link">
            Technologies
          </Link>{' '}
        </li>
        <li>
          {' '}
          <Link href="" className="link">
            Projects
          </Link>{' '}
        </li>
        <li>
          {' '}
          <Link href="" className="link">
            Contact
          </Link>{' '}
        </li>
      </ul>
    </header>
  )
}
