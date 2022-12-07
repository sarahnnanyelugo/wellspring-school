import "./_footer.scss";
import Logo from "../../assets/Logo.png";
import Locate from "../../assets/locate.png";
import Phone from "../../assets/phone.png";
import SMS from "../../assets/sms.png";
import FB from "../../assets/fb.png";
import Vid from "../../assets/vid.png";
import IG from "../../assets/Instagram.png";
import Twitter from "../../assets/sms.png";
import Linkedin from "../../assets/linkedin2.png";
import Linkedin from "../../assets/linkedin2.png";
import { SearchBar } from "../SearchBar/SearchBar";

export const Footer = () => {
  return (
    <>
      <div className="col-md-12 flexy footer-container">
        <div className=" col-md-1">&nbsp;</div>

        <div className="footer-links col-md-2 ">
          <div className="col-md-12 flexy">
            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>{" "}
              <li>
                <a href="#">Curriculum</a>
              </li>{" "}
              <li>
                <a href="#">Facilities</a>
              </li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <a href="#">School Life</a>
              </li>{" "}
              <li>
                <a href="#">News</a>
              </li>{" "}
              <li>
                <a href="#">Media Gallery</a>
              </li>
            </ul>
          </div>
          <p>© Copyright 2022 Wellspring College. All Rights Reserved</p>
          <small>Cookies Policy . Privacy Policy</small>
        </div>
        <div className=" col-md-2 ">&nbsp;</div>
        <div className=" col-md-2 footer-logo">
          {" "}
          <img className="col-md-12 " src={Logo} alt="Scholar" />
        </div>
        <div className=" col-md-1">&nbsp;</div>
        <div className=" col-md-3 footer-contacts">
          <h1 className="flexy flexyM">
            <img className="col-md-12 " src={Locate} alt="Scholar" />
            25B Somide Odujinrin Street Omole Phase 2, Ikeja, Lagos.
          </h1>
          <h1 className="flexy flexyM">
            <img className="col-md-12 " src={Phone} alt="Scholar" />
            (+234) 803 395 4138
          </h1>
          <h1 className="flexy flexyM">
            {" "}
            <img className="col-md-12 " src={SMS} alt="Scholar" />
            info@wellspringcollege.org
          </h1>
          <SearchBar />

          <ol className="list-inline list-unstyled">
            <li className="list-inline-item">
              <a href="#">
                {" "}
                <img className="col-md-12 " src={FB} alt="Scholar" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                {" "}
                <img className="col-md-12 " src={Vid} alt="Scholar" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                {" "}
                <img className="col-md-12 " src={IG} alt="Scholar" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                {" "}
                <img className="col-md-12 " src={Twitter} alt="Scholar" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                {" "}
                <img className="col-md-12 " src={Linkedin} alt="Scholar" />
              </a>
            </li>
          </ol>

          <img className="col-md-12 " src={Educare} alt="Scholar" />
        </div>
      </div>
    </>
  );
};
