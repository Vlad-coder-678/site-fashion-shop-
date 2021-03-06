import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const HeaderMenuBurger = () => {
  return (
    <div className="menu__burger" id="outer-container">
      <Menu>
        <div className="menu__outer">
          <Link to="/site-inspire-react/">Home page</Link>
          <div className="menu__inner">
            <a className="menu-item" href="/site-inspire-react#features__block">
              features
            </a>
            <a className="menu-item" href="/site-inspire-react#pricing__block">
              price
            </a>
            <a className="menu-item" href="/site-inspire-react#works__block">
              our works
            </a>
            <a className="menu-item" href="/site-inspire-react#team__block">
              team
            </a>
            <a className="menu-item" href="/site-inspire-react#stats__block">
              stats
            </a>
            <a className="menu-item" href="/site-inspire-react#testimonial__block">
              testimonial
            </a>
            <a className="menu-item" href="/site-inspire-react#contacts__block">
              contacts
            </a>
            <a className="menu-item" href="/site-inspire-react#callback__block">
              callback
            </a>
          </div>
        </div>
        <div className="menu__outer">
          <Link to="/site-inspire-react/about">About Us</Link>
          <div className="menu__inner">
            <a className="menu-item" href="/site-inspire-react/about#features__block">
              features
            </a>
            <a className="menu-item" href="/site-inspire-react/about#works__block">
              our works
            </a>
            <a className="menu-item" href="/site-inspire-react/about#team__block">
              team
            </a>
            <a className="menu-item" href="/site-inspire-react/about#stats__block">
              stats
            </a>
            <a className="menu-item" href="/site-inspire-react/about#testimonial__block">
              testimonial
            </a>
          </div>
        </div>
        <div className="menu__outer">
          <Link to="/site-inspire-react/contacts">Contacts</Link>
          <div className="menu__inner">
            <a className="menu-item" href="/site-inspire-react/contacts#contacts__block">
              contacts
            </a>
            <a className="menu-item" href="/site-inspire-react/contacts#callback__block">
              callback
            </a>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default HeaderMenuBurger;
