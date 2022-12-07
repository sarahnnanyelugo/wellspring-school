import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { News } from "../News/News";
import Gift from "../../assets/gift.png";

import "./_app-tab.scss";

export const AppTab = () => {
  return (
    <>
      <div className="col-md-12 flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8">
          <Tabs variant="unstyled">
            <TabList>
              <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                Academic Excellence
              </Tab>
              <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                Physical Facilities
              </Tab>
              <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                School Curriculum
              </Tab>
              <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                Co-corricular
              </Tab>
              <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                Extra-curricular
              </Tab>
              <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>LBTC</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="col-md-12 flexy">
                  <div className="col-md-5">
                    {" "}
                    <img
                      className="col-md-12 imgCaro"
                      src={Gift}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-6">
                    <h1>Academic Excellence</h1>
                    <p>
                     
                      Coming Tops in WASSCE 2015 with the 3rd best result in
                      Lagos State and 28th best in Nigeria is a testimonial to
                      our emphasis on academic and moral excellence. We also
                      produced the 3rd best student in 2017 WASSCE in Lagos
                      State. Our students excel in various academic and
                      co-curricular competitions.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};
