import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { Instagram } from "@mui/icons-material";
import me from '../assets/images/me.jpeg'
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={me} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/CalebLewis14" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/cal.eb14/" target="_blank" rel="noreferrer"><Instagram/></a>
            <a href="https://docs.google.com/document/d/1ns9gVwzbPCbQQkOwjT-1H3_sOf6v7DeC21Y71oLO2EQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="pdf-link"><PictureAsPdfIcon className="icon" /></a>
          </div>
          <h1 className="h1">Caleb Lewis</h1>
          <p>ECS Student-Intern | Advisor @ Project Cell and Robix at Fr.CRCE</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/CalebLewis14" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/caleb-lewis-8099a6271/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/cal.eb14/" target="_blank" rel="noreferrer"><Instagram/></a>
            <a href="https://docs.google.com/document/d/1ns9gVwzbPCbQQkOwjT-1H3_sOf6v7DeC21Y71oLO2EQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="pdf-link"><PictureAsPdfIcon className="icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;