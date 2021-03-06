import React from "react";

const ButtonHover = () => {
  return (
    <button className="buttonHover">
      <span className="hover__out">
        <span className="hover__out__text">VIEW BUTTON</span>
      </span>
      <span className="hover">
        <span className="hover__text">VIEW BUTTON</span>
      </span>
    </button>
  );
};
export default ButtonHover;
