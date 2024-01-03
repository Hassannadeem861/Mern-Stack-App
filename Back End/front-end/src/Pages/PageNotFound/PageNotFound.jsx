import React from "react";
import "./PageNotFound.css";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="">
      <section className="error">
        <div className="container-content">
          <h1>404</h1>
          <h4>Sorry! Page not found</h4>
          <p>
            sndjbnbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            <br/>
            sndjbnbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
          </p>
          <div className="btns">
            <NavLink to={"/"}>Return Home</NavLink>
            <NavLink to={"/contact"}>Report Problem</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
