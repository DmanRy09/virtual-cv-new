import photocf from "../assets/cf.jpg";


export default function Dashboard() {


  // If using hash navigation (same page sections)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 

  return (
    <aside className="dashboard">
      <img
        src={photocf}
        alt="Devine Lumor"
        className="profile-photo"
      />
      <h1>Devine Lumor</h1>
      <h2>Software Developer</h2>

      <div className="contact">
        <h3>Contact Details</h3>
        <p>Email: <a href="mailto:lumordelali09@gmail.com">lumordelali09@gmail.com</a></p>
        <p>Phone: <a href="tel:+27636941749">+27 63 594 1749</a></p>
      </div>

      <nav className="dashboard-nav">
        <button 
          onClick={() => scrollToSection('about')}
          className="nav-button"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('resume')}
          className="nav-button"
        >
          Resume
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="nav-button"
        >
          Projects
        </button>
      </nav>

      <div className="social-links">
        <a 
          href="https://github.com/DmanRy09" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/devine-lumor-862205355/ " 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          LinkedIn
        </a>
      </div>
    </aside>
  );
}