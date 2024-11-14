import "../App.css";
import "../index.css";

export default function InputField({
  handleHeader,
  handleBody,
  handleEducation,
  handleProjects,
}) {
  return (
    <div className="input-field">
      <h1>Input Field</h1>
      <div className="input-header">
        <h2>Header</h2>
        <div className="input-name input-container">
          <label htmlFor="firstName">Your first name: </label>
          <input
            type="text"
            name="firstName"
            onChange={(e) =>
              handleHeader((prevHeader) => ({
                ...prevHeader,
                first_name: e.target.value,
              }))
            }
          ></input>
          <label htmlFor="lastName">Your last name: </label>
          <input
            type="text"
            name="lastName"
            onChange={(e) =>
              handleHeader((prevHeader) => ({
                ...prevHeader,
                last_name: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="input-links input-container">
          <label htmlFor="linkEntryText">Enter your links: </label>
          <input type="text" name="linkEntryText"></input>
          {/* Maybe add this later: <input type="file" name='linkEntryImg'></input> */}
        </div>
      </div>{" "}
      {/* This will be for name and links and stuff */}
      <div className="input-body">
        <h2>Body</h2>
        <div className="input-experience big-container input-container">
          <h3>Experience</h3>
          <label htmlFor="experienceRole">Role: </label>
          <input
            type="text"
            name="experienceRole"
            onChange={(e) =>
              handleHeader((prevHeader) => ({
                ...prevHeader,
                last_name: e.target.value,
              }))
            }
          ></input>
          <label htmlFor="experienceCompany">Company: </label>
          <input type="text" name="experienceCompany" />

          <label htmlFor="experienceYears">Years: </label>
          <input type="text" name="experienceYears" />

          <label htmlFor="experienceAccomplishments">Accomplishments: </label>
          <textarea name="experienceAccomplishments"></textarea>
        </div>
        <div className="input-education big-container input-container">
          <h3>Education</h3>
          <label htmlFor="educationMajor">Major: </label>
          <input type="text" name="educationMajor" />

          <label htmlFor="educationUniversity">University: </label>
          <input type="text" name="educationUniversity" />

          <label htmlFor="educationYears">Years Attended: </label>
          <input type="text" name="educationYears" />
        </div>
        <div className="input-projects big-container input-container">
          <h3>Projects</h3>
          <label htmlFor="projectTitle">Project Title: </label>
          <input type="text" name="projectTitle" />

          <label htmlFor="projectInfo">Project Info: </label>
          <textarea name="projectInfo"></textarea>
        </div>
      </div>{" "}
      {/* Ya know... the rest of it */}
    </div>
  );
}
