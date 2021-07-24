import React from "react";
//added by Eric-----------------------------------
import viewMyCloset from "../components/viewMyCloset";
//--------------------------------------------------
import CategoryMenu from "../components/CategoryMenu";


const myCloset = () => {
  return (
    <div className="container">
      <CategoryMenu />
{/*added by Eric-----------------------------------*/}
      <viewMyCloset />
{/*added by Eric-----------------------------------*/}
    </div>
  );
};

export default myCloset;
