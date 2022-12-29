import React from "react";
import { Component } from "react";
import driver_1 from "../src/images/men.png";
import driver_2 from "../src/images/women.png";
import driver_3 from "../src/images/men.png";
import {Link} from 'react-router-dom';
import logo from "./logo.png";
import { useNavigate} from "react-router-dom";


class Service extends Component {
  render() {
    return (
      <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-0">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <a class="navbar-brand" href="#">
                  <img
                    src={logo}
                    alt=""
                    width="50"
                    height="50"
                    class="d-inline-block align-text-top"
                    style={{ fontSize: 25 }}
                  />
                </a>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/service"
                    style={{ fontSize: 25 }}
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#" style={{ fontSize: 25 }}>
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#" style={{ fontSize: 25 }}>
                    About
                  </a>
                </li>
                <li class="nav-item d-block float-end" style={{ fontSize: 25 }}>
                  <Link className="nav-link" to={"/login"}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h1 style={{textAlign:"center", fontSize:30}}>Driver Information</h1>
        <div class="card mb-3 my-5 mx-auto" style={{maxWidth:600}}>
          <div class="row g-0">
            <div class="col-md-4  ">
              <img src={driver_1} class="img-fluid rounded-start" alt="driver1" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title" style={{fontSize:25}}>Name: Pradip Memane</h3>
                <p class="card-text" style={{fontSize:20}} >Experience: 5 years</p>
                <p class="card-text" style={{fontSize:20}}> Description: Worked with renowed companies like OLA, UBER.
                </p>
                <div class="text-center">
                <Link to="/bookings" style={{alignItems:"center", fontSize:20}} class="btn btn-dark">
                    Book
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 my-5 mx-auto" style={{maxWidth:600}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={driver_2} class="img-fluid rounded-start" alt="driver1" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title" style={{fontSize:25}}>Name: Tanaya Daundkar</h3>
                <p class="card-text" style={{fontSize:20}} >Experience: 3 years</p>
                <p class="card-text" style={{fontSize:20}}> Description: 5 star rating driver on OLA, UBER.
                </p>
                <div class="text-center">
                <Link to="/bookings" style={{alignItems:"center", fontSize:20}} class="btn btn-dark">
                    Book
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 my-5 mx-auto" style={{maxWidth:600}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={driver_3} class="img-fluid rounded-start" alt="driver1" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title" style={{fontSize:25}}>Name: Akash Raskar</h3>
                <p class="card-text" style={{fontSize:20}} >Experience: 3 years</p>
                <p class="card-text" style={{fontSize:20}}> Description: Worked in OLA for 3 years</p>
                <div class="text-center">
                <Link to="/bookings" style={{alignItems:"center", fontSize:20}} class="btn btn-dark">
                    Book
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Service;
