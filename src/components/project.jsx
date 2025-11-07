export default function Projects() {
  const projects = [
    {
      title: "Database Design",
      description: "Hospital group project",
      github: "https://github.com/MediSoftDatabase",
    },
    {
      title: "Text Messaging App",
      description: "Municipal Request Application",
      github: "https://github.com/Yoda-Mag/Group-9-Text-Messaging-App",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <button
            key={index}
            className="project-button"
            onClick={() => window.open(project.github, "_blank")}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
