import React, { useState } from "react";
import { FaMapMarkerAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../assets/css/popular.css";

import first1 from "../assets/images/food1.svg";
import first2 from "../assets/images/food2.svg";
import first3 from "../assets/images/food3.svg";
import first4 from "../assets/images/food4.svg";
import first5 from "../assets/images/food5.svg";
import first6 from "../assets/images/food3.svg";
import first7 from "../assets/images/food2.svg";
import first8 from "../assets/images/food1.svg";
import first9 from "../assets/images/food5.svg";
import first10 from "../assets/images/food1.svg";
import first11 from "../assets/images/food3.svg";
import first12 from "../assets/images/food5.svg";
import first13 from "../assets/images/food2.svg";
import first14 from "../assets/images/food4.svg";


// Sample data for 14 items
const popularItems = [
  {
    id: 1,
    imgSrc: first1,
    title: "Item 1",
    location: "New York",
    price: "$4,000",
  },
  {
    id: 2,
    imgSrc: first2,
    title: "Item 2",
    location: "Los Angeles",
    price: "$3,500",
  },
  {
    id: 3,
    imgSrc: first3,
    title: "Item 3",
    location: "Chicago",
    price: "$4,200",
  },
  {
    id: 4,
    imgSrc: first4,
    title: "Item 4",
    location: "Houston",
    price: "$3,800",
  },
  {
    id: 5,
    imgSrc: first5,
    title: "Item 5",
    location: "Phoenix",
    price: "$3,900",
  },
  {
    id: 6,
    imgSrc: first6,
    title: "Item 6",
    location: "Miami",
    price: "$4,100",
  },
  {
    id: 7,
    imgSrc: first7,
    title: "Item 7",
    location: "Seattle",
    price: "$3,700",
  },
  {
    id: 8,
    imgSrc: first8,
    title: "Item 8",
    location: "Austin",
    price: "$4,300",
  },
  {
    id: 9,
    imgSrc: first9,
    title: "Item 9",
    location: "Dallas",
    price: "$3,600",
  },
  {
    id: 10,
    imgSrc: first10,
    title: "Item 10",
    location: "Boston",
    price: "$4,500",
  },
  {
    id: 11,
    imgSrc:  first11,
    title: "Item 11",
    location: "Denver",
    price: "$3,850",
  },
  {
    id: 12,
    imgSrc:  first12,
    title: "Item 12",
    location: "San Diego",
    price: "$4,150",
  },
  {
    id: 13,
    imgSrc:  first13,
    title: "Item 13",
    location: "Las Vegas",
    price: "$4,250",
  },
  {
    id: 14,
    imgSrc:  first14,
    title: "Item 14",
    location: "Orlando",
    price: "$3,950",
  },
];

const Popular = () => {
  // Initially display 5 images
  const [visibleCount, setVisibleCount] = useState(5);

  // Function to show one more image
  const showMoreItems = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 1, popularItems.length)
    );
  };

  // Function to show one less image
  const showFewerItems = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 1, 5));
  };

  return (
    <section className="popular-section">
      <h1 className="popular-heading">Popular Items</h1>

      <div className="popular-items-container">
        {popularItems.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="popular-item">
            <img src={item.imgSrc} alt={item.title} className="popular-image" />
            <h5 className="popular-title">{item.title}</h5>
            <div className="popular-location">
              <FaMapMarkerAlt className="location-icon" />
              <h6>{item.location}</h6>
            </div>
            <p className="popular-price">{item.price}</p>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>

      <div className="arrow-buttons">
        {/* Left Arrow */}
        {visibleCount > 5 && (
          <button className="arrow-btn left-arrow" onClick={showFewerItems}>
            <FaArrowLeft />
          </button>
        )}

        {/* Right Arrow */}
        {visibleCount < popularItems.length && (
          <button className="arrow-btn right-arrow" onClick={showMoreItems}>
            <FaArrowRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default Popular;
