import React from "react";

import { Title, Article } from "../components";
import {
  bookmark,
  folder,
  lemon,
  mail,
  phone,
  brackets,
} from "../assets/images/TinyonePage";

const FeaturesBlock = () => {
  return (
    <div className={"wrapper featuresBlock"}>
      <div className="container">
        <section className="block">
          <a name={"features__block"}></a>
          <Title
            title={{
              tag: "h2",
              text: "Tinyone features",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
            }}
          />
          <div className="content firstScreenContent">
            <Article
              article={{
                image: {
                  src: bookmark,
                  alt: "bookmark",
                },
                title: {
                  tag: "h3",
                  text: "Fully Responsive",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
                },
              }}
            />
            <Article
              article={{
                image: {
                  src: folder,
                  alt: "folder",
                },
                title: {
                  tag: "h3",
                  text: "Fully Layered PSD",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
                },
              }}
            />
            <Article
              article={{
                image: {
                  src: lemon,
                  alt: "lemon",
                },
                title: {
                  tag: "h3",
                  text: "Font Awesome Icons",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
                },
              }}
            />
            <Article
              article={{
                image: {
                  src: brackets,
                  alt: "brackets",
                },
                title: {
                  tag: "h3",
                  text: "HTML3 & CSS3",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
                },
              }}
            />
            <Article
              article={{
                image: {
                  src: mail,
                  alt: "mail",
                },
                title: {
                  tag: "h3",
                  text: "Email Template",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
                },
              }}
            />
            <Article
              article={{
                image: {
                  src: phone,
                  alt: "phone",
                },
                title: {
                  tag: "h3",
                  text: "Free to download",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
                },
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturesBlock;
