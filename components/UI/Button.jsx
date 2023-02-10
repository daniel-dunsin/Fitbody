import React from "react";
import css from "../../styles/Button.module.css";
const Button = ({ text }) => {
  return <button className={css.button}>{text}</button>;
};

export default Button;
