import {
  FacebookRounded,
  GridGoldenratio,
  Instagram,
  Segment,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../Image/iconlogo.png";

function Header() {
  const [show, setShow] = React.useState(false);
  const [bgshow, setBgshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBgshow(true);
      } else setBgshow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <div className={`header-container ${bgshow && "bg-black"}`}>
        <div className="logo">
          <img src={Logo} alt="error404" className="image-logo" />
        </div>
        <div className="menu">
          <a href="#" className="option">
            Home
          </a>
          <a href="#" className="option">
            Category
          </a>
          <a href="#" className="option">
            Contact Us
          </a>
          <a href="#" className="option">
            About Us
          </a>
        </div>
        <div className="search-icon">
          <div className="search">
            <input type="text" placeholder="Search Movies" />
            <button type="submit">{`>`}</button>
          </div>
          <div className="icons">
            <a href="https://www.instagram.com/official.vivek_630" className="rotate-icon">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100014979884372" className="rotate-icon">
              <FacebookRounded  />
            </a>
          </div>
        </div>
      </div>
      <div className="mobi-header">
        <div className="mobiheader">
          <div className="mobi-logo">
            <img src={Logo} alt="error404" className="image-mobilogo" />
          </div>
          <div className="burger">
            {" "}
            <div className={`hamburgermenu ${show ? "off" : "on"}`}>
              <button className="btn-mobi" onClick={() => setShow(!show)}>
                <Segment />
              </button>
            </div>
            <div className={`hamburgermenu ${show ? "on" : "off"}`}>
              <button className="btn-mobi" onClick={() => setShow(!show)}>
                <GridGoldenratio />
              </button>
            </div>
          </div>
        </div>
        {
          <div className={`dropdown ${show ? "open" : ""}`}>
            <ul className="dropdown-tags">
              <li className="drop-tag">
                <a href="#">Home</a>
              </li>
              <li className="drop-tag">
                <a href="#">Category</a>
              </li>
              <li className="drop-tag">
                <a href="#">Contact</a>
              </li>
              <li className="drop-tag">
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        }
      </div>
    </>
  );
}

export default Header;
