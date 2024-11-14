import PropTypes from "prop-types";

export default function InputHeader({ handleChange }) {
  return (
    <div className="input-header">
      <h2>Header</h2>
      <div className="input-name input-container">
        <label htmlFor="firstName">Your first name: </label>
        <input
          type="text"
          name="firstName"
          onChange={(e) =>
            handleChange((prevHeader) => ({
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
            handleChange((prevHeader) => ({
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
    </div>
  );
}

InputHeader.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
