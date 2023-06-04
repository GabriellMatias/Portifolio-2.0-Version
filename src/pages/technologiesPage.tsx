import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TechnologiesCard } from '@/components/TechnologiesCard'
import { technologieService } from '@/utils/technologiesService'
import { SiTypescript } from 'react-icons/si'

export default function TechnologiesPage() {
  console.log(typeof (<SiTypescript />))
  const { Technologies } = technologieService
  return (
    <>
      <Header />
      <main className="py-8 px-28 mb-6">
        <h1 className="text-center font-bold text-white  text-3xl">
          {'<'}Technologies {'/>'}
        </h1>
        <span className="text-gray-400 mb-2">My besties Skills!</span>
        <h1 className="text-white font-bold text-3xl mb-10">
          My <span className="text-bold text-blue-600">Main</span> Stack 🖥️
        </h1>
        <section className="grid grid-cols-3 gap-10">
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
          />
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
          />
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
          />
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
          />
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
          />
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
          />
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
          />
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
          />
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
          />
        </section>
        <section className="mt-20 text-right">
          <span className="text-gray-400 mb-2">My secondary Skills!</span>
          <h1 className="text-white font-bold text-3xl mb-10">
            Technologies i{' '}
            <span className="text-bold text-blue-600">Current</span> Study 📚
          </h1>
          <div className="grid grid-cols-3 gap-10">
            <TechnologiesCard
              description={Technologies.Typescript.description}
              title="TypeScript"
            />
            <TechnologiesCard
              description={Technologies.Typescript.description}
              title="TypeScript"
            />
            <TechnologiesCard
              description={Technologies.Typescript.description}
              title="TypeScript"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
