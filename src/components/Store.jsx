 import '../assets/style/style.css';
 import { Link } from 'react-router-dom';
 import simg1 from '../assets/images/vintv.jpg';
 import simg2 from '../assets/images/pro.jpg';
 import simg3 from '../assets/images/xi.jpg';
 import simg6 from '../assets/images/4k.jpg';
 import simg7 from '../assets/images/ltv.jpg';
 import simg4 from '../assets/images/remo.jpg'; 





function Store(){
    return(  
      <><></><nav className="navbar navbar-expand-lg px-4 justify-content-end" style={{ backgroundColor: 'cornsilk' }}>
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
              <Link to="/about" className="nav-link text-black">ABOUT</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/contact" className="nav-link text-black">CONTACT</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/about" className="nav-link text-black">BLOG</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/log" className="nav-link text-black">LOGIN</Link>
            </li>
          </ul>
        </div>
      </nav><div className="content mt-4 mb-4">
          <div className="marquee-container">
            <div className="marquee-text">
              <h4>  All TELEVISIONS AVAILABLE| 50% DISCOUNTS FOR FIRST VISIT| YOUR TRUSTED PARTNER!!!</h4>
            </div>
          </div>
        </div><div className="container mt-5 mb-5 justify-content-center align-item-center">
          <h1 style={{ textAlign: 'center' }}>Our products</h1>
          <div className="row ms-3 me-3" style={{ gap: '30px', backgroundColor: 'white', borderRadius: '10px' }}>

            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg1} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />

              <div className="card-body">
                <h3 className="card-title">VINTAGE TV</h3>
                <p className="card-text"> With Black And White<br />
                 Rs. 9,499<br />
                </p>
                <a href="" className="btn btn-danger">Add To Cart</a>

              </div>
            </div>
            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg2} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">SMART PROJECTOR WITH 4K RESOLUTION</h3>
                <p className="card-text"> With Perfect Screen<br />
                 Rs. 26,600<br /></p>
                <a href="" className="btn btn-danger">Add To Cart</a>
              </div>
            </div>


            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg3} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">XIAMI LED TV</h3>
                <p className="card-text"> With Perfect Pixels<br />
                  Rs.9,990<br /></p>
                <a href="" className="btn btn-danger">Add To Cart</a>
              </div>
            </div>
            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg4} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">OLD TELEVISION</h3>
                <p className="card-text"> With Black And White Pixels <br />
                 Rs. 8,999<br /></p>
                <a href="" className="btn btn-danger">Add To Cart</a>
              </div>
            </div>


            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg6} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">4K RESOLUTION SMART TV</h3>
                <p className="card-text"> With All Basic Apps<br />
                 Rs.28,999<br />
                </p>
                <a href="" className="btn btn-danger">Add To Cart</a>
              </div>
            </div>
            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg7} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">LCD SMART TELEVISION</h3>
                <p className="card-text">With All Connects<br />
                  Rs.12,199<br /></p>
                <a href="" className="btn btn-danger">Add To Cart</a>
              </div>
            </div>
 </div>
        </div><div className="footer-bottom">
          <span className="icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-pinterest"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
          </span>
          <p>TVNEST your trusted Technology Partner!!!!&copy; 2025 All rights reserved. </p>
        </div></>
  );
}
export default Store;