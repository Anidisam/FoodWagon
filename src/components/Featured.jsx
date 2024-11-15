import React from "react";
import "../assets/css/featured.css"; // Import custom CSS for styling

// Data for the featured restaurants
const restaurants = [
  {
    id: 1,
    image: "assets/images/image1.svg",
    discount: "20% off",
    fastDelivery: "Fast",
    logo: "assets/images/logo1.svg",
    name: "Foodworld",
    rating: 46,
    status: "Opens tomorrow",
  },
  {
    id: 2,
    image: "assets/images/image2.svg",
    discount: "15% off",
    fastDelivery: "Fast",
    logo: "assets/images/logo2.svg",
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 3,
    image: "assets/images/image2.svg",
    discount: "15% off",
    fastDelivery: "Fast",
    logo: "assets/images/logo2.svg",
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 4,
    image: "assets/images/image2.svg",
    discount: "15% off",
    fastDelivery: "Fast",
    logo: "assets/images/logo2.svg",
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 5,
    image: "assets/images/image2.svg",
    discount: "15% off",
    fastDelivery: "Fast",
    logo: "assets/images/logo2.svg",
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 6,
    image: "assets/images/image2.svg",
    discount: "15% off",
    fastDelivery: "Fast",
    logo: "assets/images/logo2.svg",
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 7,
    image: "assets/images/image2.svg",
    discount: "15% off",
    fastDelivery: "Fast",
    logo: "assets/images/logo2.svg",
    name: "Pizzahub",
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 8,
    image: "assets/images/image2.svg",
    discount: "15% off",
    fastDelivery: "Fast",
    logo: "assets/images/logo2.svg",
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
