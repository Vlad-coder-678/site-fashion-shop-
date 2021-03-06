import React from "react";

import {
  facebook,
  googlePlus,
  pinterest,
  twitter,
} from "../assets/images/Header";

const HeaderSocial = () => {
  return (
    <div>
      <a href="#s">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="#s">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="#s">
        <img src={googlePlus} alt="googlePlus" />
      </a>
      <a href="#s">
        <img src={pinterest} alt="pinterest" />
      </a>
    </div>
  );
};

export default HeaderSocial;
