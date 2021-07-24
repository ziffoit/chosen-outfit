import React from "react";
//added by Eric-----------------------------------
import myClosetDnD from "../components/myClosetDnD";
//--------------------------------------------------
import CategoryMenu from "../components/CategoryMenu";


const myCloset = () => {
  return (
    <div className="container">
      <CategoryMenu />
{/*added by Eric-----------------------------------*/}
      <myClosetDnD />
{/*added by Eric-----------------------------------*/}
    </div>
  );
};

export default myCloset;
