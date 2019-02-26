import React from 'react';
import '../styles/category.scss';

const Category = ({ data, text }) => (
  <>
    <div className="banner" style={{ backgroundImage: `url('${data.backgroundImage}')` }}>
      <img src={data.logo} alt={`${data.id}-logo`} />
    </div>
    <div className="info">
      <h3>{data.title}</h3>

      {data.text.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  </>
);

export default Category;
