import React from "react";
import "../Styles/Skills.css";

const skillsData = [
  {
    category: "Frontend",
    items: [
      { title: "HTML5", level: "Advanced", percentage: 100 },
      { title: "CSS3", level: "Advanced", percentage: 100 },
      { title: "JavaScript", level: "Intermediate", percentage: 85 },
      { title: "React JS", level: "Intermediate", percentage: 80 },
      { title: "Tailwind CSS", level: "Advanced", percentage: 90 },
      { title: "Bootstrap", level: "Advanced", percentage: 90 },
    ],
  },
  {
    category: "Backend & API",
    items: [
      { title: "Python", level: "Intermediate", percentage: 75 },
      { title: "REST API", level: "Intermediate", percentage: 80 },
      { title: "JSON Server", level: "Intermediate", percentage: 85 },
      { title: "Axios", level: "Intermediate", percentage: 85 },
    ],
  },
  {
    category: "Tools",
    items: [
      { title: "Git", level: "Intermediate", percentage: 80 },
      { title: "GitHub", level: "Intermediate", percentage: 80 },
      { title: "VS Code", level: "Advanced", percentage: 100 },
      { title: "Anaconda Navigator", level: "Advanced", percentage: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-heading">Skills.</h2>

      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div key={index} className="skill-category">
            <h2 className="category-title">{group.category}</h2>

            {group.items.map((skill, i) => (
              <div className="skill-card" key={i}>
                <div className="skill-header">
                  <h4>{skill.title}</h4>
                  <span>{skill.percentage}%</span>
                  {/* <h4>{skill.level}</h4> */}
                </div>

                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
