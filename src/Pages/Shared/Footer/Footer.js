import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import {HashLink} from "react-router-hash-link";
import {Nav} from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-16371">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <div className="footer-site-logo mb-4">
              <Link to="/">The Tour Bees</Link>
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
            </div>

            <div className="copyright">
              <p className="mb-0">
                <small>&copy; The Tour Bees. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
