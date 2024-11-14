import React from "react";
import "../assets/css/foodcard.css"; // Custom CSS for styling

// Importing images from assets
import first from "../assets/images/image1.svg";
import second from "../assets/images/image2.svg";
import third from "../assets/images/image3.svg";
import forth from "../assets/images/image4.svg";

const foodItems = [
  {
    id: 1,
    discount: "15%",
    imgSrc: first,
    name: "Greys Vage",
    daysRemaining: "6 Days Remaining",
  },
  {
    id: 2,
    discount: "10%",
    imgSrc: second,
    name: "Greys Vage",
    daysRemaining: "6 Days Remaining",
  },
  {
    id: 3,
    discount: "25%",
    imgSrc: third,
    name: "Greys Vage",
    daysRemaining: "7 Days Remaining",
  },
  {
    id: 4,
    discount: "20%",
    imgSrc: forth,
    name: "Greys Vage",
    daysRemaining: "8 Days Remaining",
  },
];

const FoodCards = () => {
  return (
    <div className="food-cards-container">
      {foodItems.map((item) => (
        <div key={item.id} className="food-card">
          <div className="discount-badge">{item.discount} Off</div>
          <img src={item.imgSrc} alt={item.name} className="food-image" />
          <div className="card-content">
            <h3 className="food-name">{item.name}</h3>
            <span className="days-remaining">{item.daysRemaining}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCards;
