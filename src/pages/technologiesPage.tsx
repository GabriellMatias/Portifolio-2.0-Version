import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TechnologiesCard } from '@/components/TechnologiesCard'
import { technologieService } from '@/utils/technologiesService'
import {
  FaFigma,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWordpress,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa'
import { TbBrandDjango, TbBrandNextjs } from 'react-icons/tb'
import {
  SiJavascript,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiFlask,
  SiJenkins,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si'

export default function TechnologiesPage() {
  const { Technologies } = technologieService
  return (
    <>
      <Header />
      <main className="py-8 px-28 mb-6 mobile:px-2">
        <h1 className="text-center font-bold text-white text-3xl">
          {'<'}Technologies {'/>'}
        </h1>
        <span className="text-gray-400 mb-2">My besties Skills!</span>
        <h1 className="text-white font-bold text-3xl mb-10">
          My <span className="text-bold text-blue-600">Main</span> Stack 🖥️
        </h1>
        <section className="grid grid-cols-3 gap-10 tablet:grid-cols-2 mobile:grid-cols-1">
          <TechnologiesCard
            description={Technologies.React.description}
            title="ReactJS"
            icon={FaReact}
          />
          <TechnologiesCard
            description={Technologies.Typescript.description}
            title="TypeScript"
            icon={SiTypescript}
          />
          <TechnologiesCard
            description={Technologies.JavaScript.description}
            title="JavaScript"
            icon={SiJavascript}
          />
          <TechnologiesCard
            description={Technologies.Python.description}
            title="Python"
            icon={FaPython}
          />
          <TechnologiesCard
            description={Technologies.Figma.description}
            title="Figma"
            icon={FaFigma}
          />
          <TechnologiesCard
            description={Technologies.NextJS.description}
            title="NextJS"
            icon={TbBrandNextjs}
          />
          <TechnologiesCard
            description={Technologies.NodeJS.description}
            title="NodeJS"
            icon={FaNodeJs}
          />
          <TechnologiesCard
            description={Technologies.StyledComponents.description}
            title="StyledComponents"
            icon={SiStyledcomponents}
          />
          <TechnologiesCard
            description={Technologies.TailwindCSS.description}
            title="TailwindCSS"
            icon={SiTailwindcss}
          />
          <TechnologiesCard
            description={Technologies.Flask.description}
            title="Flask"
            icon={SiFlask}
          />
          <TechnologiesCard
            description={Technologies.JenkinsPipeline.description}
            title="Jenkins"
            icon={SiJenkins}
          />
          <TechnologiesCard
            description={Technologies.CICD.description}
            title="CI/CD"
            icon={SiJenkins}
          />
          <TechnologiesCard
            description={Technologies.Infrastructure.description}
            title="Infrastructure"
            icon={FaDatabase}
          />
          <TechnologiesCard
            description={Technologies.VersionControl.description}
            title="Version Control"
            icon={FaGitAlt}
          />
          <TechnologiesCard
            description={Technologies.DataProcessingPython.description}
            title="Data Processing with Python"
            icon={FaPython}
          />
          <TechnologiesCard
            description={Technologies.HTML.description}
            title="HTML"
            icon={SiHtml5}
          />
          <TechnologiesCard
            description={Technologies.CSS.description}
            title="CSS"
            icon={SiCss3}
          />
          <TechnologiesCard
            description={Technologies.MySQL.description}
            title="MySQL"
            icon={SiMysql}
          />
          <TechnologiesCard
            description={Technologies.PostgreSQL.description}
            title="PostgreSQL"
            icon={SiPostgresql}
          />
        </section>
        <section className="mt-20 text-right">
          <span className="text-gray-400 mb-2">My secondary Skills!</span>
          <h1 className="text-white font-bold text-3xl mb-10">
            Technologies I{' '}
            <span className="text-bold text-blue-600">Currently</span> Study 📚
          </h1>
          <div className="grid grid-cols-3 gap-10 tablet:grid-cols-2 mobile:grid-cols-1">
            <TechnologiesCard
              description={Technologies.WordPress.description}
              title="WordPress"
              icon={FaWordpress}
            />
            <TechnologiesCard
              description={Technologies.ReactNative.description}
              title="ReactNative"
              icon={FaReact}
            />
            <TechnologiesCard
              description={Technologies.Django.description}
              title="Django"
              icon={TbBrandDjango}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
