import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import {HashLink} from "react-router-hash-link";
import {Nav} from "react-bootstrap";

const Footer = () => {
  return (
    // <div className="background-footer">
    //   <div className="footer-basic">
    //     <footer>
    //       <h4 className="text-center text-danger">The Tour Bees</h4>
    //       <div className="social">
    //         <a to="/">
    //           <i className="fab fa-facebook-f text-danger"></i>
    //         </a>
    //         <a to="/">
    //           <i className="fab fa-snapchat-ghost text-danger"></i>
    //         </a>
    //         <a to="/">
    //           <i className="fab fa-instagram text-danger"></i>
    //         </a>
    //         <a to="/">
    //           <i className="fab fa-linkedin-in text-danger"></i>
    //         </a>
    //       </div>
    //       <ul className="list-inline">
    //         <li className="list-inline-item text-danger">
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li className="list-inline-item text-danger">
    //           <Nav.Link as={HashLink} to="/home#services">
    //             Services
    //           </Nav.Link>
    //         </li>
    //         <li className="list-inline-item text-danger">
    //           <Link to="/supliments">Supliments</Link>
    //         </li>
    //         <li className="list-inline-item text-danger">
    //           <Link to="/equipments">Equipments</Link>
    //         </li>
    //       </ul>
    //       <p className="copyright text-danger">The Tour Bees © 2021</p>
    //     </footer>
    //   </div>
    // </div>
    <div className="footer-16371">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <div className="footer-site-logo mb-4">
              <a href="#">The Tour Bees</a>
            </div>
            <ul className="list-unstyled nav-links mb-5 ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Nav.Link as={HashLink} to="/home#services">
                  Services
                </Nav.Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>

            <div className="social mb-4">
              <h3>Stay in touch</h3>
              <ul className="list-unstyled">
                <li className="in">
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li className="fb">
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="tw">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="pin">
                  <a href="#">
                    <span className="icon-pinterest"></span>
                  </a>
                </li>
                <li className="dr">
                  <a href="#">
                    <span className="icon-dribbble"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="copyright">
              <p className="mb-0">
                <small>&copy; Colorlib. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
