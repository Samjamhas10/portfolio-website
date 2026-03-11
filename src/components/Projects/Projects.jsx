import "./Projects.css";

const projectsData = [
  {
    title: "Spots",
    description:
      "This app allow users to add, delete, like cards, and edit their profiles. It's a great app for anyone who wants to design their profile.",
    link: "https://samjamhas10.github.io/se_project_spots/",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/se_project_spots/main/profile-page.png",
  },
  {
    title: "To-Do App",
    description:
      "A simple and effective to-do list application to help you stay organized.",
    link: "https://samjamhas10.github.io/se_project_todo-app/",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/se_project_todo-app/main/screenshot.png",
  },
  {
    title: "What to Wear",
    description:
      "A full-stack weather-based clothing recommendation app that features user authentication. A weather app built with React and Vite that displays and updates current weather and tells you what to wear.",
    link: "https://wtwr-app.jumpingcrab.com/",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/wtwr-app/main/screenshot.png",
  },
  {
    title: "Ghost Gaming",
    description:
      "A React-based app that connects to the IGDB API, featuring authentication, browsing/searching games, and user profiles.",
    link: "https://ghost-app.jumpingcrab.com/",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/ghost-gaming/main/screenshot.png",
  },
  {
    title: "Kids Garden Daycare LLC",
    description: "A website for a daycare center built with React.",
    link: "https://kidsgardendaycare.com/",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/kids-garden/main/screenshot.png",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-card__image"
            />
          )}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
