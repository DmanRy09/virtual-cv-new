import photocf from "../assets/cf.jpg";

export default function Dashboard() {
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
        <p>Phone: <a href="tel:+27766342633">+27 76 634 2633</a></p>
      </div>

      <nav>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
      </nav>

      <div className="socials">
        <a href="https://github.com/DmanRy09" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/devine-lumor-862205355/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </aside>
  );
}
