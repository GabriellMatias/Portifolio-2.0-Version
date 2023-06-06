import Image from 'next/image'

export function Loading() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="animate-ease-in-fast flex flex-col items-center justify-center gap-8">
        <Image
          alt="profile photo"
          width={100}
          height={100}
          className="rounded-xl"
          src={'https://github.com/gabriellmatias.png'}
        />
        <span className="text-white font-bold text-xl">
          {'<'}Loading... {'/>'}
        </span>
      </div>
    </main>
  )
}
