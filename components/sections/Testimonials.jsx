import React from "react";
import css from "../../styles/Testimonials.module.css";
import Title from "../UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

const testimonials = [
  {
    image: "avatar01.png",
    name: "Jessica Fernandez",
    backgroundColor: "#6f55f2",
  },
  {
    image: "avatar02.png",
    name: "Dami Logus",
    backgroundColor: "#b5a9f3",
  },
  {
    image: "avatar01.png",
    name: "Jeniffer moore",
    backgroundColor: "#d3cef2",
  },
];

const Testimonials = () => {
  return (
    <section className="container">
      <Title title={"Testimonials"} />
      <div
        className={css.testimonialSwiperContainer}
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <div className={css.singleTestimonial} key={index}>
              <SwiperSlide key={index} style={{ background: "white" }}>
                <div
                  className={css.testimonialImageContainer}
                  style={{ backgroundColor: testimonial.backgroundColor }}
                >
                  <Image
                    loading="lazy"
                    width={"400"}
                    height="300"
                    alt={testimonial.name}
                    src={"/img/" + testimonial.image}
                  />
                </div>
                <div className={css.testimonialContent}>
                  <h1>{testimonial.name}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                    reprehenderit suscipit. Dolorem explicabo doloribus
                    dignissimos cupiditate assumenda magnam suscipit vero
                    officia. Vitae eligendi, recusandae accusamus, minus
                    obcaecati incidunt quam unde rem, quis veniam nesciunt
                    consequatur animi consequuntur temporibus excepturi libero.
                  </p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
