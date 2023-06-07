import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData.jsx";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const transition = {
    type: "spring",
    duration: 3,
  };

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonial">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        {/* {console.log(testimonialsData[selected])} */}
        <motion.span
        key={selected}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2, type: "tween" }}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2, type: "tween" }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2, type: "tween" }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0.6, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.6, x: -100 }}
          transition={{ ...transition, duration: 1.5, type: "tween" }}
          src={testimonialsData[selected].image}
          alt=""
        />

        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
