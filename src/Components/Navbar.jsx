import React from "react";
import './profile.jpg';

export default function Navbar(props) {
  return (
    <div className="row nav-row">
      <div className="col-lg-1">Edvora</div>
      <div className="col-lg-7"></div>
      <div className="col-lg-3">
        JAGADEESH
         <img src={props.user.url}  className="nav-img"/> 
      </div>
    </div>
  );
}
