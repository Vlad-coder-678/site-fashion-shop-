import React from "react";

import { logo } from "../assets/images/Header";

const HeaderLogo = () => {
  return (
    <button href="#s">
      <img src={logo} alt="logo" />
    </button>
  );
};

export default HeaderLogo;
