import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import Slider3 from "../../assets/slider3.png";
// import Slider4 from "../../assets/compute.png";
import { Sliders } from "../../components/Sliders/Sliders";
import { Button, ButtonGroup } from "@chakra-ui/react";

import "./_home.scss";
import { AppButton } from "../../components/AppButton/AppButton";
import { Calendar } from "../../components/Calendar/Calendar";
import { News } from "../../components/News/News";
import { AppTab } from "../../components/AppTab/AppTab";
export const Home = () => {
  return (
    <>
      <div className="home-page-trans col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10">
          {" "}
          <Carousel fade>
            <Carousel.Item>
              <div className="col-md-12 flexy">
                <div className="col-md-4 slider-label">
                  <h1>Beyond the Classroom</h1>
                  <p>
                    Wellspring College Students Visit Foremost Award-Winning
                    Designer Mai Atafo
                  </p>
                </div>
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-7 slider-container">
                  <img
                    className="col-md-12 imgCaro"
                    src={Slider1}
                    alt="Scholar"
                  />
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="col-md-12 flexy">
                <div className="col-md-4 slider-label">
                  <h1>WELLSPRING OUTINGS</h1>
                  <p>
                    Wellspring College Students Visit Foremost Award-Winning
                    Designer Mai Atafo
                  </p>
                </div>
                <div className="col-md-1">&nbsp;</div>

                <div className="col-md-7 slider-container">
                  <img
                    className="col-md-12 imgCaro"
                    src={Slider2}
                    alt="Scholar"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-12 flexy">
                <div className="col-md-4 slider-label">
                  <h1>WELLSPRING OUTINGS</h1>
                  <p>
                    Wellspring College Students Visit Foremost Award-Winning
                    Designer Mai Atafo
                  </p>
                </div>
                <div className="col-md-1">&nbsp;</div>

                <div className="col-md-7 slider-container">
                  <img
                    className="col-md-12 imgCaro"
                    src={Slider3}
                    alt="Scholar"
                    style={{border}}
                  />
                </div>
              </div>
            </Carousel.Item>
            {/* <Carousel.Item>
              <div className="col-md-12 flexy">
                <div className="col-md-4 slider-label">
                  <h1>WELLSPRING OUTINGS</h1>
                  <p>
                    Wellspring College Students Visit Foremost Award-Winning
                    Designer Mai Atafo
                  </p>
                </div>
                <div className="col-md-1">&nbsp;</div>

                <div className="col-md-7 slider-container">
                  <img
                    className="col-md-12 imgCaro"
                    src={Slider4}
                    alt="Scholar"
                  />
                </div>
              </div>
            </Carousel.Item> */}
          </Carousel>
          <AppButton text="Apply Here" />
          {/* <Calendar month="Nov" day="10" year="2022" event="Open Day" time="10:00am-3:00pm"/> */}
          {/* <News date="August 29th, 2022" message="Wellspring College celebrates it's 17th Valedictory Service and Graduation Ceremony" url=""/> */}
          <AppTab />
        </div>
      </div>
      <div className="col-md-12 welcome-message-title">
        <Sliders
          header="Welcome to Wellspring College"
          message="This import can significantly reduce the amount of code you end up sending to the client. This may be best for individual components, but not if several components are imported.This import can significantly reduce the amount of code you end up sending to the client. This may be best for individual components, but not if several components are imported."
          sliderImg={Slider2}
          title="Message from the Principal's Desk"
          speaker="parent"
        />
      </div>
    </>
  );
};
