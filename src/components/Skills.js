import React from 'react';
import './Skills.css';
import { FaPython, FaDatabase, FaGitAlt, FaAws, FaChartBar } from 'react-icons/fa';
import { SiPandas, SiApacheairflow, SiDatabricks, SiDocker, SiPostgresql, SiAmazonredshift } from 'react-icons/si';

const skillGroups = [
  {
    title: '🧮 Data Analyst Toolkit',
    skills: [
      { name: 'Python', icon: <FaPython />, level: 'Proficient' },
      { name: 'Pandas', icon: <SiPandas />, level: 'Proficient' },
      { name: 'SQL', icon: <FaDatabase />, level: 'Proficient' },
      { name: 'Power BI', icon: <FaChartBar />, level: 'Proficient' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Proficient' },
    ],
  },
  {
    title: '⚙️ Data Engineering Stack',
    skills: [
      { name: 'Apache Airflow', icon: <SiApacheairflow />, level: 'Proficient' },
      { name: 'Docker', icon: <SiDocker />, level: 'Proficient' },
      { name: 'Databricks', icon: <SiDatabricks />, level: 'Proficient' },
      { name: 'Git', icon: <FaGitAlt />, level: 'Proficient' },
    ],
  },
  {
    title: '☁️ Cloud & Warehousing',
    skills: [
      { name: 'AWS', icon: <FaAws />, level: 'Proficient' },
      { name: 'Redshift', icon: <SiAmazonredshift />, level: 'Proficient' },
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="mb-4">Skill Set Arsenal</h2>
        <div className="row">
          {skillGroups.map((group, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="skill-group-card p-4 rounded-4 h-100">
                <h4 className="text-info mb-3">{group.title}</h4>
                <ul className="list-unstyled">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="d-flex align-items-center mb-3 skill-item">
                      <span className="me-3 skill-icon">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
