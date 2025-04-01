import React from 'react';
import '../assets/styles/skill.scss';

interface SkillProps {
  name: string;
  rating: number; // Adding a rating property (out of 10)
}

const skills: SkillProps[] = [
  { name: 'C/C++', rating: 8 },
  { name: 'Python', rating: 9 },
  { name: 'HTML', rating: 7 },
  { name: 'CSS', rating: 6 },
  { name: 'Bootstrap', rating: 8 },
  { name: 'SQL', rating: 7 },
  { name: 'Embedded C', rating: 8 },
  { name: 'Assembly', rating: 6 },
  { name: 'JavaScript', rating: 7 },
  { name: 'React', rating: 8 },
];

const ProficiencySection: React.FC = () => {
  return (
    <div className="proficiency-container" id="ProficiencySection">
      <h1>Skills</h1>
      <div className="proficiency-list">
        {skills.map((skill, index) => (
          <div key={index} className="proficiency-item">
            <div className="proficiency-name">{skill.name}</div>
            <div className="proficiency-rating">{skill.rating}/10</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProficiencySection;