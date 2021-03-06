import React from "react";

import {
  FeaturesBlock,
  OurWorksBlock,
  OurTeamBlock,
  StatsBlock,
  TestimonialsBlock,
} from "../blocks";

const AboutPage = () => {
  return (
    <div className="page">
      <FeaturesBlock />
      <OurWorksBlock />
      <OurTeamBlock />
      <StatsBlock />
      <TestimonialsBlock />
    </div>
  );
};

export default AboutPage;
