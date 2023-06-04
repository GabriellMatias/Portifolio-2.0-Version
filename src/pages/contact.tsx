import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {
  FaFolder,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="py-8 px-28 mb-6 ">
        <h1 className="text-center font-bold text-white  text-3xl">
          {'<'}Contact {'/>'}
        </h1>
        <section className="h-[90vh] flex items-center justify-center">
          <aside>
            {' '}
            <h2 className="text-white font-bold text-3xl flex flex-col gap-4">
              Thank you for comming 🚀
            </h2>
            <h3 className="text-white font-bold text-2xl mt-8">
              If you like me- here some ways to find me out 🧑‍💻
            </h3>
            <span className="text-white font-bold text-2xl">
              It was a pleasure show to you about me
            </span>
            <div className="text-white flex items-center justify-center gap-8 mt-8">
              <a
                className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                href=""
              >
                <FaGithub size={42} />
              </a>
              <a
                className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                href=""
              >
                <FaLinkedin size={42} />
              </a>
              <a
                className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                href=""
              >
                <FaInstagram size={42} />
              </a>
              <a
                className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                href=""
              >
                <FaWhatsapp size={42} />
              </a>
              <a
                className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                href=""
              >
                <FaFolder size={42} />
              </a>
            </div>
            <span className="text-white font-bold text-xl block mt-9">
              Contact-me lets make conections ✈️
            </span>
          </aside>
          <article>
            <img src="/gifMatias.gif" alt="gif all devices" />
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}
