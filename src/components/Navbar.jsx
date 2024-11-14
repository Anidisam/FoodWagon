import React from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { FaSearch, FaUser } from "react-icons/fa";
import "../assets/css/navbar.css";
import heroImage from "../assets/images/nav-logo.svg";

const Navbar = () => {
  return (
    <BootstrapNavbar bg="white" variant="light" expand="lg" className="py-3">
      <Container>
        {/* Logo Section */}
        <BootstrapNavbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={heroImage} // replace with your logo path
            alt="FoodWaGon Logo"
            width="30" // Adjust width as needed
            height="30" // Adjust height as needed
            className="me-2"
          />
          <h3 className="mb-0" style={{ color: "orange", fontWeight: "bold" }}>
            FoodWaGon
          </h3>
        </BootstrapNavbar.Brand>

        {/* Search and Login Section */}
        <div className="d-flex align-items-center ms-auto">
          {/* Search Box */}
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "200px" }} // Adjust width as needed
            />
            <FaSearch style={{ color: "orange", cursor: "pointer" }} />
          </Form>

          {/* Login Button */}
          <Button
            variant="outline-light"
            className="d-flex align-items-center ms-3"
          >
            <FaUser style={{ color: "orange", marginRight: "5px" }} />
            <span style={{ color: "orange", fontWeight: "bold" }}>Login</span>
          </Button>
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
