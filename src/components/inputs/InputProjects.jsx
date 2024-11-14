import PropTypes from "prop-types";

export default function InputProjects({ handleChange }) {
  return (
    <div className="input-projects big-container input-container">
      <h3>Projects</h3>
      <label htmlFor="projectTitle">Project Title: </label>
      <input
        type="text"
        name="projectTitle"
        onChange={(e) =>
          handleChange((prevProject) => ({
            ...prevProject,
            title: e.target.value,
          }))
        }
      />

      <label htmlFor="projectInfo">Project Info: </label>
      <textarea
        name="projectInfo"
        onChange={(e) =>
          handleChange((prevProject) => ({
            ...prevProject,
            info: e.target.value,
          }))
        }
      ></textarea>
    </div>
  );
}

InputProjects.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
