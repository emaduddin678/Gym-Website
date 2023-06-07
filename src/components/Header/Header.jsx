import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: ".5rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              smooth={true}
              span={true}
              duration={1000}
              offset={-50}
              spy={true}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              smooth={true}
              span={true}
              duration={1000}
              offset={-50}
              spy={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasoans"
              smooth={true}
              span={true}
              duration={1000}
              offset={-50}
              spy={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              smooth={true}
              span={true}
              duration={1000}
              offset={-50}
              spy={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonial"
              smooth={true}
              span={true}
              duration={500}
              offset={-50}
              spy={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
