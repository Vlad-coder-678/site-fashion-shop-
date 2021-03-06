import React from "react";

import { Title } from "../components";

const FeaturesBlock = () => {
  return (
    <div className={"wrapper linksBlock"}>
      <div className="container">
        <section className="block">
          <a name={"links__block"}></a>
          <Title
            title={{
              tag: "h2",
              text: "Sign up for our newsletter",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
            }}
          />
          <form className="callBackForm">
            <input
              name="email"
              type="email"
              placeholder="Enter your email to update"
            />
            <button type="submit">SUBMIT</button>
          </form>
          <div className="content">
            <article className={"article"}>
              <div className={"links__element"}>
                <p>HALOVIETNAM LTD 66, Dang Van ngu, Dong Da Hanoi, Vietnam</p>
              </div>
              <div className={"links__element"}>
                <p>contact@halovietnam.com</p>
              </div>
              <div className={"links__element"}>
                <p>+844 35149182</p>
              </div>
            </article>
            <article className={"article"}>
              <div className={"links__element"}>
                <a href="#s">Examples</a>
              </div>
              <div className={"links__element"}>
                <a href="#s">Shop</a>
              </div>
              <div className={"links__element"}>
                <a href="#s">License</a>
              </div>
            </article>
            <article className={"article"}>
              <div className={"links__element"}>
                <a href="#s">Contact</a>
              </div>
              <div className={"links__element"}>
                <a href="#s">About</a>
              </div>
              <div className={"links__element"}>
                <a href="#s">Privacy</a>
              </div>
            </article>
            <article className={"article"}>
              <div className={"links__element"}>
                <a href="#s">Download</a>
              </div>
              <div className={"links__element"}>
                <a href="#s">Support</a>
              </div>
              <div className={"links__element"}>
                <a href="#s">Documents</a>
              </div>
            </article>
            <article className={"article"}>
              <div className={"links__element"}>
                <a href="#s">Media</a>
              </div>
              <div className={"links__element"}>
                <a href="#s">Blog</a>
              </div>
              <div className={"links__element"}>
                <a href="#s">Forum</a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturesBlock;
