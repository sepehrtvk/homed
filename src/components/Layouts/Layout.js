import React from "react";
import MainHeader from "../header/MainHeader";

const Layout = (props) => {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
