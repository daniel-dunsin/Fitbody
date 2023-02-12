import Image from "next/image";
import React, { useState } from "react";
import css from "../../styles/Header.module.css";
import { Squash as Hamburger } from "hamburger-react";
import Button from "../UI/Button";

const navLinks = [
  {
    path: "#",
    text: "Home",
  },
  {
    path: "#",
    text: "Schedule",
  },
  {
    path: "#",
    text: "Classes",
  },
  {
    path: "#",
    text: "Pricing",
  },
];

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <section className="container">
      <header className={css.navWrapper}>
        <div className={css.navLogoContainer}>
          {/* image container */}
          <div className={css.navLogo}>
            <Image
              src={"/img/dumble.png"}
              alt="logo"
              width="30"
              height="30"
              loading="lazy"
            />
          </div>
          <h2>Fitbody</h2>
        </div>
        <div
          className={css.navLinksOverlay}
          style={{
            transform: navIsOpen ? "translateX(0%)" : "translateX(-100%)",
          }}
        >
          <ul
            className={css.navLinks}
            style={{
              transform: navIsOpen ? "translateX(0%)" : "translateX(-100%)",
            }}
          >
            <span className={css.closeIcon}>
              <Hamburger size={24} toggle={setNavIsOpen} toggled={true} />
            </span>
            {navLinks.map((link, index) => {
              return (
                <li className={css.navLink} key={index}>
                  <a href={link.path}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={css.navRight}>
          <Button text={"Register"} />
          <div className={css.menuContainer}>
            <Hamburger size={24} toggle={setNavIsOpen} toggled={false} />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
