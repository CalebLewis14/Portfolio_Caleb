import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { Instagram } from "@mui/icons-material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <div className="social-links">
            <p>
              <a href="https://github.com/CalebLewis14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon className="icon" />
              </a>
              <a href="https://www.instagram.com/cal.eb14/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="icon" />
              </a>
              <a href="https://docs.google.com/document/d/1ns9gVwzbPCbQQkOwjT-1H3_sOf6v7DeC21Y71oLO2EQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="pdf-link">
                <PictureAsPdfIcon className="icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;