export default function InputEducation({ handleChange }) {
  return (
    <div className="input-education big-container input-container">
      <h3>Education</h3>
      <label htmlFor="educationMajor">Major: </label>
      <input type="text" name="educationMajor" />

      <label htmlFor="educationUniversity">University: </label>
      <input type="text" name="educationUniversity" />

      <label htmlFor="educationYears">Years Attended: </label>
      <input type="text" name="educationYears" />
    </div>
  );
}
