import Link from 'next/link'
import { AiFillLinkedin, AiFillFolder } from 'react-icons/ai'
import { FaUserAlt, FaGithubSquare } from 'react-icons/fa'

interface FloatingButtonProps {
  ButtonName: string
  ButtonLink: string
}

export function FloatingButton({
  ButtonName,
  ButtonLink,
}: FloatingButtonProps) {
  return (
    <Link
      href={ButtonLink}
      target={
        ButtonName === 'Linkedin' || ButtonName === 'Github'
          ? '_blank'
          : '_self'
      }
    >
      <button className="flex transition duration-300 font-semibold gap-4 items-center animate-ease-in py-3 px-8 bg-blue-200 text-white text-base mt-5 rounded-[10px] hover:bg-blue-400 ">
        {ButtonName}
        {ButtonName === 'Projects' ? (
          <AiFillFolder size={24} />
        ) : ButtonName === 'About me' ? (
          <FaUserAlt size={18} />
        ) : ButtonName === 'Linkedin' ? (
          <AiFillLinkedin size={24} />
        ) : (
          <FaGithubSquare size={24} />
        )}
      </button>
    </Link>
  )
}
