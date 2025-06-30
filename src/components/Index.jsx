import React from 'react';
import '../assets/style/style.css';
  import { Link } from 'react-router-dom';
import iconimage from '../assets/images/icon.jpg';
import cimage1 from '../assets/images/4k.jpg';
import cimage2 from '../assets/images/led.jpg';
import cimage3 from '../assets/images/pro.jpg';
 

function Index() {
  return (
    
       <><nav className="navbar navbar-expand-lg px-4 justify-content-end" style={{ backgroundColor: 'cornsilk' }}>
      <Link className="navbar-brand text-black" to="/">TVNEST</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <Link to="/" className="nav-link text-black">HOME</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/store" className="nav-link text-black">STORE</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/contact" className="nav-link text-black">CONTACT</Link>
          </li>
         
           <li className="nav-item mx-2">
            <Link to="/about" className="nav-link text-black">ABOUT</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/log" className="nav-link text-black">LOGIN</Link>
          </li>
        </ul>
      </div>
    </nav>
    <><section className="box">
        <div className="box-text">
          <h1 className="h-text">Your Trusted<br /> Technology Partner</h1>
          <button className="order-btn">ORDER NOW</button>
        </div>
        <div className="box-icon">
          <img src={iconimage} title="tv" alt="tv icon" style={{height:'100px' , width:'100px'}} />
        </div>
      </section><section className="search-bar">
          <p><strong>20% OFF</strong> on your first order</p>
          <input type="text" placeholder="Search for Television" />
        </section><div className="container">
            <Link to="/store" className="nav-link text-white">TOP-SELLING</Link>

          <div className="row" style={{ gap: '10px;' }}>
            <div className="col-md-3 mt-3 mb-3">

              <div className="card">
                <img src={cimage1} className
                ="card-img-top mt-2 mb-3 ps-2 pe-2" alt="led tv" style={{ borderRadius: '10px;' }} />
                <div className="card-body">
                  <p className="card-text">SONY LED TV 4K RESOLUTION<br />Rs.25,999</p>
                  <a href="#" className="btn">Add To Cart</a>

                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="card">
                <img src={cimage2} className="card-img-top mt-2 mb-3 ps-2 pe-2" alt="tv" style={{ borderRadius: '10px;' }} />
                <div className="card-body">
                  <p className="card-text">TCL LED TV<br />RS.19,999</p>
                  <a href="#" className="btn">Add To Cart</a>

                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="card">
                <img src={cimage3} class="card-img-top mt-2 mb-3 ps-2 pe-2" alt="proj" style={{ borderRadius: '10px;' }} />
                <div className="card-body">
                  <p className="card-text">PROJECTOR WITH SCREEN<br />Rs.25,999</p>
                  <a href="#" className="btn">Add To Cart</a>

                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-content">
            <div className="footer-links">
              <h3>MY ACCOUNT</h3>
              <ul>
                <li><a href="#">Saved Addresses</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">Account Settinges</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>ORDER DELIVERY</h3>
              <ul>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Delivery Charges</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>COMPANY</h3>
              <ul>
                <li><a>FAQs Privacy</a></li>
                <li><a>Policy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>SUPPORT</h3>
              <ul>
                <li><a href="contactus.html">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-pinterest"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
            </span>
            <p>TVNEST your trusted Technology Partner!!!! &copy; 2025 All rights reserved.</p>
          </div>
        </footer></></>
    
  );
}

    

export default Index;
