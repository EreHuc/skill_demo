import React from 'react';
import '../styles/toggle.scss';

const Toggle = ({ id, onChange = () => {}, theme = 'light', checked = false }) => (
  <div className={`toggle ${theme}`}>
    <input type="checkbox" id={id} className="toggle" onChange={onChange} checked={checked} />
    <label htmlFor={id} />
  </div>
);

export default Toggle;
