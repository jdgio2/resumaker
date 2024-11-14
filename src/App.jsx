import "./App.css";
import ResumePreview from "./components/ResumePreview";
import InputField from "./components/InputField";
import { useState } from "react";

function App() {
  const [resumeHeader, setResumeHeader] = useState({
    first_name: "Test First Name",
    last_name: "Test Last Name",
    links: [
      { href: "google.com", name: "Google" },
      { href: "amazon.com", name: "Amazon" },
    ],
  });
  const [resumeExperience, setResumeExperience] = useState({
    role: "Test Role 1",
    company: "Test Company 1",
    years: "2000-2001",
    info: "At this Company 1, I did such and such a thing at such and such a place which resulted in much profit and joy for everyone involved.",
  });
  const [resumeEducation, setResumeEducation] = useState({
    degree: "Test Degree 1",
    university: "Test University 1",
    attended: "2000-2001",
  });
  const [resumeProjects, setResumeProjects] = useState({
    title: "Project Title 1",
    info: "On this project, I utilized, spearheaded, and formulated the most amazizng thing every imagined by man so that many people were happy. We accumulated 4000 users in one nanosecond.",
  });
  return (
    <div className="parent-div">
      <InputField
        handleHeader={(new_info) => {
          setResumeHeader(new_info);
        }}
        handleBody={(new_info) => {
          setResumeExperience(new_info);
        }}
        handleExperience={(new_info) => {
          setResumeEducation(new_info);
        }}
        handleEducation={(new_info) => {
          setResumeProjects(new_info);
        }}
      ></InputField>
      <ResumePreview
        header={resumeHeader}
        body={resumeExperience}
        education={resumeEducation}
        projects={resumeProjects}
      ></ResumePreview>
    </div>
  );
}

export default App;
