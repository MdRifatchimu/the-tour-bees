import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
// import logo from "../../../images/logo.png";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {HashLink} from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const {user, logOut} = useAuth();

  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="logo-title fs-4">
            <Link className="navbar-brand text-danger" to="/home">
              {/* <img alt="" src={logo} width="75" height="75" /> */}
              The Tour Bees
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home" className="items">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services" className="items">
              Services
            </Nav.Link>
            <Link to="/blog" className="items">
              Blog
            </Link>
            <Link to="/" className="items"></Link>

            {user?.displayName ? (
              <>
                <Link to="/myorders" className="hidden-link">
                  My Orders
                </Link>
                <Link to="/manageallorders" className="hidden-link">
                  Manage All Order
                </Link>
                <Link to="/addnewservice" className="hidden-link">
                  Add a new service
                </Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login"></Nav.Link>
            )}

            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              Signed in as:
              <a
                as={HashLink}
                to="/home#services"
                className="items"
                href="#login"
              >
                {user?.displayName}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
