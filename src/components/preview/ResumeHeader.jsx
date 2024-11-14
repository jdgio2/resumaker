import PropTypes from "prop-types";

export default function ResumeHeader({ header }) {
  return (
    <div className="resume-header">
      <h1>
        <strong className="bold-name">{header.first_name}</strong>{" "}
        {header.last_name}
      </h1>
      <div className="resume-links">
        {header.links.map((linkInfo) => (
          <a key={linkInfo.name} href={linkInfo.href}>
            {linkInfo.name}
          </a>
        ))}
      </div>
    </div>
  );
}

ResumeHeader.propTypes = {
  header: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
