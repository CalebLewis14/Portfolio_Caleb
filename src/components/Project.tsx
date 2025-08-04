import React from "react";
import smartboard from '../assets/images/smartboard.jpeg';
import smartvillage from '../assets/images/smartvillage.jpeg'
import streetlight from '../assets/images/streetlight.jpeg';
import robosumo from '../assets/images/robosumo_bot.jpeg';
import watch from '../assets/images/watch_health.jpeg';
import infi from '../assets/images/infi.jpeg';
import app from '../assets/images/infi_app.jpeg';
import solar from '../assets/images/smart_solar.png';


import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><img src={smartboard} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><h2>SmartSwitch</h2></a>
                <p>Developed an IoT-controlled smart switch allows users to manage lights, alarms, surveillance and plant monitoring systems remotely, both online and offline.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><img src={smartvillage} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><h2>Smart Village</h2></a>
                <p>Developed and promoted the Smart Village initiative in India, focusing on sustainable infrastructure, clean energy, and smart appliances to foster self-sufficient, eco-friendly rural communities, bridging the urban-rural development gap.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><img src={streetlight} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><h2>Smart Pole</h2></a>
                <p>Built and Exhibited a prototype of urban and rural infrastructure smart poles at ACE TECH Expo at NESCO,Goregoan under Supernova Lighting Industries.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><img src={robosumo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><h2>RoboSumo Bot</h2></a>
                <p>I engineered and operated a combat robot, optimizing its design, mobility, and attack mechanisms for high-impact robotic battles.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><img src={watch} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><h2>Smart Watch</h2></a>
                <p>Spearheaded a team building a health monitoring watch for real-time tracking of vital signs.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><img src={infi} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><h2>INFI</h2></a>
                <p>Introducing INFI, the intelligent AI robot designed to revolutionize home automation. INFI seamlessly controls IoT devices, assists elderly citizens with daily tasks, provides round-the-clock surveillance and security, and is equipped with a first aid kit. With advanced face recognition technology, INFI ensures personalized interaction, enhancing convenience and safety in your home.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><img src={app} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><h2>INFI App</h2></a>
                <p>An app build to monitor the robot, smart watch and switch board.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><img src={solar} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><h2>Smart Solar</h2></a>
                <p>Smart Solar Tracker – Built an Arduino-based solar panel system that automatically tracks the sun’s position for optimal energy capture. Smart Solar with BJT Control – Designed a solar lighting system using a BJT transistor to switch the light on/off based on solar panel voltage levels.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;