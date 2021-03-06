import React from "react";

import { Title, FirstScreenBackground } from "../components";
import { arrowDown } from "../assets/images/HomePage";

const FirstScreenBlock = () => {
  const scrollToFeaturesBlock = () => {
    window.scrollTo({
      top: 650,
      behavior: "smooth",
    });
  };

  return (
    <div className={"wrapper firstScreenBlock"}>
      <FirstScreenBackground />
      <div className="container">
        <section className="block">
          <a name={"firstscreen__block"}></a>
          <Title
            title={{
              tag: "h1",
              text: "Inspire your inspiration",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
            }}
          />
          <div className="content firstScreenContent">
            <article className="article">
              <button
                onClick={scrollToFeaturesBlock}
                className="button header__btn"
              >
                GET START
              </button>
            </article>
            <article className="article">
              <button
                onClick={scrollToFeaturesBlock}
                className="button header__btn"
              >
                <img src={arrowDown} alt={"arrowDown"} />
              </button>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FirstScreenBlock;
