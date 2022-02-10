import React from "react";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";
import classes from "./MainHeader.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import HeaderBox from "./HeaderBox";

const MainHeader = () => {
  return (
    <div
      className={`${classes.bgBack} d-flex flex-column justify-content-md-between pb-md-5`}
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            هوم دی
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className=" justify-content-between" id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">خانه</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex align-items-center">
              <Button to="/auth">
                <BsFillPersonFill className="ms-1" />
                ورود
              </Button>
              <div className="me-4 border-end pe-3 text-white">
                <FaPhoneAlt />
                <span className="me-1">۰۹۱۲۰۵۳۲۰۲۰</span>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-white">
        <h1 className="mb-5" >هوم دی</h1>
        <h3>انتخاب هوشنمد خانه</h3>
      </Container>
      <HeaderBox />
    </div>
  );
};

export default MainHeader;
