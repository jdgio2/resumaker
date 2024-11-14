export default function InputExperience({ handleChange }) {
  return (
    <div className="input-experience big-container input-container">
      <h3>Experience</h3>
      <label htmlFor="experienceRole">Role: </label>
      <input
        type="text"
        name="experienceRole"
        onChange={(e) =>
          handleChange((prevExperience) => ({
            ...prevExperience,
            role: e.target.value,
          }))
        }
      ></input>
      <label htmlFor="experienceCompany">Company: </label>
      <input
        type="text"
        name="experienceCompany"
        onChange={(e) =>
          handleChange((prevExperience) => ({
            ...prevExperience,
            company: e.target.value,
          }))
        }
      />

      <label htmlFor="experienceYears">Years: </label>
      <input
        type="text"
        name="experienceYears"
        onChange={(e) =>
          handleChange((prevExperience) => ({
            ...prevExperience,
            years: e.target.value,
          }))
        }
      />

      <label htmlFor="experienceAccomplishments">Accomplishments: </label>
      <textarea
        name="experienceAccomplishments"
        onChange={(e) =>
          handleChange((prevExperience) => ({
            ...prevExperience,
            info: e.target.value,
          }))
        }
      ></textarea>
    </div>
  );
}
