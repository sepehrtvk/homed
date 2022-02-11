import React from "react";
import Home from "./Home";
import homePhoto from "../../assets/images/home.jpeg";

const Homes = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Home
              image={homePhoto}
              name="آپارتمان شیک در ولنجک"
              location="ولنجک"
              area="۱۴۰ متر مربع"
              room="۳ خواب"
              price="۳۵،۰۰۰،۰۰۰"
            />
          </div>
          <div className="col-md-4">
            <Home
              image={homePhoto}
              name="آپارتمان شیک در ولنجک"
              location="ولنجک"
              area="۱۴۰ متر مربع"
              room="۳ خواب"
              price="۳۵،۰۰۰،۰۰۰"
            />
          </div>
          <div className="col-md-4">
            <Home
              image={homePhoto}
              name="آپارتمان شیک در ولنجک"
              location="ولنجک"
              area="۱۴۰ متر مربع"
              room="۳ خواب"
              price="۳۵،۰۰۰،۰۰۰"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
