import React from "react";
import Login from "../pages/Login"
//import Signup from "../pages/Signup"

const Home = () => {
  return (
    <div className="container">
      <div classname="flex-row justify-center">
        <h1>WELCOME TO YOUR VIRTUAL THREADZ CLOSET!</h1>
        
        <img src= "/images/closet.jpg"/>
        {/*<div
          className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}>
            <Login />
        </div>*/}
        {/* <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Signup />
          )}
        </div> */}
        <h2>Click on 'Signup' or 'Login' to get started!  Happy Threaddin'!</h2>
      </div>
    </div>
  );
};

export default Home;
