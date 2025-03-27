import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Timeline</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student-Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Godrej-sponsored Automation and Mechatronics at TATA IIS.</h4>
            <p>
            Completed a 3-week Automation and Mechatronics training at TATA IIS, sponsored by Godrej. I gained hands-on experience in pneumatics, 
            hydraulics, electro-pneumatics, and electro-hydraulics. I learned PLC programming for automation control. 
            The training covered sensors, actuators, relays, and industrial automation systems. This enhanced my skills in fluid power systems and 
            industrial automation.
            </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Supernova Lighting Industries Kandivali, Mumbai</h4>
            <p>
              Ongoing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Supernova Lighting Industries Kandivali, Mumbai</h4>
            <p>
            Played a key role in designing, developing, and implementing a fully functional prototype of a Smart Street Lighting Pole, with substantial contributions to its hardware, software, and testing processes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BE in Electronic and Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://frcrce.ac.in/" className="black" rel="noopener noreferrer" target="_blank">FR.Conceicao Rodrigues College of Engineering, Bandra</a></h4>
            <p>
              Student
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Internship</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://www.linkedin.com/company/tantraniketan/?originalSubdomain=in" className="black" rel="noopener noreferrer" target="_blank">Tantraniketan</a></h4>
            <p>
            During my internship, I explored electronics fundamentals like resistors, capacitors, diodes, and transistors. I worked with devices such as 
            Arduino, NodeMCU, and Raspberry Pi, implementing sensors like PIR, ultrasonic, and LM35. I created projects like automatic doorbells, smart 
            solar lamps, and home automation systems. I gained hands-on experience in circuit design, programming with Arduino IDE, and IoT platforms like 
            ThingSpeak. This journey helped me blend creativity with technical skills to build practical solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Diploma in EXTC</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://www.tpolymumbai.in/" className="black" rel="noopener noreferrer" target="_blank">Thakur Polytechnic, Kandivali</a></h4>
            <p>
              Student
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">High School</h3>
            <h4 className="vertical-timeline-element-subtitle">St. Francis D'ASSISI High School, Borivali</h4>
            <p>
              Student
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;