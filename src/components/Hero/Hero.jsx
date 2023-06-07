import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = {
    type: "spring",
    duration: 3,
  };

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* The AD section starts */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* The AD section ends */}
        {/* The HERO heading starts */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullset
            </span>
          </div>
        </div>

        {/* figures  */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={978} start={900} delay={4} preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={50} start={20} delay={4} preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero button  */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>

        {/* The HERO heading ends */}

        {/* The LEFT  section ends */}
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ ...transition, type: "tween" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images  */}
        <img src={hero_image} className="hero-image" alt="" />
        <motion.img
          transition={{ ...transition, type: "tween" }}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={hero_image_back}
          className="hero-image-back"
          alt=""
        />
        {/* calories */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={{ ...transition, type: "tween" }}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
