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
      <main>
        <h1 className="text-center font-bold text-3xl">Technologies</h1>
        <span className="text-gray-400 mb-2">What i have done so far!</span>
        <h1 className="text-white font-bold text-3xl mb-10">
          My <span className="text-bold text-blue-600">History</span> Until now
        </h1>
        <TechnologiesCard
          description={Technologies.Typescript.description}
          title="TypeScript"
        />
      </main>
    </>
  )
}
