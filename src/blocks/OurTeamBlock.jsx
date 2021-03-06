import React from "react";

import { Title, Article } from "../components";
import {
  ellipse1,
  ellipse2,
  ellipse3,
  ellipse4,
  linkedIn,
  facebook,
  twitter,
} from "../assets/images/OurTeamPage";

const OurTeamBlock = () => {
  return (
    <div className={"wrapper ourTeamBlock"}>
      <div className="container">
        <section className="block">
          <a name={"team__block"}></a>
          <Title
            title={{
              tag: "h2",
              text: "Our team",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
            }}
          />
          <div className="content">
            <Article
              article={{
                image: { src: ellipse1, alt: "photo" },
                title: {
                  tag: "h3",
                  text: "John Doe",
                  description: "UI Designer",
                },
                p: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                social: [
                  {
                    href: "#s",
                    image: { src: facebook, alt: "facebook" },
                  },
                  {
                    href: "#s",
                    image: { src: twitter, alt: "twitter" },
                  },
                  {
                    href: "#s",
                    image: { src: linkedIn, alt: "linkedIn" },
                  },
                ],
              }}
            />
            <Article
              article={{
                image: { src: ellipse2, alt: "photo" },
                title: {
                  tag: "h3",
                  text: "John Doe",
                  description: "UI Designer",
                },
                p: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                social: [
                  {
                    href: "#s",
                    image: { src: facebook, alt: "facebook" },
                  },
                  {
                    href: "#s",
                    image: { src: twitter, alt: "twitter" },
                  },
                  {
                    href: "#s",
                    image: { src: linkedIn, alt: "linkedIn" },
                  },
                ],
              }}
            />
            <Article
              article={{
                image: { src: ellipse3, alt: "photo" },
                title: {
                  tag: "h3",
                  text: "John Doe",
                  description: "UI Designer",
                },
                p: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                social: [
                  {
                    href: "#s",
                    image: { src: facebook, alt: "facebook" },
                  },
                  {
                    href: "#s",
                    image: { src: twitter, alt: "twitter" },
                  },
                  {
                    href: "#s",
                    image: { src: linkedIn, alt: "linkedIn" },
                  },
                ],
              }}
            />
            <Article
              article={{
                image: { src: ellipse4, alt: "photo" },
                title: {
                  tag: "h3",
                  text: "John Doe",
                  description: "UI Designer",
                },
                p: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                social: [
                  {
                    href: "#s",
                    image: { src: facebook, alt: "facebook" },
                  },
                  {
                    href: "#s",
                    image: { src: twitter, alt: "twitter" },
                  },
                  {
                    href: "#s",
                    image: { src: linkedIn, alt: "linkedIn" },
                  },
                ],
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurTeamBlock;
