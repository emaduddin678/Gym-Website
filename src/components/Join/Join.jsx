import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wzc0j0g",
        "template_nvtsrnl",
        form.current,
        "HeuQSogKvzrAEgDvT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
