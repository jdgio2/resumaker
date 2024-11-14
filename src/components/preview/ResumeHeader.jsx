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
