import "../App.css";
import "../index.css";
import PropTypes from "prop-types";

import ResumeHeader from "./preview/ResumeHeader";
import ResumeExperience from "./preview/ResumeExperience";
import ResumeEducation from "./preview/ResumeEducation";
import ResumeProjects from "./preview/ResumeProjects";

export default function ResumePreview({
  header,
  experience,
  education,
  projects,
}) {
  return (
    <div className="resume-preview">
      <ResumeHeader header={header}></ResumeHeader>
      <div className="resume-body">
        <ResumeExperience experience={experience}></ResumeExperience>
        <ResumeEducation education={education}></ResumeEducation>
        <ResumeProjects projects={projects}></ResumeProjects>
      </div>
    </div>
  );
}

ResumePreview.propTypes = {
  header: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  experience: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  education: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    attended: PropTypes.string.isRequired,
  }).isRequired,
  projects: PropTypes.shape({
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};
