import "../App.css";
import "../index.css";

import InputHeader from "./inputs/InputHeader";
import InputExperience from "./inputs/InputExperience";
import InputEducation from "./inputs/InputEducation";
import InputProjects from "./inputs/InputProjects";

export default function InputField({
  handleHeader,
  handleExperience,
  handleEducation,
  handleProjects,
}) {
  return (
    <div className="input-field">
      <h1>Input Field</h1> {/* This will be for name and links and stuff */}
      <InputHeader handleChange={handleHeader}></InputHeader>
      <div className="input-body">
        <h2>Body</h2>
        <InputExperience handleChange={handleExperience}></InputExperience>
        <InputEducation handleChange={handleEducation}></InputEducation>
        <InputProjects handleChange={handleProjects}></InputProjects>
      </div>{" "}
      {/* Ya know... the rest of it */}
    </div>
  );
}
