import React from 'react';
import CV from './assets/JackRandolCV0321.pdf';
import { NavLink } from 'react-router-dom';

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
          Jack is a web developer and designer with an emphasis on creating
          lively user experiences.
        </h1>
        <div>
          <a href={CV}>cv</a>
        </div>
      </div>
    </div>
  );
}
