


import React from "react";
import Jumbotron from "../components/Jumbotron";

const ImageUpload = () => {
  return (
    <div>
     <form action = "/uploadphoto" encType = "multipart/form-data" method = "post">
    <input type = "file" name = "picture" accept='image/*' />
    <input type = "submit" value = "Upload Photo" />
</form>
    <img src = 'localhost:3000/images/picture-1627712104477.jpg'></img>
    </div>
  );
};

export default ImageUpload;