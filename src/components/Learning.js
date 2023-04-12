import React from "react";
import Ratio from 'react-bootstrap/Ratio';
function Learning(){
    return(
        <>
        <h3>Latest documentary about Indian farming</h3>
        <div style={{ width: 800, height: 'auto' }}>
      <Ratio aspectRatio="16x9">
      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/W3P9deLFkk8" allowfullscreen></iframe>
      </Ratio>
    </div>
    <br />
    <h3>Using latest technology to Poultry farming </h3>
    <div style={{ width: 800, height: 'auto' }}>
      <Ratio aspectRatio="16x9">
      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/neHGUeww-44" allowfullscreen></iframe>
      </Ratio>
    </div>
        <br />
        
    <h3>Coco Farming </h3>
    <div style={{ width: 800, height: 'auto' }}>
      <Ratio aspectRatio="16x9">
      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/JaN_hn_Thus" allowfullscreen></iframe>
      </Ratio>
    </div>
    <br />
        </>
    );
}
export default Learning;