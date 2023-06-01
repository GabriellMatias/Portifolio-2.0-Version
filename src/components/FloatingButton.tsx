import Link from 'next/link'
import { Folder, GithubLogo, LinkedinLogo, UserPlus } from 'phosphor-react'

interface FloatingButtonProps {
  ButtonName: string
  ButtonLink: string
}

export function FloatingButton({
  ButtonName,
  ButtonLink,
}: FloatingButtonProps) {
  return (
    <button className="flex transition duration-300 font-semibold gap-4 items-center animate-ease-in py-3 px-8 bg-blue-200 text-white text-base mt-5 rounded-[10px] hover:bg-blue-400 ">
      <Link href={ButtonLink}>{ButtonName} </Link>
      {ButtonName === 'Projects' ? (
        <Folder size={24} weight="fill" />
      ) : ButtonName === 'Contact' ? (
        <UserPlus size={24} weight="fill" />
      ) : ButtonName === 'Linkedin' ? (
        <LinkedinLogo size={24} weight="fill" />
      ) : (
        <GithubLogo size={24} weight="fill" />
      )}
    </button>
  )
}
