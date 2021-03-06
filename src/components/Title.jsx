import React from "react";

const TitleAndDescription = ({ title }) => {
  return (
    <div className="block__title">
      {title.tag === `h1` ? (
        <h1>{title.text}</h1>
      ) : title.tag === `h2` ? (
        <h2>{title.text}</h2>
      ) : title.tag === `h3` ? (
        <h3>{title.text}</h3>
      ) : title.tag === `h4` ? (
        <h4>{title.text}</h4>
      ) : title.tag === `h5` ? (
        <h5>{title.text}</h5>
      ) : (
        <h6>{title.text}</h6>
      )}
      <p>{title.description}</p>
    </div>
  );
};

export default TitleAndDescription;
