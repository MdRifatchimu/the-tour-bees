import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import {HashLink} from "react-router-hash-link";
import {Nav} from "react-bootstrap";

const Footer = () => {
  return (
    <div className="background">
      <div className="footer-basic">
        <footer>
          <h4 className="text-center text-danger">The Tour Bees</h4>
          <div className="social">
            <a to="/">
              <i className="fab fa-facebook-f text-danger"></i>
            </a>
            <a to="/">
              <i className="fab fa-snapchat-ghost text-danger"></i>
            </a>
            <a to="/">
              <i className="fab fa-instagram text-danger"></i>
            </a>
            <a to="/">
              <i className="fab fa-linkedin-in text-danger"></i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item text-danger">
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item text-danger">
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
            </li>
            <li className="list-inline-item text-danger">
              <Link to="/supliments">Supliments</Link>
            </li>
            <li className="list-inline-item text-danger">
              <Link to="/equipments">Equipments</Link>
            </li>
          </ul>
          <p className="copyright text-danger">The Tour Bees © 2021</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
