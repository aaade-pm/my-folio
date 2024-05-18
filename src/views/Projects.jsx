import data from "../constant";

const Projects = () => {
  return (
    <>
      <section>
        {data.projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-info">
              <div className="project-stack">
                <p>{project.stack.join(" / ")}</p>
              </div>

              <div className="view-on-github">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  VIEW ON GITHUB ↗
                </a>
              </div>
            </div>
            <a href={project.link} target="_blank" rel="noreferrer noopener">
              <h1>{project.name}</h1>
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
