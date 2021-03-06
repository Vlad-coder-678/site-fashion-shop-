import React, { useEffect, useState } from "react";

import { arrowUp } from "../assets/images/ButtonBackToTop";

export default function ButtonBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="btn__top">
      {isVisible && (
        <div className="btn__top-content" onClick={scrollToTop}>
          <img src={arrowUp} alt="arrow up" />
        </div>
      )}
    </div>
  );
}
