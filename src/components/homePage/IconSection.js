import React from "react";
import { FcAdvertising, FcHome, FcManager, FcAlarmClock } from "react-icons/fc";

const IconSection = () => {
  return (
    <div className="w-100 bg-light py-5" >
      <div className="container">
          <div className="row text-center mb-5" >
              <h3>بهترین ها در هوم دی</h3>
          </div>
        <div className="row">
          <div className="col-md-3 my-3 my-md-0">
            <div className="card d-flex align-items-center shadow-sm border-0 p-4 text-center h-100">
              <FcAlarmClock size={"4.1rem"} />
              <h5 className="mt-3">صرفه جویی در وقت</h5>
              <hr
                className="w-50 text-secondary mb-4"
                style={{ height: "3px" }}
              />
              <p className="lh-lg">
                در کمترین زمان صاحب خانه مورد علاقه خود شوید
              </p>
            </div>
          </div>
          <div className="col-md-3 my-3 my-md-0">
            <div className="card d-flex align-items-center shadow-sm border-0 p-4 text-center h-100">
              <FcAdvertising size={"4.1rem"} />
              <h5 className="mt-3">درج تبلیغات هوشمند</h5>
              <hr
                className="w-50 text-secondary mb-4"
                style={{ height: "3px" }}
              />
              <p className="lh-lg">
                سریع ترین روش برای فروش و یا اجاره ملک و دیده شدن موارد ملکی شما
              </p>
            </div>
          </div>
          <div className="col-md-3 my-3 my-md-0">
            <div className="card d-flex align-items-center shadow-sm border-0 p-4 text-center h-100">
              <FcHome size={"4.1rem"} />
              <h5 className="mt-3">صرفه جویی در وقت</h5>
              <hr
                className="w-50 text-secondary mb-4"
                style={{ height: "3px" }}
              />
              <p className="lh-lg">
                سامانه به صورت هوشمند دنبال ملک دلخواه شما گشته و با یافتن ملک
                مناسب از طریق ایمیل و پیامک شما را در جریان می گذارد
              </p>
            </div>
          </div>
          <div className="col-md-3 my-3 my-md-0">
            <div className="card d-flex align-items-center shadow-sm border-0 p-4 text-center h-100">
              <FcManager size={"4.1rem"} />
              <h5 className="mt-3">پشتیبانی مشاورین</h5>
              <hr
                className="w-50 text-secondary mb-4"
                style={{ height: "3px" }}
              />
              <p className="lh-lg">
                مشاورین املاک با درنظر گرفتن بودجه و سلیقه شما بهترین گزینه ها
                را به شما پیشنهاد می کنند
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconSection;
