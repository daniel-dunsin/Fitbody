import React from "react";
import css from "../../styles/Title.module.css";
const Title = ({ title, subtitle }) => {
  return (
    <header className={css.headerContainer}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Title;
