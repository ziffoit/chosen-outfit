//-----------------------View My Closet added by Eric-----------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import MyCloset from "../components/viewMyCloset";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

function ViewMyCloset() {
  return (
<div style={{ backgroundImage: "url(/images/viewMyClosetBackground.jpg)",  backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',  height: '100vh' }}>
  <div className="container">
    <CategoryMenu />
    <MyCloset />
    <Cart />
  </div>
</div>
  );
}

export default ViewMyCloset;
