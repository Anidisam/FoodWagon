import React from 'react'
import "../assets/css/hero.css";
import { Container, Button, Form } from "react-bootstrap";
import {
  FaBiking,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";
import heroI from "../assets/images/hero-im.svg";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center py-5">
      <Container className="d-flex flex-wrap justify-content-between align-items-center">
        {/* Left Side Content */}
        <div className="hero-text">
          <h1 className="mb-3" style={{ fontWeight: "bold" }}>
            Are you starving?
          </h1>
          <p className="mb-4">
            Within a few click, find meal that are accessible near you!
          </p>

          {/* Delivery & Pickup Buttons */}
          <div className="d-flex mb-4">
            <Button
              variant="outline-warning"
              className="me-3 d-flex align-items-center"
            >
              <FaBiking style={{ marginRight: "8px" }} /> Delivery
            </Button>
            <Button
              variant="outline-warning"
              className="d-flex align-items-center"
            >
              <FaShoppingBag style={{ marginRight: "8px" }} /> Pickup
            </Button>
          </div>

          {/* Horizontal Rule */}
          <hr className="mb-4" />

          {/* Address Search Section */}
          <Form className="d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="Enter your address"
              style={{ width: "250px", marginRight: "10px" }}
            />
            <FaMapMarkerAlt style={{ color: "red", marginRight: "10px" }} />
            <Button variant="warning" className="d-flex align-items-center">
              Find Food <FaSearch style={{ marginLeft: "8px" }} />
            </Button>
          </Form>
        </div>

        {/* Right Side - Food Image */}
        <div className="hero-image">
          <img
            src={heroI} // Replace with your image path
            alt="Delicious food"
            className="img-fluid"
            style={{ maxWidth: "350px", borderRadius: "8px" }}
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
