import PropTypes from "prop-types";

export default function InputEducation({ handleChange }) {
  return (
    <div className="input-education big-container input-container">
      <h3>Education</h3>
      <label htmlFor="educationMajor">Major: </label>
      <input
        type="text"
        name="educationMajor"
        onChange={(e) =>
          handleChange((prevEducation) => ({
            ...prevEducation,
            degree: e.target.value,
          }))
        }
      />

      <label htmlFor="educationUniversity">University: </label>
      <input
        type="text"
        name="educationUniversity"
        onChange={(e) =>
          handleChange((prevEducation) => ({
            ...prevEducation,
            university: e.target.value,
          }))
        }
      />

      <label htmlFor="educationYears">Years Attended: </label>
      <input
        type="text"
        name="educationYears"
        onChange={(e) =>
          handleChange((prevEducation) => ({
            ...prevEducation,
            attended: e.target.value,
          }))
        }
      />
    </div>
  );
}

InputEducation.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
