import CV from '../assets/cv_Lumor_Devine.pdf'; // Check this path - usually assets/ not public/

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume & CV</h2>
      
      <div className="download-section">
        <p>
          Click{" "}
          <a 
            href={CV} 
            download="Devine_Lumor_CV.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="download-link"
          >
            here
          </a>{" "}
          to download my CV.
        </p>
      </div>

      <div className="skills-container">
        <div className="skills-category">
          <h3>💻 Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript / TypeScript</li>
            <li>C / C++</li>
            <li>C#</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>🛠️ Technologies & Skills</h3>
          <ul>
            <li>React.js & Node.js</li>
            <li>ASP.NET</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
            <li>Kafka</li>
            <li>Cisco Packet Tracer</li>
            <li>Power BI</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>🎓 Education</h3>
          <ul>
            <li>
              <strong>BSc in Information Technology</strong>
              <br />
              North-West University (NWU)
              <br />
              2023 - 2025
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}