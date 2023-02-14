import Image from "next/image";
import React from "react";
import css from "../../styles/Trainer.module.css";
import Button from "../UI/Button";
const Trainer = () => {
  return (
    <section className="container">
      <div className={css.trainerContainer}>
        <div
          className={css.trainerImageContainer}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <Image
            src="/img/trainer.png"
            alt="trainer"
            width={400}
            height={400}
            loading="lazy"
          />
        </div>
        <div
          className={css.trainerContent}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h1>
            Ready to make a <span className="highlight">change?</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, non. Illo, est optio ipsam quas facilis saepe
            perspiciatis. Illum, voluptatibus! Quia, consequuntur dolore qui
            eius omnis harum.
          </p>
          <Button text={"Get Started"} />
        </div>
      </div>
    </section>
  );
};

export default Trainer;
