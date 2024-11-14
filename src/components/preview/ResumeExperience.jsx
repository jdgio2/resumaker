import PropTypes from "prop-types";

export default function ResumeExperience({ experience }) {
  return (
    <div className="resume-experience">
      <h3>Experience</h3>
      <p>
        <span className="colored-role">{experience.role}</span> |{" "}
        {experience.company}
      </p>
      <p className="experience-years">{experience.years}</p>
      <p className="experience-accomplishments">{experience.info}</p>
    </div>
  );
}

ResumeExperience.propTypes = {
  experience: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};
