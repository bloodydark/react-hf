import React from "react";
import Sample2 from "./sample2";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  // Sample2,
} from "./NavbarElements";

const Navbar = () => {
  // const style = {
  //   zIndex: 999,
  // };
  return (
    <>
      <Nav>
        {/* <div
          style={{
            position: "absolute",
            zIndex: "99",
            // color: "red",
            // marginRight: "10px",
          }}
        >
          <Sample2 />
        </div> */}
        <NavLink to="/">
          {/* <img src={require("../../images/rabbit.png")} alt="logo" /> */}
          <h1>LeadIT</h1>
          {/* <img src={`${window.location.origin}/rabbit.png`} /> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
