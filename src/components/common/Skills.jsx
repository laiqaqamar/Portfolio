const skills = [
  "HTML",
  
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "C++",
  "Git & GitHub",
  "Figma",
  "iot"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills"
    >
      <h2 className="section-title">
        Skills & Tools
      </h2>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div
            key={skill}
            className="skill-pill"
          >
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
}