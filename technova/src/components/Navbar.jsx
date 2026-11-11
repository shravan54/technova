import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>TechNova</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button>Let's Talk</button>
    </nav>
  );
}

export default Navbar;