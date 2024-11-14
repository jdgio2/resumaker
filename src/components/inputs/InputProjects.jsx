export default function InputProjects({ handleChange }) {
  return (
    <div className="input-projects big-container input-container">
      <h3>Projects</h3>
      <label htmlFor="projectTitle">Project Title: </label>
      <input type="text" name="projectTitle" />

      <label htmlFor="projectInfo">Project Info: </label>
      <textarea name="projectInfo"></textarea>
    </div>
  );
}
