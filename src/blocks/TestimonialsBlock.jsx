import React from "react";

import { TestimonialSlider } from "../components";

const TestimonialsBlock = () => {
  return (
    <div className={"wrapper testimonialsBlock"}>
      <div className="container">
        <section className="block">
          <a name={"testimonial__block"}></a>
          <div className="content">
            <TestimonialSlider />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsBlock;
