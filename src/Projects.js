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
              <img src={project.image} alt={project.title}></img>
              <div className='projects-info'>
                <div className='projects-description'>
                  <h2>Overview:</h2>
                  <p>{project.description}</p>
                  <h2>Features:</h2>
                  <p>{project.features}</p>
                </div>
                <div className='projects-tech'>
                  <h2>Tech Stack:</h2>
                  <ul>
                    {project.stack &&
                      project.stack.map((tech) => <li>{tech}</li>)}
                  </ul>
                  <div className='links'>
                    {project.gitHubUrl && (
                      <a href={project.gitHubUrl}>
                        <div className='externalLink'>
                          <img
                            className='gitHubLogo'
                            src={GitHubLogo}
                            alt='github logo'
                          ></img>
                          view code on github
                        </div>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl}>
                        <div className='externalLink'>
                          <div className='liveLogo'></div>
                          view project live
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
