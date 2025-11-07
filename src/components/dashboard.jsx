import photocf from "../assets/cf.jpg";

export default function Dashboard() {
  return (
    <aside className="dashboard">
      <img
        src={photocf}
        className="profile-photo"
      />
      <h1>Devine Lumor</h1>
      <h2>Software Developer</h2>
      <h3>Contact details</h3>
      <h2> Email: lumordelali09@gmail.com</h2>
      <h2> Phone: +27 76 634 2633</h2>
      <nav>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
      </nav>
      <div className="socials">
        <a href="https://github.com/DmanRy09" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/devine-lumor-862205355/" target="_blank">LinkedIn</a>
      </div>
    </aside>
  );
}
