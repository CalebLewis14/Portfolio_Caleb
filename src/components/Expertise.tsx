import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMicrochip, faCloud } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C",
    "C++",
    "Python",
    "Espressif",
    "Raspberry Pi"
];

const labelsSecond = [
    "Firebase",
    "Firestore",
    "MQTT",
    "HTTP",
    "ThingSpeak",
    "Vercel",
    "Blynk IOT"
];

const labelsThird = [
    "Arduino IDE",
    "Proteus",
    "LTSpice",
    "Tinkercad"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>What I do?</h1>
                <div className="skills-grid">

                    {/* ---------------------- EMBEDDED SYSTEMS ---------------------- */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>Embedded Systems</h3>

                        <p>💥 Embedded Systems, RTOS & FreeRTOS.</p>  
                        <p>💥 Communication Protocols: I2C, SPI, UART.</p>  
                        <p>💥 Microcontrollers: ESP32, ESP8266, Raspberry Pi, Arduino.</p>  
                        <p>💥 Sensors, Actuators & Signal Conditioning.</p>  

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCloud} size="3x" />
                        <h3>IOT / Cloud Integrations</h3>

                        <p>💥 Cloud-connected systems using Firebase, Firestore & ThingSpeak.</p>
                        <p>💥 Device-to-Cloud communication using MQTT, HTTP & REST APIs.</p>
                        <p>💥 Remote monitoring, dashboards, alerts & automation workflows.</p>
                        <p>💥 Deployment and hosting using Vercel & cloud-based services.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>


                    {/* ---------------------- ELECTRONICS ---------------------- */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faLightbulb} size="3x" />
                        <h3>Analog and Digital Electronics</h3>

                        <p>💥 Circuit design & hardware prototyping.</p>  
                        <p>💥 Filters, amplifiers, signal conditioning & ADC/DAC interfaces.</p>  
                        <p>💥 Digital electronics: combinational/sequential logic, flip-flops, counters and state machines</p>
                        <p>💥 Hands-on debugging using oscilloscope, logic analyzer, and mixed-signal measurement tools.</p>  
                        <p>💥 Power management and battery protection systems.</p>

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
