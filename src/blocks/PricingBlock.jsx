import React from "react";

import { Title, Article } from "../components";
import { tablet, laptop, desktop } from "../assets/images/PricingPage";

const PricingBlock = () => {
  return (
    <div className={"wrapper pricingBlock"}>
      <div className="container">
        <section className="block">
          <a name={"pricing__block"}></a>
          <Title
            title={{
              tag: "h2",
              text: "Pricing And Free Trial",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
            }}
          />
          <div className="content">
            <Article
              article={{
                image: {
                  src: tablet,
                  alt: "tablet",
                },
                title: {
                  tag: "h3",
                  text: "Basic",
                  description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                },
                div: {
                  className: "flex_element",
                  title: { tag: "h2", text: "free" },
                  p: "free forever",
                },
                button: { href: "#s", text: "get free now" },
              }}
            />
            <Article
              article={{
                image: {
                  src: laptop,
                  alt: "laptop",
                },
                title: {
                  tag: "h3",
                  text: "Standart",
                  description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                },
                div: {
                  className: "flex_element",
                  title: { tag: "h2", text: "$99" },
                  p: "month",
                },
                className: "flex_element",
                button: { href: "#s", text: "upgrade" },
              }}
            />
            <Article
              article={{
                image: {
                  src: desktop,
                  alt: "desktop",
                },
                title: {
                  tag: "h3",
                  text: "Enterprice",
                  description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                },
                div: {
                  title: { tag: "h2", text: "$199" },
                  p: "month",
                },
                button: { href: "#s", text: "Learn more" },
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingBlock;
