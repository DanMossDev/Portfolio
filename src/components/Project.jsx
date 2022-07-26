export default function Project({setCurrentProject, title, liveURL, gitURL, imgURL, bio}) {

    return <div className={"container loaded fade"}>
          <a href={liveURL} target="_blank" rel="noreferrer">
            <img
              src={imgURL}
              alt={`A shot of the project ${title}`}
              className="projectimg"
            />
          </a>
          <h4 className="projecttitle">
            <b>{title}</b>
          </h4>
          <p className="project-description">
            {bio}
          </p>
          <hr />
          <button onClick={() => setCurrentProject(title)} className="clickme details-button">
              View Project Details
          </button>
          <hr />
          <button onClick={() => {window.open(gitURL, "_blank")}} className="clickme source-button">
              View Source Code
          </button>
        </div>
  }