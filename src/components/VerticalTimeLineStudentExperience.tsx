import { ImBooks } from 'react-icons/im'
import { FaRocket, FaWolfPackBattalion } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export function VerticalTimeLineStudentExperience() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2017 - 2019"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Student at Federal Institute 🇧🇷
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Posse - Goias</h4>
        <p>
          Studing all day, Graduated in high school and technician in
          agriculture, i also start my programming carrer at this time of my
          life
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105 "
        contentStyle={{ background: 'white', color: '#818181' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(8, 235, 87)' }}
        date="2021 - NOW"
        iconStyle={{ background: 'rgb(8, 235, 87)', color: '#fff' }}
        icon={<ImBooks />}
      >
        <h3 className="vertical-timeline-element-title">
          Science Computation College 📚
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia, DF</h4>
        <p>
          I entered the faculty of computer science at the Catholic University
          of Brasilia
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105 "
        contentStyle={{ background: 'white', color: '#818181' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2021 - 2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaRocket />}
      >
        <h3 className="vertical-timeline-element-title">
          Student At RocketSeat education 🚀
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia, DF</h4>
        <p>
          I entered at Rocketseat Eduaction nowadays i`m a{' '}
          <span className="text-blue-600">full stack</span> developer
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105 "
        contentStyle={{ background: 'white', color: '#818181' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2024 - NOW"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaWolfPackBattalion />}
      >
        <h3 className="vertical-timeline-element-title">
          Student At Origamid 🚀
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia, DF</h4>
        <p>
          I entered at origamid just to refine my front-end habilyts i`m already
          work as <span className="text-blue-600">full stack</span> developer
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work transition-all duration-700 hover:scale-105 "
        contentStyle={{ background: 'white', color: '#818181' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2017 - NOW"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaRocket />}
      >
        <h3 className="vertical-timeline-element-title">
          Studing all the time 👨‍🎓
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Brasilia, DF</h4>
        <p>
          I also have a lot of curses on internet that i cant post everyone
          here.{' '}
          <span className="text-blue-800">
            {' '}
            Alura, origamid, Curso em video e etc.
          </span>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}
