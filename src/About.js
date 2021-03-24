import React from 'react';
import CV from './assets/JackRandolCV0321.pdf';
import { NavLink } from 'react-router-dom';
import GitHubLogo from './assets/GitHub-Mark-120px-plus.png';
import LinkedInLogo from './assets/linkedin-black-icon-logo.png';
import Paper from './assets/paper.png';

export default function About() {
  return (
    <div className='pageView'>
      <div className='header'>
        <NavLink className='homeArrow' to={'/'}>
          ←
        </NavLink>
        <p className='about'> About</p>
      </div>
      <div className='projects'>
        <h1>
          I am a web developer and designer that puts emphasis on creating
          lively user experiences. After studying and working in the field of
          design I found myself comfortable between the worlds of logic and
          design with web development.
          <br />
          <br />I work with HTML, CSS, JavaScript, jQuery, Node.js, Express,
          MongoDB PostgreSQL, React.js, Redux, AWS, Cloudinary, Three.js and
          collaborate with Git.
        </h1>
        <div className='links'>
          <a href={CV}>
            <div className='externalLink'>
              <img
                className='gitHubLogo'
                src={Paper}
                alt='piece of paper'
              ></img>
              cv
            </div>
          </a>
          <a href='https://www.linkedin.com/in/jack-randol/'>
            <div className='externalLink'>
              <img
                className='gitHubLogo'
                src={LinkedInLogo}
                alt='LinkedIn logo'
              ></img>
              visit me on linkedIn
            </div>
          </a>
          <a href='https://github.com/jackrandol'>
            <div className='externalLink'>
              <img
                className='gitHubLogo'
                src={GitHubLogo}
                alt='github logo'
              ></img>
              visit me on GitHub
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
