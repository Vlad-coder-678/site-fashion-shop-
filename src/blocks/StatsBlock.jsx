import React from "react";

import { Title, Article } from "../components";
import { cloud, pazzle, like, group } from "../assets/images/StatsPage";

const StatsBlock = () => {
  return (
    <div className={"wrapper statsBlock"}>
      <div className="container">
        <section className="block">
          <a name={"stats__block"}></a>
          <Title
            title={{
              tag: "h2",
              text: "Stats & Testimonial",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
            }}
          />
          <div className="content">
            <Article
              article={{
                image: { src: cloud, alt: "cloud" },
                title: { tag: "h3", text: "20" },
                p: "Products",
              }}
            />
            <Article
              article={{
                image: { src: group, alt: "group" },
                title: { tag: "h3", text: "120,000" },
                p: "Downloads",
              }}
            />
            <Article
              article={{
                image: { src: like, alt: "like" },
                title: { tag: "h3", text: "1200" },
                p: "Customers",
              }}
            />
            <Article
              article={{
                image: { src: pazzle, alt: "pazzle" },
                title: { tag: "h3", text: "900" },
                p: "Likes",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default StatsBlock;
