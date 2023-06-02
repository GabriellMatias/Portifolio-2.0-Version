import { Buildings, Student } from 'phosphor-react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export function VerticalTimeLineWorkExperience() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105"
        contentStyle={{ background: 'white', color: '#818181' }}
        contentArrowStyle={{ borderRight: '7px solid   rgb(8, 235, 87)' }}
        date="2019 - NOW"
        iconStyle={{ background: '  rgb(8, 235, 87)', color: '#fff' }}
        icon={<Student />}
      >
        <h3 className="vertical-timeline-element-title">
          Freelancers - building websites 🌎
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia- DF</h4>
        <p>
          I have also built some on-demand freelance sites using{' '}
          <span className="text-green-500">
            wordpress, react and vanilla javascript
          </span>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2022 - 2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Buildings size={32} weight="fill" />}
      >
        <h3 className="vertical-timeline-element-title">
          Intern at Advocacia geral da uniao [Union's General Advocacy] 🏛️
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia - DF</h4>
        <p>
          Trainee in the{' '}
          <span className="text-gray-600">Union's General Advocacy</span> for
          one year and two months. acquired experience in delivering demands and
          using python 🐍 for data processing and webscrapping
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}
