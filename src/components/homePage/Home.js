import React from "react";
import classes from "./Home.module.css";
import { GoLocation } from "react-icons/go";
import { BsDoorOpen } from "react-icons/bs";
import { BiExpand } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";

const Home = (props) => {
  return (
    <div className={`card ${classes.effectBox}`}>
      <img className="w-100" src={props.image} alt="photoOfHome" />
      <div className="card-body text-center">
        <h5 className={`card-title bg-secondary ${classes.nameBox} rounded`}>
          {props.name}
        </h5>
        <div className={classes.gridContainer}>
          <span className={`text-secondary ${classes.gridEnd}`}>
            <GoLocation size={"1.4rem"} />
          </span>
          <span className={`fw-light fs-6 ${classes.gridStart}`}>
            {props.location}{" "}
          </span>
          <span className={`text-secondary ${classes.gridEnd}`}>
            <BsDoorOpen size={"1.4rem"} />
          </span>
          <span className={`fw-light fs-6 ${classes.gridStart}`}>
            {props.room}{" "}
          </span>
          <span className={`text-secondary ${classes.gridEnd}`}>
            <BiExpand size={"1.4rem"} />
          </span>
          <span className={`fw-light fs-6 ${classes.gridStart}`}>
            {props.area}{" "}
          </span>
          <span className={`text-secondary ${classes.gridEnd}`}>
            <IoPricetagOutline size={"1.4rem"} />{" "}
          </span>
          <span className={`fw-light fs-6 ${classes.gridStart}`}>
            {props.price}
          </span>
          <div />
        </div>
        <button className="btn btn-primary w-100 rounded mt-5">خرید</button>
      </div>
    </div>
  );
};

export default Home;
