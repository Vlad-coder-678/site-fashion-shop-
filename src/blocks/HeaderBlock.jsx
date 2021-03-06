import React from "react";

import { HeaderSocial, HeaderMenuBurger, HeaderLogo } from "../components";

const HeaderBlock = () => {
  return (
    <div className="wrapper__header bg__color">
      <div className="container">
        <div className="header">
          <div className="header__left">
            <HeaderMenuBurger />
          </div>
          <div className="header__center">
            <HeaderLogo />
          </div>
          <div className="header__right social__large">
            <HeaderSocial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
