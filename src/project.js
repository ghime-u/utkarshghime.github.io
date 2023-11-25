// ProjectSection.js

import React from 'react';
import './App.css';

const ProjectSection = () => {
  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <div className="project-list">
        {/* Project 1 */}
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>

        {/* Project 2 */}
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>

        {/* Project 3 */}
        <div className="project">
          <h3>Project 3</h3>
          <p>Description of Project 3.</p>
        </div>

        {/* Project 4 */}
        <div className="project">
          <h3>Project 4</h3>
          <p>Description of Project 4.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
