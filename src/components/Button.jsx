import React from "react";

const Button = ({ button }) => {
  return (
    <button
      href={button.href != null ? button.href : "#s"}
      className={
        button.className != null ? "button " + button.className : "button"
      }
    >
      {button.text != null && button.text}
      {button.image != null && (
        <img src={button.image.src} alt={button.image.alt} />
      )}
    </button>
  );
};

export default Button;
