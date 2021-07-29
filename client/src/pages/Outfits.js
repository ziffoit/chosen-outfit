//------------------Outfits page added by Eric-----------------------------------
import React from "react";
import DragNDrop from '../components/Outfits/DragNDrop'
import Catergories from '../components/CategoryMenu'

function Outfits() {
  return (
    <div style={{ backgroundImage: "url(/images/outfitBackground.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover',  backgroundPosition: 'inherit',
		height: '100vh' }}>
    <Catergories />
  
    <DragNDrop />
    </div>
  );
}

export default Outfits;