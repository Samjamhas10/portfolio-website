import "./Projects.css";

const projectsData = [
  {
    title: "Spots",
    description:
      "This app allow users to add, delete, like cards, and edit their profiles. It's a great app for anyone who wants to design their profile.",
    link: "https://samjamhas10.github.io/se_project_spots/",
  },
  {
    title: "To-Do App",
    description: "",
    link: "https://samjamhas10.github.io/se_project_todo-app/",
  },
  {
    title: "What to Wear",
    description:
      "A full-stack weather-based clothing recommendation app that features user authentication. - A weather app built with React and Vite that displays and updates current weather and tells you what to wear.",
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
