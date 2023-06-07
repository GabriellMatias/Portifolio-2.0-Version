import { FloatingButton } from '@/components/FloatingButton'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <section className="h-[100vh] mt-[-2rem] flex flex-col items-center justify-center gap-20 mobile:mt-8 mobile:px-2">
        <main className="flex items-center justify-evenly">
          <article>
            <h2 className="text-white font-bold text-3xl flex flex-col gap-4">
              Hello there 🖐️, My Name is{' '}
              <span className="text-6xl text-blue-600 mobile:text-4xl">
                {'<'}Gabriell.Matias {'/>'}
              </span>
            </h2>
            <h3 className="text-white font-bold text-2xl mt-8">
              I`m a full Stack Developer 💻.
            </h3>
            <h3 className="block mt-3">
              <img
                src="https://readme-typing-svg.demolab.com/?lines=Full+Stack+Developer!;JavaScript+programmer!;Python+programmer!;React+and+ReactNative!;FrontEnd+developer!;NodeJS+and+Python!&font=Fira%20Code&center=true&width=380&height=50&duration=4000&pause=1000"
                alt="Example Usage - README Typing SVG"
              />
            </h3>
          </article>
          <aside className="tablet:hidden mobile:hidden">
            <img src="/gifMatias.gif" alt="gif all devices" />
          </aside>
        </main>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-white font-bold text-2xl mt-10">
            Come know me better 👇.
          </h3>
          <div className="flex items-center justify-center gap-9 tablet:flex-col mobile:flex-col">
            <FloatingButton
              ButtonName="Github"
              ButtonLink="https:/github.com/GabriellMatias"
            />
            <FloatingButton ButtonName="About me" ButtonLink="/aboutMe" />
            <FloatingButton
              ButtonName="Projects"
              ButtonLink="https:/github.com/GabriellMatias"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
