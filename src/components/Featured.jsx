import React from "react";
import "../assets/css/featured.css"; // Import custom CSS for styling

import fe1 from "../assets/images/f1.svg";
import fe2 from "../assets/images/f2.svg";
import fe3 from "../assets/images/f3.svg";
import fe4 from "../assets/images/f4.svg";
import fe5 from "../assets/images/f5.svg";
import fe6 from "../assets/images/f6.svg";
import fe7 from "../assets/images/f7.svg";
import fe8 from "../assets/images/f8.svg";

import log1 from "../assets/images/logo1.svg";
import log2 from "../assets/images/logo2.svg";
import log3 from "../assets/images/logo3.svg";
import log4 from "../assets/images/logo4.svg";
import log5 from "../assets/images/logo5.svg";
import log6 from "../assets/images/logo6.svg";
import log7 from "../assets/images/logo7.svg";
import log8 from "../assets/images/logo8.svg";

// Data for the featured restaurants
const restaurants = [
  {
    id: 1,
    image: fe1,
    discount: "20% off",
    fastDelivery: "Fast",
    logo: log1,
    name: "Foodworld",
    rating: 46,
    status: "Opens Now",
  },
  {
    id: 2,
    image: fe2,
    discount: "15% off",
    fastDelivery: "Fast",
    logo: log2,
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 3,
    image: fe3,
    discount: "15% off",
    fastDelivery: "Fast",
    logo: log3,
    name: "Pizzahub",
    rating: 40,
    status: "Opens Now",
  },
  {
    id: 4,
    image: fe4,
    discount: "15% off",
    fastDelivery: "Fast",
    logo: log4,
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 5,
    image: fe5,
    discount: "15% off",
    fastDelivery: "Fast",
    logo: log5,
    name: "Pizzahub",
    rating: 40,
    status: "Opens Now",
  },
  {
    id: 6,
    image: fe6,
    discount: "15% off",
    fastDelivery: "Fast",
    logo: log6,
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 7,
    image: fe7,
    discount: "15% off",
    fastDelivery: "Fast",
    logo: log7,
    name: "Pizzahub",
    rating: 40,
    status: "Opens Now",
  },
  {
    id: 8,
    image: fe8,
    discount: "15% off",
    fastDelivery: "Fast",
    logo: log8,
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  // Add additional restaurant data here...
];

const Featured = () => {
  return (
    <section className="featured">
      <h1 className="text-center">Featured Restaurants</h1>

      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            {/* Image with overlay buttons */}
            <div className="restaurant-image">
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="image-buttons">
                <button className="discount-button">
                  {restaurant.discount}
                </button>
                <button className="fast-delivery-button">
                  {restaurant.fastDelivery}
                </button>
              </div>
            </div>

            {/* Logo and restaurant name */}
            <div className="restaurant-info">
              <img
                src={restaurant.logo}
                alt={`${restaurant.name} Logo`}
                className="restaurant-logo"
              />
              <h5>{restaurant.name}</h5>
            </div>

            {/* Status button */}
            <div className="status-button">
              <button>{restaurant.status}</button>
            </div>
          </div>
        ))}
      </div>

      {/* View All button */}
      <div className="view-all">
        <button className="view-all-button">View All</button>
      </div>
    </section>
  );
};

export default Featured;
