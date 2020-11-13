import React from "react";
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
        <NavLink to="/base">
          <h1>LeadIT</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
