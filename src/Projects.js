import React from 'react';
import { projectData } from './projectData';
import { NavLink } from 'react-router-dom';
import GitHubLogo from './assets/GitHub-Mark-120px-plus.png';

function Projects() {
  return (
    <div className='pageView'>
      <div className='header'>
        <NavLink className='homeArrow' to={'/'}>
          ←
        </NavLink>
        <p className='about'>Projects</p>
      </div>
      <div className='projects'>
        {projectData &&
          projectData.map((project) => (
            <div className='project'>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <h2>Features:</h2>
              <p>{project.features}</p>
              <h2>Tech Stack:</h2>
              <p>{project.stack}</p>
              <img src={project.image} alt={project.title}></img>
              <div className='links'>
                {project.gitHubUrl && (
                  <div>
                    <img
                      className='gitHubLogo'
                      src={GitHubLogo}
                      alt='github logo'
                    ></img>
                    <a href={project.gitHubUrl}>view code on github</a>
                  </div>
                )}
                {project.liveUrl && (
                  <div>
                    <div className='liveLogo'></div>
                    <a href={project.liveUrl}>view project live</a>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
