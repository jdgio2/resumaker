import "../App.css";
import "../index.css";

// { header, body, education, projects }
export default function ResumePreview({ header, body, education, projects }) {
  return (
    <div className="resume-preview">
      <div className="resume-header">
        <h1>
          <strong className="bold-name">{header.first_name}</strong>{" "}
          {header.last_name}
        </h1>
        <div className="resume-links">
          {header.links.map((linkInfo) => (
            <a key={linkInfo.name} href={linkInfo.href}>
              {linkInfo.name}
            </a>
          ))}
        </div>
      </div>

      <div className="resume-body">
        <div className="resume-experience">
          <h3>Experience</h3>
          <p>
            <span className="colored-role">{body.role}</span> | {body.company}
          </p>
          <p className="experience-years">{body.years}</p>
          <p className="experience-accomplishments">{body.info}</p>
        </div>

        <div className="resume-education">
          <h3>Education</h3>
          <p>
            <span className="colored-major">{education.degree}</span> |{" "}
            {education.university}
          </p>
          <p className="education-years">{education.attended}</p>
        </div>

        <div className="resume-projects">
          <h3>Projects</h3>
          <p>
            <span className="colored-project-title">{projects.title}</span>
          </p>
          <p className="project-info">{projects.info}</p>
        </div>
      </div>
    </div>
  );
}
