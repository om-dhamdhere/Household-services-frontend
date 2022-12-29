import React, {useState} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import logo from "./logo.png";
import { Link } from "react-router-dom";


const MySwal = withReactContent(Swal);


function Payment()
{



    const [service] = useState({
        name: "Driver Service",
        price: 500,
    });

    const handleSuccess = () => {
        MySwal.fire({
          icon: 'success',
          title: 'Payment was successful',
          time: 4000,
        });
      };

      const handleFailure = () => {
        MySwal.fire({
          icon: 'error',
          title: 'Payment was not successful',
          time: 4000,
        });
      };


    async function handleToken(token,addresses){
      const response = await axios.post("http://localhost:5000/checkout",{token,service})
      console.log(response.status)

      if(response.status===200)
      {
          handleSuccess();
      }

      else{
        handleFailure();
      }
    } 

    return(
      
        
        <div style={{textAlign:"center"}}>
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

             <h1 class="pt-5">Payment for Service</h1>

            <table class="table">

              <thead class="thead-dark">
                <tr>
                  <th scope="col"></th>
                  <th scope="col" class="display-2 font-weight-bold">Service</th>
                  <th scope="col" class="display-2 font-weight-bold">Charges</th>
                </tr>
              </thead>

              <tbody>
              <tr>
                <th class="display-6" scope="row">1</th>
                <td class="display-6">{service.name}</td>
                <td class="display-6">{service.price}</td>
              </tr>
              </tbody>
            </table>

            <StripeCheckout
                stripeKey="pk_test_51MHMreSGvcAlF106CfhXkHOBXwb6laiHTFCHIVw9mKIHlJbXuZ4LfFWlUdMB1VfiOwE7AXSTbq2BAfihsafB9nJF00x1N8qmpw"
                label="Pay Now"
                name="Pay With Credit Card"
                billingAddress
                shippingAddress
                amount={service.price*100}
                description={`Your total is Rs${service.price}`}
                token={handleToken}
            
            />
                
        </div>
    )
}

export default Payment;