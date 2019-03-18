import React from 'react';
import Category from '../components/Category';

const ExperienceDetails = ({ data }) => {
  const experience = data[0];

  return (
    <>
      <Category data={experience} />
      {experience.details ? experience.details.map((detail, index) => <Category data={detail} key={index} />) : null}
    </>
  );
};

export default ExperienceDetails;
