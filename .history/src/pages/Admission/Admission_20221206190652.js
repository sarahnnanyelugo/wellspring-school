import Banner from "../../assets/admission.png";
import Home from "../../assets/home.png";
import VideoIcon from "../../assets/vid2.png";
import Happy from "../../assets/happy.png";

import Dot from "../../assets/yellow.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_admission.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const Admission = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <div className="videoIcon">
            {" "}
            <img className="col-md-1" src={VideoIcon} alt="Scholar" />
          </div>
          <Heading size="3xl">Admission</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>About Us</p>
        <p>Admission</p>
      </div>
      <div className="col-md-12 flexy admission">
        <div className="col-md-3">&nbsp;</div>
        <div className="page-body col-md-6 ">
          <Heading size="lg" mb="50px" mt="30px">
            Admission
          </Heading>
          <p style={{ lineHeight: "35px" }}>
            Thank you for your interest in Wellspring College.
            <br /> Our admissions policy states the criteria and standards
            required for students to gain admission to the College. Students
            must meet the following:
          </p>
        </div>
      </div>
      <div className="col-md-12 flexy mt1">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          <div className="page-body col-md-5 ">
            <Heading size="lg" mb="50px" mt="30px">
              Academic Requirements
            </Heading>
            <p>
              Applicants seeking admission into junior school must be 10 years
              or older within their admission year. have at minimum a score of
              50% in their Entrance Examination while students seeking entrance
              into the senior classes must score an average of 65% on their
              Entrance Examination. Wellspring College is an English-speaking
              school and all students must demonstrate proficiency in the
              English language before admissions
            </p>
          </div>
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-5">
            {" "}
            <img className="col-md-12 br" src={Happy} alt="Scholar" />
          </div>
        </div>
      </div>

      <StayConnected />
    </>
  );
};
