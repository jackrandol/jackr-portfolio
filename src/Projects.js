import React from 'react';
import { projectData } from './projectData';

function Projects() {
  return (
    <div>
      <p className='about'>Projects Page</p>
      {projectData &&
        projectData.map((project) => (
          <div className='project'>
            <h1>{project.title}</h1> <br />
            <p>{project.description}</p>
            <h2>Features:</h2>
            <p>{project.features}</p>
            <h2>Tech Stack:</h2>
            <p>{project.stack}</p>
            {project.gitHubUrl && (
              <a href={project.gitHubUrl}>view code on github</a>
            )}
            {project.liveUrl && <a href={project.liveUrl}>view project live</a>}
            <img src={project.image} alt={project.title}></img>
          </div>
        ))}
    </div>
  );
}

export default Projects;
