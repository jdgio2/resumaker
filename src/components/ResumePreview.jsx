import '../App.css'
import '../index.css'


export default function ResumePreview() {
    return(
    <div className="resume-preview">
        <div className="resume-header">
            <h1>
                <strong className="bold-name">First Name</strong> Last Name
            </h1>
            <div className="resume-links">
                <span>Link 1</span> <span>Link 2</span>
            </div>
        </div>

        <div className="resume-body">
            <div className="resume-experience">
                <h3>Experience</h3>
                <p><span className="colored-role">Role</span> | Company</p>
                <p className="experience-years">Years</p>
                <p className="experience-accomplishments">Accomplishments</p>
            </div>

            <div className="resume-education">
                <h3>Education</h3>
                <p><span className="colored-major">Major</span> | University</p>
                <p className="education-years">Years Attended</p>
            </div>

            <div className="resume-projects">
                <h3>Projects</h3>
                <p><span className="colored-project-title">Project Title</span></p>
                <p className="project-info">Project Info</p>
            </div>
        </div>
    </div>

    );
}