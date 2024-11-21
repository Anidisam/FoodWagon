import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4}>
            <h5 className="footer-heading">About FoodWaGon</h5>
            <p>
              FoodWaGon is your go-to platform for ordering delicious meals
              delivered fresh to your door. Explore, taste, and enjoy a wide
              variety of cuisines.
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={4}>
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <FaPhone className="footer-icon" /> +234 704 792 0318
              </li>
              <li>
                <FaEnvelope className="footer-icon" /> anidisamuel2006@gmail.com
              </li>
              <li>
                <FaMapMarkerAlt className="footer-icon" /> 123 Foodie Street,
                Flavor Town, USA
              </li>
            </ul>
          </Col>

          {/* Newsletter Signup */}
          <Col md={4}>
            <h5 className="footer-heading">Subscribe to Our Newsletter</h5>
            <Form className="newsletter-form">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="mb-2"
              />
              <Button variant="warning" className="w-100">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Social Media Links */}
        <div className="social-links mt-4 text-center">
          <a href="#" className="text-light mx-3">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-light mx-3">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-light mx-3">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-4">
          <p className="mb-0">
            © {new Date().getFullYear()} FoodWaGon. All Rights Reserved. |
            Privacy Policy | Terms of Service
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
