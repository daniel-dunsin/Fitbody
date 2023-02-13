import Image from "next/image";
import React from "react";
import css from "../../styles/FeaturesCard.module.css";
const FeaturesCard = ({ title, subtitle, image }) => {
  return (
    <article className={css.featureCardContainer}>
      <div className={css.featureImageContainer}>
        <Image alt={title} src={"/img/" + image} width="40" height="40" />
      </div>
      <div className={css.featureCardContent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </article>
  );
};

export default FeaturesCard;
