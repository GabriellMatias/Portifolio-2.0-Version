import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VerticalTimeLineStudentExperience } from '@/components/VerticalTimeLineStudentExperience'
import { VerticalTimeLineWorkExperience } from '@/components/VerticalTimeLineWorkExperience'

export default function AboutMe() {
  return (
    <>
      <Header />
      <section className="py-8 px-28">
        <span className="text-gray-400 mb-2">What i have done so far!</span>
        <h1 className="text-white font-bold text-3xl mb-10">
          My <span className="text-bold text-blue-600">History</span> Until now
        </h1>
        <VerticalTimeLineStudentExperience />
      </section>
      <section className="py-8 px-28 mt-10">
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
