import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "./_why-wellspring.scss";
export const WhyWellspring = (props) => {
  return (
    <>
      <div className="col-md-12 flexy why-wellspring">
        <div className="col-md-5">
          <img className="col-md-12 imgCaro" src={props.img} alt="Scholar" />
        </div>
        <div className="col-md-6 inner-massage">
          <h1>{props.header}</h1>
          <p style={{marginBottom:'50px'}}>{props.content}</p>
          <Link to={props.url} style={{ color: "#FCE198" }}>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};
