import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { MdRealEstateAgent } from "react-icons/md";

const HeaderBox = () => {
  return (
    <div className="container">
      <div className="row mb-md-5">
        <div className="col-md-5">
            <div className="p-md-4 d-flex flex-row justify-content-around align-items-center" > 
                <div className="card py-2 px-5 d-flex flex-column justify-content-center align-items-center " > 
                   <AiFillHome size={"2.2rem"}/> 
                    <p className="m-0 mt-2 fs-2 fw-bold">۲۳</p>
                    <p className="m-0 fs-5">خانه</p>
                </div>
                <div className="card py-2 px-5 d-flex flex-column justify-content-center align-items-center " > 
                   <MdRealEstateAgent size={"2.2rem"}/> 
                    <p className="m-0 mt-2 fs-2 fw-bold">۱۹</p>
                    <p className="m-0 fs-5">املاک</p>
                </div>
                <div className="card py-2 px-5 d-flex flex-column justify-content-center align-items-center " > 
                   <GoPerson size={"2.2rem"}/> 
                    <p className="m-0 mt-2 fs-2 fw-bold">۹</p>
                    <p className="m-0 fs-5">کاربر</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBox;
