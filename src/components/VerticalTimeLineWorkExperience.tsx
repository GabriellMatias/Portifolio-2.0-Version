import { FaBuilding } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
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
        icon={<IoMdSchool />}
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
        icon={<FaBuilding size={32} />}
      >
        <h3 className="vertical-timeline-element-title">
          Intern at Advocacia Geral da União [Union's General Advocacy] 🏛️
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia - DF</h4>
        <p>
          Trainee in the{' '}
          <span className="text-gray-600">Union's General Advocacy</span> for
          one year and two months. Acquired experience in delivering demands and
          using python 🐍 for data processing and webscraping.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105"
        contentStyle={{ background: 'white', color: '#818181' }}
        contentArrowStyle={{ borderRight: '7px solid   rgb(33, 150, 243)' }}
        date="July 2023 - NOW"
        iconStyle={{ background: '  rgb(8, 235, 87)', color: '#fff' }}
        icon={<FaBuilding size={32} />}
      >
        <h3 className="vertical-timeline-element-title">
          Founder and CEO at SaaStify 🚀
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia - DF</h4>
        <p>
          Founded a Software as a Service (SaaS) company called{' '}
          <span className="text-green-500">SaaStify</span> in July 2023. All
          freelance projects are handled by this company.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="September 2023 - January 2024"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBuilding size={32} />}
      >
        <h3 className="vertical-timeline-element-title">
          Salesforce Developer at BRF Consulting 🏢
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia - DF</h4>
        <p>
          Worked as a full-time Salesforce developer, gaining valuable
          experience in the field.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="January 2024 - NOW"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBuilding size={32} />}
      >
        <h3 className="vertical-timeline-element-title">
          Division Chief of Web Systems at AGU 🏢
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia - DF</h4>
        <p>
          Currently leading the web systems division at the{' '}
          <span className="text-gray-600">Union's General Advocacy (AGU)</span>,
          coordinating Python automation and full-stack web applications.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}
