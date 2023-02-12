import React from "react";
import css from "../../styles/Hero.module.css";
import Button from "../UI/Button";
import { RiHeartPulseFill, RiMapPin2Fill, RiPlayFill } from "react-icons/ri";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container">
      <div className={css.heroContainer}>
        <div className={css.heroContent}>
          <h1>
            Exercise is the key to a <span className="highlight">Healthy</span>{" "}
            lifestyle
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Sequi vero facilis, atque cum quas accusamus.
          </p>
          <div className={css.heroButtonsContainer}>
            <Button text="Get Started" />
            <div className={css.watchButton}>
              <span className="highlight">
                <RiPlayFill />
              </span>
              Watch Video
            </div>
          </div>
        </div>
        <div className={css.heroImageContainer}>
          <aside className={css.heroDumble}>
            <div>
              <Image
                src={"/img/dumble.png"}
                alt="logo"
                width="30"
                height="30"
                loading="lazy"
              />
            </div>
          </aside>
          <aside className={css.heroHeartRate}>
            <p>Heart Rate</p>
            <span>
              <RiHeartPulseFill />
            </span>
            <p>2567BPM</p>
          </aside>
          <aside className={css.heroLocation}>
            <span>
              <RiMapPin2Fill />
            </span>
            <p>Find a new gym near you</p>
          </aside>
          <div className={css.heroCircleOne}>
            <div className={css.heroCircleTwo}>
              <div className={css.heroCircleThree}>
                <div className={css.heroImage}>
                  <Image
                    src="/img/gym-02.png"
                    alt="woman in gym"
                    width="500"
                    height="450"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
