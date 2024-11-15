import PropTypes from "prop-types";

export default function ResumeProjects({ projects }) {
  return (
    <div className="resume-projects">
      <h3>Projects</h3>
      <p>
        <span className="colored-project-title">{projects.title}</span>
      </p>
      <p className="project-info">{projects.info}</p>
    </div>
  );
}

ResumeProjects.propTypes = {
  projects: PropTypes.shape({
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};
