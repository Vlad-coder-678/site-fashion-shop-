import React from "react";

import { Title, WorkArticle } from "../components";
import {
  shape0,
  shape1,
  shape2,
  shape3,
  shape5,
  shape6,
  shape7,
  shape8,
} from "../assets/images/OurWorksPage";

const OurWorksBlock = () => {
  return (
    <div className={"wrapper ourWorksBlock"}>
      <div className="container">
        <section className="block">
          <a name={"works__block"}></a>
          <Title
            title={{
              tag: "h2",
              text: "Our Works",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
            }}
          />
          <div className="content">
            <WorkArticle
              article={{
                image: { src: shape0, alt: "shape" },
                views: 12,
                date: "12-11-19",
                title: {
                  tag: "h3",
                  text: "Fully Responsive",
                  description: "Design / Branding",
                },
              }}
            />
            <WorkArticle
              article={{
                image: { src: shape1, alt: "shape" },
                views: 12,
                date: "12-11-19",
                title: {
                  tag: "h3",
                  text: "Font awesome Icons",
                  description: "Design / Branding",
                },
              }}
            />
            <WorkArticle
              article={{
                image: { src: shape2, alt: "shape" },
                views: 12,
                date: "12-11-19",
                title: {
                  tag: "h3",
                  text: "HTML & CSS",
                  description: "App design / Development",
                },
              }}
            />
            <WorkArticle
              article={{
                image: { src: shape3, alt: "shape" },
                views: 12,
                date: "12-11-19",
                title: {
                  tag: "h3",
                  text: "Variours Layout",
                  description: "Branding",
                },
              }}
            />
            <WorkArticle
              article={{
                image: { src: shape5, alt: "shape" },
                views: 12,
                date: "12-11-19",
                title: {
                  tag: "h3",
                  text: "Fully Responsive",
                  description: "Design / Branding",
                },
              }}
            />
            <WorkArticle
              article={{
                image: { src: shape6, alt: "shape" },
                views: 12,
                date: "12-11-19",
                title: {
                  tag: "h3",
                  text: "Font awesome Icons",
                  description: "Design / Branding",
                },
              }}
            />
            <WorkArticle
              article={{
                image: { src: shape7, alt: "shape" },
                views: 12,
                date: "12-11-19",
                title: {
                  tag: "h3",
                  text: "HTML & CSS",
                  description: "App design / Development",
                },
              }}
            />
            <WorkArticle
              article={{
                image: { src: shape8, alt: "shape" },
                views: 12,
                date: "12-11-19",
                title: {
                  tag: "h3",
                  text: "Variours Layout",
                  description: "Branding",
                },
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurWorksBlock;
