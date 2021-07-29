import React from "react";
import Login from "../../pages/Login"
import Signup from "../../pages/Signup"
import Closet from "../../pages/Closet"
import Auth from "../../utils/auth";

function HomePage() {
        if (Auth.loggedIn()) {
    return (

<Closet />

    );
} else {
  return (
    <div className="container">
      <div classname="flex-row justify-center">
        <h1>WELCOME TO</h1>
        <h2><bold>Thread Zeppelin's</bold></h2>
        <h3><bold>Trapped in a Closet</bold></h3>
        <img src="/images/CLOSETPIC.JPG" />
        <div
          className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}>
            <Login />
        </div>
      </div>
    </div>
  );
}
};

export default HomePage;