import React from 'react';
import '../styles/toggle.scss';

const Toggle = ({ id, onChange = () => {}, theme = 'light' }) => (
  <div className={`toggle ${theme}`}>
    <input type="checkbox" id={id} className="toggle" onChange={onChange} />
    <label htmlFor={id} />
  </div>
);

export default Toggle;
