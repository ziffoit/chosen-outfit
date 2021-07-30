import React from "react";
import Auth from "../../utils/auth";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

function Navbar() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav>
          <Bars />
        <NavMenu>
{/*----------Added by Eric-------*/}
            <NavLink to="/Closet" activeStyle>
              Closet
            </NavLink>
            <NavLink to="/store" activeStyle>
              Store
            </NavLink>
            <NavLink to="/orderHistory" activeStyle>
              Order History
            </NavLink>
          {/*----------Added by Cody-------*/}
            <NavLink to="/newItem" activeStyle>
              Add New Item
            </NavLink>
          {/*---------------- -------------*/}
            {/* this is not using the NavLink component to logout or user and then refresh the application to the start */}
            <NavBtnLink to="/" onClick={() => Auth.logout()}>
              Logout
            </NavBtnLink>
          </NavMenu>
        </Nav>
      );
    } else {
      return (
        <Nav>
            <Bars />
            <NavMenu>
            <NavLink to="/signup" activeStyle>
              Signup
            </NavLink>
            <NavBtnLink to="/login" activeStyle>Login</NavBtnLink>
          </NavMenu>
        </Nav>
      );
    }
  }

  return (
    <Nav>
{/*----------Added by Eric------------*/}
<NavLink to='/' activeStyle>
    <img className="logo" src="images/chosen-outfit-logo.png" alt='logo'/>
</NavLink>
{/*----------Added by Eric------------*/}
<Bars />
<NavMenu>

      <nav>
        {showNavigation()}
      </nav>
</NavMenu>
</Nav>
  );
}

export default Navbar;
