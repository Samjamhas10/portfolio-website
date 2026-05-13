import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Hashi's Luxe Cleaning LLC",
    description:
      "A professional cleaning service website built with React, highlighting services and providing contact information",
    link: "https://kidsgardendaycare.com/",
    image: "https://github.com/Samjamhas10/hashi-s-luxe-cleaning",
    tags: ["React", "Website Design"],
  },
  {
    title: "Kids Garden Daycare LLC",
    description: "A website for a daycare center built with React.",
    link: "https://kidsgardendaycare.com/",
    github: "https://github.com/Samjamhas10/kids-garden",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/kids-garden/main/screenshot.png",
    tags: ["React", "Website Design"],
  },
  {
    title: "Ghost Gaming",
    description:
      "A React-based app that connects to the IGDB API, featuring authentication, browsing/searching games, and user profiles.",
    link: "https://ghost-app.jumpingcrab.com/",
    github: "https://github.com/Samjamhas10/ghost-gaming",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/ghost-gaming-frontend/main/ghost-homepage.png",
    tags: ["React", "API", "Authentication"],
  },
  {
    title: "What to Wear",
    description:
      "A full-stack weather-based clothing recommendation app that features user authentication. A weather app built with React and Vite that displays and updates current weather and tells you what to wear.",
    link: "https://wtwr-app.jumpingcrab.com/",
    github: "https://github.com/Samjamhas10/wtwr-app",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/se_project_react/main/main-route.png",
    tags: ["React", "Node.js", "API"],
  },
  {
    title: "To-Do App",
    description:
      "A simple and effective to-do list application to help you stay organized.",
    link: "https://samjamhas10.github.io/se_project_todo-app/",
    github: "https://github.com/Samjamhas10/se_project_todo-app",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/se_project_todo-app/main/main.png",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Spots",
    description:
      "This app allow users to add, delete, like cards, and edit their profiles. It's a great app for anyone who wants to design their profile.",
    link: "https://samjamhas10.github.io/se_project_spots/",
    github: "https://github.com/Samjamhas10/se_project_spots",
    image:
      "https://raw.githubusercontent.com/Samjamhas10/se_project_spots/main/profile-page.png",
    tags: ["React", "JavaScript", "CSS"],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">My Projects</h2>
        <p className="projects__subtitle">
          Here are some of my recent works showcasing my skills and creativity
        </p>

        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-card__image-wrapper">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                  />
                )}
                <div className="project-card__overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__overlay-btn"
                  >
                    <FaExternalLinkAlt size={20} />
                    <span>View Live</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__overlay-btn"
                    >
                      <FaGithub size={20} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="project-card__tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-card__links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--github"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
