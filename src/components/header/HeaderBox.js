import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { MdRealEstateAgent } from "react-icons/md";
import CounterBox from "./CounterBox";

const HeaderBox = () => {
  return (
    <div className="container">
      <div className="row mb-md-5">
        <div className="col-md-5">
            <div className="p-md-4 d-flex flex-row justify-content-around align-items-center" > 
                <div className="card py-2 px-5 d-flex flex-column justify-content-center align-items-center " > 
                   <AiFillHome size={"2.2rem"}/> 
                    <CounterBox number={32} speed={60}/>
                    <p className="m-0 fs-5">خانه</p>
                </div>
                <div className="card py-2 px-5 d-flex flex-column justify-content-center align-items-center " > 
                   <MdRealEstateAgent size={"2.2rem"}/> 
                   <CounterBox number={12}  speed={50}/>
                    <p className="m-0 fs-5">املاک</p>
                </div>
                <div className="card py-2 px-5 d-flex flex-column justify-content-center align-items-center " > 
                   <GoPerson size={"2.2rem"}/> 
                   <CounterBox number={9}  speed={200}/>
                    <p className="m-0 fs-5">کاربر</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBox;
