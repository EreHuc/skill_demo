import React from 'react';
import '../styles/category.scss';

const Category = ({ data }) => (
  <div className={`category ${data.id}`}>
    <h3>{data.title}</h3>
    {data.backgroundImage ? (
      <div className="banner" style={{ backgroundImage: `url('${data.backgroundImage}')` }}>
        <img src={data.logo} alt={`${data.id}-logo`} />
      </div>
    ) : null}
    <div className="info">
      {data.text.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </div>
);

export default Category;
