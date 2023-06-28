import React from 'react';

const CompItems = ({ item }) => {
  return (
    <div className="comp__card" key={item.id}>
      <img src={item.image} alt={item.title} />
      <h3 className="comp__title">{item.title}</h3>
      <p className="comp__tagline">{item.tagline}</p>
      <a
        href={item.link}
        className="comp__button"
        target="_blank"
        rel="noreferrer"
      >
        Take a look <i className="bx bx-right-arrow-alt comp__button-icon"></i>
      </a>
    </div>
  );
};

export default CompItems;
