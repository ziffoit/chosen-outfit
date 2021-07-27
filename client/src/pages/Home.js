import React from "react";
import Login from "../pages/Login"
import Signup from "../pages/Signup"

const Home = () => {
  return (
    <div className="container">
      <div classname="flex-row justify-center">
        <h1>WELCOME TO</h1>
        <h2><bold>Thread Zeppelin's</bold></h2>
        <h3><bold>Trapped in a Closet</bold></h3>
        <img src="https://drive.google.com/file/d/1q45WMkyDVT5H3RTd2SOaDBsP9Uo0QTaq/view?usp=sharing" />
        <div
          className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}>
            <Login />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Signup />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
