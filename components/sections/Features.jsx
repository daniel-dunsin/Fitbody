import React from "react";
import css from "../../styles/Features.module.css";
import FeaturesCard from "../UI/FeaturesCard";
import Title from "../UI/Title";

const featuresList = [
  {
    title: "Healthy Life",
    image: "lunges.png",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Increased Flexibility",
    image: "yoga-pose.png",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Reducing blood pressure",
    image: "extended.png",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Features = () => {
  return (
    <section className="container">
      <Title
        title={
          <>
            Benefits of <span className="highlight">Excercise</span>
          </>
        }
        subtitle={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Accusantium consequatur illum sit eaque maxime. Reprehenderit?
          </>
        }
      />
      <div className={css.featuresContainer}>
        {featuresList.map((item, index) => (
          <FeaturesCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Features;
