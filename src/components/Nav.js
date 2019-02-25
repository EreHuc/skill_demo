import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/other">Other</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
