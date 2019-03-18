import React, { useState, useEffect } from 'react';
import '../styles/home.scss';
import me from '../assets/avataaars.svg';
import meDark from '../assets/avataaars_happy.svg';
import github from '../assets/github.png';
import githubLight from '../assets/github-light.png';
import Category from '../components/Category';
import experiences from '../data/experiences';
import myStore, { darkThemeAction, lightThemeAction, toggleThemeAction } from '../store';
import '../styles/home.scss';

// NASA_API_KEY=SX8ujRu0qvwbMoWpr5APv34yR9xbJfdne8wYOTNy

const Home = () => {
  const state = myStore.getState();
  const [isDarkTheme, setTheme] = useState(state.isDarkTheme);

  useEffect(() => {
    myStore.subscribe([toggleThemeAction, darkThemeAction, lightThemeAction], ({ state }) => {
      setTheme(state.isDarkTheme);
    });
  }, []);

  return (
    <div className="home">
      <div className="me">
        <div className="me-icon">
          <img src={isDarkTheme ? meDark : me} alt="EreHuc" height="200" />
        </div>

        <span className="me-name upper">
          <h1>EreHuc</h1>
        </span>
        <span className="me-job upper">
          <h1>Web Developer</h1>
        </span>
        <span className="me-git upper">
          <a href="https://github.com/EreHuc" className="git">
            <img src={isDarkTheme ? githubLight : github} alt="github logo" height="32" />
          </a>
        </span>
      </div>

      <div className="me-info">
        <h2>About me</h2>

        <p className="about-me">
          Hi ! I'm Romain «EreHuc» HUC. I'm french web developer living in Paris, I like space 🚀, programming 💻 and
          conquer the world ( in{' '}
          <a href="https://eu4.paradoxwikis.com/Europa_Universalis_4_Wiki" target="_blank">
            EU4
          </a>{' '}
          🎮 :) )
        </p>

        <p className="about-me">So what's my knowledge ?</p>

        <ul>
          <li>
            Programming:
            <ul>
              <li>Front-End: HTML, CSS, Javascript (vanilla, VueJs, ReactJS, MeteorJS)</li>
              <li>Back-End: NodeJS and a bit of Go</li>
            </ul>
          </li>
          <li>Databases: MongoDB</li>
          <li>VCS: git</li>
          <li>IDE/Text Editor: Idea Intellij, vim</li>
        </ul>

        <p className="about-me">
          You wonder what's my greatest skill ? Knowing that : `["👨", "‍", "🚀"].join('') === "👨‍🚀"`
        </p>
        <h2>Experiences</h2>
        {experiences.map((experience, index) => (
          <Category data={experience} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
