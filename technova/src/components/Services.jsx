const services = [
  {
    title: "Web Development",
    description: "Modern and responsive websites."
  },
  {
    title: "App Development",
    description: "Applications for mobile and web."
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and user-friendly interfaces."
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud-based applications."
  }
];

function Services() {
  return (
    <section className="section" id="services">
      <p className="tagline">WHAT WE DO</p>

      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;