import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
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
    "Bootstrap"
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
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Internet Of Things(IOT)</h3>
                    <p>💥 Build IoT solutions with sensors, devices, and cloud services for real-time insights.</p>  
                    <p>💥 Work with I2C, SPI, Serial, and HTTP for efficient IoT systems.</p>  
                    <p>💥 Use Firebase for real-time database, authentication, and storage.</p>  
                    <p>💥 Implement edge computing to reduce latency and boost efficiency.</p>  
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Front-End</h3>
                    <p>💥 Build mobile apps with React Native, using HTML, CSS, and Bootstrap.</p>  
                    <p>💥 Work with React Native components and JavaScript for dynamic UIs.</p>  
                    <p>💥 Enhance styling with advanced CSS, SCSS, and animations.</p>  
                    <p>💥 Integrate Firebase for authentication, real-time database, and storage.</p>   
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
                    <p>💥 Design and analyze analog and digital circuits for efficient systems.</p>  
                    <p>💥 Program microcontrollers with sensors and actuators for real-world use.</p>  
                    <p>💥 Integrate circuits with UART, SPI, and I2C for seamless communication.</p>  
                    <p>💥 Explore new techniques in circuit simulation and embedded systems.</p>  
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