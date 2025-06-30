import React from "react";
import '../assets/style/aboutt.css';
  import aimage1 from '../assets/images/about.jpg';
  import aimage2 from '../assets/images/abo.jpg';
  import { Link } from 'react-router-dom';


function About() {
    return(
       <><><nav className="navbar navbar-expand-lg px-4 justify-content-end" style={{ backgroundColor: 'cornsilk' }}>
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
              <Link to="/about" className="nav-link text-black">BLOG</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/log" className="nav-link text-black">LOGIN</Link>
            </li>
          </ul>
        </div>
      </nav>
        <div className="container-fluid mt-4 ps-5">
          <div className="row" style={{ borderRadius: '10px' }}>
            <div className="col-md-6 mt-3 mb-3" style={{ borderRadius: '10px' }}>

              <img src={aimage1} className="img-fluid" style={{ height: '500px', width: '500px', borderRadius: '10px' }} />
            </div>
            <div className="col-md-6 mt-3" style={{ borderRadius: '10px' }}>
              <h2>About Us</h2>
              The history of television dates back to the early 20th century, beginning with experiments in transmitting moving images. The first successful demonstration of a working television system was made by John Logie Baird in 1926 in the UK, using mechanical scanning technology. Later, electronic television was developed and became more practical, with Philo Farnsworth and Vladimir Zworykin playing major roles in its invention. Television broadcasting began in the 1930s, but it wasn’t until after World War II, in the late 1940s and 1950s, that it became popular in homes across the world. Early television was black and white, but color broadcasting began in the 1950s and became widespread in the 1960s and 70s. Today, television has transformed with digital technology, smart TVs, and streaming services, offering content on-demand and changing how people watch and interact with programs.         </div>
          </div>
        </div>
      </><div className="container-fluid mt-4 ps-5">
          <div className="row" style={{ borderRadius: '10px' }}>
            <div className="col-md-6 mt-3 mb-3" style={{ borderRadius: '10px' }}>
              <h2>WHY CHOOSE US</h2>
              <p>At <strong>TVNEST</strong>
                🎯 Expertise You Can Trust
                With years of experience in television production and content creation, our team brings professional storytelling, technical excellence, and creative vision to every project—be it documentaries, series, ads, or digital content.

                📺 Diverse and Original Programming
                We specialize in producing unique, diverse, and engaging television content that captivates audiences. Whether it’s lifestyle, entertainment, news, or education, we ensure quality and relevance across genres.

                🚀 Cutting-Edge Technology
                From 4K filming to post-production with the latest editing tools, we use industry-leading equipment to deliver stunning visual and audio experiences.
              </p>
            </div>

            <div className="col-md-6 mt-3 mb-3" style={{ borderRadius: '10px' }}>
              <img
                src={aimage2}
                alt="Why Choose Us"
                className="img-fluid"
                style={{ height: '500px', width: '500px', borderRadius: '10px' }} />
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
          <p>TVNEST your trusted technology Partner!!!!&copy; 2025 All rights reserved. </p>
        </div></>
    );
}
 export default About;