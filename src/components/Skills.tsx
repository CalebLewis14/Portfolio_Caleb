import React from 'react';
import '../assets/styles/skill.scss';

interface SkillProps {
  name: string;
}

const skills: SkillProps[] = [
  { name: 'C/C++' },
  { name: 'Python' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Bootstrap' },
  { name: 'SQL' },
  { name: 'Embedded C' },
  { name: 'Assembly' },
  { name: 'JavaScript' },
  { name: 'React' },
];

const ProficiencySection: React.FC = () => {
  return (
    <div className="proficiency-container" id="ProficiencySection">
      <h1>Known Languages</h1>
      <div className="proficiency-list">
        {skills.map((skill, index) => (
          <div key={index} className="proficiency-item">
            <div className="proficiency-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProficiencySection;