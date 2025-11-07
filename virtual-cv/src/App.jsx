import { useState } from 'react'
import './App.css'
import Dashboard from "./components/dashboard.jsx";
import About from "./components/about.jsx";
import Resume from "./components/resume.jsx";
import Projects from "./components/project.jsx";

function App() {
  return (
    <div className="container">
      <Dashboard />
      <main>
        <About />
        <Resume />
        <Projects />
      </main>
    </div>
  );
}

export default App;