import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutUs } from "./AboutUs/AboutUs";
import { ProprietorMessage } from "./ProprietorMessage/ProprietorMessage";
// import Desk from "./sub_pages/About/PrincipalsDesk";
// import Resources from "./sub_pages/About/HumanResources";

// import NotFound from "./NotFound";
// import Contact from "./sub_pages/About/Contact";

function About() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path={"/about"} exact>
            <Redirect to={"/about/administrators-message"} />
          </Route> */}
          <Route path="/about/abou" element={<AboutUs />} exact />
          <Route path="/about/proprietor-message" element={<ProprietorMessage />} exact />
          {/* <Route
            path="/about/proprietors-message"
            component={Resources}
            exact
          />
          <Route path="/about/contact-us" component={Contact} exact />

          <Route path="*" component={NotFound} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default About;
