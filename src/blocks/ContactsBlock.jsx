import React from "react";

import { Title, Article } from "../components";
import {
  map__point,
  mail__bg__black,
  phone__bg__black,
} from "../assets/images/ContactsPage";

const StatsBlock = () => {
  return (
    <div className={"wrapper contactsBlock"}>
      <div className="container">
        <section className="block">
          <a name={"contacts__block"}></a>
          <Title
            title={{
              tag: "h2",
              text: "Keep in touch with us",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
            }}
          />
          <div className="content">
            <Article
              article={{
                image: { src: map__point, alt: "map" },
                title: {
                  tag: "h3",
                  text: "Address",
                  description: "66, Dang Van ngu, Dong Da, Ha noi, Vietnam",
                },
              }}
            />
            <Article
              article={{
                image: { src: mail__bg__black, alt: "mail" },
                title: {
                  tag: "h3",
                  text: "E-mail",
                  description: "contact@halovietnam.com",
                },
              }}
            />
            <Article
              article={{
                image: { src: phone__bg__black, alt: "phone-bg-black" },
                title: {
                  tag: "h3",
                  text: "Phone",
                  description: "+844 1234 56789",
                },
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default StatsBlock;
