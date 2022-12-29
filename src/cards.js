import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      {/* <div>
        <div className="card text-center shadow">
            <img
              src={props.imgsrc}
              alt="driver_image"
              className="card-img-top"
            />

          <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">{props.data}</p>
            <a href="#" className="btn btn-outline-success">
              Go Anywhere
            </a>
          </div>
        </div>
      </div> */}

<div class="container">
    <div class="card-deck my-3" >
    <div class="card" >
    <img style={{height:150, width:275}} src={props.imgsrc} class="card-img-top" alt="..." />

      <div className="card-body text-dark" >
        <div class="card-body text-center">
        <h2 className="card-title">{props.title}</h2>
      </div>
    </div>

    <div className="card-body text-dark">
     <div class="card-body text-center">
     <p style={{fontSize:20}} className="card-text text-secondary">{props.data}</p> 
     </div>
   </div>

   {/* <a style={{fontSize:20}} class="btn btn-dark">  */}
   <Link to="/service_data" style={{fontSize:20}} class="btn btn-dark">
          Learn More
    </Link>
  {/* </a> */}

  </div>
  </div>
</div>



      </>
  );
};

export default Card;
