import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">


{/*----------Added by Eric-------*/}
            <Link to="/myCloset">
              My Closet
            </Link> 
            </li>
{/*---------------- -------------*/}
          <li className="mx-1">
            <Link to="/store">
              Store
            </Link>
          </li>

          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          
          {/*----------Added by Cody-------*/}
          <li className="mx-1">
            <Link to="/picUpload">
              Upload
            </Link>
          </li>
          {/*---------------- -------------*/}
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
{/*----------Added by Eric------------*/}
        <Link to="/">
          <img src="images/threadz.png"/>
        </Link>
{/*----------Added by Eric------------*/}
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
