import React from "react";
import css from "../../styles/FooterLinks.module.css";
const FooterLinks = ({ title, links }) => {
  return (
    <main className={css.links}>
      <h1>{title}</h1>
      <ul className={css.linksList}>
        {links.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
      </ul>
    </main>
  );
};

export default FooterLinks;
