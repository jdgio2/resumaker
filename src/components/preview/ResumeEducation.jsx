export default function ResumeEducation({ education }) {
  return (
    <div className="resume-education">
      <h3>Education</h3>
      <p>
        <span className="colored-major">{education.degree}</span> |{" "}
        {education.university}
      </p>
      <p className="education-years">{education.attended}</p>
    </div>
  );
}
