import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="py-8 px-28 mb-6 mobile:px-4">
        <h1 className="text-center font-bold text-white  text-3xl">
          {'<'}Contact {'/>'}
        </h1>
        <section className="h-[90vh] flex items-center justify-center gap-14">
          <aside>
            {' '}
            <h2 className="text-white font-bold text-3xl flex gap-4 mobile:text-2xl minMobile:flex-col minMobile:mt-8">
              Thank you <span className="text-blue-600">very much</span> for
              visiting my portfolio.
            </h2>
            <h3 className="text-white font-bold text-2xl mt-8 mobile:text-xl">
              I sincerely hope that you liked what you saw 👁️‍🗨️
            </h3>
            <span className="text-white font-bold text-2xl mobile:text-xl">
              If you wanna know me better there is some ways to do it! 🧑‍💻
            </span>
            <div className="text-white flex items-center justify-center gap-8 mt-14 mobile:flex-col mobile:gap-4">
              <div className="flex gap-8">
                <Link
                  className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                  href="https://github.com/GabriellMatias"
                >
                  <FaGithub size={54} />
                </Link>
                <Link
                  className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                  href="https://www.linkedin.com/in/gabriell-matias-03b98421a/"
                >
                  <FaLinkedin size={54} />
                </Link>
              </div>
              <div className="flex gap-8">
                {' '}
                <Link
                  className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                  href="https://www.instagram.com/gabriellmatiaz/"
                >
                  <FaInstagram size={54} />
                </Link>
                <Link
                  className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                  href="https://wa.me/5561993916872?text=Hellou%2C+i+came+from+your+portifolio%2C+can+we+talk%3F"
                >
                  <FaWhatsapp size={54} />
                </Link>
                <Link
                  className="animate-pulse transition-colors duration-1000 hover:text-blue-600"
                  href="mailto:gabriel.goiasat@gmail.com"
                >
                  <MdEmail size={54} />
                </Link>
              </div>
            </div>
            <span className="text-white font-bold text-xl block mt-9 text-center">
              Contact-me lets <span className="text-red-600">make</span>{' '}
              conections ✈️
            </span>
          </aside>
          <article className="w-[38rem] h-[28rem] tablet:hidden mobile:hidden">
            <img
              src="/Contactt.gif"
              className="rounded-xl"
              alt="gif contact-me"
            />
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}
