import React from "react";
import couchPhoto from "../../assets/images/couch.jpeg";
import classes from './DecorSection.module.css';
const DecorSection = () => {
  return (
    <div className={`${classes.bgDecor}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ps-md-0">
            <img
              src={couchPhoto}
              alt="couchPhoto"
              className="w-100 rounded-end"
              height="350px"
            />
          </div>
          <div className="col-md-6 pe-md-0">
            <div className="bg-light rounded-start text-center py-5 h-100">
              <h3>دکوراسیون داخلی خانه را به ما بسپارید</h3>
              <hr
                className="w-50 text-secondary my-4 mx-auto"
                style={{ height: "3px" }}
              />
              <p className="lh-lg px-5" >کارشناسان هوم دی با دقت و ظرافت هرچه تمام تر شما را در تمامی مراحل دکوراسیون از طراحی تا اجرا همراهی می کنند</p>
              <button className="btn btn-primary mt-4" >اطلاعات بیشتر</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecorSection;
