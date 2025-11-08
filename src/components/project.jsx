export default function Projects() {
  const projects = [
    {
      title: "Database Design",
      description: "Hospital group project",
      github: "https://github.com/MediSoftDatabase",
    },
    {
      title: "Text Messaging App",
      description: "Network programming group project",
      github: "https://github.com/Yoda-Mag/Group-9-Text-Messaging-App",
    },
    {
      title: "Kafka/MongoDB Project",
      description: "Kafka real-time data streaming",
      github: "https://github.com/DmanRy09/Kafka-docker",
    },
    {
      title: "Cisco Networking Project",
      description: "Network configuration and simulation",
      github: "https://github.com/lumordelali-ux/Network-topology",
    },
    {
      title: "Municipal Request App",
      description: "Municipal Request Application",
      github: "https://github.com/DmanRy09/Project_CMPG223",
    },
    {
      title: "Social Wellness Frontend App",
      description: "Group project frontend repo frontend",
      github: "https://github.com/PhetogoM/Frontend-SocialWellness",
    },
    {
      title: "Social Wellness Backend App",
      description: "Group project frontend repo backend",
      github: "https://github.com/Doctor1ven/Backend---SocialWellness",
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
