import React from "react";
//added by Eric------------------------------------
import { Link } from 'react-router-dom';


const myCloset = () => {
  return (
    <div style={{ backgroundImage: "url(/images/myClosetBackground.jpg)",  backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    backgroundAttachment:'fixed', height: '100vh', overflow: 'hidden' }}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="d-flex justify-content-center">
    <div class="row-center">
    <Link to="/outfits">
    <img src="images/button_create-an-outfit.png" />
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />

    <Link to="/viewMyCloset">
    <img src="images/button_view-your-closet.png" />
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link to="/store">
    <img src="images/button_go-to-store.png" />
    </Link>

    </div>
    </div>
    </div>


);
};

//--------------------------------------------------

export default myCloset;
