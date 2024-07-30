import { FloatingButton } from '@/components/FloatingButton'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VerticalTimeLineStudentExperience } from '@/components/VerticalTimeLineStudentExperience'
import { VerticalTimeLineWorkExperience } from '@/components/VerticalTimeLineWorkExperience'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <>
      <Header />
      <section className="py-8 px-28 text-white mobile:px-4 mobile:py-4">
        <h1 className="text-center font-bold text-3xl">
          {'<'}About - Me {'/>'}
        </h1>
        <div className="flex justify-center items-center gap-60 mobile:flex-col mobile:gap-14">
          <article className="w-[36rem] flex flex-col gap-16 font-bold mobile:w-full mobile:mb-4">
            <h1 className="text-bold text-2xl mt-12">
              I`m a <span className="text-blue-600">Full Stack</span> Developer.
            </h1>
            <p className="mt-[-2rem] text-lg mobile:mt-0">
              I`m 22 years old. I`ve started to program in 2019, since this i
              always trying to learn something 📕
            </p>
            <p className="text-lg">
              Today i`m a full stack developer. Specializing in{' '}
              <span className="text-blue-500"> React JS</span> on the frontEnd
              with <span className="text-green-500">node and/or python</span> 🐍
              on the backEnds and{' '}
              <span className="text-blue-500">React Native</span> on mobile 📱
            </p>
            <p className="text-lg">
              I'm currently in my final semester of Computer Science 💻 at the
              Universidade Católica de Brasília (UCB). Additionally, I study a
              lot of web-related courses 📚 on platforms like Alura, Curso em
              Vídeo, Rocketseat, Origamid, and more. Today, besides studying,
              I'm also the head of a web systems division 🖥️.
            </p>
            <FloatingButton
              ButtonLink="https://www.linkedin.com/in/gabriel-matias-03b98421a/"
              ButtonName="Linkedin"
            />
          </article>
          <article className="w-[38rem] h-[28rem] mobile:w-[18rem] mobile:h-[12rem] rounded-xl bg-[#003140] transition-all duration-700 hover:scale-105 ">
            <Image
              alt="profile photo"
              width={560}
              height={250}
              className="rounded-xl my-6 mx-auto"
              src={'/AboutMeGif.gif'}
            />
          </article>
        </div>
      </section>
      <section className="py-8 px-28 mt-8 mobile:px-4">
        <span className="text-gray-400 mb-2">What i have done so far!</span>
        <h1 className="text-white font-bold text-3xl mb-10">
          My <span className="text-bold text-blue-600">History</span> Until now
        </h1>
        <VerticalTimeLineStudentExperience />
      </section>
      <section className="py-8 px-28 mt-10 mobile:px-4">
        <h1 className="text-white font-bold text-3xl my-10 text-right">
          My <span className="text-bold text-blue-600">Work 🧑‍💼</span> experience
          Until now
        </h1>
        <VerticalTimeLineWorkExperience />
      </section>

      <Footer />
    </>
  )
}
