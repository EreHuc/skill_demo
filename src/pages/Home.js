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
const Home = () => {
  const [isDarkTheme, setTheme] = useState(false);

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

        <div className="me-header">
          <span className="upper">
            <h1>EreHuc</h1>
          </span>
          <span className="upper">
            <h1>FrontEnd Developer</h1>
          </span>
          <span className="upper">
            <a href="https://github.com/EreHuc" className="git">
              <img src={isDarkTheme ? githubLight : github} alt="github logo" height="32" />
            </a>
          </span>
        </div>
      </div>

      <div className="me-info">
        <h2>About me</h2>

        <p className="about-me">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum ducimus error harum minus mollitia qui
          quod quos suscipit tempora. Accusantium ea eveniet laboriosam modi, molestias nihil vel vitae? Eligendi! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio ducimus itaque maiores molestiae
          nemo non qui quis quod repellendus similique, soluta ullam. Atque eius harum laborum laudantium rem similique.
        </p>

        <p className="about-me">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi, aperiam blanditiis delectus
          distinctio, eligendi fugit hic id illo iusto quia recusandae rerum sed sunt tempora tempore unde veritatis
          voluptatibus.
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
