import "./Projects.css";

const projectsData = [
  {
    title: "Spots",
    description: "Description of project 1",
    link: "https://samjamhas10.github.io/se_project_spots/",
  },
  {
    title: "To-Do App",
    description: "Description of project 2",
    link: "https://samjamhas10.github.io/se_project_todo-app/",
  },
  {
    title: "What to Wear",
    description: "Description of project 3",
    link: "https://wtwr-app.jumpingcrab.com/",
  },
  {
    title: "Ghost Gaming",
    description: "Description of project 4",
    link: "https://ghost-app.jumpingcrab.com/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank">
            View
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
