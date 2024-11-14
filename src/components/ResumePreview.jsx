import "../App.css";
import "../index.css";
import ResumeHeader from "./preview/ResumeHeader";
import ResumeExperience from "./preview/ResumeExperience";
import ResumeEducation from "./preview/ResumeEducation";
import ResumeProjects from "./preview/ResumeProjects";

// { header, body, education, projects }
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
