import React from "react";

import {
  FirstScreenBlock,
  FeaturesBlock,
  PricingBlock,
  OurWorksBlock,
  OurTeamBlock,
  StatsBlock,
  TestimonialsBlock,
  ContactsBlock,
  CallBackBlock,
} from "../blocks";
// import { Slider } from "../plugins";

const HomePage = () => {
  return (
    <div className="homePage">
      <FirstScreenBlock />
      <FeaturesBlock />
      <PricingBlock />
      <OurWorksBlock />
      <OurTeamBlock />
      <StatsBlock />
      <TestimonialsBlock />
      <ContactsBlock />
      <CallBackBlock />
    </div>
  );
};

export default HomePage;
