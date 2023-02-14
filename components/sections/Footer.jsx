import React from "react";
import css from "../../styles/Footer.module.css";
import Image from "next/image";
import FooterLinks from "../UI/FooterLinks";

const links = [
  { title: "Company", links: ["Our program", "Our plans", "Become a member"] },
  { title: "Quick Links", links: ["About Us", "Contact Us", "Support"] },
  { title: "Quick Links", links: ["About Us", "Contact Us", "Support"] },
];

const Footer = () => {
  return (
    <footer className={css.footer} data-aos="fade-up" data-aos-duration="1000">
      <section className="container">
        <div className={css.footerContainer}>
          <div className={css.footerLogoMainContainer}>
            <div className={css.footerLogoContainer}>
              {/* image container */}
              <div className={css.footerLogo}>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga
              totam ad ducimus vitae perferendis.
            </p>
          </div>
          {links.map((link, index) => {
            return (
              <FooterLinks title={link.title} links={link.links} key={index} />
            );
          })}
        </div>
        <p className={css.copyright}>
          &copy; Copyright - {new Date().getFullYear()} Daniel Adejare
        </p>
      </section>
    </footer>
  );
};

export default Footer;
