import React from 'react';
import '../styles/home.scss';
import me from '../assets/moi.jpg';
import github from '../assets/github.png';

const Home = () => (
  <div className="home">
    <div className="me">
      <div className="me-icon">
        <img src={me} alt="EreHuc" height="200" />
      </div>

      <div className="me-info">
        <span className="upper">
          <h1>EreHuc</h1>
        </span>
        <span className="upper">
          <h1>FrontEnd Developer</h1>
        </span>
        <span className="upper">
          <a href="https://github.com/EreHuc" className="git">
            <img src={github} alt="github logo" height="32" />
          </a>
        </span>
      </div>
    </div>

    <div className="my-life">
      <h2>Lorem ipsum dolor</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda beatae blanditiis,
        commodi corporis deserunt dolores dolorum explicabo iure laborum laudantium numquam, perferendis sed unde.
        Distinctio est incidunt natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
        exercitationem explicabo ipsa laborum, odit pariatur recusandae soluta vero! Atque aut culpa facilis, incidunt
        nulla repellendus sapiente totam vel.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda beatae blanditiis,
        commodi corporis deserunt dolores dolorum explicabo iure laborum laudantium numquam, perferendis sed unde.
        Distinctio est incidunt natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
        exercitationem explicabo ipsa laborum, odit pariatur recusandae soluta vero! Atque aut culpa facilis, incidunt
        nulla repellendus sapiente totam vel.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda beatae blanditiis,
        commodi corporis deserunt dolores dolorum explicabo iure laborum laudantium numquam, perferendis sed unde.
        Distinctio est incidunt natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
        exercitationem explicabo ipsa laborum, odit pariatur recusandae soluta vero! Atque aut culpa facilis, incidunt
        nulla repellendus sapiente totam vel.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda beatae blanditiis,
        commodi corporis deserunt dolores dolorum explicabo iure laborum laudantium numquam, perferendis sed unde.
        Distinctio est incidunt natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
        exercitationem explicabo ipsa laborum, odit pariatur recusandae soluta vero! Atque aut culpa facilis, incidunt
        nulla repellendus sapiente totam vel.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda beatae blanditiis,
        commodi corporis deserunt dolores dolorum explicabo iure laborum laudantium numquam, perferendis sed unde.
        Distinctio est incidunt natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
        exercitationem explicabo ipsa laborum, odit pariatur recusandae soluta vero! Atque aut culpa facilis, incidunt
        nulla repellendus sapiente totam vel.
      </p>
    </div>
  </div>
);

export default Home;
