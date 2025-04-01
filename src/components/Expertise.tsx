import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb ,faMicrochip } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "C++",
    "Firebase",
    "Espressif",
    "Rapsberry Pi"
];

const labelsSecond = [
    "React",
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS"
];

const labelsThird = [
    "Arduino IDE",
    "Proteus"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>What I do?</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Embedded/IOT</h3>
                    <p>💥 Embedded Systems And RTOS, FreeRTOS.</p>  
                    <p>💥 Communication Protocols like I2C, SPI, Serial, Uart and HTTP.</p>  
                    <p>💥 Databases like Firebase and ThinkSpeak for real-time database, authentication, and storage.</p>  
                    <p>💥 Sensors, Actuators, Signal Conditioning Circuits, Etc.</p>  
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>App/Web Development</h3>
                    <p>💥 Mobile & Web Development using React Native and React.js.</p>  
                    <p>💥 UI/UX Design with HTML, CSS, SCSS, Bootstrap, and Tailwind CSS</p>  
                    <p>💥 Firebase Integration for authentication, real-time database, and cloud storage.</p>  
                    <p>💥 Animations & UI Enhancements with CSS animations and React Native Animations.</p>   
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLightbulb} size="3x"/>
                    <h3>Analog and Digital Electronics</h3>
                    <p>💥 Circuit Designing and Hardware Prototyping, through-hole & SMD soldering </p>  
                    <p>💥 Signal Processing & Conditioning, filters, amplifiers, ADC/DAC circuits</p>  
                    <p>💥 Hardware Debugging & Testing, oscilloscope, logic analyzers, multimeters for real-time troubleshooting.</p>  
                    <p>💥 Power Management & Battery Systems</p>  
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;