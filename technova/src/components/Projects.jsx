const projects = [
  {
    name: "Business Website",
    category: "Web Development"
  },
  {
    name: "E-commerce Platform",
    category: "Online Shopping"
  },
  {
    name: "Mobile Application",
    category: "App Development"
  }
];

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="tagline">OUR WORK</p>

      <h2>Featured Projects</h2>

      <div className="service-grid">
        {projects.map((project) => (
          <div className="service-card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;